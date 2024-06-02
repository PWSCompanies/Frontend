import React from "react";
import Atoms from "./Atoms";

const { Button } = Atoms;

export default function OnboardingHeader() {
    return(
        <div className="w-[80%] mx-auto flex justify-between mb-4">
            <div>
                <img src="/logo.svg" alt="" />
            </div>
            <div className="w-24 h-12">
                <a href="/auth/SignUpChoice">
                    <Button text={`Register`}/>
                </a>
            </div>
        </div>
    );
}