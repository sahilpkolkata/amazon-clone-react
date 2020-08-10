import React from 'react'
import "./Home.css"
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <img className="home__image"
              src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg?fbclid=IwAR3oC2dmMpYdxtDYANfslfiOwidMaPpEBPn5d4U6_kOmfU3-GTC2BcfOMuk" 
              alt=""/>
            <div className="home__row">
                <Product 
                id="1231552"
                title="Sapiens: A Brief History of Humankind"
                price={10}
                rating={5}
                image="https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UY218_.jpg"/>

                <Product 
                id="1231585"
                title="Life 3.0: Being Human in the Age of Artificial Intelligence"
                price={11}
                rating={4}
                image="https://m.media-amazon.com/images/I/91-fC4VnajL._AC_UY218_.jpg"/>
            </div>
            <div className="home__row">
                <Product 
                id="1231562"
                title="Apple iPhone 11 (64GB) - Black"
                price={600}
                rating={5}
                image="https://m.media-amazon.com/images/I/51kGDXeFZKL._AC_UY218_.jpg"/>

                <Product 
                id="1231655"
                title="Superintelligence: Paths, Dangers, Strategies"
                price={11.40}
                rating={5}
                image="https://m.media-amazon.com/images/I/71ig9jCK0bL._AC_UY218_.jpg"/>

                <Product 
                id="1231555"
                title="OnePlus 7T Pro (Haze Blue, 8GB RAM, Fluid AMOLED Display, 256GB Storage, 4085mAH Battery)"
                price={436}
                rating={3}
                image="https://m.media-amazon.com/images/I/61FRLa8IFTL._AC_UY218_.jpg"/>
            </div>
            <div className="home__row">
                <Product 
                id="1231545"
                title="Samsung 163 cm (65 Inches) Wondertainment Series Ultra HD LED Smart TV UA65TUE60AKXXL (Titan Gray) (2020 model)"
                price={700}
                rating={4}
                image="https://m.media-amazon.com/images/I/81644xBqdyL._AC_UY218_.jpg"/>
            </div>
           
        </div>
    )
}

export default Home
