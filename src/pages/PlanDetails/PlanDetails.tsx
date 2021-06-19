export function PlanDetails() {
    return (
        <>
            <div className="relative bg-gray-200 h-48 overflow-hidden">
                <img
                    src="https://picsum.photos/200/300"
                    className="object-fill w-full"
                />
                <div className=" absolute left-0 top-0 w-full p-4 flex justify-between">
                    <div className="w-6 h-6 bg-orange"></div>
                    <div className="w-6 h-6 bg-orange"></div>
                </div>
            </div>
            <div className="px-4">
                <div className="w-full -mt-5 relative">
                    <div className="w-10 h-10 rounded-full shadow-md bg-light-orange flex justify-center items-center"></div>
                </div>
                <div className="mt-2">
                    <div className="text-xl font-medium">
                        Live yoga with goga Live yoga with goga Live yoga with
                        goga Live
                    </div>
                    <div className="text-xs mt-1 flex justify-between">
                        <span className="opacity-50">gjhgj</span>
                        <span className="text-orange">gjhgjgjgh</span>
                    </div>
                </div>
            </div>
            <hr className="my-6" />
            <div className="px-4">
                <div className="text-xl font-medium mb-3">
                    Live yoga with goga Live yoga
                </div>
                <div className="text-sm opacity-50">
                    Live yoga with goga Live yoga with goga Live yoga with goga
                    Live yoga with goga Live yoga with goga Live yoga with goga
                </div>
                <span className=" font-bold text-xs text-blue">READ MORE</span>
            </div>
            <hr className="my-6" />
            <div className="px-4">
                <div className="text-xl font-medium mb-3">Session Flow</div>
                <div className="ml-10 mb-2">
                    <div className="font-medium">Yoga with goga</div>
                    <span className="opacity-50 text-xs">10 Minutes</span>
                </div>
                <div className="ml-10 mb-2">
                    <div className="font-medium">Yoga with goga</div>
                    <span className="opacity-50 text-xs">10 Minutes</span>
                </div>
                <div className="ml-10 mb-2">
                    <div className="font-medium">Yoga with goga</div>
                    <span className="opacity-50 text-xs">10 Minutes</span>
                </div>
            </div>
            <hr className="my-6" />
            <div className="px-4">
                <div className="text-xl font-medium">Benefits</div>
                <div className="ml-4 mt-2 opacity-50">goga Live yoga</div>
                <div className="ml-4 mt-2 opacity-50">goga Live yoga</div>
                <div className="ml-4 mt-2 opacity-50">goga Live yoga</div>
                <div className="ml-4 mt-2 opacity-50">goga Live yoga</div>
            </div>
            <hr className="my-6" />
            <div className="px-4 pb-8">
                <div className="text-xl font-medium">How this works</div>
                <div className="flex mt-3">
                    <div className="w-5 mt-1 h-5 bg-gray-300 flex-shrink-0 mr-3"></div>
                    <span className="opacity-50">
                        Live yoga with goga Live yoga with goga Live yoga with
                        goga Live
                    </span>
                </div>
                <div className="flex mt-3">
                    <div className="w-5 mt-1 h-5 bg-gray-300 flex-shrink-0 mr-3"></div>
                    <span className="opacity-50">
                        Live yoga with goga Live yoga with goga Live yoga with
                        goga Live
                    </span>
                </div>
                <div className="flex mt-3">
                    <div className="w-5 mt-1 h-5 bg-gray-300 flex-shrink-0 mr-3"></div>
                    <span className="opacity-50">
                        Live yoga with goga Live yoga with goga Live yoga with
                        goga Live
                    </span>
                </div>
            </div>
            <button className="text-base font-medium w-full text-white bg-green text-center py-5">
                Book Now for Rs.199
            </button>
        </>
    );
}
