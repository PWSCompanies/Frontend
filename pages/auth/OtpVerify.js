import React, { useState } from "react";
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Atoms from "../../components/Onboarding/Atoms";

const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 9999
    },
    content: { 
      width: '50%',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
  
//   Modal.setAppElement('#yourAppElement');

const {Button, VerifySuccesfull} = Atoms;
const { OtpVerifyCard } = Atoms;
export default function OtpVerify() {

  const [modalIsOpen, setIsOpen] = useState(false);
  const [successIsOpen, setSuccessIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  // Function to handle option change for select values
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

    // Functions to open and close modal
    function openModal() {
        setIsOpen(true);
        // setSuccessIsOpen(false);
      }
    function closeModal() {
        setIsOpen(false);
        // setSuccessIsOpen(false);
      }
    function SuccessOpen(){
        setIsOpen(false);
        setSuccessIsOpen(true);
    }
    function SuccessClose(){
        setSuccessIsOpen(false);
        setIsOpen(false);
    }


    return(
        <div>
            <div className="w-[48%] mx-auto">
                <OtpVerifyCard 
                title="Verifivation Code"
                subtext="We have sent a verification code to shallommike@gmail.com"
                belowText={
                    <>
                    <div onClick={openModal} className="mt-4 mb-2">
                        <Button text={'Apply'} />
                    </div>
                        Haven&apos;,t received the verification code yet? Sometimes it takes a moment. You can request a new code in just
                        <span className="text-textgreen fonr-semibold"> 2 seconds</span>.
                    </>
                }
                />
            </div>
            <div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    // contentLabel="Example Modal"
                    ariaHideApp={false}
                    >
                        <div>
                            <h2 className="text-2xl ml-5 text-textcol font-semibold">Select your region and country</h2>
                            <div className="flex gap-12 align-items-center ml-5 items-center">
                                <p>To create an account, Kindly provide us with your region and country</p>
                                <span className="text-[25px] text-right text-textcol font-semibold cursor-pointer mb-4 ml-5 py-1 px-2 bg-[#fafafa] rounded-lg" onClick={closeModal}>&#10005;</span>
                            </div>
                            <div className="w-[80%] ml-5">
                                <div>
                                    <label className="text-textcol font-sans">Region</label><br/>
                                    <select className="w-full border border-bord mt-1 rounded-lg" id="selectOption" value={selectedOption} onChange={handleOptionChange}>
                                        <option value="">West Africa</option>
                                        <option value="option1">Option 1</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                    </select>
                                </div>
                                <div className="mt-3">
                                    <label className="text-textcol font-sans">Country</label><br/>
                                    <select className="w-full border border-bord mt-1 rounded-lg" id="selectOption" value={selectedOption} onChange={handleOptionChange}>
                                        <option value="">Nigeria</option>
                                        <option value="option1">Option 1</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="w-[80%] flex gap-3 justify-end mt-3 ml-5">
                                <div className="w-[70px]">
                                    <Button text={'cancle'} />
                                </div>
                                <div onClick={SuccessOpen} className="w-[70px]">
                                    <Button text={'Apply'} />
                                </div>
                            </div>
                        </div>
                </Modal>
            </div>
            <div>
                <Modal
                    isOpen={successIsOpen}
                    onRequestClose={SuccessClose}
                    style={customStyles}
                    // contentLabel="Example Modal"
                    ariaHideApp={false}
                    >
                        <div>
                            <div className="w-[80%] mx-auto">
                                <div>
                                    <VerifySuccesfull title={'Sign up successful'} text={'You account has been successfully created'}/>
                                </div>
                            </div>
                        </div>
                </Modal>
            </div>
        </div>
    );
}

