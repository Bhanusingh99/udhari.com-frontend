import { concatenateFirstLetters } from "@/helper/getNamelater";
import { getRandomColor } from "@/helper/getRandomColor";
import axios from "axios";
import { Settings } from "lucide-react";
import React, { useEffect, useState } from "react";
import CustomerSetting from "./CustomerSetting";

// Define the type for user data
interface UserData {
  _id: string;
  customerName: string;
  number: number;
  description: string;
  money: number;
  transactionType: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface Props {
  value: string;
}

// ... other imports ...

const SelectedUser = ({ value }: Props) => {
  const [userinfo, setUserInfo] = useState<UserData | null>(null); // Use the defined type

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
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, [value]); // Include 'value' as a dependency if it's used inside the effect

  const nameLetter = userinfo
    ? concatenateFirstLetters(userinfo.customerName)
    : "";

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

          <div className="w-full border-b-[1px]
          py-2 px-4 text-white flex flex-col items-start">
                <p>NET BALANCE</p>
                <p className={`${userinfo.transactionType === "CASH" ? "text-green-500" : "text-red-600"}`}>{userinfo.money}</p>
          </div>

          <div className="w-full border-b-2 h-20 mt-16"></div>
          <div className="w-full border-b-2 h-20 mt-16"></div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SelectedUser;
