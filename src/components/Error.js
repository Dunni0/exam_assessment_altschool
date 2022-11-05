import React from "react";

export default function Error(){
    return(
        <div className="error_info">
        <div className="error">
            <img src={require("../image/spongebob-cartoon-png--3.png")} alt=" 404 error"/>
            <h1> 404 </h1>
        </div>
        <div className="text">
            <h2> Hehe, you've found a page that doesn't exist. </h2>
            <p> Don't worry! Now, breathe in, breathe out, check what you searched for and try again. </p>
        </div>
        </div>
    )
}
