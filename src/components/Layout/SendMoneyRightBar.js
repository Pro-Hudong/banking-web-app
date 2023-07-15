import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";

const SendMoney = (props) => {
  const [lastTransfers, setLastTransfers] = useState([]);
  const [aGroup, setAGroup] = useState([]);

  useEffect(() => {
    setLastTransfers([
      {
        avatar: "/avatars/pinter.png",
        name: "Pintér B.",
        card: "1234 5678 **** 9000",
      },
      {
        avatar: "/avatars/jango.png",
        name: "Jango C.",
        card: "1234 5678 **** 9000",
      },
      {
        avatar: "/avatars/veres.png",
        name: "Veres P.",
        card: "1234 5678 **** 9000",
      },
      {
        avatar: "/avatars/guy.png",
        name: "Guy H.",
        card: "1234 5678 **** 9000",
      },
    ]);
    setAGroup([
      {
        avatar: "/avatars/alina.png",
        name: "Alina N.",
        card: "1234 5678 **** 9000",
      },
      {
        avatar: "/avatars/andy.png",
        name: "Andy M.",
        card: "1234 5678 **** 9000",
      },
      {
        avatar: "/avatars/anna.png",
        name: "Anna B.",
        card: "1234 5678 **** 9000",
      },
    ]);
  }, []);
  return (
    <div>
      <div className="p-6 ">
        <div className=" text-lg font-bold text-[#1C1B20] flex items-center">
          <a
            className=" cursor-pointer bg-[#F0EEF5]rounded-xl w-[36px] h-[36px] flex justify-center items-center text-center"
            onClick={props.hideSendBar}
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </a>
          <span className="ml-3">Go back</span>
        </div>
        <div className="text-[#1C1B20] mt-8">
          <span className="text-2xl font-black">Send Money</span>
          <div className="mt-[20px]">
            <label
              htmlFor="default-search"
              className="mb-[12px] text-sm text-gray-900 font-bold"
            >
              Write name, number of the card or phone number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <img src="/icons/search.svg" />
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full pl-[50px] py-[14px] pr-3 text-[15px] text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                placeholder="Start searching here"
                required
              ></input>
            </div>
          </div>
        </div>
        <div className="text-[#1C1B20] mt-8">
          <p className="mb-[12px] text-sm text-gray-900 font-bold">My Cards</p>
          <div className="flex items-center">
            <div className="rounded-[14px] p-[15px] bg-[#E5F5F9]">
              <span className="text-sm font-black">CD</span>
            </div>
            <span className="ml-4 text-[#1C1B20] text-[15px] font-bold">
              On my card 1234****9000
            </span>
          </div>
        </div>
        <div className="text-[#1C1B20] mt-3">
          <p className="mb-[12px] text-sm text-gray-900 font-bold">
            Last Transfers
          </p>
          {lastTransfers.map((item, index) => {
            return (
              <div
                className="flex items-center mt-3 cursor-pointer"
                key={index}
                onClick={props.goToPay}
              >
                <img
                  src={item.avatar}
                  width={52}
                  height={52}
                  className="rounded-xl"
                />
                <div className="flex flex-col justify-center ml-3">
                  <h5 className="text-[#1C1B20] text-[15px] font-bold">
                    {item.name}
                  </h5>
                  <h5 className="mt-1 text-[#1C1B2080] text-[13px] font-medium">
                    {item.card}
                  </h5>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-[#1C1B20] mt-3">
          <p className="mb-[12px] text-sm text-gray-900 font-bold">A</p>
          {aGroup.map((item, index) => {
            return (
              <div
                className="flex items-center mt-3 cursor-pointer"
                key={index}
                onClick={props.goToPay}
              >
                <img
                  src={item.avatar}
                  width={52}
                  height={52}
                  className="rounded-xl"
                />
                <div className="flex flex-col justify-center ml-3">
                  <h5 className="text-[#1C1B20] font-bold">{item.name}</h5>
                  <h5 className="mt-1 text-[#1C1B2080] text-[13px] font-medium">
                    {item.card}
                  </h5>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-[#1C1B20] mt-3">
          <p className="mb-[12px] text-sm text-gray-900 font-bold">B</p>
          {aGroup.map((item, index) => {
            return (
              <div
                className="flex items-center mt-3 cursor-pointer"
                key={index}
                onClick={props.goToPay}
              >
                <img
                  src={item.avatar}
                  width={52}
                  height={52}
                  className="rounded-xl"
                />
                <div className="flex flex-col justify-center ml-3">
                  <h5 className="text-[#1C1B20] font-bold">{item.name}</h5>
                  <h5 className="mt-1 text-[#1C1B2080] text-[13px] font-medium">
                    {item.card}
                  </h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SendMoney;
