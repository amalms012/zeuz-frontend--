import React from "react";
// import { useWebSocketStock } from "./WebSocketStock.jsx";
import useWebSocketManager from "../utils/WebSocketManager.js";

const StockInfo = ({ selectedData }) => {
  const touchline = `${selectedData.exchange}|${selectedData.token_id}`;
  

  const { lastPrice, volume, percentChange } = useWebSocketManager(touchline);

  const data = [
    { value: `${percentChange}%`, label: "24h Change" },
    // { value: "+1.25%", label: "24h High" },
    // { value: "+1.25%", label: "24h Low" },
    { value: volume, label: "Market Volume" },
  ];

  return (
    <div className="p-2 mt-6  md:mt-0 md:p-4 bg-white border rounded-md flex justify-between items-center space-x-4">
      <div >
        <div className="flex text-sm md:text-lg items-center space-x-2 cursor-pointer whitespace-nowrap">
          <span className="font-bold ">{selectedData?.display_name}</span>
        </div>
      </div>

      <div className="h-10 w-px bg-gray-500 mx-4 hidden md:block" />

      <div className="flex text-xs md:text-lg flex-wrap items-center space-x-4 space-y-2">
        <div className="text-left whitespace-nowrap">
          <p className=" font-bold">{lastPrice}</p>
          <p className=" text-gray-400">Last Traded Price</p>
        </div>
      </div>

      <div className="h-10 w-px text-xs md:text-lg bg-gray-500 mx-4 hidden md:block" />

      <div className="flex text-xs md:text-lg space-x-2 md:space-x-9">
        {data.map((item, index) => (
          <div key={index} className="text-center whitespace-nowrap">
            <p
              className={` font-semibold ${
                item.label === "24h Change"
                  ? parseFloat(item.value) > 0
                    ? "text-green-500"
                    : parseFloat(item.value) < 0
                    ? "text-red-500"
                    : "text-gray-500"
                  : ""
              }`}
            >
              {item.value}
            </p>

            <p className="text-xs md:text-lg text-gray-400">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StockInfo;
