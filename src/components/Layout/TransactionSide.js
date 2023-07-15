import { ChevronLeftIcon, MapPinIcon } from "@heroicons/react/24/solid";
import outcome from "../../assets/images/outcome.svg";
import cupoftea from "../../assets/images/cupoftea.svg";
import coin from "../../assets/images/coin.svg";
import apple from "../../assets/images/apple.svg";

const TransactionSide = (props) => {
  return (
    <div>
      <div className="h-[400px] bg-[#B2EDD3]">
        <div className="p-6 text-lg font-bold text-[#1C1B20] flex items-center">
          <a
            className=" cursor-pointer bg-white rounded-xl w-[36px] h-[36px] flex justify-center items-center text-center"
            onClick={props.hideTransaction}
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </a>
          <span className="ml-3">Go back</span>
        </div>
        <div className="text-center flex flex-col items-center gap-[20px]">
          <div className="p-3 bg-gray-900 rounded-xl">
            <img src={cupoftea} width={24} height={24} />
          </div>
          <div>
            <p className="text-[#1C1B20] text-2xl font-black m-0">
              {props?.data?.name?.name}
            </p>
            <p className="text-[#1C1B2080] text-sm font-bold mt-2.5 m-0">
              {props?.data?.date}
            </p>
          </div>
          <span className="text-[#1C1B20] inline-flex items-center justify-center font-bold bg-orange-300 rounded py-1 px-2">
            Pending
          </span>
        </div>
      </div>
      <div className="w-full flex justify-center -translate-y-[50%]">
        <div className="w-[90%] border rounded-2xl bg-white p-6  text-center">
          <h1 className="text-[#1C1B20] text-[64px] font-bold text-center">
            ${props?.data?.amount}
          </h1>
          <div className="flex justify-center items-center mt-2.5">
            <img src={outcome} alt="Outcome" />
            <span className="text-[#1C1B20] text-[15px] ml-2 font-bold">
              Outcome
            </span>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center -translate-y-[65px]">
        <div className="w-[90%] border rounded-2xl bg-white p-4  text-center text-lg flex items-center">
          <img
            src={coin}
            className="mr-2 text-[#1C1B20] p-2 bg-[#F0EEF5] rounded-xl"
          />
          <span className="text-[#1C1B2080] font-medium">Left Balance: </span>
          <span className="text-[#1C1B20] font-bold ml-2"> $242,456</span>
        </div>
      </div>
      <div className="w-full flex justify-center -translate-y-[65px] mt-3">
        <div className="w-[90%] border rounded-2xl bg-white p-4  text-center text-lg flex items-center">
          <img
            src={apple}
            className="mr-2 text-[#1C1B20] p-2 bg-[#F0EEF5] rounded-xl"
          />
          <span className="text-[#1C1B2080] font-medium">Payment Method: </span>
          <span className="text-[#1C1B20] font-bold ml-2">Apple Pay</span>
        </div>
      </div>
      <div className="w-full flex justify-center -translate-y-[65px] mt-3">
        <div className="w-[90%] border rounded-2xl bg-white p-4  text-center text-lg flex items-center">
          <MapPinIcon className="h-10 w-10 mr-2 text-[#1C1B20] p-2 bg-[#F0EEF5] rounded-xl" />
          <span className="text-[#1C1B2080] font-medium">Address: </span>
          <span className="text-[#1C1B20] font-bold ml-2">
            1901 Thornridge Cir. Shiloh
          </span>
        </div>
      </div>
    </div>
  );
};

export default TransactionSide;
