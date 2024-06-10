import React, { useState } from "react";
import Atoms from "../../components/Onboarding/Atoms";
import Modal from 'react-modal';

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
// importing Atoms elements
const { Button, InputField, VerifySuccesfull } = Atoms;

export default function Newpassword() {

    const [modalIsOpen, setIsOpen] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');

    const handleInputChange = ( value) => {
        console.log(value); // Add this line to check the value received
        setPassword(value);
        setconfirmPassword(value)
    };

    // Functions to open and close modal
    const openModal = () => {
        setIsOpen(true);
        console.log(password);
        console.log(confirmPassword);
    }
    const closeModal =() => setIsOpen(false);


    return(
        <div>
            <div className="w-[40%] mx-auto mt-16 border border-bord rounded-lg mb-10">
                <img src="/eccormerce/shopping.svg" alt="" className="mx-auto mt-6 mb-4"/>
                <div className="w-[70%] text-center mx-auto">
                    <h3 className="text-2xl text-sans font-sans font-semibold mb-3">Recover your password</h3>
                    <p className="text-textcol">Insert your new password</p>
                </div>
                <div className="mt-8 mb-0">
                    <InputField type={'text'} text={'Password'} onChange={(value) => handleInputChange(value)} />
                </div>
                <div className="mt-0">
                    <InputField type={'text'} text={'Password'} onChange={(value) => handleInputChange(value)} />
                </div>
                <div className="w-[62%] mt-2 mb-4 mx-auto"> 
                    <div className="flex gap-2">
                        <img src="/eccormerce/good.svg" alt="" />
                        <p>8 or more characters</p>
                    </div>
                    <div className="flex gap-2">
                        <img src="/eccormerce/good.svg" alt="" />
                        <p>Has a symbol, number, or upper-case letter</p>
                    </div>
                </div>
                <div onClick={openModal} className="w-[65%] mt-6 mb-8 mx-auto">
                    <Button text={'Change password'} />
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
                        <VerifySuccesfull title={'Reset successful'} text={'You have successfully recovered your password'} />
                    </div>
                </Modal>
            </div>
        </div>
    );
}