import React from "react";
import Plancard from "../../Components/Plancard/Plancard";

function App() {
    return (
        <div className="App">
            <h4 className="pt-6 my-4 text-center font-medium">Its Happening Now</h4>
            <div className="flex w-full overflow-x-auto pb-4">
                <div className="mx-3 text-center">
                    <div className="rounded-full w-14 h-14 border bg-gray-200"></div>
                    <span className="text-xs mt-2">Yoga</span>
                </div>
                <div className="mx-3 text-center">
                    <div className="rounded-full w-14 h-14 border bg-gray-200"></div>
                    <span className="text-xs mt-2">Yoga</span>
                </div>
                <div className="mx-3 text-center">
                    <div className="rounded-full w-14 h-14 border bg-gray-200"></div>
                    <span className="text-xs mt-2">Yoga</span>
                </div>
                <div className="mx-3 text-center">
                    <div className="rounded-full w-14 h-14 border bg-gray-200"></div>
                    <span className="text-xs mt-2">Yoga</span>
                </div>
                <div className="mx-3 text-center">
                    <div className="rounded-full w-14 h-14 border bg-gray-200"></div>
                    <span className="text-xs mt-2">Yoga</span>
                </div>
                <div className="mx-3 text-center">
                    <div className="rounded-full w-14 h-14 border bg-gray-200"></div>
                    <span className="text-xs mt-2">Yoga</span>
                </div>
                <div className="mx-3 text-center">
                    <div className="rounded-full w-14 h-14 border bg-gray-200"></div>
                    <span className="text-xs mt-2">Yoga</span>
                </div>
            </div>
            <div className="mb-8">
                <h4 className="mb-4">Its Happening Now</h4>
                <Plancard />
                <Plancard />
                <Plancard />
                <Plancard />
                <Plancard />
            </div>
        </div>
    );
}

export default App;
