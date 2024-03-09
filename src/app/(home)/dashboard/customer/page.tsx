"use client";
import Addcutomer from "@/components/shared/CustomerComponents/Addcutomer";
import {
  ChevronDown,
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
import axios from "axios";
import { sortedTransactions } from "@/helper/filters";
import SelectedUser from "@/components/shared/SelectedUser";
import {
  filterAndSortTransactions,
  filterAndSortCreditTransactions,
  filterTransactionsByType,
} from "@/helper/filterBasedOnTime";

interface Transaction {
  customerName: string;
  id: string;
  createdAt: string;
  sortingDate: string;
  money: number;
  description: string;
  transactionType: string;
}


interface DropdownProps {
  onSelect: (selectedItem: string) => void;
}

const DashboardCustome = () => {
  const [TotalTransactions, setTotalTransactions] = useState<Transaction[]>([]);

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [oldestTotalTransactions, setOldestTotalTransactions] = useState<Transaction[]>([]);
  const [filteredCashTypeTransactions, setFilteredCashTypeTransactions] =useState<Transaction[]>([]);
  const [filteredCreditTypeTransactions, setFilteredCreditTypeTransactions] =useState<Transaction[]>([]);
  const [filteredMostCredit, setFilteredMostCredit] = useState<Transaction[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [userSelected, setuserSelected] = useState("");
  const [totalCash, setTotalCash] = useState();
  const [totalCredit, setTotalCredit] = useState();

  const [selectedFilter, setSelectedFilter] = useState<string>("Most recent");
  const [selectedSort, setSelectedSort] = useState<string>("");


  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const options = ["Most recent", "oldest","You'll Get", "You Got","Highest Amount"];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setSelectedFilter(option)
    setIsOpen(false); // Collapse the dropdown after selecting an option
  };

  const getAllCustomers = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/v1/api/total-customers-transactions"
      );

      const array = res.data.data.transactions;
      console.log(array)
      setOldestTotalTransactions(array);
      setTransactions(filterAndSortTransactions(array));
      setFilteredMostCredit(filterAndSortCreditTransactions(array));
      setFilteredCashTypeTransactions(filterTransactionsByType(array, "CASH"));
      setFilteredCreditTypeTransactions(
      filterTransactionsByType(array, "CREDIT")
      );

      setTotalCash(res.data.data.totalCash);
      setTotalCredit(res.data.data.totalCredit);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getAllCustomers();
  }, []);

  useEffect(() => {
    // Function to update TotalTransactions based on selectedFilter and selectedSort
    const updateTotalTransactions = () => {
      if (selectedFilter === "Most recent") {
        setTotalTransactions(transactions);
      } else if (selectedFilter === "You'll Get") {
        setTotalTransactions(filteredCreditTypeTransactions);
      } else if (selectedFilter === "You Got") {
        setTotalTransactions(filteredCashTypeTransactions);
      }else if (selectedFilter === "Highest Amount") {
        setTotalTransactions(filteredMostCredit);
      }else if (selectedFilter === "oldest") {
        setTotalTransactions(oldestTotalTransactions);
      }
    };

    updateTotalTransactions();
  }, [transactions,selectedFilter, selectedSort, oldestTotalTransactions, filteredCreditTypeTransactions]);

  useEffect(() => {
    const delay = 10;

    const timer = setTimeout(() => {
      const getSearchedCustomer = async () => {
        try {
          const res = await axios.get(`http://localhost:4000/v1/api/search/${searchQuery}`);
            setTotalTransactions(res.data.data)
        } catch (error: any) {
          console.error("Error fetching data:", error.message);
          // Handle errors, e.g., set an error state or show a message to the user
        }
      };
      getSearchedCustomer();
    }, delay);

    // Clear the previous timer on each searchQuery change
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleCustomerCardClick = (customerId: string) => {
    setuserSelected(customerId);
  };


  const checkEmpty = () =>{
    if(searchQuery === ""){
      setTotalTransactions(transactions)
    }
  }

  const param = usePathname();
  return (
    <div className="w-full h-full bg-green-500 flex">
      <div className="w-[55%] h-full bg-[#222] border-r-[1px] border-[#888]">

        <div className="w-full h-16 border-b-[1px] border-[#888] flex justify-around items-center mt-16">
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

        <div className="py-4 border-b-[1px] border-[#888] flex justify-between items-center px-4
        max-md:flex-col">
          <div className="">
            <p className="text-white my-1 text-[1rem]">Search for customers</p>
            <div className="flex items-center justify-center border-[1px] border-[#777] px-4">
              <Search color="#999" size={17} />
              <input
                type="search"
                placeholder="name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="py-2 px-2 bg-transparent outline-none text-white max-md:w-full"
              />
            </div>
          </div>

        <div>
          <p className="text-white mb-1">Filter</p>
          <div className="dropdown py-2 px-4 text-white border border-[#999] w-[220px] max-md:w-full">
            <button 
            className="flex gap-2 justify-between w-full items-center"
            onClick={toggleMenu}>{selectedOption === "" ? "Filter" : selectedOption}
            <ChevronDown size={20}/>
            </button>
            {isOpen && (
              <ul className="menu absolute bg-white text-black mt-2 w-[220px] py-2 px-1 ml-[-1rem]">
                {options.map((option) => (
                  <li key={option} onClick={() => handleOptionClick(option)} className="cursor-pointer my-1">
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        </div>

        <div
          className="w-full h-[25.5rem] px-4 py-4 border-b-[1px] 
      border-[#888] overflow-y-scroll"
        >
          {TotalTransactions.length === 0
            ? ""
            : TotalTransactions.map((items, index) => {
                return (
                  <CustomerCard
                    key={index}
                    id={items.id} //@ts-ignore
                    name={items.customerName} //@ts-ignore
                    time={items.createdAt} //@ts-ignore
                    form={items.transactionType}
                    money={items.money} //@ts-ignore
                    bgColor={items.bgColor}
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
