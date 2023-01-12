import React, { useState } from "react";
import "component/Search/Search.css";

function Search() {
    const [textArea, setTextArea] = useState(false);
    const textAreaEnter = () => {
        setTextArea(true);
    };
    const textAreaOut = () => {
        setTextArea(false);
    };

    return (
        <div>
            <input
                type="text"
                className={
                    textArea
                        ? "App-area-enter"
                        : ""
                }
                onMouseEnter={() => textAreaEnter()}
                onMouseLeave={() => textAreaOut()}
            />
        </div>
    );
}

export default Search;