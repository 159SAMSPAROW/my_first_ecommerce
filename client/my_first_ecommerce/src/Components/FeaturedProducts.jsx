import React from 'react'
import Card from './Card'

export default function FeaturedProducts({ type }) {
  const data = [
    {
      id: 1,
      img:
        'https://media.istockphoto.com/id/682264548/fr/photo/ligne-de-t-shirts-color%C3%A9s-dans-un-magasin.jpg?s=612x612&w=0&k=20&c=79yNzzGWoIEWeKKbzsyq3rvuYloH2nPgPtFSeTqYgaw=',
      img2:
        'https://media.istockphoto.com/id/184979598/fr/photo/mains-useront-shirt-xxxl.jpg?s=612x612&w=0&k=20&c=jjRcypPLHbQsJAO73yPoeAJ6cNQy_ifZJ0nohSt1dtM=',
      title: 'long tshirt',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img:
        'https://media.istockphoto.com/id/1051659844/fr/photo/prise-de-vue-studio-dun-homme-de-race-blanche-mature-v%C3%AAtu-de-son-costume-en-arri%C3%A8re-fond-gris.jpg?s=612x612&w=0&k=20&c=PrmPtgWc-EdOWVnQ1jP1RnMwQrj9tVEU79t3cOLus78=',
      img2:
        'https://media.istockphoto.com/id/904172104/fr/photo/nous-avons-fait-tout-ce-chemin-je-suis-fier.jpg?s=612x612&w=0&k=20&c=kMcJMtlo6Dwi6AQuzxJaFeU9sgEaGlJxuMRMWCYO7-w=',
      title: 'long tshirt',
      isNew: false,
      oldPrice: 12,
      price: 8,
    },
    {
      id: 3,
      img:
        'https://media.istockphoto.com/id/119752805/fr/photo/fond-lumineux-en-d%C3%A9sordre-v%C3%AAtements.jpg?s=612x612&w=0&k=20&c=ORvcbE4FasSYtui_0MZ8EBJ0zvOwMspeZa0K-RNxmhw=',
      img2:
        'https://media.istockphoto.com/id/872601928/fr/photo/fille-avec-des-chutes-de-neige-en-riant.jpg?s=612x612&w=0&k=20&c=I8XDuqGXK1XDbR1-bNpBhbFTa9UNAYMIcrrR6tv_Kdg=',
      title: 'long tshirt',
      isNew: true,
      oldPrice: 17,
      price: 13,
    },
    {
        id: 4,
        img:
          'https://media.istockphoto.com/id/682264548/fr/photo/ligne-de-t-shirts-color%C3%A9s-dans-un-magasin.jpg?s=612x612&w=0&k=20&c=79yNzzGWoIEWeKKbzsyq3rvuYloH2nPgPtFSeTqYgaw=',
        img2:
          'https://media.istockphoto.com/id/184979598/fr/photo/mains-useront-shirt-xxxl.jpg?s=612x612&w=0&k=20&c=jjRcypPLHbQsJAO73yPoeAJ6cNQy_ifZJ0nohSt1dtM=',
        title: 'long tshirt',
        isNew: true,
        oldPrice: 19,
        price: 12,
      },
  ]

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
        {data.map(item=>(
            <Card item={item} key={item.id}/>
        ))}
      </div>
    </div>
  )
}
