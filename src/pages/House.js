import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

import '../styles/House.css'
import CardComponent from '../components/cards/house/CardComponent'
import RentJSON from '../JSON/HouseForRent.json'
import SaleJSON from '../JSON/HouseForSale.json'

export default function House() {
    const [data, setData] = useState([]);
    const [key, setKey] = useState("Rent");

    // Update data whenever the tab changes
    useEffect(() => {
        if (key === "Rent") {
            setData(RentJSON);
        } else if (key === "Sale") {
            setData(SaleJSON);
        }
    }, [key]);

    const handleTabSelect = (k) => {
        setKey(k);
    };

    // Custom tab button styles
    const tabStyle = {
        padding: "15px 40px",
        margin: "0 15px",
        borderRadius: "5px",
        fontSize: "20px",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "all 0.3s ease"
    };

    const activeTabStyle = {
        ...tabStyle,
        backgroundColor: "#4a90e2",
        color: "white",
        boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
    };

    const inactiveTabStyle = {
        ...tabStyle,
        backgroundColor: "#f8f9fa",
        color: "#333",
        border: "1px solid #dee2e6"
    };

    return (
        <>
            <div className="hero">
                <span>&nbsp; &nbsp;•</span>
                <Typewriter
                    words={[
                        "SAMARTH PROPERTIES AND TOURISM",
                    ]}
                    loop={0}
                    typeSpeed={70}
                    deleteSpeed={40}
                    delaySpeed={2000}
                />
                <span>&nbsp; &nbsp;•</span>
            </div>

            <div className='main'>
                <div className="the-btns">
                    <button
                        style={key === "Rent" ? activeTabStyle : inactiveTabStyle}
                        onClick={() => handleTabSelect("Rent")}
                    >
                        Rent
                    </button>
                    <button
                        style={key === "Sale" ? activeTabStyle : inactiveTabStyle}
                        onClick={() => handleTabSelect("Sale")}
                    >
                        Sale
                    </button>
                </div>

                <div className="tab-content">
                    {key === "Rent" && <CardComponent data={RentJSON} />}
                    {key === "Sale" && <CardComponent data={SaleJSON} />}
                </div>
            </div>
        </>
    );
}