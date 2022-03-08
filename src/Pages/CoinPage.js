import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
        setCoin(data);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div>
      {loading ? <div className="loadingCoin">Loading</div> : <div>
        <div className="singleCoinTitle">
        <img src={coin?.image.large}></img>
          <h1>
            <p>{coin?.name.charAt(0).toUpperCase() + coin?.name.slice(1)}</p>
            <p>({coin?.symbol.toUpperCase()})</p>
          </h1>
        </div>
        <div className="singleCoinInfo">
          <p><a className="coinLink" href={coin?.links.homepage.slice(0, -2)}> Visit Official Page </a> <br/><br/>
          Price: ${coin?.market_data.current_price.usd}<br/><br/> 
          Rank: {coin?.market_cap_rank}<br/><br/> 
          Max Supply: {coin?.market_data.max_supply}<br/><br/>
          Circulating Supply: {coin?.market_data.circulating_supply.toLocaleString('en-UK')}<br/><br/>
          Market Cap: ${coin?.market_data.market_cap.usd.toLocaleString('en-UK')} <br/><br/> 
          24H High: ${coin?.market_data.high_24h.usd.toLocaleString('en-UK')}<br/><br/> 
          24H Low: ${coin?.market_data.low_24h.usd.toLocaleString('en-UK')}<br/><br/>

           <br/><br/> <br/><br/> 
          </p>
        </div>
      </div>}


    </div>
  )
}

export default CoinPage