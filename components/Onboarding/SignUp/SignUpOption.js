import React from "react";
import Atoms from "../Atoms";
// import OnboardingHeader from "../OnboardingHeader";


const { SignUpOptionCard } = Atoms;
export default function SignUpOption() {
    return(
        <div>
            <div className="w-[75%] mx-auto mt-14 rounded-lg mb-10">
                <div className="w-[50%] mx-auto text-center">
                    <h3 className="font-semibold text-2xl text-sans mb-2 mt-6">What are you signing Up as</h3>
                    <p>Choose your category to precisely define your role and gain access to the relevant features of PWC</p>
                </div>
                <div className=" w-[85%] mx-auto flex gap-4 align-items-center mt-6">
                    {
                        SignUpData.map((data, index) => (
                            <SignUpOptionCard key={index} image={data.image} As={data.As} text={data.text} path={data.path}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

const SignUpData = [
    {
        path: "/auth/signup",
        image: "/eccormerce/Retailer.svg",
        As: "Retailer",
        text: "Sell easily on our platform,Create a storefront, manage inventory, and reach a wide audience. Grow your business with our marketing features. Whether small business or established retailer, we provide the tools for online success"
    },
    {
        path: "/auth/signup",
        image: "/eccormerce/IndividualUser.svg",
        As: "Individual User",
        text: "As an individual user, explore a wide range of products from diverse sellers. Find unique items, compare prices, and shop securely. Get personalized recommendations, join a lively shopping community, and stay informed on trends and deals for a seamless shopping experience."
    },
]