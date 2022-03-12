import React, { useEffect } from "react";
import './Coin.css'


const Coin = (props) => {
    const { market_cap_rank, image, name, symbol, price_change_percentage_1h_in_currency,
        price_change_percentage_24h_in_currency, price_change_percentage_7d_in_currency, total_volume,
        market_cap, current_price
    } = props.coin

    return (
        <div className="coin-container">
            <div className="coin-column">
                <p>{market_cap_rank}</p>
            </div>
            <div className="coin-column">
                <p>{name}</p>
            </div>
            <div className="coin-column">
                <p>{symbol.toUpperCase()}</p>
            </div>
            <div className="coin-column">
                <p>{current_price}</p>
            </div>
            <div className="coin-column">
                <p>{price_change_percentage_1h_in_currency.toFixed(2) + "%"}</p>
            </div>
            <div className="coin-column">
                <p>{price_change_percentage_24h_in_currency.toFixed(2) + "%"}</p>
            </div>
            <div className="coin-column">
                <p>{price_change_percentage_7d_in_currency.toFixed(2) + "%"}</p>
            </div>
            <div className="coin-column">
                <p>{total_volume.toLocaleString()}</p>
            </div>
            <div className="coin-column">
                <p>{market_cap.toLocaleString()}</p>
            </div>
        </div>
    )
}

export default Coin