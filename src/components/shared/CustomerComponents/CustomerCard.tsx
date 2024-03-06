import { concatenateFirstLetters } from '@/helper/getNamelater';
import { IndianRupee } from 'lucide-react';
import React from 'react';

interface Props {
    id: string; // Add id property
    name: string;
    time: string;
    money: number;
    form: string;
    color: string;
    onClick?: () => void;
}

const CustomerCard: React.FC<Props> = ({ id, name, time, money, form, color, onClick }: Props) => {

    const logo = concatenateFirstLetters(name);
    const val = money;

    return (
        <div className="w-full flex justify-between my-4 cursor-pointer" onClick={onClick}>
            <div className="flex gap-4">
                <div className={`w-10 h-10 rounded-full ${color} flex justify-center items-center`}>
                    <h1 className="text-[1rem] text-white">{logo}</h1>
                </div>

                <div>
                    <h1 className="text-white">{name}</h1>
                    <p className="text-white text-[.9rem]">{time}</p>
                </div>
            </div>

            <div className='flex flex-col justify-end items-end'>
                <p className="flex justify-center items-center text-white">
                    <IndianRupee size={16} /> <span>{val}</span>
                </p>
                {
                    form === "CASH" ? <p className={`text-green-500 text-[.9rem]`}>
                    CASH
                   </p> : <p className={`text-red-600 text-[.9rem]`}>
                    CREDIT
                   </p>
                }
            </div>
        </div>
    );
};

export default CustomerCard;