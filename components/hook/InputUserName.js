import React from "react";
const onKeyDown = (event) => {
    if (event.key === " ") {
      event.preventDefault();
    }
};
export default function InputUserName(props) {
    const { id, dataVoucher } = props;
  return (
    <>
      <div className="flex flex-row">
        <div className="flex-1 ml-3 mt-5 mb-5">
          <input
            type="number"
            name="userID"
            onKeyDown={onKeyDown}
            className="mt-1 px-3 py-2 text-blue-500 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Masukan User ID"
          />
        </div>
        <div className="flex-1 ml-3 mr-3 mt-5 mb-5">
          <input
            type="number"
            name="zone"
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
        />
      </div>
    </>
  );
}
