"use client";
import Addcutomer from "@/components/shared/Addcutomer";
import { ClipboardPlus, MoveDownLeft, MoveUpRight, Search, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CustomerCard from "@/components/shared/CustomerCard";
import { getRandomColor } from "@/helper/getRandomColor";

const arr = [
  {
    name: "Bhanu Singh",
    money: 1222,
    id: 1,
    form: "GET",
    time: "9 Hours ago",
  },
  {
    name: "Abhsihek Chaudhry",
    money: 6969,
    id: 2,
    form: "GIVE",
    time: "2 days ago",
  },
  {
    name: "John Doe",
    money: 500,
    id: 3,
    form: "GET",
    time: "1 day ago",
  },
  {
    name: "Alice Johnson",
    money: 1500,
    id: 4,
    form: "GIVE",
    time: "3 hours ago",
  },
  {
    name: "Eva Smith",
    money: 300,
    id: 5,
    form: "GET",
    time: "4 days ago",
  },
  {
    name: "Michael Brown",
    money: 800,
    id: 6,
    form: "GIVE",
    time: "12 hours ago",
  },
  {
    name: "Sara Wilson",
    money: 2500,
    id: 7,
    form: "GET",
    time: "6 days ago",
  },
  {
    name: "Chris Harris",
    money: 1200,
    id: 8,
    form: "GIVE",
    time: "1 week ago",
  },
  {
    name: "Emma Taylor",
    money: 1800,
    id: 9,
    form: "GET",
    time: "2 weeks ago",
  },
  {
    name: "Ryan Miller",
    money: 3000,
    id: 10,
    form: "GIVE",
    time: "5 days ago",
  },
];

console.log(arr);


const DashboardCustome = () => {
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
          <Link
            href={"/dashboard/suppliers"}
            className={`font-semibold ${
              param === "/dashboard/suppliers"
                ? "border-white text-white  border-b-[1px]"
                : "text-[#999]"
            }`}
          >
            Suppliers <span>5</span>
          </Link>
        </div>

        <div className="w-full h-16 border-b-[1px] border-[#888] flex justify-around items-center">
          <div className="flex justify-center items-end gap-1">
            <p className="text-white">
              You'll Give:{" "}
              <span className="font-semibold text-green-600">166</span>
            </p>
            <MoveUpRight color="green" size={20} strokeWidth={2.5} />
          </div>

          <div className="flex justify-center items-center gap-1">
            <p className="text-white">
              You'll Get:{" "}
              <span className="font-semibold text-red-600">200</span>
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
            <Search color="#999" size={17}/>
            <input type="search" placeholder="name or number" className="py-1.5 px-2 bg-transparent outline-none text-white"/>
            </div>
          </div>

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
       {          
       arr.map((items) => {
        const color =  getRandomColor()
       return( <CustomerCard
          key={items.id}
          color={color}
          name={items.name}
          time={items.time}
          form={items.form}
          money={items.money}
          />
       )
       })
       }
        </div>

        <div className="w-full flex justify-center py-2.5">
          <Addcutomer />
        </div>
      </div>

    <div className='w-[45%] h-full bg-[#222]'>
      <div className='w-full h-full flex justify-center items-center flex-col'>
        <Users size={125} color="white"/>
        <p className="text-[1.5rem] text-white">No customer selected</p>
      </div>
    </div>
    </div>
  );
};

export default DashboardCustome;
