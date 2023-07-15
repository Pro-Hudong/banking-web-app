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
      {
        name: {
          avatar: "/avatars/1.png",
          name: "Airplane Tickets",
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
      <div className="flex flex-col sm:flex-row p-[10px]">
        <Sidebar />
        <div className="flex flex-col w-full float-right sm:pl-[22px] sm:pr-[34px]">
          <div className="flex justify-between pl-3 py-[39px] sm:py-[26px]">
            <span className="text-2xl sm:text-[32px] w-[180px] sm:w-fit break-words font-black">
              Good morning, Amelia!
            </span>
            <img src={avatar} className="peer w-12 h-12 sm:w-16 sm:h-16"></img>
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
          <div className="grid grid-cols-12 sm:gap-4 lg:gap-5 xl:gap-[22px]">
            <div className="col-span-12 lg:col-span-7">
              <div className="text-left pl-3">
                <span className="text-2xl font-black flex items-center">
                  Cards
                  <span className="inline-flex items-center justify-center w-4 h-4 ml-1.5 text-[10px] font-black text-[#1C1B20] bg-[#F0EEF5] rounded">
                    2
                  </span>
                </span>
              </div>
              <div className="relative -z-10 grid sm:grid-cols-12 grid-cols-6 my-[29px] sm:my-[22px] gap-[20px] sm:gap-[12px] h-[380px] sm:h-[180px] w-min-[800px] pl-3">
                <div className="col-span-6 relative">
                  <img
                    src={card1}
                    alt="Card 1"
                    className="w-[305px] rounded-[20px] h-[180px]"
                  />
                  <div className=" absolute bottom-5 left-5 ">
                    <span className="text-base font-bold tracking-[.15em]">
                      **** **** **** 9000
                    </span>
                    <div className="flex justify-between mt-[5px]">
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
                    className="w-[305px] rounded-[20px] h-[180px]"
                  />
                  <div className=" absolute bottom-5 left-5">
                    <div className="text-base font-bold tracking-[.15em]">
                      **** **** **** 9000
                    </div>
                    <div className="flex justify-between mt-[5px]">
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
              <div className="text-left sm:mt-1.5 flex justify-between items-center pl-3">
                <span className="text-2xl font-black">Transactions</span>
                <div className="hidden sm:flex gap-2.5 justify-end">
                  <select
                    id="status"
                    className="border border-[#F0EEF5] rounded-xl text-[#1C1B2080] text-sm font-medium w-full p-2.5"
                  >
                    <option>Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                  <select
                    id="types"
                    className="border border-[#F0EEF5] rounded-xl text-[#1C1B2080] text-sm font-medium w-full p-2.5"
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
              <div className="mt-[20px] sm:mt-2.5 h-[525px] overflow-y-auto">
                <table className="w-full max-w-[375px] sm:max-w-full text-left">
                  <thead className="hidden sm:table-header-group">
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
                          <td className="py-2 cursor-pointer pl-8">
                            <div className="flex items-center">
                              <img
                                src={item.name.avatar}
                                width={40}
                                height={40}
                                className="rounded-xl"
                              />
                              <span className="font-bold sm:font-black ml-3 sm:ml-4">
                                {item.name.name}
                              </span>
                            </div>
                          </td>
                          <td className="hidden sm:table-cell text-[#1C1B2080] text-sm">
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
            <div className="col-span-12 lg:col-span-5 mt-[24px] p-[20px] sm:m-0 sm:p-0">
              <div className="text-left">
                <span className="text-2xl font-black">Current Balance</span>
              </div>
              <div className="mt-[22px] text-center w-full">
                <a className="w-full block px-4 pt-4 pb-[20px] border border-[#F0EEF5] rounded-[20px] h-[180px] flex flex-col justify-between">
                  <span className="font-medium text-[#1C1B2080]">
                    Actual Balance
                  </span>
                  <p className="text-[#1C1B20] text-4xl font-black justify-center flex items-center gap-1.5">
                    <img src={coin} className="h-6 w-6" />
                    $242,456
                  </p>
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <img src={income} alt="Income" />
                      <span className="text-[15px] text-[#1C1B20] font-medium">
                        Income: <span className="font-black">$20,324</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src={outcome} alt="Outcome" />
                      <span className="text-[15px] text-[#1C1B20] font-medium">
                        Outcome: <span className="font-black">$16,257</span>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="mt-[12px]">
                <div className="grid grid-cols-2 gap-2.5">
                  <div
                    className="cursor-pointer border border-gray-300 rounded-[14px] w-100 flex justify-between py-3 pl-4 pr-3 items-center"
                    onClick={sendMoneyBar}
                  >
                    <span className="font-bold">Send Money</span>
                    <img src={send} />
                  </div>
                  <div className="cursor-pointer border border-gray-300 rounded-[14px] w-100 flex justify-between py-3 pl-4 pr-3 items-center">
                    <span className="font-bold">Receive Money</span>
                    <img src={receive} />
                  </div>
                </div>
              </div>
              <div className="w-full border border-[#F0EEF5] rounded-[20px] mt-3 lg:px-[74px] px-10 h-[calc(100vh-460px)] flex justify-center text-center items-center flex-col gap-3">
                <img src="/icons/currency.svg" />
                <div>
                  <p className="font-black">You don’t have any loans now.</p>
                  <p className="mt-2.5 font-medium">
                    If you like to take a loan, press the button to know more
                  </p>
                </div>
                <button className="bg-[#B2EDD3] rounded-[10px] py-2 px-3 text-[15px] font-black">
                  Take a loan
                </button>
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
