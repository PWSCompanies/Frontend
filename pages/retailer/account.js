import Link from "next/link";
import React from "react";
import OnboardingAtoms from "../../components/Onboarding/Atoms";


const { Button } = OnboardingAtoms;
export default function account() {
  return (
    <div>
      <div>
        <div className="bg-white rounded-xl border border-[#E3E5E5] py-4 w-[100%] h-auto]">
          <h3 className="font-bold text-textcol mx-5 my-1">My Orders</h3>
        </div>
        <div className="bg-white rounded-xl border border-[#E3E5E5] py-4 w-[100%] h-auto">
          <div className="border-b border-bottom-[#E3E5E5]">
            <div className="flex  gap-5 mx-10 my-1 pb-0 mb-0  p-0">
              <div className="font-semibold py-4 pb-0 border-b border-transparent transition duration-300 hover:text-textgreen hover:border-green-500">
                <Link href='' >
                  <a>ONGOING/DELIVERED (0)</a>
                </Link>
              </div>
              <div className="font-semibold py-4 border-b border-transparent transition duration-300 hover:text-textgreen hover:border-green-500">
                <Link href='' >
                  <a>CANCELED/RETURNED (0)</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-[70%] h-auto mx-auto my-20">
            <img src="/eccormerce/Artwork.svg" alt="artwork" className="mx-auto"/>
            <div className="text-center">
              <p className="font-semibold">You have placed no orders yet!</p>
              <span className="my-1">All your orders will be saved here for you to access their state anytime.</span>
              <div className="w-[40%] mx-auto my-10">
                <Button text={`Continue Shopping`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
