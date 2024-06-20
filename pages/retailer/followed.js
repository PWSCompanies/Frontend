import React from "react";
import OnboardingAtoms from "../../components/Onboarding/Atoms";
import Link from "next/link";


const { FollowedCard } = OnboardingAtoms;
export default function Followed () {
    return (
        <div>
            <div className="bg-white rounded-xl border border-[#E3E5E5] py-4 w-[100%] h-[100%]">
                <div className="border-b">
                    <h3 className="font-bold text-textcol mx-5 my-1 pb-3">Followed Sellers</h3>
                </div>
                <div className="w-[95%] border mx-auto mt-4 rounded-lg">
                    <div className="flex justify-between align-center items-center border-b">
                        <div className="flex items-center gap-2 px-2 py-2">
                            <img src="/eccormerce/Frame2609662.svg" alt="" />
                            <div>
                                <h4 className="font-semibold">Allure Stores</h4>
                                <p><span className="font-semibold">93%</span> Successful sales <span className="font-semibold">417</span> Followers  <span className="font-semibold">5</span> Years selling on PWS</p>
                            </div>
                        </div>
                        <Link href={'/'}>
                            <a className="mr-4 text-textgreen font-semibold">SEE PROFILE</a>
                        </Link>
                    </div>
                    <div className="w-[97%] my-3 flex flex-row mx-auto justify-evenly">
                        {
                         followedData.slice(0,3).map((data, index) => (
                             <FollowedCard key={index} img={data.img} txt={data.txt} price={data.price} rate={data.rate} sale={data.sale} pics={data.pics} />
                         )) 
                        }
                    </div>
                </div>
                <div className="w-[95%] border mx-auto mt-6 rounded-lg">
                    <div className="flex justify-between align-center items-center border-b">
                        <div className="flex items-center gap-2 px-2 py-2">
                            <img src="/eccormerce/Frame2609662.svg" alt="" />
                            <div>
                                <h4 className="font-semibold">Allure Stores</h4>
                                <p><span className="font-semibold">93%</span> Successful sales <span className="font-semibold">417</span> Followers  <span className="font-semibold">5</span> Years selling on PWS</p>
                            </div>
                        </div>
                        <Link href={'/'}>
                            <a className="mr-4 text-textgreen font-semibold">SEE PROFILE</a>
                        </Link>
                    </div>
                    <div className="w-[97%] my-3 flex flex-row mx-auto justify-evenly">
                        {
                         followedData.slice(0,3).map((data, index) => (
                             <FollowedCard key={index} img={data.img} txt={data.txt} price={data.price} rate={data.rate} sale={data.sale} pics={data.pics} />
                         )) 
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}


const followedData = [
    {
        img : "/eccormerce/followedFrame.svg",
        txt : "Jumiso All Day Vitamin Brighte..",
        price : '40,000',
        rate : '4.5/16',
        sale : '10 days',
        pics : '4 pcs in store'
    },
    {
        img : "/eccormerce/followedFrame.svg",
        txt : "Jumiso All Day Vitamin Brighte..",
        price : '40,000',
        rate : '4.5/16',
        sale : '10 days',
        pics : '4 pcs in store'
    },
    {
        img : "/eccormerce/followedFrame.svg",
        txt : "Jumiso All Day Vitamin Brighte..",
        price : '40,000',
        rate : '4.5/16',
        sale : '10 days',
        pics : '4 pcs in store'
    },
    {
        img : "/eccormerce/followedFrame.svg",
        txt : "Jumiso All Day Vitamin Brighte..",
        price : '40,000',
        rate : '4.5/16',
        sale : '10 days',
        pics : '4 pcs in store'
    },
    {
        img : "/eccormerce/followedFrame.svg",
        txt : "Jumiso All Day Vitamin Brighte..",
        price : '40,000',
        rate : '4.5/16',
        sale : '10 days',
        pics : '4 pcs in store'
    },
    {
        img : "/eccormerce/followedFrame.svg",
        txt : "Jumiso All Day Vitamin Brighte..",
        price : '40,000',
        rate : '4.5/16',
        sale : '10 days',
        pics : '4 pcs in store'
    },
];
