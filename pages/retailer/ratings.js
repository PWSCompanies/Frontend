import React from "react";

export default function PendingRate () {
    return(
        <div>
            <div className="bg-white rounded-xl border border-[#E3E5E5] py-4 w-[100%] h-[95vh]">
                <div className="border-b">
                    <h3 className="font-bold text-textcol mx-5 my-1 pb-3">Pending Ratings</h3>
                </div>
                <div className="w-[85%] h-auto mx-auto my-20">
                    <img src="/eccormerce/no content backup.svg" alt="artwork" className="mx-auto"/>
                    <div className="text-center">
                        <p className="font-semibold text-gray-900 text-opacity-75">There are no orders pending your feedback at this moment.</p>
                        <span className="my-1 text-gray-900 text-opacity-40">Following the delivery of your products, you will have the chance to rate and review them. Your feedback will be featured on the product page, aiding all of Jumia's users in enhancing their shopping experience!</span>
                        {/* <div className="w-[40%] mx-auto my-10">
                            <Button text={`Continue Shopping`} />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}