import React, { useState } from "react";
import { useRouter } from "next/router";
import OtpInput from 'react-otp-input';




// Button Atom
function Button({text,}) {
    return (
        // Button component JSX
        <div className="w-[100%] py-4 text-center bg-primary rounded-lg cursor-pointer">
            <span className="text-textwhite text-center flex justify-center items-center text-sans font-bold">{text}</span>
        </div>
    );
}

// Login With Card e.g login witb Facebook
function LoginWithCard({image, text}) {
    return (
        // SomethingElse component JSX
        <div className="mt-2">
            <div className="w-[60%] mx-auto text-center flex justify-center border border-bord py-2 rounded-full">
                <img src={image} alt={text} className="w-5 h-5 mr-4" />
                <div>{text}</div>
            </div>
        </div>
    );
}

// Input Fields
function InputField({text, type}) {

    const [isFocused, setIsFocused] = useState(false);

    const handleInputFocus = () => {
        setIsFocused(true);
    }

    const handleInputBlur = () => {
        setIsFocused(false);
    }

    const labelClass = isFocused ? "top-0 left-16 transform -translate-x-2/4 -translate-y-1/3 text-xs text-textgreen pointer-events-none z-[1111]" : "top-5 left-0 text-xs text-textcol pointer-events-none";

    return (
        <div className="w-[63%] mx-auto">
            <div className="relative mt-5">
                <input 
                    type={type} 
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    className="w-full px-5 pb-4 outline-none text-2xl leading-20 border border-bord rounded-lg transition-all duration-100 ease z-[1111] focus:outline-none focus:ring-2 focus:ring-textgreen focus:border-transparent valid:border-bord"
                />
                <label 
                    className={`absolute px-5 pb-4 transition-all duration-000 ease bg-white ${labelClass}`}
                >
                    {`${text}${isFocused ? '*' : ''}`}
                </label>
            </div>
        </div>
    );
}

function SignUpOptionCard({image, As, text, path}) {
    const router = useRouter();

    const handleClick = () => {
        router.push(`${path}`);
        console.log('checking button if working');
    };

    return(
        <div>
            <div className="w-[100%] border border-bord rounded-lg">
                <div className="w-5 m-5 ml-auto">
                    <input type="checkbox" className="rounded-lg" />
                </div>
                <div className="text-center">
                    <img src={image} alt={As} className="mx-auto mb-2" />
                    <span className="font-bold text-textcol text-[20px] p-2">{As}</span>
                    <p className="m-3">{text}</p>
                </div>
            </div>
            <div onClick={handleClick} className="w-[30%] m-3 ml-auto">
                <Button text={'Proceed'} />
            </div>
        </div>
    );
}

function OtpVerifyCard({title, subtext, belowText }) {
    const [otp, setOtp] = useState('');

    const inputStyle = {
        width: '60px',
        height: '60px',
        margin: '10px auto',
        fontSize: '20px',
        textAlign: 'center',
        border: '1px solid #ccc',
        borderRadius: '5px',
        outline: 'none',
    };

    return(
        <div>
            <div className="w-full mx-auto border mb-4 rounded-lg">
                <img src="/eccormerce/shopping.svg" alt="" className="mx-auto mt-6 mb-4"/>
                <div className="text-center w-[85%] mx-auto mb-3">
                    <h3 className="text-2xl text-textcol font-bold text-sans mt-4 mb-1">{title}</h3>
                    <p className="text-[18px]">{subtext}</p>
                </div>
                <div className="w-[80%] mx-auto">
                    <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    inputStyle={inputStyle}
                    // renderSeparator={<span>-</span>}
                    renderInput={(props) => <input {...props} />}
                    />
                </div>
                <div className="w-[60%] mx-auto text-center mt-4 mb-2">
                    <p>{belowText}</p>
                </div>
            </div>
        </div>
    );
}

function VerifySuccesfull({title, text}) {
    
    return(
        <div>
            <div className="my-5">
                <img src="/eccormerce/success.svg" alt="Success" className="mx-auto" />
                <div className="text-center text-textcol font-sans">
                    <h3 className="font-semibold text-2xl my-2">{title}</h3>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
}

export default { Button, LoginWithCard, InputField, SignUpOptionCard, OtpVerifyCard, VerifySuccesfull };
