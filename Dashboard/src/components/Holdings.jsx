import React from 'react'
// import { holdings } from '../Data/data'
import { useEffect, useState } from 'react'
import axios, { all } from 'axios';
import { VerticalGraph } from './VerticalGraph';
let url = 'http://localhost:3002/allholdings';

export const Holdings = () => {
    const [allHolding, setHoldings] = useState([]);

    useEffect(() => {
        axios.get(url).then((res) => {
            console.log(res.data);
            setHoldings(res.data);
        })
    }, []);

    // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const labels = allHolding.map((subArray) => subArray["name"]);

    const data = {
        labels,
        datasets: [
            {
                label: "Stock Price",
                data: allHolding.map((stock) => stock.price),
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
        ],
    };


    return (
        <>
            <h3 className="title">Holdings ({allHolding.length})</h3>

            <div className="order-table">

                <table>
                    <tr>
                        <td>Instrument</td>
                        <td>Qty.</td>
                        <td>Avg. cost</td>
                        <td>LTP</td>
                        <td>Cur. val</td>
                        <td>P&L</td>
                        <td>Net chg.</td>
                        <td>Day chg.</td>
                    </tr>

                    {allHolding.map((stock, index) => {
                        const curValue = stock.price * stock.qty;
                        const isProfit = curValue - stock.avg * stock.qty >= 0.0;
                        const profClass = isProfit ? "profit" : "loss";
                        const dayClass = stock.isLoss ? "loss" : "profit";

                        return (
                            <tr key={{ index }}>
                                <td>{stock.name}</td>
                                <td>{stock.qty}</td>
                                <td>{stock.avg.toFixed(2)}</td>
                                <td>{stock.price.toFixed(2)}</td>
                                <td>{curValue.toFixed(2)}</td>
                                <td className={profClass}>{curValue - stock.avg * stock.qty.toFixed(2)}</td>
                                <td className={profClass}>{stock.net}</td>
                                <td className={dayClass}>{stock.day} </td>
                            </tr>
                        )
                    })}
                </table>

            </div>

            <div className="row">
                <div className="col">
                    <h5>
                        29,875.<span>55</span>{" "}
                    </h5>
                    <p>Total investment</p>
                </div>
                <div className="col">
                    <h5>
                        31,428.<span>95</span>{" "}
                    </h5>
                    <p>Current value</p>
                </div>
                <div className="col">
                    <h5>1,553.40 (+5.20%)</h5>
                    <p>P&L</p>
                </div>
            </div>
            <VerticalGraph data={data} />
        </>
    )
}
