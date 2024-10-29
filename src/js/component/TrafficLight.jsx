import React, { useState }from "react";


const TrafficLigt = () => {

    const[on, setOn]=useState("")

    const changeColor = (color) =>{
        setOn(color)
    }
    return (
        <div className="container">
            <div className="pipe"></div>
            <div className="box-light">

                <div className={`red ${on == "red" ? "light-on" : ""}` } 
                     onClick={()=> changeColor("red")}   
                ></div>
                <div className={`yellow ${on == "yellow" ? "light-on" : ""}`}
                     onClick={()=> changeColor("yellow")}
                ></div>
                <div className={`green ${on == "green" ? "light-on" : ""}`}
                     onClick={()=> changeColor("green")}
                ></div>

            </div>
        </div>
    )
}

export default TrafficLigt