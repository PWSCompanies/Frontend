import React, { useState } from "react";
import Atoms from "../Atoms";
import Modal from 'react-modal';
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";

const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 9999 
    },
    content: { 
      width: '65%',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

const { InputField, Button, OtpVerifyCard } = Atoms;

export default function ForgotPasswordContainer() {

    const router = useRouter();

    const [modalIsOpen, setIsOpen] = useState(false);
    const [otpValue, setOtpValue] = useState("");
    const [inputValues, setInputValues] = useState('');

    const handleInputChange = ( value) => {
        console.log(value); // Add this line to check the value received
        setInputValues(value);
    };


        // Functions to open and close modal
        const openModal = () => {
            console.log(inputValues);
            setIsOpen(true);
        }
        const closeModal = () => setIsOpen(false);


          const handleOtpChange = (otp) => {
            const fakeotp = '123456'; 
            setOtpValue(otp);
            if (otp.length === 6) {
                if (otp === fakeotp) {
                    console.log('OTP verified successfully');
                    enqueueSnackbar('OTP verified successfully', { variant: 'success' });
                    router.push(`/auth/Newpassword`);
                } else {
                    console.log('Incorrect OTP. Please check and try again');
                    enqueueSnackbar('Incorrect OTP. Please check and try again', { variant: 'error' });
                    enqueueSnackbar('Enter 123456 as OTP', { variant: 'error' });
                }
            }
        };

    return(
        <div>
            <div className="w-[40%] mx-auto mt-16 border border-bord rounded-lg mb-10">
                <img src="/eccormerce/shopping.svg" alt="" className="mx-auto mt-6 mb-4"/>
                <div className="w-[70%] text-center mx-auto">
                    <h3 className="text-2xl text-sans font-sans font-semibold mb-3">Recover your password</h3>
                    <p className="text-textgreen bg-primary bg-opacity-5 rounded-lg mb-2 pt-2 pb-2 px-3">You can request a password reset below. We will send a security code to the email address, please make sure it is correct.</p>
                </div>
                <div className="mt-8">
                    <InputField type={'text'} text={'Email Address'} onChange={(value) => handleInputChange(value)} />
                </div>
                <div onClick={openModal} className="w-[65%] mt-4 mb-2 mx-auto">
                    <Button text={'Send Reset Link'} />
                </div>
                <div className="text-center font-semibold mb-4">
                    <p>Don&apos;t have an account? <span className="text-textgreen">Create a free account</span></p>
                </div>
            </div>
            <div className=" mx-auto">
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    // contentLabel="Example Modal"
                    ariaHideApp={false}
                    >
                        <div className="w-[69%] mx-auto text-center">
                            <OtpVerifyCard 
                            title={'Security code to reset password'} 
                            subtext={'Insert the security code sent to your email in order to proceed with the password reset.'}
                            onChange={handleOtpChange}
                            belowText={
                                <>
                                <div>
                                    <Button text={'Submit'} />
                                </div>
                                <p className="text-textgreen font-semibold">Request a new a code</p>
                                </>
                            } 
                            />
                        </div>
                    </Modal>
            </div>
        </div>
    );
}