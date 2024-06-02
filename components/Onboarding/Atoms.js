import React, { useState } from "react";
import { useRouter } from "next/router";
import OtpInput from 'react-otp-input';




// Button Atom
function Button({text, bgColor}) {
    return (
        // Button component
        <div className="w-[100%] py-4 text-center rounded-lg cursor-pointer" style={{ backgroundColor: bgColor || '#00BA34' }}>
            <span className="text-textwhite text-center flex justify-center items-center text-sans font-bold">{text}</span>
        </div>
    );
}

// Login With Card e.g login witb Facebook
function LoginWithCard({image, text}) {
    return (
        // Login With Card component
        <div className="mt-2">
            <div className="w-[60%] mx-auto text-center flex justify-center border border-bord py-2 rounded-full">
                <img src={image} alt={text} className="w-5 h-5 mr-4" />
                <div>{text}</div>
            </div>
        </div>
    );
}

// Input Fields
function InputField({text, type, onChange }) {

    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleInputChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        onChange(newValue);
    };

    const handleInputFocus = () => {
        setIsFocused(true);
    }

    const handleInputBlur = () => {
        setIsFocused(false);
    }
    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    const inputType = type === "password" && !showPassword ? "password" : "text";

    const labelClass = isFocused ? "top-0 left-16 transform -translate-x-2/4 -translate-y-1/3 text-xs text-textgreen pointer-events-none z-[1111]" : "top-5 left-0 text-xs text-textcol pointer-events-none";

    return (
        <div className="w-[63%] mx-auto">
            <div className="relative mt-5">
                <input 
                    type={inputType}  
                    value={inputValue}
                    onBlur={handleInputBlur}
                    onFocus={handleInputFocus}
                    onChange={handleInputChange}
                    className="w-full px-5 pb-4 outline-none text-2xl leading-20 border border-bord rounded-lg transition-all duration-100 ease z-[1111] focus:outline-none focus:ring-2 focus:ring-textgreen focus:border-transparent valid:border-bord"
                />
                {!inputValue && ( // Render label only if text is false
                    <label className={`absolute px-5 pb-4 transition-all duration-000 ease bg-white ${isFocused ? "top-0 left-16 transform -translate-x-2/4 -translate-y-1/3 text-xs text-textgreen pointer-events-none z-[1111]" : "top-5 left-0 text-xs text-textcol pointer-events-none"}`}>
                        {`${text}${isFocused ? '*' : ''}`}
                    </label>
                )}
                 {type === "password" && (
                    <div className="absolute top-0 right-0 h-full flex items-center pr-3 cursor-pointer">
                        {showPassword ? <p onClick={togglePasswordVisibility} >hide</p> : <p onClick={togglePasswordVisibility} >show</p>}
                    </div>
                )}
            </div>
        </div>
    );
}

// Sign Up Option Card
function SignUpOptionCard({image, As, text, path}) {
    const router = useRouter();

    const [showButton, setShowButton] = useState(false);

    const handleCheckboxChange = (e) => {
        setShowButton(e.target.checked);
    };

    return(
        <div style={{ position: 'relative', marginBottom: '2.5rem' }}>
            <div style={{ transition: 'background-color 0.3s ease-in-out', backgroundColor: showButton ? '#f0fff4' : 'transparent', paddingBottom: showButton ? '20px' : '0',}} className="w-[100%] border border-bord rounded-lg mb-4">
                <div className="w-5 m-5 ml-auto">
                    <input onChange={handleCheckboxChange} type="checkbox" className="rounded-lg" />
                </div>
                <div className="text-center">
                    <img src={image} alt={As} className="mx-auto mb-2" />
                    <span className="font-bold text-textcol text-[20px] p-2">{As}</span>
                    <div className="px-2 py-3">
                        <p className="">{text}</p>
                    </div>
                </div>
            </div>
            {
                showButton && (
                    <div onClick={()=>{router.push(`${path}`)}} style={{ position: 'absolute', top: '101%', left: '80%', transform: 'translate(-50%, -50%)' }} className="w-[30%] m-3 ml-auto">
                        <Button text={'Proceed'} bgColor={'#313133'} />
                    </div>
                )
            }
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
