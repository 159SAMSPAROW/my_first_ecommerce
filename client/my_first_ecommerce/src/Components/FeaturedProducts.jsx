import React from 'react'
import Card from './Card'
import useFetch from '../hooks/useFetch'

export default function FeaturedProducts({ type }) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters] [type] [$eq]=${type}`,
  )

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ducimus
          corporis, non labore eos omnis accusamus, earum dolorem quidem velit
          iusto nulla porro quasi minus eius. Ipsam accusamus necessitatibus
          eveniet?
        </p>
      </div>
      <div className="bottom">
        {error
          ? 'Something went wrong'
          : loading
          ? 'loading'
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  )
}
