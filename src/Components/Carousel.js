import { makeStyles } from "@material-ui/core"
import React, { useEffect } from 'react'
import axios from "axios";
import { useState } from "react";
import AliceCarousel from "react-alice-carousel";

const useStyles = makeStyles((theme) => ({
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
    marginLeft: "10px",
  },
}));

const Carousel = () => {
  const [trending, setTrending] = useState([]);
  const classes = useStyles();

  const currency = "USD";

  const TrendingCoins = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;
  
  //fetching trending coins 
  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency))
  
    setTrending(data);
  };

  console.log(trending)

  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);

  const items = trending.map((coin) => {
    let profit = coin.price_change_percentage_24h >= 0;


    return (
      <div>   
        <span> {coin?.symbol} </span>
        <span> </span>
         <span style={ { color: profit ? 'green' : 'red' } }> {profit} {coin?.price_change_percentage_24h?.toFixed(2)}% </span> 
         </div>
    )
  }) 

  const responsive = {
    0: {
      items: 2,
    },
    216: {
      items: 6,
    },
    512: {
      items: 12,
    },
  };
    
  return (
    <div className={classes.carousel}>
       <AliceCarousel 
            infinite
            animationDuration={500}
            autoPlayInterval={500}
              disableDotsControls
              disableButtonsControls
            responsive={responsive}
            autoPlay
            autoPlayDirection="rtl"
            items={items} 
        />
    </div>
  )
}
 
export default Carousel