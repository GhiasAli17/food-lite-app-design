import React from 'react'
import './home.css'
import ProductCard from './components/ProductCard'
const HomePage = () => {
  return (
    <main>
        <div className="hero_section">
            <p>Get Inspired, Cook with passion and enjoy unforgettable moments at the table</p>
        </div>
        <div className="products_section">
            <p>Popular Recipes</p>
             <div className="products_container">
                <ProductCard url='/images/product1.png'/>
                <ProductCard url='/images/product2.png'/>
                <ProductCard url='/images/product3.png'/>

                <ProductCard url='/images/product1.png'/>
                <ProductCard url='/images/product2.png'/>
                <ProductCard url='/images/product3.png'/>
            </div>
            </div>
       
    </main>
  )
}

export default HomePage