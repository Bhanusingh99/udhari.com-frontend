import { IndianRupee } from 'lucide-react';
import React from 'react';

interface Props {
    name: string;
    time: string;
    money: number;
    form: string;
    color: string; // Change "String" to "string"
}


const CustomerCard: React.FC<Props> = ({ name, time, money, form,color }: Props) => {
    function concatenateFirstLetters(fullName: string): string {
        const words = fullName.split(' ');
        const firstLetters = words.map(word => word.charAt(0).toUpperCase());
        return firstLetters.join('');
    }

    const logo = concatenateFirstLetters(name);
    const val = money / 100;

    return (
        <div className="w-full flex justify-between my-5">
            <div className="flex gap-4">
                <div className={`w-10 h-10 rounded-full ${color} flex justify-center items-center`}>
                    <h1 className="text-[1rem] text-white">{logo}</h1>
                </div>

                <div>
                    <h1 className="text-white">{name}</h1>
                    <p className="text-white text-[.9rem]">{time}</p>
                </div>
            </div>

            <div>
                <p className="flex justify-center items-center text-white">
                    <IndianRupee size={16} /> <span>{val}</span>
                </p>
                {
                    form === "GET" ? <p className={`text-green-500 text-[.9rem]`}>
                    YOU'LL GET
                   </p> : <p className={`text-red-600 text-[.9rem]`}>
                    YOU'LL GIVE
                   </p>
                }
                
            </div>
        </div>
    );
};

export default CustomerCard;
