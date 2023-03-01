import { getNick } from "@/services/DetailPage";
import React, { useState } from "react";
const onKeyDown = (event) => {
    if (event.key === " ") {
      event.preventDefault();
    }
};
export default function InputUserName(props) {
    const { _idGame, dataVoucher } = props;
    const [id, setID ] = useState(0);
    const [zone, setZone] = useState(0);
    const [username, setUsername] = useState('');

    const getUserName = async() => {
      if (id > 0 && zone > 0) {
        const data = {
        codeGame: _idGame,
        arrID: id,
        arrZone: zone,
        }
        
        const response = await getNick(data);
        setUsername(response.data)
        const isdata = {
          id: id,
          zone: zone,
          username: response.data
        }
        dataVoucher(isdata)
      }
    }

    const onchangeZONE = (e) => {
      setZone(e.target.value)
    }
   
    const onchangeID = (e) => {
      setID(e.target.value)
    }
    
  return (
    <>
      <div className="flex flex-row" onBlur={() => getUserName()}>
        <div className="flex-1 ml-3 mt-5 mb-5">
          <input
            type="text"
            name="userID"
            onChange={(e) => onchangeID(e)}
            onKeyDown={onKeyDown}
            className="mt-1 px-3 py-2 text-blue-500 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Masukan User ID"
          />
        </div>
        <div className="flex-1 ml-3 mr-3 mt-5 mb-5">
          <input
            type="text"
            name="zone"
            onChange={(e) => onchangeZONE(e)}
            onKeyDown={onKeyDown}
            className="mt-1 px-3 py-2 text-blue-500 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Masukan Zone"
          />
        </div>
      </div>
      <div className="flex-1 ml-3 mr-3 mt-5 ">
        <input
          disabled
          type="text"
          name="zone"
          className="mt-1 px-3 py-2 text-blue-500 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="name"
          value={username}
        />
      </div>
    </>
  );
}
