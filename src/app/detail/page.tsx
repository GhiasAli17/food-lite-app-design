import React from 'react'
import './detail.css'

const page = () => {
  return (
    <main>
        <div className="hero_section hero_detail">
            <p>Waffles</p>
        </div>
        <div className="detail">
           
           <div>
              <p>Ingredients</p>
              
              <ul>
                <li>Ingredients2 xícaras  de farinha de trigo 2 colher </li>
                <li>de açúcar 2 colheres de fermento </li>
                <li> 1/2 colher  de sal 2 colheres amido de milho </li>
                </ul>
            
           </div>
           <div>
           <p className='instruction'>Instructions</p>
              <ol>
                <li>Ingredients2 xícaras (chá) de farinha de trigo 2 colher (sopa) </li>
                <li>de açúcar 2 colheres (chá) de fermento </li>
                <li> 1/2 colher (chá) de sal 2 colheres amido de milho </li>
             </ol>
           </div>
             
            </div>
        
       
    </main>
  )
}

export default page