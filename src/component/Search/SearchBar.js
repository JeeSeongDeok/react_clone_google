import React, { useState } from "react";
import "component/Search/SearchBar.css";

function Search() {
    const [textArea, setTextArea] = useState(false);

    return (
        <div>
            <input
                type="text"
                className={
                    textArea
                        ? "App-area-enter"
                        : ""
                }
                onMouseEnter={() => setTextArea(true)}
                onMouseLeave={() => setTextArea(false)}
            />
        </div>
    );
}

export default Search;
