import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import List from '../Components/List'

export default function Products() {


  const categorieId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(1000)
  const [sort, setSort] = useState(null)

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">Skirts</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="3" value={3} />
            <label htmlFor="3">Coats</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>

          <div className="inputItem">
            <input type="radio" id="asc" value="asc" name="price" onChange={e=>setSort("asc")}/>
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id="desc" value="desc" name="price" onChange={e=>setSort("desc")}/>
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img className='categorieImg' src="https://media.istockphoto.com/id/1369826066/fr/photo/cyber-f%C3%A9minin-bleu-avec-des-lunettes-de-texte-meta-verse-loading-rose-fluo-sur-fond.jpg?s=612x612&w=0&k=20&c=zSH0ORIAwI_18qteZ34b0DapySAOfDLDZPIMwT-yGrI=" alt="" />
      <List categorieId={categorieId} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  )
}
