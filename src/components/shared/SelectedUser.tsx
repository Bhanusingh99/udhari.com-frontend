import { concatenateFirstLetters } from "@/helper/getNamelater";
import { getRandomColor } from "@/helper/getRandomColor";
import axios from "axios";
import { Settings } from "lucide-react";
import React, { useEffect, useState } from "react";
import CustomerSetting from "./CustomerSetting";
import SelectedCustomerHistory from "./SelectedCustomerHistory";
import GetcashCustomer from "./GetcashCustomer";
import GetCreditCustomer from "./GetCreditCustomer";

// Define the type for user data
interface UserData {
  _id: string;
  customerName: string;
  number?: number;
  description: string;
  money: number;
  transactionType: string;
  createdAt: string | Date;
  updatedAt?: string;
  __v?: number;
}

interface Props {
  value: string;
}

// ... other imports ...

const SelectedUser = ({ value }: Props) => {
  const [totalCash,setTotalCash] = useState<Number | null>();
  const [totalCredit,setTotalCredit] = useState();
  const [userinfo, setUserInfo] = useState<UserData | null>(null); // Use the defined type
  const [userTransactionHistory,setUserTransactionHistory] = useState<UserData[]>([]);

  const data = {
    id: value,
  };

  const randomColor: string = getRandomColor();

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.post(
          "http://localhost:4000/v1/api/get-user-info",
          data
        );
        const userData: UserData = response.data.user;
        setUserInfo(userData);
    
        // Check if userinfo is not null before accessing properties
        if (userinfo) {
          const userHistory = await axios.post("http://localhost:4000/v1/api/get-selected-customer-history", data);
          setUserTransactionHistory(userHistory.data.data.transactions.totalTrasaction);
          setUserTransactionHistory(userHistory.data.data.transactions);
          setTotalCash(userHistory.data.data.totalCash)
          setTotalCredit(userHistory.data.data.totalCredit)
          console.log(totalCash,totalCredit)
        }
      } catch (error) {
        console.log(error);
      }
    };
    

    getUser();
  }, [value]); // Include 'value' as a dependency if it's used inside the effect

  const nameLetter = userinfo
    ? concatenateFirstLetters(userinfo.customerName)
    : "";

    const totalNetBalance = 0;
  return (
    <div className="w-full h-full mt-16">
      {userinfo ? (
        <div className="w-full h-full">

          <div className="w-full h-20 py-2 px-4 flex justify-between items-center">
            <div className="w-full flex gap-2">
              <div
                className={`w-10 h-10 ${randomColor} rounded-full flex justify-center items-center text-white`}
              >
                <p className="text-[1rem]">{nameLetter}</p>
              </div>

              <div className="text-white">
                <p className="text-[.9rem] font-semibold">
                  {userinfo.customerName}
                </p>
                <p className="text-[.85rem]">{userinfo.number}</p>
              </div>
            </div>

            <div>
              <div>
                <CustomerSetting/>
              </div>
            </div>
          </div>

          <div className="w-full
          py-2 px-4 text-white flex flex-col items-start">
                <p>NET BALANCE</p>
                <p className="text-white text-[.9rem]">{userinfo.customerName}
                  <span>{userinfo.transactionType === "CASH" ? " Gave " : " will Give "}</span>
                  <span className={`text-white`}>
                    {totalCredit}
                  </span>
                </p>
          </div>

          <div className="w-full border-b-[1px] border-[#888] h-20 py-2 mt-0.5 px-4 flex justify-between items-center">
            <div className="text-[#888] text-[.9rem]">ENTREIS</div>
            <div className="flex gap-12 items-center">
            <div className="text-[#888] text-[.9rem]">YOU GOT</div>
            <div className="text-[#888] text-[.9rem]">YOU GAVE</div>
            </div>
          </div>

          <div className="w-full border-b-[1px] border-[#888] h-[22rem] py-2 overflow-y-scroll">
              {userTransactionHistory.map((items)=>(
                  <SelectedCustomerHistory
                  key={items._id}
                  time={items.createdAt}
                  money={items.money}
                  description={items.description}
                  form={items.transactionType}
                  />
              ))}
          </div>

          <div className="w-full py-3 px-4 flex items-center justify-between">
            <GetcashCustomer/>
            <GetCreditCustomer/>
          </div>

        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SelectedUser;
