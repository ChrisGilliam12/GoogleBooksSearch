import React, { useState } from "react";



function SaveBtn({ type = "default", className, children, onClick }) {

    const click = () => {
        onClick()
    }

    

    return (
        <div>
            <button onClick = {click} className={["btn btn-lg", `btn-${type}`, className].join(" ")}>
                {children}
            </button>

     
        </div>
    );
};

export default SaveBtn;
