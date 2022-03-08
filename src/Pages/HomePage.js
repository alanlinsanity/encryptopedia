import React from 'react'
import Title from '../Components/Title'
import Carousel from '../Components/Carousel'
import CoinTable from '../Components/CoinTable'


const HomePage = () => {
  return (
    <div>
        <h3>Top Trending Coins in the Past 24h (% Change)</h3>
        <Carousel />
        <Title />
        <CoinTable />
    </div>
    
  )
}

export default HomePage