import React from 'react'
import Image from 'next/image';

export default function Nominal(props) {
    const {data, setIsShowing, onNominalChange} = props;
  if (data.category == 'Mobile') {
    if (data.codeVoucher == '93') {
      return (
          <ul className="grid ml-3 mr-3 w-full gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 mb-5">
            {data.nominals.map((data) => {
              return(
                <li key={data._id} className="Customize-Nominal-border">
                  <input type="radio" id={data._id} name="nominal"  onClick={() => setIsShowing(true)} onChange={() => onNominalChange(data)}  value={data._id} className="hidden peer" required />
                  <label htmlFor={data._id} className="inline-flex items-start justify-between w-full pl-4 pr-4 text-gray-500 bg-white border Customize-Nominal border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                      <div className="flex flex-col items-center">
                          {data.discount > 0 && <div className="w-full ml-1 mt-1 md:mt-1"><span className="text-xs bg-yellow-400 text-white">{data.discount}% OFF</span></div>}
                          {data.discount == 0 && <div className="w-full ml-1 mt-1 md:mt-1">&nbsp;</div>}
                          <small className="w-full text-xs md:text-sm lg:text-sm">{data.productName}</small>
                      </div>
                      {data.priceSell <= 10000 && <Image alt={data._id} className="w-6 h-6 mt-7 mr-2" src={`/nominals/ML/DM1.png`} width={20} height={20}/>}
                      {data.priceSell > 10000 && data.priceSell < 100000 && <Image alt={data._id} className="w-6 h-6 mt-7 mr-2" src={`/nominals/ML/DM2.png`} width={20} height={20}/>}
                      {data.priceSell > 100000 && data.productID != 'MLSL' && <Image alt={data._id} className="w-6 h-6 mt-7 mr-2" src={`/nominals/ML/DM3.png`} width={20} height={20}/>}
                      {data.productID == 'MLSL' && <Image alt={data._id} className="w-20 h-6 mt-7" src={`/nominals/ML/ST.png`} width={20} height={20}/>}
                  </label>
                </li>
              )
            })}
          </ul>
        )
    } else if(data.codeVoucher == '92'){
      return (
        <ul className="grid ml-3 mr-3 w-full gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 mb-5">
            {data.nominals.map((data) => {
              return(
                <li key={data._id} className="Customize-Nominal-border">
                  <input type="radio" id={data._id} name="nominal"  onClick={() => setIsShowing(true)} onChange={() => onNominalChange(data)}  value={data._id} className="hidden peer" required />
                  <label htmlFor={data._id} className="inline-flex items-start justify-between w-full pl-4 pr-4 text-gray-500 bg-white border Customize-Nominal border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                      <div className="flex flex-col items-center">
                          {data.discount > 0 && <div className="w-full ml-1 mt-1 md:mt-1"><span className="text-xs bg-yellow-400 text-white">{data.discount}% OFF</span></div>}
                          {data.discount == 0 && <div className="w-full ml-1 mt-1 md:mt-1">&nbsp;</div>}
                          <small className="w-full text-xs md:text-sm lg:text-sm">{data.productName}</small>
                      </div>
                      {data.priceSell <= 10000 && <Image alt={data._id} className="w-6 h-6 mt-7 mr-2" src={`/nominals/FF/DM1.png`} width={20} height={20}/>}
                      {data.priceSell > 10000 && data.priceSell < 100000 && <Image alt={data._id} className="w-6 h-6 mt-7 mr-2" src={`/nominals/FF/DM2.png`} width={20} height={20}/>}
                      {data.priceSell > 100000 && data.productID != 'FFEP' && <Image alt={data._id} className="w-6 h-6 mt-7 mr-2" src={`/nominals/FF/DM3.png`} width={20} height={20}/>}
                      {data.productID == 'MLSL' && <Image alt={data._id} className="w-20 h-6 mt-7" src={`/nominals/FF/EP.png`} width={20} height={20}/>}
                  </label>
                </li>
              )
            })}
          </ul>
      )
    }
  } else if (data.category == 'Voucher') {
    return (
      <ul className="grid ml-3 mr-3 w-full gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 mb-5">
          {data.nominals.map((data) => {
            return(
              <li key={data._id} className="Customize-Nominal-border">
                <input type="radio" id={data._id} name="nominal"  onClick={() => setIsShowing(true)} onChange={() => onNominalChange(data)}  value={data._id} className="hidden peer" required />
                <label htmlFor={data._id} className="inline-flex items-start justify-between w-full pl-4 pr-4 text-gray-500 bg-white border Customize-Nominal border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                    <div className="flex flex-col items-center">
                        {data.discount > 0 && <div className="w-full ml-1 mt-1 md:mt-1"><span className="text-xs bg-yellow-400 text-white">{data.discount}% OFF</span></div>}
                        {data.discount == 0 && <div className="w-full ml-1 mt-1 md:mt-1">&nbsp;</div>}
                        <small className="w-full text-xs md:text-sm lg:text-sm">{data.productName}</small>
                    </div>
                    <Image alt={data._id} className="w-6 h-6 mt-7 mr-2" src={`/nominals/VOUCHER/VC.png`} width={20} height={20}/>
                </label>
              </li>
            )
          })}
        </ul>
    )
  } else {
    return (
        <ul className="grid ml-3 mr-3 w-full gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 mb-5">
          {data.nominals.map((data) => {
            return(
              <li key={data._id} className="Customize-Nominal-border">
                <input type="radio" id={data._id} name="nominal" onClick={() => setIsShowing(true)} onChange={() => onNominalChange(data)}  value={data._id} className="hidden peer" required />
                <label htmlFor={data._id} className="inline-flex items-start justify-between w-full pl-4 pr-4 text-gray-500 bg-white border Customize-Nominal border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                    <div className="flex flex-col items-center">
                        {data.discount > 0 && <div className="w-full ml-1 mt-3 md:mt-1"><span className="text-xs bg-yellow-400 text-white">{data.discount}% OFF</span></div>}
                        {data.discount == 0 && <div className="w-full ml-1 mt-3 md:mt-1">&nbsp;</div>}
                        <small className="w-full text-xs md:text-sm lg:text-sm">{data.productName}</small>
                    </div>
                    <svg aria-hidden="true" className="w-6 h-6 ml-3 mt-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </label>
              </li>
            )
          })}
        </ul>
      )
  }
  
}
