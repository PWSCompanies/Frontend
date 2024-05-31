import React from "react";
import Atoms from "../Atoms";
import OnboardingHeader from "../OnboardingHeader";


const { Button, LoginWithCard, InputField } = Atoms;

 function LoginContainer() {
    return (
        <div>
            <div className="w-[40%] mx-auto mt-16 border border-bord rounded-lg mb-10">
                <img src="/eccormerce/shopping.svg" alt="" className="mx-auto mt-6 mb-4"/>
                <div className="text-center text-sans text-textcol">
                    <h3 className="text-2xl font-semibold">Welcome Back</h3>
                    <span>Log Back into you Jumia account</span>
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
                            <InputField key={index} type={item.type} text={item.text} />
                        ))
                    }
                </div>
                <div className="w-[62%] mt-2 mb-4 mx-auto">
                    <a href="" className="items-start font-semibold text-textgreen"> Forgot Password?</a>
                </div>
                <div className="w-[60%] mx-auto mb-2 ">
                    <Button text={`Sign In`} />
                </div>
                <div className="w-[62%] mt-2 mb-4 text-center mx-auto">
                    <a href="" className="items-start text-center">Don't have an account? <span className="text-textgreen">Create a free account</span></a>
                </div>
            </div>
        </div>
    );
}
export default LoginContainer;

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
            text: "Email Address",
            type: "text"
        },
        {
            text: "Password",
            type: "text"
        }
    ]
};
