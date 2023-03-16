import { getNick } from "@/services/DetailPage";
import React, { useState } from "react";
import { CheckCircleIcon, ExclamationTriangleIcon } from "@heroicons/react/24/solid";

const onKeyDown = (event) => {
  if (event.key === " ") {
    event.preventDefault();
  }
};
export default function InputUserName(props) {
  const { _idGame, dataVoucher } = props;
  const [id, setID] = useState("");
  const [zone, setZone] = useState("");
  const [username, setUsername] = useState('');
  const [status, setStatus] = useState("none");
  const getUserNameML = async () => {
    if (id != "" && zone != "") {
      setStatus("loading")
      const data = {
        codeGame: _idGame,
        arrID: id,
        arrZone: zone,
      }
      const response = await getNick(data);
      if (response.error == false) {
        setUsername(response.data)
        const isdata = {
          id: id,
          zone: zone,
          username: response.data
        }
        dataVoucher(isdata)
        setStatus("success")
      } else {
        setUsername(response.data)
        setZone("")
        setID("")
        setStatus("failed");
      }
    }
  }
  const getUserName = async () => {
    if (id != "") {
      setStatus("loading")
      const data = {
        codeGame: _idGame,
        arrID: id,
        arrZone: zone,
      }
      const response = await getNick(data);
      if (response.error == false) {
        setUsername(response.data)
        const isdata = {
          id: id,
          zone: zone,
          username: response.data
        }
        dataVoucher(isdata)
        setStatus("success")
      } else {
        setUsername(response.data)
        setZone("")
        setID("")
        setStatus("failed");
      }
    }
  }
  const onchangeZONE = (e) => {
    setZone(e.target.value)
  }

  const onchangeID = (e) => {
    setID(e.target.value)
  }
  if (_idGame == "1") 
    return (
      <div className="flex flex-row">
        <div className="flex-1 ml-3 mt-5 mb-5">
        <input
              type="text"
              name="userID"
              className="mt-1 px-3 py-2 text-blue-500 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="TIDAK PERLU INPUT"
            />
        </div>
      </div>
    )
  if (_idGame == "93")
    return (
      <>
        <div className="flex flex-row" onBlur={() => getUserNameML()}>
          <div className="flex-1 ml-3 mt-5 mb-5">
            <input
              value={id}
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
              value={zone}
              type="text"
              name="zone"
              onChange={(e) => onchangeZONE(e)}
              onKeyDown={onKeyDown}
              className="mt-1 px-3 py-2 text-blue-500 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Masukan Zone"
            />
          </div>
        </div>
        <div className="relative ml-3 mr-3 mt-5 ">
          <input
            disabled
            type="text"
            name="username"
            className="mt-1 px-3 py-2 text-blue-500 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Username"
            value={username}
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <label htmlFor="currency" className="sr-only">Currency</label>
            <button id="currency" name="currency" type="button" disabled>
              {status == "loading" && <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={4}></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>}
              {status == "failed" &&
                <ExclamationTriangleIcon
                  className="block h-6 w-6 text-yellow-500 mr-3"
                  aria-hidden="true"
                />
              }
              {status == "success" &&
                <CheckCircleIcon
                  className="block h-6 w-6 text-green-500 mr-3"
                  aria-hidden="true"
                />
              }
            </button>
          </div>
        </div>
      </>
    );
  return (
    <>
      <div className="flex flex-row" onBlur={() => getUserName()}>
        <div className="flex-1 ml-3 mr-3 mt-5 mb-5">
          <input
            value={id}
            type="text"
            name="userID"
            onChange={(e) => onchangeID(e)}
            onKeyDown={onKeyDown}
            className="mt-1 px-3 py-2 text-blue-500 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Masukan User ID"
          />
        </div>
      </div>
      <div className="relative ml-3 mr-3 mt-5 ">
        <input
          disabled
          type="text"
          name="username"
          className="mt-1 px-3 py-2 text-blue-500 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="Username"
          value={username}
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="currency" className="sr-only">Currency</label>
          <button id="currency" name="currency" type="button" disabled>
            {status == "loading" && <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={4}></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>}
            {status == "failed" &&
              <ExclamationTriangleIcon
                className="block h-6 w-6 text-yellow-500 mr-3"
                aria-hidden="true"
              />
            }
            {status == "success" &&
              <CheckCircleIcon
                className="block h-6 w-6 text-green-500 mr-3"
                aria-hidden="true"
              />
            }
          </button>
        </div>
      </div>
    </>
  );

}
