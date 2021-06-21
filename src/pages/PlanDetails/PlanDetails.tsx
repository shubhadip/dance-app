import leftArrow from "./../../assets/images/arrow.svg";
import yoga from "./../../assets/images/yoga-white.svg";
import shareIcon from "./../../assets/images/share.svg";
import cameraIcon from "./../../assets/images/video.svg";
import mailIcon from "./../../assets/images/mail.svg";
import timeIcon from "./../../assets/images/time.svg";
import sessionImg from "./../../assets/images/session.svg";

export function PlanDetails() {
    return (
        <>
            <div className="pb-14">
                <div className="relative bg-gray-200 h-48 overflow-hidden">
                    <img
                        src="https://picsum.photos/200/300"
                        className="object-fill w-full"
                    />
                    <div className=" absolute left-0 top-0 w-full p-4 flex justify-between">
                        <div className="w-8 flex justify-center items-center rounded-full h-8 bg-white">
                            <img src={leftArrow} alt="back" />
                        </div>
                        <div className="w-8 flex justify-center items-center rounded-full h-8 bg-white">
                            <img src={shareIcon} alt="share" />
                        </div>
                    </div>
                </div>
                <div className="px-4">
                    <div className="w-full -mt-5 relative">
                        <div className="w-10 h-10 rounded-full shadow-md bg-orange flex justify-center items-center">
                            <img src={yoga} alt="yoga" className="w-7" />
                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="text-xl font-bold">
                            Live yoga with goga Live yoga with goga Live yoga
                            with goga Live
                        </div>
                        <div className="text-xs mt-1 flex justify-between">
                            <span className="opacity-50">gjhgj</span>
                            <span className="text-orange">gjhgjgjgh</span>
                        </div>
                    </div>
                </div>
                <hr className="my-6" />
                <div className="px-4">
                    <div className="text-xl font-bold mb-3">
                        Live yoga with goga Live yoga
                    </div>
                    <div className="text-sm opacity-50">
                        Live yoga with goga Live yoga with goga Live yoga with
                        goga Live yoga with goga Live yoga with goga Live yoga
                        with goga
                    </div>
                    <span className=" font-bold text-xs text-blue">
                        READ MORE
                    </span>
                </div>
                <hr className="my-6" />
                <div className="px-4">
                    <div className="flex">
                        <img src={sessionImg} alt="yoga" className="w-6 -mt-2 mr-3" />
                        <div className="text-xl font-bold mb-3">
                            Session Flow
                        </div>
                    </div>
                    <div className="relative ml-2 left-bar-wrapper">
                        <div className="pl-8 pb-2 left-bar relative">
                            <div className="font-medium">Yoga with goga</div>
                            <span className="opacity-50 text-xs">
                                10 Minutes
                            </span>
                        </div>
                        <div className="pl-8 pb-2 left-bar relative">
                            <div className="font-medium">Yoga with goga</div>
                            <span className="opacity-50 text-xs">
                                10 Minutes
                            </span>
                        </div>
                        <div className="pl-8 pb-2 left-bar relative">
                            <div className="font-medium">Yoga with goga</div>
                            <span className="opacity-50 text-xs">
                                10 Minutes
                            </span>
                        </div>
                        <div className="pl-8 pb-2 left-bar left-bar-last relative">
                            <div className="font-medium">Yoga with goga</div>
                            <span className="opacity-50 text-xs">
                                10 Minutes
                            </span>
                        </div>
                    </div>
                </div>
                <hr className="my-6" />
                <div className="px-4 list-disc">
                    <div className="text-xl font-bold">Benefits</div>
                    <ul className="list-outside list-disc">
                        <li className="ml-4 mt-2 opacity-50 text-15">
                            goga Live yoga
                        </li>
                        <li className="ml-4 mt-2 opacity-50 text-15">
                            goga Live yoga
                        </li>
                        <li className="ml-4 mt-2 opacity-50 text-15">
                            goga Live yoga
                        </li>
                        <li className="ml-4 mt-2 opacity-50 text-15">
                            goga Live yoga
                        </li>
                    </ul>
                </div>
                <hr className="my-6" />
                <div className="px-4 pb-8">
                    <div className="text-xl font-bold">How this works</div>
                    <div className="flex mt-3">
                        <div className="w-5 mt-1 flex h-5 flex-shrink-0 mr-3">
                            <img src={cameraIcon} alt="share" />
                        </div>
                        <span className="opacity-50">
                            Live yoga with goga Live yoga with goga Live yoga
                            with goga Live
                        </span>
                    </div>
                    <div className="flex mt-3">
                        <div className="w-5 mt-1 flex h-5 flex-shrink-0 mr-3">
                            <img src={mailIcon} alt="share" />
                        </div>
                        <span className="opacity-50">
                            Live yoga with goga Live yoga with goga Live yoga
                            with goga Live
                        </span>
                    </div>
                    <div className="flex mt-3">
                        <div className="w-5 mt-1 flex h-5 flex-shrink-0 mr-3">
                            <img src={timeIcon} alt="share" />
                        </div>
                        <span className="opacity-50">
                            Live yoga with goga Live yoga with goga Live yoga
                            with goga Live
                        </span>
                    </div>
                </div>
                <button className="text-15 fixed bottom-0 w-full left-0 font-bold text-white bg-green text-center py-5">
                    Book Now for Rs.199
                </button>
            </div>
        </>
    );
}
