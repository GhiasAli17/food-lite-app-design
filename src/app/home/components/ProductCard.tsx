import Link from 'next/link'
import React from 'react'

const ProductCard = ({url}:{url:string}) => {
  return (
   
            <div className="product_card">
                <div >
                    <img src={url} height={212} width="100%"/>
                </div>
                <div className='card_content'>
                    <h4>Waffles</h4>
                    <p>Receita bacana pra comer com os amigos de manhã.</p>
                    <button>
                        <Link href="/detail">
                    View Recipe</Link></button>
                </div>

               
            </div>
        
  )
}

export default ProductCard