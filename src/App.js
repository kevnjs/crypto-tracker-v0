import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Coin from './components/Coin';

function App() {
  const [coins, setCoins] = useState([])

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d')
    .then(res => setCoins(res.data))
    .catch(err => console.log(err))
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>Crypto Dashboard</h1>
      </header>
      <main>
        <div className="column-names">
          <div>Rank</div>
          <div>Coin</div>
          <div>Symbol</div>
          <div>Price</div>
          <div>1h</div>
          <div>24h</div>
          <div>7d</div>
          <div>24h volume</div>
          <div>Market Cap</div>
        </div>
        {
          coins.map(coin => {
            return (
              <Coin coin={coin} />
            )
          })
        }
      </main>
    </div>
  );
}

export default App;
