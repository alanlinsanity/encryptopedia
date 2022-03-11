import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import axios from "axios";


const CoinTable = () => {
  const [coins, setCoins] = useState([]);

  const currency = "USD";

  const allCoins = (currency) =>
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

  //fetching all coins 
  const fetchAllCoins = async () => {
    const { data } = await axios.get(allCoins(currency))

    setCoins(data);
  };

  console.log(coins)

  useEffect(() => {
    fetchAllCoins();
  }, [currency]);


  return (
    <div className="coinTable">

      {/* @ts-expect-error */}
      <table border="1" className="coinList">
        <thead>
          <tr className="headerRow">
            <td>Rank</td>
            <td>Coin</td>
            <td>Name</td>
            <td>Price</td>
            <td>24h Change</td>
            <td>Market Cap</td>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, index) => (
            <tr key={index}>
              <td>
                {coin.market_cap_rank}
              </td>
               <td>
                {
                  coin.image ?
                    <img height="30" src={coin.image} alt={coin.id} /> : "No Image Found"
                }
              </td>
              <td><Link style={{color:'gold'}}to={coin.id}>{coin.name}</Link></td>
              <td>${coin.current_price.toLocaleString('en-UK')}</td>
              <td style={{ color: coin.price_change_percentage_24h >= 0 ? 'green' : 'red' } }>{coin.price_change_percentage_24h?.toFixed(2)}%</td>
              <td>${coin.market_cap.toLocaleString('en-UK')}</td>
            </tr>
          ))}

        </tbody>
      </table>
      <br/>
      <br/>
      <br/>

    </div>
  );
}


export default CoinTable