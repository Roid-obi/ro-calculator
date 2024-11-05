// pages/index.tsx
"use client";
import { useState } from "react";

export default function Home() {
  const [display, setDisplay] = useState<string>("");

  const handleClick = (value: string) => {
    setDisplay((prev) => prev + value);
  };

  const calculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch {
      setDisplay("Error");
    }
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  return (
    <div className="grid place-items-center min-h-screen p-8 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4 p-4 text-right text-2xl bg-gray-200 rounded-md min-h-[60px]">
          {display || "0"}
        </div>
        <div className="grid grid-cols-4 gap-4">
          <button onClick={() => clearDisplay()} className="p-4 bg-red-500 text-white rounded-md">
            C
          </button>
          <button onClick={() => handleClick("/")} className="p-4 bg-gray-300 rounded-md">
            ÷
          </button>
          <button onClick={() => handleClick("*")} className="p-4 bg-gray-300 rounded-md">
            ×
          </button>
          <button onClick={() => handleClick("-")} className="p-4 bg-gray-300 rounded-md">
            -
          </button>

          {[7, 8, 9].map((num) => (
            <button key={num} onClick={() => handleClick(num.toString())} className="p-4 bg-gray-100 rounded-md">
              {num}
            </button>
          ))}
          <button onClick={() => handleClick("+")} className="p-4 bg-gray-300 rounded-md">
            +
          </button>

          {[4, 5, 6].map((num) => (
            <button key={num} onClick={() => handleClick(num.toString())} className="p-4 bg-gray-100 rounded-md">
              {num}
            </button>
          ))}

          {[1, 2, 3].map((num) => (
            <button key={num} onClick={() => handleClick(num.toString())} className="p-4 bg-gray-100 rounded-md">
              {num}
            </button>
          ))}
          <button onClick={calculate} className="p-4 bg-blue-500 text-white rounded-md col-span-2">
            =
          </button>

          <button onClick={() => handleClick("0")} className="p-4 bg-gray-100 rounded-md col-span-2">
            0
          </button>
          <button onClick={() => handleClick(".")} className="p-4 bg-gray-100 rounded-md">
            .
          </button>
        </div>
      </div>
    </div>
  );
}
