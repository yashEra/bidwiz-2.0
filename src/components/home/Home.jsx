import recat from 'react'
import NavBar from '../navbar/Navbar'
import Hero from '../hero-section/HeroSection'
import TopSection from './TopSection'
import ThreeLineTitle from '../titles/ThreeLineTitle'
import ProductCard from '../product/ProductCard'

const Home = () => {
    return (

        <div>
          <NavBar/>
          <Hero/>
          <TopSection/>
          <ThreeLineTitle top="Featured Products" main="BESTSELLER PRODUCTS" bottom="Problems trying to resolve the conflict between "/>
          <ProductCard/>


            
        </div>
        )
    }
    
    export default Home