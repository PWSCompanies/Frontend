import React, { useState } from "react";
import Atoms from "../Atoms";
import { useRouter } from "next/router";

// importing atoms elements
const { Button, LoginWithCard, InputField, OtpVerify } = Atoms;

export default function SignUpContainer() {

    const router = useRouter();

    const handleClick = () => {
        router.push('/auth/OtpVerify');
        // console.log('check button if it is working');
    };

    return (
        <div>
            <div className="w-[40%] mx-auto mt-16 border border-bord rounded-lg mb-10">
                <img src="/eccormerce/shopping.svg" alt="" className="mx-auto mt-6 mb-4"/>
                <div className="text-center text-sans text-textcol">
                    <h3 className="text-2xl font-semibold">Welcome To PWC</h3>
                    <span>Lets get started by creating your account</span>
                </div>
                <div className="mt-5 mb-4">
                    {
                        LoginOptions.options.map((login, indx) => (
                            <LoginWithCard key={indx} text={login.text} image={login.image}/>
                        ))
                    }
                </div>
                <div className="w-[62%] flex gap-3 items-center mx-auto mb-2">
                    <span className=" w-40 h-0 border border-bord"></span>
                    <p className="m-0 p-0">Or</p>
                    <span className=" w-40 h-0 border border-bord"></span>
                </div>
                <div className="input field">
                    {
                        LoginOptions.Input.map((item, index) => (
                            <React.Fragment key={index}>
                                <InputField type={item.type} text={item.text} />
                                {index === LoginOptions.Input.length - 2 && 
                                <div className="w-[62%] mt-2 mb-4 mx-auto"> 
                                <div className="flex gap-2">
                                    <img src="/eccormerce/good.svg" alt="" />
                                    <p>8 or more characters</p>
                                </div>
                                <div className="flex gap-2">
                                    <img src="/eccormerce/good.svg" alt="" />
                                    <p>Has a symbol, number, or upper-case letter</p>
                                </div>
                                </div>}
                            </React.Fragment>
                        ))
                    }
                </div>
                <div className="w-[62%] mt-2 mb-4 mx-auto">
                    <a href="" className="items-start font-semibold"> By clicking the 'Create Account' button below, you agree to the <span className="text-textgreen">PWC Terms of Use</span> and <span className="text-textgreen">Privacy Policy.</span></a>
                </div>
                <div onClick={handleClick} className="w-[60%] mx-auto mb-2 ">
                    <Button text={`Sign In`} />
                </div>
                <div className="w-[62%] mt-2 mb-4 text-center mx-auto">
                    <a href="" className="items-start text-center">Already have an account? <span className="text-textgreen">Login</span></a>
                </div>
            </div>
        </div>
    );
}

const LoginOptions = {
    options: [
        {
            image: "/eccormerce/facebook.svg",
            text: "Login With Facebook"
        },
        {
            image: "/eccormerce/goggle.svg",
            text: "Login With Google"
        },
        {
            image: "/eccormerce/apple.svg",
            text: "Login With Apple"
        }
    ],
    Input: [
        {
            text: "First Name",
            type: "text"
        },
        {
            text: "Last Name",
            type: "text"
        },
        {
            text: "Email Address",
            type: "text"
        },
        {
            text: "Phone No",
            type: "text"
        },
        {
            text: "Nigeria",
            type: "text"
        },
        {
            text: "Password",
            type: "text"
        },
        {
            text: "Password",
            type: "text"
        }
    ]
};