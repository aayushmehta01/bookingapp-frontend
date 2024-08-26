import React from 'react'
import './Home.css'
import Navbar from '../../components/navbar/Navbar.jsx'
import Header from '../../components/header/Header.jsx'
import Featured from '../../components/featured/Featured.jsx'
import PropertyList from '../../components/propertyList/PropertyList.jsx'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties.jsx'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <div className="homeHeading">
          <h1>Explore India</h1>
          <h2>These popular destinations have a lot to offer</h2>
        </div>
        <Featured />
        <h1 className='homeTitle'>Browse by property type</h1>
        <PropertyList />
        <div className="homeHeading featuredProperties">
          <h1>Deals for the weekend</h1>
          <h2>Save on stays for 30 August - 1 September</h2>
        </div>
        <FeaturedProperties />
        <h1 className='homeTitle'>Travel more, spend less</h1>
        
      </div>
    </div>
  )
}

export default Home
