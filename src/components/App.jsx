import React, { useState } from "react";

function App(){

    const now = new Date().toLocaleTimeString();

    const [time, update] = useState(now);

    setInterval(change,1000);

    function change(){
        const updateTime = new Date().toLocaleTimeString();
        update(updateTime);
    }


    return (
        <div>
            <h1>{time}</h1>
        </div>
    );


}


export default App;