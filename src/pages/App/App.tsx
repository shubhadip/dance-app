import React, { useState, useEffect } from "react";
import format from "date-fns/format";
import Plancard from "../../Components/Plancard/Plancard";
import { yyyyMMdd } from "../../utils/constants";
import leftArrow from "./../../assets/images/arrow.svg";
import noResult from "./../../assets/images/no-result.svg";
import topArrow from "./../../assets/images/top-arrow.svg";
import {
    getAllCategories,
    getUniqueDateOptions,
    getFilteredProducts,
    getSlotsForDropDown,
    getSortOptions,
} from "../../utils/productUtils";
import DropDown from "../../Components/DropDown/DropDown";
import { ICategory, IPlanProps } from "../../shared/interfaces";
import { Category } from "../../Components/Category/Category";
import { addDays } from "date-fns";

export const App = () => {
    const slotOptions = getSlotsForDropDown();
    const sortOptions = getSortOptions();
    const activeHour = (new Date()).getHours();
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [selectedDate, setDate] = useState<any>({
        value: format(activeHour >=20 ? addDays(new Date(), 1) : new Date(), yyyyMMdd),
        label: format(activeHour >=20 ? addDays(new Date(), 1) : new Date(), yyyyMMdd), 
    });
    const [selectedSlot, setSlot] = useState(null);
    const [selectedSort, setSort] = useState(null);
    const [selectedCategory, setCategory] = useState<ICategory | null>(null);

    useEffect(() => {
        localStorage.removeItem("selectedBatch");
        fetch("./products.json")
            .then((data) => data.json())
            .then((response) => {
                setCategories(getAllCategories(response));
                setProducts(response);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        const temp = getUniqueDateOptions(products);
        setDateOptions(temp);
        const data = getFilteredProducts(
            products,
            selectedSlot,
            selectedDate,
            selectedCategory,
            selectedSort
        );
        setFilteredProducts(data);
    }, [selectedSlot, selectedDate, selectedCategory, products, selectedSort]);

    const handleDateChange = (data: any) => {
        setDate(data);
    };

    const [dateOptions, setDateOptions]: any = useState([
        {
            value: format(new Date(), yyyyMMdd),
            label: format(new Date(), yyyyMMdd),
        },
    ]);

    const [showScroll, setShowScroll] = useState(false);
    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false);
        }
    };
    window.addEventListener("scroll", checkScrollTop);
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleSlotChange = (data: any) => {
        setSlot(data);
    };

    const handleSortChange = (data: any) => {
        setSort(data);
    };

    const handleCategoryChange = (data: any) => {
        setCategory(data);
        setSlot(null);
        if (data) {
            setDate(null);
        }else{
            setDate({
                value: format(new Date(), yyyyMMdd),
                label: format(new Date(), yyyyMMdd),
            })
        }
    };

    const dateFormatJSX = () => {
        const month = format(new Date(selectedDate?.value), "MMM");
        const day = format(new Date(selectedDate?.value), "E");
        const date = format(new Date(selectedDate?.value), "do");
        return selectedDate?.value ? (
            <div className="py-0.5 pl-2">
                <span className="block text-xs uppercase text-green">
                    {month}
                </span>
                <span className="text-sm block font-bold -mt-1 text-green">
                    {day} {date}
                </span>
            </div>
        ) : null;
    };

    return (
        <div className="App">
            <div className="px-4">
                <div className="mt-5 flex justify-between items-center">
                    <div className="w-4 h-4">
                        <img src={leftArrow} alt="yoga" />
                    </div>
                    <h4 className="font-bold text-lg">Hot Picked For you</h4>
                    <div></div>
                </div>
                <Category
                    categories={categories}
                    selectedCategory={selectedCategory}
                    handleCategoryChange={handleCategoryChange}
                />
                <div className="mb-8 appearme">
                    <div className="mt-4 mb-8 text-right flex space-x-3">
                        <div className="w-1/3">
                            {dateOptions.length ? (
                                <DropDown
                                    options={dateOptions}
                                    selectedOption={selectedDate}
                                    onSelect={handleDateChange}
                                    customValueLabel={true}
                                    customValueJSX={
                                        selectedDate?.value ? (
                                            dateFormatJSX()
                                        ) : (
                                            <div className="pl-4 text-blue font-bold">
                                                Date
                                            </div>
                                        )
                                    }
                                    customClass={"dateDD"}
                                />
                            ) : null}
                        </div>
                        <div className="w-1/3">
                            {sortOptions.length ? (
                                <DropDown
                                    options={sortOptions}
                                    selectedOption={selectedSort}
                                    onSelect={handleSortChange}
                                    placeholder="Price"
                                    customClass={"priceDD"}
                                />
                            ) : null}
                        </div>
                        <div className="w-1/3">
                            <DropDown
                                options={slotOptions}
                                selectedOption={selectedSlot}
                                onSelect={handleSlotChange}
                                placeholder="Time"
                                customClass={"slotDD"}
                            />
                        </div>
                    </div>
                    {filteredProducts.length ? (
                        filteredProducts.map(
                            (item: IPlanProps, index: number) => {
                                return (
                                    <Plancard
                                        {...item}
                                        key={index}
                                        selectedDate={selectedDate}
                                        selectedSlot={selectedSlot}
                                    />
                                );
                            }
                        )
                    ) : isLoading ? (
                        <div className="flex justify-center py-32 ">
                            <div className="loader loader-1">
                                <div className="loader-outter"></div>
                                <div className="loader-inner"></div>
                            </div>
                        </div>
                    ) : (
                        <div className="px-10 py-5 flex flex-col items-center">
                            <img
                                src={noResult}
                                alt="yoga"
                                className="w-40 mb-6"
                            />
                            <span className="font-bold opacity-50">
                                No Result Found
                            </span>
                        </div>
                    )}
                </div>
                <div
                    onClick={scrollTop}
                    className="fixed bottom-0 bg-white right-0 m-4 w-10 h-10 rounded-full shadow-lg flex justify-center items-center transition duration-300 ease-in-out"
                    style={{ opacity: showScroll ? "1" : "0" }}
                >
                    <img src={topArrow} alt="arrow" />
                </div>
            </div>
        </div>
    );
};

export default App;
