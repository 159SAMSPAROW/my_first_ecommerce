import React from 'react'
import { Link } from 'react-router-dom'

export default function Categoties() {
  return (
    <div className="categories">
      
      <div className="col">
        <div className="row">
            <img src="https://media.istockphoto.com/id/1346544005/fr/photo/heureuse-belle-femme-tenant-%C3%A9tincelant-festif-parmi-la-nuit-de-no%C3%ABl.jpg?s=612x612&w=0&k=20&c=wR6IiD6BHSkc7k_TIb4B1CpUmEaGjbqsaDDrS3uzkxI=" alt="" />
            <button>
                <Link className='link' to="/products/1">Sale</Link>
            </button>
        </div>
        <div className="row">
            <img src="https://media.istockphoto.com/id/1369508766/fr/photo/belle-femme-latine-%C3%A0-succ%C3%A8s-souriante.jpg?s=612x612&w=0&k=20&c=pYpyqpy7vQP529g3Pxtn-VaZo3skT7RmSLb8ReHMIDs=" alt="" />
            <button>
                <Link className='link' to="/products/1">Women</Link>
            </button>
        </div>
      </div>

      <div className="col">
        <div className="row">
            <img src="https://media.istockphoto.com/id/1341661060/fr/photo/projection-dimages-sur-une-femme-utilisant-un-t%C3%A9l%C3%A9phone-intelligent.jpg?s=612x612&w=0&k=20&c=IHDWsvUY2ihOUiHWl4kD406Gdstet7ntlzYOzwmdLJA=" alt="" />
            <button>
                <Link className='link' to="/products/1">Drop</Link>
            </button>
        </div>
      </div>

      <div className="col col-l">

        <div className="row">
          <div className="col">
            <div className="row">
                <img src="https://media.istockphoto.com/id/1350560575/fr/photo/paire-de-baskets-de-course-bleues-sur-fond-blanc-isol%C3%A9.jpg?s=612x612&w=0&k=20&c=pg92JwYqFjZH_2i6_Nj0uQRjkRWYHdgJj-Zg9GDdpWk=" alt="" />
                <button>
                <Link className='link' to="/products/1">Shoes</Link>
            </button>
            </div>
          </div>

          <div className="col">
            <div className="row">
                <img src="https://media.istockphoto.com/id/1360795510/fr/photo/belle-femme-avec-des-cheveux-courts.jpg?s=612x612&w=0&k=20&c=t8-npzyl2aVtKntXuo5bp-xQJ27PcwtZgJaMewUggGU=" alt="" />
                <button>
                <Link className='link' to="/products/1">Hair</Link>
            </button>
            </div>
          </div>

        </div>
        <div className="row">
            <img src="https://media.istockphoto.com/id/1034427464/fr/photo/c%C3%A2bles-pour-smartphone-et-tablette-de-chargement-usb.jpg?s=612x612&w=0&k=20&c=T25-YRb8PrjQiozWVXDiPoiBbvkgfoAejVc-97Rs1vM=" alt="" />
            <button>
                <Link className='link' to="/products/1">Shoes</Link>
            </button>
       </div>
      </div>
    </div>
  )
}
