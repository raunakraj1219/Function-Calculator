import React, { useState } from "react";
import { Modal } from "./components/modal";
import DebouncedInput from "./components/debounced-input";

function App() {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    // console.log({ showModal });
    const handleFile = (e) => {
        console.log(e);
    };

    const handleEmail = (e) => {
        console.log(e);
        console.log(e.target.validity.valid);
    };
    function x() {
        for (var i = 1; i <= 5; i++) {
            console.log(i);
            // setTimeout(() => {
            //     console.log(i);
            // }, i * 1000);
        }
    }
    x();

    // FIRST CLASS FUNCTION -> ability of function to be used as values i.e assigned values, passed in function, returned from a function.
    // FUNCTION STATEMENT || FUNCTION DECLARATION -> function a(){ console.log(zz)}
    // FUNCTION EXPRESSION -> var b = function(){ }

    return (
        <div className="p-6">
            <DebouncedInput />
            <h1 className="text-3xl font-bold mb-4">
                Tailwind CSS Modal Example
            </h1>
            <button
                // className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                // className="border"
                onClick={handleOpenModal}
            >
                Open Modal
            </button>
            <br />
            <br />
            <input type="button" value="Click me" />
            <br />
            <br />
            <input type="text" style={{ border: "1px solid black" }} />
            <br />
            <br />
            <input type="file" onChange={handleFile} />
            <br />
            <br />
            <input type="color" />
            <br />
            <br />
            <input type="date" />
            <br />
            <br />
            <input type="datetime-local" />
            <br />
            <br />
            <input
                type="email"
                style={{ border: "1px solid black" }}
                onChange={handleEmail}
            />
            <br />
            <br />
            <input type="image" src="https://picsum.photos/200" />
            <br />
            <br />
            <input type="radio" />
            <br />
            <br />
            <input
                type="range"
                min="0"
                max="1000"
                step="10"
                // onChange={(e) => console.log(e.target.value)}
            />
            <br />
            <br />
            <input type="month" />
            <input type="hidden" />
            <input type="time" />

            <Modal showModal={showModal} onClose={handleCloseModal} />
        </div>
    );
}

export default App;
