// src/components/Modal.js
export function Modal({ showModal, onClose }) {
    if (!showModal) return null;

    const handleClick = (e) => e.target.firstElementChild && onClose();
    const z = true;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            onClick={handleClick}
        >
            <div className="bg-white p-10">fvldlfdjnij</div>
            <input type="textarea" checked={z} />
        </div>
    );
}

// <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-100 z-1">
//     <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-lg">
//         <div className="flex justify-between items-center border-b pb-3">
//             <h2 className="text-2xl font-semibold">Modal Title</h2>
//             <button
//                 className="text-gray-500 hover:text-gray-700"
//                 onClick={onClose}
//             >
//                 &times;
//             </button>
//         </div>
//         <div className="mt-4">
//             <p>Some content for the modal..</p>
//             <p>Some other content..</p>
//         </div>
//         <div className="mt-6 flex justify-end">
//             <button
//                 className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
//                 onClick={onClose}
//             >
//                 Close
//             </button>
//         </div>
//     </div>
// </div>
