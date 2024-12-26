import React, { useRef, useState } from 'react';

function Past() {
    let inpRef = useRef();
    const [mass, setMass] = useState([]);
    const [text, setText] = useState("");

    console.log(mass);

    function handeleAdd(e) {
        e.preventDefault();
        if (inpRef.current.value.trim() !== "") {
            setMass([...mass, inpRef.current.value]);
            inpRef.current.value = "";
        }
    }

    function handleCopy(value) {
        navigator.clipboard.writeText(value)
            .then(() => alert(value));
    }

    function handleTextareaChange(e) {
        setText(e.target.value);

        if (mass.includes(e.target.value.trim())) {
            alert("Bu matn ro'yxatda mavjud!");
        }
    }

    return (
        <div className="flex flex-col items-center mx-auto p-6 bg-gradient-to-r from-gray-50 to-gray-200 rounded-lg shadow-lg">
            <form className="flex gap-4 mb-6">
                <input
                    className="border-2 border-gray-300 rounded-lg p-3 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                    type="text"
                    placeholder="Enter Tasks..."
                    ref={inpRef}
                />
                <button
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all"
                    onClick={handeleAdd}
                >
                    Add
                </button>
            </form>

            <div className="w-full">
                <ul className="space-y-4">
                    {mass.length > 0 &&
                        mass.map(function (value, index) {
                            return (
                                <div key={index} className="bg-blue-100 p-3 rounded-lg shadow hover:bg-blue-200 transition">
                                    <li 
                                        className="cursor-pointer text-gray-700 hover:text-blue-600"
                                        onClick={() => handleCopy(value)}
                                    >
                                        {value}
                                    </li>
                                </div>
                            );
                        })}
                </ul>
            </div>

            <div className="mt-6 w-full">
                <textarea
                    value={text}
                    onChange={handleTextareaChange}
                    placeholder='Enter text...'
                    className='w-full h-24 border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm'
                ></textarea>
            </div>
        </div>
    );
}

export default Past;