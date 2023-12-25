import recat from 'react'
import NavBar from '../navbar/Navbar'
import Hero from '../hero-section/HeroSection'
import TopSection from './TopSection'
import ThreeLineTitle from '../titles/ThreeLineTitle'
import ProductCard from '../product/ProductCard'
import Footer from '../footer/Footer'

const Home = () => {
    return (

        <div>
          <NavBar/>
          <Hero/>
          <TopSection/>
          <ThreeLineTitle top="Featured Products" main="BESTSELLER PRODUCTS" bottom="Problems trying to resolve the conflict between "/>
          <ProductCard/>
          <Footer/>


            
        </div>
        )
    }
    
    export default Home