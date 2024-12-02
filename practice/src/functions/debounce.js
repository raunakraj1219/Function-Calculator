import React, { useEffect, useState } from 'react'

const useDebounce = (text, delay) => {
    const [inputText, setInputText] = useState("");

    // useEffect(() => {
    //     const timer = setTimeout(() => setInputText(text), delay);

    //     return (() => clearTimeout(timer));
    // }, [text])
    useEffect(() => {
        const timer = setInterval(() => setInputText(text), delay);
        return (() => clearInterval(timer));
    }, [])
    return (inputText)

}

export default useDebounce
