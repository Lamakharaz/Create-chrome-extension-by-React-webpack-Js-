import React from "react";
import { render } from "react-dom";
//chrome-extension://olkdjfjhiackoilndkpfgegcecfmglpa/popup.html
function Popup(){
    return(
        <>
            <h1> hello world!!</h1>
            <p> this is a simple popup</p>
        </>
    )
}
render(<Popup/>, document.getElementById("react-target"))