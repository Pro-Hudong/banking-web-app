import { ChevronLeftIcon, WifiIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import backspace from "../../assets/images/backspace.svg";

const PayRightBar = (props) => {
  const [amount, setAmount] = useState(0);

  const handleNumber = (value) => {
    const newValue = amount == 0 ? value : amount * 1 + "" + value;
    setAmount(parseInt(newValue));
  };

  const backSpace = () => {
    const curValue = amount.toString();
    const newValue = curValue.slice(0, curValue.length - 1);
    setAmount(newValue * 1);
  };
  return (
    <div>
      <div className="p-6">
        <div className=" text-lg font-bold text-[#1C1B20] flex items-center">
          <a
            className=" cursor-pointer bg-[#F0EEF5] rounded-xl w-[40px] h-[40px] flex justify-center items-center text-center"
            onClick={props.hidePayPage}
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </a>
          <span className="ml-3">Go back</span>
        </div>
        <div className="text-center flex flex-col items-center">
          <h2 className="text-[#1C1B20] text-2xl font-black mt-8">
            You are sending to:{" "}
          </h2>
          <div className="w-[300px] flex items-center border rounded-2xl p-2 mt-3">
            <img
              src="/avatars/jango.png"
              width={52}
              height={52}
              className="rounded-xl"
            />
            <div className="flex flex-col justify-center text-left ml-3">
              <h5 className="text-[#1C1B20] font-bold">Jang C.</h5>
              <h5 className="mt-1 text-[#1C1B2080] text-[13px] font-medium">
                1234 5678 **** 9000
              </h5>
            </div>
          </div>
        </div>
        <div className="text-center mt-[109px]">
          <span className="text-[64px] text-[#1C1B20] font-medium">
            $ <span className="text-[#1C1B2080]">{amount}</span>
          </span>
        </div>
        <div className="text-center mt-10 rounded-2xl flex justify-center items-center">
          <div className="w-[150px] h-[40px] flex items-center justify-center">
            <div className="text-[#1C1B20] bg-[#E5F5F9] h-100 px-2.5 py-1.5 text-xs font-bold text-center flex items-center rounded-l-lg">
              2357
            </div>
            <div className="bg-black h-100 flex items-center rounded-r-lg px-1 py-3.5">
              <img src="/icons/paypass.svg" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <h2 className="text-[#1C1B2080] text-md">Card Balance:</h2>
            <h2 className="text-[#1C1B20] font-black text-md ml-1.5">
              $242,567
            </h2>
          </div>
        </div>
        <div className="w-full mt-8">
          <button
            className="w-full py-3 text-[15px] font-black bg-[#B2EDD3] rounded-[14px] text-[#1C1B20]"
            onClick={props.sendMoneyCheck}
          >
            Send Money
          </button>
        </div>
        <div className="w-full grid grid-cols-3 gap-3 mt-3">
          <div className="text-[#1C1B20] col-span-1 text-center w-full text-xl ">
            <button
              className="btn-pay w-full rounded-2xl py-3 font-black"
              onClick={() => handleNumber(1)}
            >
              1
            </button>
          </div>
          <div className="text-[#1C1B20] col-span-1 text-center w-full text-xl ">
            <button
              className="btn-pay w-full rounded-2xl py-3 font-black"
              onClick={() => handleNumber(2)}
            >
              2
            </button>
          </div>
          <div className="text-[#1C1B20] col-span-1 text-center w-full text-xl ">
            <button
              className="btn-pay w-full rounded-2xl py-3 font-black"
              onClick={() => handleNumber(3)}
            >
              3
            </button>
          </div>
        </div>
        <div className="w-full grid grid-cols-3 gap-3 mt-3">
          <div className="text-[#1C1B20] col-span-1 text-center w-full text-xl ">
            <button
              className="btn-pay w-full rounded-2xl py-3 font-black"
              onClick={() => handleNumber(4)}
            >
              4
            </button>
          </div>
          <div className="text-[#1C1B20] col-span-1 text-center w-full text-xl ">
            <button
              className="btn-pay w-full rounded-2xl py-3 font-black"
              onClick={() => handleNumber(5)}
            >
              5
            </button>
          </div>
          <div className="text-[#1C1B20] col-span-1 text-center w-full text-xl ">
            <button
              className="btn-pay w-full rounded-2xl py-3 font-black"
              onClick={() => handleNumber(6)}
            >
              6
            </button>
          </div>
        </div>
        <div className="w-full grid grid-cols-3 gap-3 mt-3">
          <div className="text-[#1C1B20] col-span-1 text-center w-full text-xl ">
            <button
              className="btn-pay w-full rounded-2xl py-3 font-black"
              onClick={() => handleNumber(7)}
            >
              7
            </button>
          </div>
          <div className="text-[#1C1B20] col-span-1 text-center w-full text-xl ">
            <button
              className="btn-pay w-full rounded-2xl py-3 font-black"
              onClick={() => handleNumber(8)}
            >
              8
            </button>
          </div>
          <div className="text-[#1C1B20] col-span-1 text-center w-full text-xl ">
            <button
              className="btn-pay w-full rounded-2xl py-3 font-black"
              onClick={() => handleNumber(9)}
            >
              9
            </button>
          </div>
        </div>
        <div className="w-full grid grid-cols-3 gap-3 mt-3">
          <div className="text-[#1C1B20] col-span-1 text-center w-full text-xl "></div>
          <div className="text-[#1C1B20] col-span-1 text-center w-full text-xl ">
            <button
              className="btn-pay w-full rounded-2xl py-3 font-black"
              onClick={() => handleNumber(0)}
            >
              0
            </button>
          </div>
          <div className="text-[#1C1B20] col-span-1 text-center w-full text-xl ">
            <button
              className=" w-full rounded-2xl py-3 flex justify-center"
              onClick={backSpace}
            >
              {/* <ArrowSmallLeftIcon  /> */}
              <img src={backspace} width={30} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayRightBar;
