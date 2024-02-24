// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import data from "../../Database/Data";

export default function Questions() {
    const [checked, setChecked] = useState(undefined);
    const question = data[0];

    useEffect(() => {
        console.log(data);
    }, []);

    function onSelect() {
        setChecked(true);
        console.log("radio button change");
    }

    return (
        <div className="relative">
            <div className="absolute inset-0 "></div>
            <div className="container mx-auto py-8 m-4 relative z-10">
                <div className="max-w-md mx-auto bg-white bg-opacity-75 p-8 rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">{question.questions}</h2>

                    <ul key={question.id}>
                        {question.options.map((q, i) => (
                            <li key={i} className="flex items-center mb-4 cursor-pointer">
                                <input
                                    type="radio"
                                    value={false}
                                    name={"options"}
                                    id={`q${i}-option`}
                                    onChange={onSelect}
                                    className="mr-2 appearance-none border-2 border-gray-600 rounded-full w-4 h-4 checked:bg-blue-600 cursor-pointer checked:border-transparent focus:outline-none"
                                />
                                <label className="text-gray-700" htmlFor={`q${i}-option`}>{q}</label>
                                <div className="check"></div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
