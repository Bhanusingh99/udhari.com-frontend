"use client";
import Addcutomer from "@/components/shared/CustomerComponents/Addcutomer";
import {
  ClipboardPlus,
  MoveDownLeft,
  MoveUpRight,
  Search,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CustomerCard from "@/components/shared/CustomerComponents/CustomerCard";
import { getRandomColor } from "@/helper/getRandomColor";
import axios from "axios";
import { sortedTransactions } from "@/helper/filters";
import SelectedUser from "@/components/shared/SelectedUser";

interface Transaction {
  _id: string;
  sortingDate: string;
  customerName: string;
  number: number;
  description: string;
  money: number;
  date: string;
  transactionType: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const DashboardCustome = () => {
  const[checkBlur,setCheckblur] = useState(false)
  const [searchQuery, setSearchQuery] = useState("");
  const [userSelected, setuserSelected] = useState("");
  const [totalCash, setTotalCash] = useState();
  const [totalCredit, setTotalCredit] = useState();
  const [arr, setArr] = useState<{ name: string; time: string; form: string; money: number }[]>([]);
  const [duplicate, setDuplicate] = useState<[]>([]);

 
  const sortedTransactions = (transactions: Transaction[]) => {
    return transactions.sort((a, b) => {
      const dateA = new Date(a.sortingDate);
      const dateB = new Date(b.sortingDate);

      return dateB.getTime() - dateA.getTime();
    });
  };

  const getAllCustomers = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/v1/api/total-customers-transactions"
      );
      console.log(res.data.data.transactions);
      //@ts-ignore
      setArr(sortedTransactions(res.data.data.transactions));
      setTotalCash(res.data.data.totalCash);
      setTotalCredit(res.data.data.totalCredit);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCustomers();
    console.log(arr);
  }, []);

  useEffect(() => {
    const delay = 10;

    const timer = setTimeout(() => {
      const getSearchedCustomer = async () => {
        try {
          // if(searchQuery === ""){
          //   setArr(duplicate)
          // }
          const res = await axios.get(
            `http://localhost:4000/v1/api/search/${encodeURIComponent(
              searchQuery
            )}`
          );
          if (isMounted) {
            // Handle the data, e.g., setResults(res.data)
            setDuplicate(res.data.data);
            console.log("from duplicate",duplicate)
          }
        } catch (error: any) {
          console.error("Error fetching data:", error.message);
          // Handle errors, e.g., set an error state or show a message to the user
        }
      };

      let isMounted = true;
      getSearchedCustomer();

      // Cleanup function to set isMounted to false when the component unmounts
      return () => {
        isMounted = false;
      };
    }, delay);

    // Clear the previous timer on each searchQuery change
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleCustomerCardClick = (customerId: string) => {
    // Set the userSelected state when a CustomerCard is clicked
    setuserSelected(customerId);
    console.log(userSelected);
  };


    const param = usePathname();
  return (
    <div className="w-full h-full bg-green-500 flex">
      <div className="w-[55%] h-full bg-[#222] border-r-[1px] border-[#888]">
        <div className="w-full h-16 mt-12 border-b-[1px] border-[#888] px-6 pt-7 flex justify-around">
          <Link
            href={"/dashboard/customer"}
            className={`font-semibold ${
              param === "/dashboard/customer"
                ? "border-white text-white  border-b-[1px]"
                : " text-[#999]"
            }`}
          >
            Customer <span>7</span>
          </Link>
        </div>

        <div className="w-full h-16 border-b-[1px] border-[#888] flex justify-around items-center">
          <div className="flex justify-center items-end gap-1">
            <p className="text-white">
              Total Cash:{" "}
              <span className="font-semibold text-green-600">{totalCash}</span>
            </p>
            <MoveUpRight color="green" size={20} strokeWidth={2.5} />
          </div>

          <div className="flex justify-center items-center gap-1">
            <p className="text-white">
              Credit Remain:{" "}
              <span className="font-semibold text-red-600">{totalCredit}</span>
            </p>
            <MoveDownLeft color="red" size={20} strokeWidth={2.5} />
          </div>

          <div>
            <Link href={"/dashboard/customer/reports"}>
              <button className="py-2 px-4 border text-[.9rem] text-white rounded-2xl flex gap-1 items-center justify-center">
                <ClipboardPlus size={18} />
                View Reports
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full h-28 border-b-[1px] border-[#888] flex justify-around items-center">
          <div>
            <p className="text-white my-1 text-[.9rem]">Search for customers</p>
            <div className="flex items-center justify-center border-[1px] border-[#777] px-4 rounded-xl">
              <Search color="#999" size={17} />
              <input
                type="search"
                placeholder="name"
                onFocus={() => setCheckblur(true)}
                onBlur={() => setCheckblur(false)}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="py-1.5 px-2 bg-transparent outline-none text-white"
              />
            </div>
          </div>

          {
            checkBlur && 
            <div className="absolute w-[44.75rem] h-[22rem] bg-white top-[18rem]">

            </div>
          }

          <div>
            <p className="text-white my-1 text-[.9rem]">Filter By</p>
            <div>
              <Select>
                <SelectTrigger className="w-[120px] text-white rounded-xl border-[1px] border-[#777]">
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="light">You'll Give</SelectItem>
                  <SelectItem value="dark">You'll Get</SelectItem>
                  <SelectItem value="system">Settled</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <p className="text-white my-1 text-[.9rem]">Sort By</p>
            <div>
              <Select>
                <SelectTrigger className="w-[120px] text-white rounded-xl border-[1px] border-[#777]">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="light">Most Recent</SelectItem>
                  <SelectItem value="dark">Highest Amount</SelectItem>
                  <SelectItem value="system">Lowest Amount</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div
          className="w-full h-[22rem] px-4 py-4 border-b-[1px] 
      border-[#888] overflow-y-scroll"
        >
          {arr.length === 0
            ? ""
            : arr.map((items, index) => {
                const color = getRandomColor();
                return (
                  <CustomerCard
                    key={index}
                    color={color} //@ts-ignore
                    id={items.id} //@ts-ignore
                    name={items.customerName} //@ts-ignore
                    time={items.createdAt} //@ts-ignore
                    form={items.transactionType}
                    money={items.money} //@ts-ignore
                    onClick={() => handleCustomerCardClick(items.id)}
                  />
                );
              })}
        </div>

        <div className="w-full flex justify-center py-2.5">
          <Addcutomer />
        </div>
      </div>

      <div className="w-[45%] h-full bg-[#222]">
        {userSelected ? (
          <SelectedUser value={userSelected} />
        ) : (
          <div className="w-full h-full flex justify-center items-center flex-col">
            <Users size={125} color="white" />
            <p className="text-[1.5rem] text-white">No customer selected</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardCustome;
