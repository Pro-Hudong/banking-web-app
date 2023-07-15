import { ChevronLeftIcon } from "@heroicons/react/24/solid";
const CheckoutMessage = (props) => {
  return (
    <div>
      <div className="h-[100vh] bg-white">
        <div className="p-6 text-lg font-bold text-black flex items-center">
          <a
            className=" cursor-pointer bg-[#F0EEF5] rounded-xl w-[40px] h-[40px] flex justify-center items-center text-center"
            onClick={props.hideCheckout}
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </a>
          <span className="ml-3">Go back</span>
        </div>
        <div className="h-[calc(100vh-150px)] flex flex-col justify-center items-center text-black px-[45px]">
          <h3 className="text-black px-5 text-2xl font-black text-center">
            Money has been successfully transferred!{" "}
          </h3>
          <span className="text-[#1C1B2080] text-md text-center mt-[12px] ">
            The money has been successfully transferred and will reflect in your
            transactions list soon.{" "}
          </span>
          <button
            className="py-3 w-full mt-10 text-[15px] font-black bg-[#B2EDD3] rounded-[14px] text-[#1C1B20]"
            onClick={props.clearAll}
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutMessage;
