import React from 'react'
import useFetch from '../hooks/useFetch'
import Card from './Card'

const List = ({ subCategories, maxPrice, sort, categoryId }) => {
  
  
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${categoryId}${subCategories.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}`
  );

  return (
    <div className="list">
      {loading
        ? 'loading'
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  )
}
export default List;

//&[filters][price][$lte]=${maxPrice}&sort=price:${sort}

