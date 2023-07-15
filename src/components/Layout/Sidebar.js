import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Drawer,
} from "@material-tailwind/react";
import {
  ShoppingBagIcon,
  BuildingLibraryIcon,
  CurrencyDollarIcon,
  CreditCardIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/solid";
import { useState, useEffect, useContext } from "react";
import { SidebarContext } from "../../contexts/SidebarContext";

import transaction from "../../assets/images/transaction.svg";

export default function Navbar() {
  const [sidebarToggle, toggleSidebar] = useState(false);
  const closeSidebar = () => toggleSidebar();
  const [sideList, setSideList] = useState([]);

  useEffect(() => {
    setSideList([
      {
        name: "Dashboard",
        icon: (
          <>
            <path d="M12.7 16.8801H13.4C14.55 16.8801 15.49 15.9401 15.49 14.7901V14.0901H12.7V16.8801Z" />
            <path d="M8.51001 14.7901C8.51001 15.9401 9.45001 16.8801 10.6 16.8801H11.3V14.0901H8.51001V14.7901Z" />
            <path d="M8.51001 11.9999V12.6999H11.3V9.90991H10.6C9.45001 9.90991 8.51001 10.8499 8.51001 11.9999Z" />
            <path d="M20.03 6.81994L14.28 2.78994C12.71 1.68994 10.31 1.74994 8.8 2.91994L3.79 6.82994C2.78 7.60994 2 9.20994 2 10.4699V17.3699C2 19.9199 4.07 21.9999 6.61 21.9999H17.38C19.92 21.9999 21.99 19.9299 21.99 17.3799V10.5999C22 9.24994 21.13 7.58994 20.03 6.81994ZM16.88 14.7899C16.88 16.7099 15.31 18.2799 13.39 18.2799H10.6C8.68 18.2799 7.11 16.7199 7.11 14.7899V11.9999C7.11 10.0799 8.68 8.50994 10.6 8.50994H13.39C15.31 8.50994 16.88 10.0699 16.88 11.9999V14.7899Z" />
            <path d="M13.4 9.90991H12.7V12.6999H15.49V11.9999C15.49 10.8499 14.55 9.90991 13.4 9.90991Z" />
          </>
        ),
        active: true,
      },
      {
        name: "Transactions",
        icon: (
          <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM9.11 16.9C9.11 17.18 8.89 17.4 8.61 17.4H5.82C5.54 17.4 5.32 17.18 5.32 16.9V12.28C5.32 11.65 5.83 11.14 6.46 11.14H8.61C8.89 11.14 9.11 11.36 9.11 11.64V16.9ZM13.89 16.9C13.89 17.18 13.67 17.4 13.39 17.4H10.6C10.32 17.4 10.1 17.18 10.1 16.9V7.74C10.1 7.11 10.61 6.6 11.24 6.6H12.76C13.39 6.6 13.9 7.11 13.9 7.74V16.9H13.89ZM18.68 16.9C18.68 17.18 18.46 17.4 18.18 17.4H15.39C15.11 17.4 14.89 17.18 14.89 16.9V13.35C14.89 13.07 15.11 12.85 15.39 12.85H17.54C18.17 12.85 18.68 13.36 18.68 13.99V16.9Z" />
        ),
        active: false,
      },
      {
        name: "Loans",
        icon: (
          <>
            <path d="M11.2499 8.08008V10.9401L10.2399 10.5901C9.72992 10.4101 9.41992 10.2401 9.41992 9.37008C9.41992 8.66008 9.94992 8.08008 10.5999 8.08008H11.2499Z" />
            <path d="M14.58 14.6301C14.58 15.3401 14.05 15.9201 13.4 15.9201H12.75V13.0601L13.76 13.4101C14.27 13.5901 14.58 13.7601 14.58 14.6301Z" />
            <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 19.83 4.17 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V7.81C22 4.17 19.83 2 16.19 2ZM14.26 12C15.04 12.27 16.08 12.84 16.08 14.63C16.08 16.17 14.88 17.42 13.4 17.42H12.75V18C12.75 18.41 12.41 18.75 12 18.75C11.59 18.75 11.25 18.41 11.25 18V17.42H10.89C9.25 17.42 7.92 16.03 7.92 14.33C7.92 13.92 8.25 13.58 8.67 13.58C9.08 13.58 9.42 13.92 9.42 14.33C9.42 15.21 10.08 15.92 10.89 15.92H11.25V12.53L9.74 12C8.96 11.73 7.92 11.16 7.92 9.37C7.92 7.83 9.12 6.58 10.6 6.58H11.25V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V6.58H13.11C14.75 6.58 16.08 7.97 16.08 9.67C16.08 10.08 15.75 10.42 15.33 10.42C14.92 10.42 14.58 10.08 14.58 9.67C14.58 8.79 13.92 8.08 13.11 8.08H12.75V11.47L14.26 12Z" />
          </>
        ),
        active: false,
      },
      {
        name: "Cards",
        icon: (
          <>
            <path d="M22 7.5499C22 8.2099 21.46 8.7499 20.8 8.7499H3.2C2.54 8.7499 2 8.2099 2 7.5499V7.5399C2 5.2499 3.85 3.3999 6.14 3.3999H17.85C20.14 3.3999 22 5.2599 22 7.5499Z" />
            <path d="M2 11.45V16.46C2 18.75 3.85 20.6 6.14 20.6H17.85C20.14 20.6 22 18.74 22 16.45V11.45C22 10.79 21.46 10.25 20.8 10.25H3.2C2.54 10.25 2 10.79 2 11.45ZM8 17.25H6C5.59 17.25 5.25 16.91 5.25 16.5C5.25 16.09 5.59 15.75 6 15.75H8C8.41 15.75 8.75 16.09 8.75 16.5C8.75 16.91 8.41 17.25 8 17.25ZM14.5 17.25H10.5C10.09 17.25 9.75 16.91 9.75 16.5C9.75 16.09 10.09 15.75 10.5 15.75H14.5C14.91 15.75 15.25 16.09 15.25 16.5C15.25 16.91 14.91 17.25 14.5 17.25Z" />
          </>
        ),
        active: false,
      },
      {
        name: "Supports",
        icon: (
          <path d="M17 2.42993H7C4 2.42993 2 4.42993 2 7.42993V13.4299C2 16.4299 4 18.4299 7 18.4299V20.5599C7 21.3599 7.89 21.8399 8.55 21.3899L13 18.4299H17C20 18.4299 22 16.4299 22 13.4299V7.42993C22 4.42993 20 2.42993 17 2.42993ZM12 14.5999C11.58 14.5999 11.25 14.2599 11.25 13.8499C11.25 13.4399 11.58 13.0999 12 13.0999C12.42 13.0999 12.75 13.4399 12.75 13.8499C12.75 14.2599 12.42 14.5999 12 14.5999ZM13.26 10.4499C12.87 10.7099 12.75 10.8799 12.75 11.1599V11.3699C12.75 11.7799 12.41 12.1199 12 12.1199C11.59 12.1199 11.25 11.7799 11.25 11.3699V11.1599C11.25 9.99993 12.1 9.42993 12.42 9.20993C12.79 8.95993 12.91 8.78993 12.91 8.52993C12.91 8.02993 12.5 7.61993 12 7.61993C11.5 7.61993 11.09 8.02993 11.09 8.52993C11.09 8.93993 10.75 9.27993 10.34 9.27993C9.93 9.27993 9.59 8.93993 9.59 8.52993C9.59 7.19993 10.67 6.11993 12 6.11993C13.33 6.11993 14.41 7.19993 14.41 8.52993C14.41 9.66993 13.57 10.2399 13.26 10.4499Z" />
        ),
        active: false,
      },
    ]);
  }, []);
  const setActive = (clickid) => {
    const lists = [...sideList];
    const newLists = [];
    lists.map((item, index) => {
      const newList = { ...item, active: index == clickid ? true : false };
      newLists.push(newList);
    });
    setSideList([...newLists]);
  };
  return (
    <>
      <Card className="hidden sm:block rounded-[20px] bg-[#1C1B20] w-full max-w-[270px] p-[14px]">
        <div className="mx-2.5 mt-3 mb-11">
          <span className="text-left text-white font-black text-2xl">
            Banking <span className="text-[#B2EDD3]">App</span>
          </span>
        </div>
        <List className="p-0 gap-3.5">
          {sideList.map((item, index) => {
            return (
              <ListItem
                key={index}
                className={`group rounded-[10px] p-[12px] align-center hover:opacity-100 ${
                  item.active ? "active" : "text-white opacity-50"
                }`}
                onClick={() => setActive(index)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className={`mr-2 group-hover:fill-[#B2EDD3] ${
                    item.active ? "fill-[#1C1B20]" : "fill-white"
                  }`}
                >
                  {item.icon}
                </svg>
                <span className="font-bold text-[15px] leading-none">
                  {item.name}
                </span>
              </ListItem>
            );
          })}
        </List>
      </Card>
      <div className="flex sm:hidden justify-between items-center rounded-[20px] bg-[#1C1B20] p-6">
        <span className="text-left text-white font-black text-xl sm:text-2xl">
          Banking <span className="text-[#B2EDD3]">App</span>
        </span>
        <button onClick={toggleSidebar}>
          <img
            src="/icons/menu.svg"
            className="border border-white rounded-[14px] p-[12px]"
          />
        </button>
      </div>
      <Drawer placement="right" open={sidebarToggle} onClose={closeSidebar}>
        <Card className="bg-[#1C1B20] h-full p-[14px] mt-[10px] rounded-none">
          <div className="mx-2.5 mt-3 mb-11">
            <span className="text-left text-white font-black text-2xl">
              Banking <span className="text-[#B2EDD3]">App</span>
            </span>
          </div>
          <List className="p-0 gap-3.5">
            {sideList.map((item, index) => {
              return (
                <ListItem
                  key={index}
                  className={`group rounded-[10px] p-[12px] align-center hover:opacity-100 ${
                    item.active ? "active" : "text-white opacity-50"
                  }`}
                  onClick={() => setActive(index)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className={`mr-2 group-hover:fill-[#B2EDD3] ${
                      item.active ? "fill-[#1C1B20]" : "fill-white"
                    }`}
                  >
                    {item.icon}
                  </svg>
                  <span className="font-bold text-[15px] leading-none">
                    {item.name}
                  </span>
                </ListItem>
              );
            })}
          </List>
        </Card>
      </Drawer>
    </>
  );
}
