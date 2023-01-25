const stripe = require('stripe')(process.env.STRIPE_KEY)
;('use strict')

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories

module.exports = createCoreController('api::order.order', ({ strapi }) => ({
  async create(ctx) {
    const { products } = ctx.request.body

    const ligneItems = await Promise.all(
      products.map(async (product) => {
        const item = await strapi
          .service('api::product.product')
          .findOne(product.id)

        return {
          price_data: {
            currency: 'eur',
            product_data: {
              name: item.title,
            },
            unit_amount: Math.round(item.price * 100),
          },
          quantity: product.quantity,
        }
      }),
    )
    try {
      const session = await stripe.checkout.sessions.create({
        shipping_address_collection: { allowed_countries: ['FR'] },
        payment_method_types: ['card'],
        mode: 'payment',
        success_url: `${process.env.CLIENT_URL}?success=true`,
        cancel_url: `${process.env.CLIENT_URL}?success=false`,
        line_items: ligneItems,
      })

      await strapi
      .service('api::order.order')
      .create({
        data: {
          products,
          stripeId: session.id,
        },
      })

      return { stripeSession: session }
    } catch (err) {
      ctx.response.status = 500
      return err
    }
  },
}))