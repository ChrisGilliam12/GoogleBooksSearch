import React, { useState } from "react";



function SaveBtn({ type = "default", className, children, onClick }) {

    

    return (
        <div>
            <button className={["btn btn-lg", `btn-${type}`, className].join(" ")}>
                {children}
            </button>

     
        </div>
    );
};

export default SaveBtn;
