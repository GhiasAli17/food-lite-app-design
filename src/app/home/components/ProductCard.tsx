import React from 'react'

const ProductCard = ({url}:{url:string}) => {
  return (
   
            <div className="product_card">
                <div >
                    <img src={url} height={212} width={353}/>
                </div>
                <div className='card_content'>
                    <h4>Waffles</h4>
                    <p>Receita bacana pra comer com os amigos de manhã.</p>
                    <button>View Recipe</button>
                </div>

               
            </div>
        
  )
}

export default ProductCard