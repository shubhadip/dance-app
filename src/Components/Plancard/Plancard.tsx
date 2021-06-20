import React from "react";
import { IPlanProps } from "../../shared/interfaces";

const Plancard = (props: IPlanProps) => {
    return (
        <>
            <div className="mb-4 shadow-lg rounded-lg overflow-hidden">
                <div className="w-full relative bg-gray-200 h-40 overflow-hidden">
                    <img
                        src="https://picsum.photos/200/300"
                        className="object-fill w-full"
                    />
                    <div className=" absolute left-0 top-0 w-full p-3 flex justify-between">
                        <span className="py-1 px-2 font-medium bg-red text-white uppercase text-xs rounded">
                            HOT
                        </span>
                        <span className="py-1 px-2 font-medium bg-orange text-white uppercase text-xs rounded">
                            Enrolled
                        </span>
                    </div>
                    <div className="absolute left-0 bottom-0 m-3">
                        <div className="w-10 h-10 rounded-full bg-light-orange flex justify-center items-center"></div>
                    </div>
                </div>
                <div className="p-4">
                    <div className="text-lg font-medium">{props.name}</div>
                    <div className="flex justify-between font-medium mt-3">
                        <div>
                            <div className="text-xs opacity-60">
                               Next Session
                            </div>
                            <span className="text-sm">
                                50+ Enrolled
                            </span>
                        </div>
                        <div>
                            <div className="text-xs opacity-60 text-right">
                               Fees
                            </div>
                            <span className="text-sm mr-1">
                            ₹ {props.offerPrice}
                            </span>
                            <span className="text-sm">
                            ₹ {props.price}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Plancard;
