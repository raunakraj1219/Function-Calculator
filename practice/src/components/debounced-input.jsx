import React, { useState } from "react";
import useDebounce from "../functions/debounce";

const DebouncedInput = () => {
    const [inputText, setInputText] = useState("");

    function handleInputChange(event) {
        setInputText(event.target.value);
    }

    const debouncedInput = useDebounce(inputText, 2000);

    return (
        <div>
            <p>{inputText}</p>
            <p>{debouncedInput}</p>
            <input
                type="text"
                value={inputText}
                onChange={handleInputChange}
                placeholder="Type text"
            />
        </div>
    );
};

export default DebouncedInput;
