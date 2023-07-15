import { useState, useEffect } from "react";
import {
  WalletIcon,
  ArchiveBoxIcon,
  CurrencyDollarIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

import Sidebar from "../../components/Layout/Sidebar";

import avatar from "../../assets/images/avatar.png";
import card1 from "../../assets/images/card-1.png";
import card2 from "../../assets/images/card-2.png";
import income from "../../assets/images/income.svg";
import outcome from "../../assets/images/outcome.svg";
import send from "../../assets/images/send.svg";
import receive from "../../assets/images/receive.svg";
import coin from "../../assets/images/coin.svg";
import android from "../../assets/images/android.svg";

import TransactionSide from "../../components/Layout/TransactionSide";
import SendMoneyRightBar from "../../components/Layout/SendMoneyRightBar";
import PayRightBar from "../../components/Layout/PayRightBar";
import CheckoutMessage from "../../components/Layout/CheckoutMessage";

const Dashboard = () => {
  const [transactions, setTransaction] = useState([]);
  const [showRightBar, setShowRightBar] = useState(false);
  const [showSendMoney, setShowSendMoney] = useState(false);
  const [showPayPage, setShowPayPage] = useState(false);
  const [showCheckOut, setCheckOut] = useState(false);
  const [transDetail, setTransDetail] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    setTransaction([
      {
        name: {
          avatar: "/avatars/1.png",
          name: "Airplane ticket",
        },
        date: "10 Jul, 2023",
        amount: 2456,
      },
      {
        name: {
          avatar: "/avatars/2.png",
          name: "Coffee Shop",
        },
        date: "10 Jul, 2023",
        amount: 10,
      },
      {
        name: {
          avatar: "/avatars/3.png",
          name: "Marie M.",
        },
        date: "10 Jul, 2023",
        amount: 20,
      },
      {
        name: {
          avatar: "/avatars/4.png",
          name: "Gym",
        },
        date: "10 Jul, 2023",
        amount: 300,
      },
      {
        name: {
          avatar: "/avatars/5.png",
          name: "Gas",
        },
        date: "10 Jul, 2023",
        amount: 39,
      },
      {
        name: {
          avatar: "/avatars/6.png",
          name: "Car Supplies",
        },
        date: "10 Jul, 2023",
        amount: 200,
      },
      {
        name: {
          avatar: "/avatars/7.png",
          name: "John L.",
        },
        date: "10 Jul, 2023",
        amount: 1000,
      },
      {
        name: {
          avatar: "/avatars/1.png",
          name: "Airplane Tickets",
        },
        date: "10 Jul, 2023",
        amount: 2456,
      },
    ]);
  }, []);

  const logout = () => {
    navigate("/signin");
  };

  const viewTransaction = (transaction) => {
    setShowRightBar(true);
    setTransDetail(transactions[transaction]);
  };

  const hideTransaction = () => {
    setShowRightBar(false);
  };

  const sendMoneyBar = () => {
    setShowSendMoney(true);
  };

  const hideSendBar = () => {
    setShowSendMoney(false);
  };

  const goToPay = () => {
    setShowPayPage(true);
  };

  const hidePayPage = () => {
    setShowPayPage(false);
  };

  const sendMoneyCheck = () => {
    setCheckOut(true);
  };

  const hideCheckout = () => {
    setCheckOut(false);
  };

  const clearAll = () => {
    hideCheckout();
    hidePayPage();
    hideSendBar();
  };

  return (
    <>
      <div className="flex flex-row p-[10px] h-[100vh]">
        <Sidebar />
        <div className="flex flex-col w-full float-right pl-[22px] pr-[34px]">
          <div className="flex justify-between pl-3 py-[26px]">
            <span className="text-[32px] font-black">
              Good morning, Amelia!
            </span>
            <img src={avatar} className="peer"></img>
            <div className="hidden peer-hover:flex hover:flex w-[120px] flex-col bg-white drop-shadow-lg absolute right-8 mt-[50px]">
              <a className="px-2 py-3 hover:bg-gray-200" href="#">
                About Us
              </a>
              <a className="px-2 py-3 hover:bg-gray-200" href="#">
                Contact Us
              </a>
              <a
                className="px-2 py-3 hover:bg-gray-200 flex justify-center items-center"
                onClick={() => logout()}
              >
                <ArrowLeftOnRectangleIcon width={30} height={15} />
                Logout
              </a>
            </div>
          </div>
          <div className="grid grid-cols-12 sm:gap-4 lg:gap-5 xl:gap-[22px] overflow-y-auto">
            <div className="col-span-12 lg:col-span-7">
              <div className="text-left pl-3">
                <span className="text-2xl font-black flex items-center">
                  Cards
                  <span className="inline-flex items-center justify-center w-4 h-4 ml-1.5 text-[10px] font-black text-[#1C1B20] bg-[#F0EEF5] rounded">
                    2
                  </span>
                </span>
              </div>
              <div className="grid lg:grid-cols-12 grid-cols-6 my-[22px] gap-[12px] h-[250px] w-min-[800px] pl-3">
                <div className="col-span-6 relative">
                  <img
                    src={card1}
                    alt="Card 1"
                    className="w-full absolute z-10 rounded-[20px] h-full"
                  />
                  <div className=" absolute z-20 bottom-6 left-8 ">
                    <span className="text-base font-bold w-full tracking-[.15em]">
                      **** **** **** 9000
                    </span>
                    <div className="flex justify-between mt-2">
                      <span className="text-[10px] font-medium text-black">
                        Olivia Dennis
                      </span>
                      <span className="text-[10px] font-medium text-black">
                        12/24
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-span-6 relative">
                  <img
                    src={card2}
                    alt="Card 1"
                    className="w-full absolute z-10 rounded-[20px] h-full"
                  />
                  <div className=" absolute z-20 bottom-6 left-8">
                    <div className="text-base font-bold w-full tracking-[.15em]">
                      **** **** **** 9000
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="text-[10px] font-medium text-black">
                        Olivia Dennis
                      </span>
                      <span className="text-[10px] font-medium text-black">
                        12/24
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-left mt-1.5 flex justify-between items-center pl-3">
                <span className="text-2xl font-black">Transactions</span>
                <div className="flex gap-2.5 justify-end">
                  <select
                    id="status"
                    className="border border-[#F0EEF5] rounded-xl opacity-50 text-[#1C1B20] text-sm font-medium w-full p-2.5"
                  >
                    <option>Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                  <select
                    id="types"
                    className="border border-[#F0EEF5] rounded-xl opacity-50 text-[#1C1B20] text-sm font-medium w-full p-2.5"
                  >
                    <option>Types</option>
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                  </select>
                  <div className="border border-gray-300 rounded-xl w-32 flex justify-center items-center text-center">
                    <img src={android} className="h-4 w-4" />
                  </div>
                </div>
              </div>
              <div className="mt-2.5">
                <div className="relative overflow">
                  <table className="w-full text-left font-satoshi">
                    <thead className="">
                      <tr>
                        <th
                          scope="col"
                          className="pl-3 py-2.5 text-gray-500 font-normal text-sm text-left"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="py-2.5 text-gray-500 font-normal text-sm"
                          width="200"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="py-2.5 text-gray-500 font-normal text-sm text-right"
                          width="80"
                        >
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map((item, index) => {
                        return (
                          <tr
                            key={index}
                            className="cursor-pointer hover:bg-gray-200"
                            onClick={() => viewTransaction(index)}
                          >
                            <td className="py-2 cursor-pointer pl-3">
                              <div className="flex items-center">
                                <img
                                  src={item.name.avatar}
                                  width={40}
                                  height={40}
                                  className="rounded-xl"
                                />
                                <span className="font-black ml-4">
                                  {item.name.name}
                                </span>
                              </div>
                            </td>
                            <td className="text-[#1C1B20] opacity-50 text-sm">
                              {item.date}
                            </td>
                            <td className="text-right font-black">
                              ${item.amount}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <div className="text-left w-full">
                <span className="text-2xl font-black">Current Balance</span>
                <div className="my-[22px] text-center w-full">
                  <a className=" w-full block  p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <span className="my-3 text-base tracking-tight text-gray-900 dark:text-white">
                      Actual Balance
                    </span>
                    <p className="text-gray-900 dark:text-white text-3xl font-bold justify-center flex text-center items-center mt-3">
                      <img src={coin} className="h-5 w-5 mr-2 " />
                      $242,456
                    </p>
                    <div className="grid grid-cols-2 mt-6 mb-2">
                      <div className="flex justify-center">
                        <img src={income} alt="Income" />
                        Income: <span className="font-bold">$20,324</span>
                      </div>
                      <div className="flex justify-center">
                        <img src={outcome} alt="Outcome" />
                        Outcome: <span className="font-bold">$16,257</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <a
                      className="btn hover:bg-gray-300  cursor-pointer border border-gray-300 rounded-xl h-14 w-100 flex justify-between px-3 items-center text-center"
                      onClick={sendMoneyBar}
                    >
                      <span>Send Money</span>
                      <img src={send} />
                    </a>
                  </div>
                  <div>
                    <a className="btn hover:bg-gray-300  cursor-pointer border border-gray-300 rounded-xl h-14 w-100 flex justify-between px-3 items-center text-center">
                      <span>Receive Money</span>
                      <img src={receive} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full border border-gray-300 rounded-2xl mt-4 h-[calc(100vh-400px)] flex justify-center items-center flex-col lg:px-24 px-10">
                <CurrencyDollarIcon width={50} height={50} color="gray" />
                <p className="mt-6 font-bold">You don’t have any loans now.</p>
                <p className="mt-3">
                  If you like to take a loan, press the button to know more
                </p>
                <p className="mt-3 btn btn-blue">
                  <button>Take a loan</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`top-0 overflow-y-scroll right-0 w-full lg:w-[500px] bg-white shadow-2xl text-white fixed h-full z-40 ease-in-out duration-300 ${
          showRightBar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <TransactionSide hideTransaction={hideTransaction} data={transDetail} />
      </div>
      <div
        className={`overflow-y-scroll top-0 right-0 w-full lg:w-[500px] bg-white shadow-2xl text-white fixed h-full z-40 ease-in-out duration-300 ${
          showSendMoney ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <SendMoneyRightBar hideSendBar={hideSendBar} goToPay={goToPay} />
      </div>
      <div
        className={`overflow-y-scroll top-0 right-0 w-full lg:w-[500px] bg-white shadow-2xl text-white fixed h-full z-40 ease-in-out duration-300 ${
          showPayPage ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <PayRightBar
          hidePayPage={hidePayPage}
          sendMoneyCheck={sendMoneyCheck}
        />
      </div>
      <div
        className={`overflow-y-scroll top-0 right-0 w-full lg:w-[500px] bg-white shadow-2xl text-white fixed h-full z-40 ease-in-out duration-300 ${
          showCheckOut ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <CheckoutMessage hideCheckout={hideCheckout} clearAll={clearAll} />
      </div>
    </>
  );
};
export default Dashboard;
