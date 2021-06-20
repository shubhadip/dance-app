import React, { useState, useEffect } from "react";
import format from "date-fns/format";
import Plancard from "../../Components/Plancard/Plancard";
import { yyyyMMdd } from "../../utils/constants";
import {
    getAllCategories,
    getUniqueDateOptions,
    getFilteredProducts,
    getSlotsForDropDown,
    getSortOptions,
} from "../../utils/productUtils";
import DropDown from "../../Components/DropDown/DropDown";
import { ICategory, IPlanProps } from "../../shared/interfaces";

export const App = () => {
	const [dateOptions, setDateOptions]: any = useState([
			{
					value: format(new Date(), yyyyMMdd),
					label: format(new Date(), yyyyMMdd),
			},
	]);
	const slotOptions = getSlotsForDropDown();
	const sortOptions = getSortOptions();

	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [selectedDate, setDate] = useState({
			value: format(new Date(), yyyyMMdd),
			label: format(new Date(), yyyyMMdd),
	});
	const [selectedSlot, setSlot] = useState(null);
	const [selectedSort, setSort] = useState(null);
	const [selectedCategory, setCategory] = useState<ICategory | null>(null);

	useEffect(() => {
			fetch("./products.json")
					.then((data) => data.json())
					.then((response) => {
							setCategories(getAllCategories(response));
							setProducts(response);
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

	const handleSlotChange = (data: any) => {
		setSlot(data);
	};

	const handleSortChange = (data: any) => {
		setSort(data);
	};

	const handleCategoryChange = (data: any) => {
			setCategory(data);
			setSlot(null);
	};

	const dateFormatJSX = () => {
		const month =  format(new Date(selectedDate.value), 'MMM')
		const day =  format(new Date(selectedDate.value), 'E')
		const date =  format(new Date(selectedDate.value), 'do')
		return (selectedDate.value ? <div>
				<span className="block">{month}</span>
				<span>{day} {date}</span>
		</div>: null )
	}
	return (
			<div className="App">
					<div className="px-4">
							<div className="mt-5 flex justify-between items-center">
									<div className="w-4 h-4 bg-gray-300"></div>
									<h4 className="font-medium text-lg">Hot Picked For you</h4>
									<div></div>
							</div>
							<div className="flex w-full overflow-x-auto pt-8">
									{categories.map((citem: any) => {
											const isSelected = selectedCategory
													? citem.category === selectedCategory?.category
													: false;
											return (
													<div
															className={[
																	"mx-3 cat-box text-center",
																	isSelected ? "selected" : "",
															].join(" ")}
															key={citem.category}
															onClick={() => handleCategoryChange(citem)}
													>
															<div className="cat-box-img shadow rounded-full w-14 h-14"></div>
															<span className="text-xs mt-2 cat-box-name capitalize">
																	{citem.category}
															</span>
													</div>
											);
									})}
							</div>
							<div className="mb-8">
									<div className="my-8 text-right flex space-x-3">
											<div className="w-1/3">
													{dateOptions.length ? (
															<DropDown
																	options={dateOptions}
																	selectedOption={selectedDate}
																	onSelect={handleDateChange}
																	customValueLabel={true}
																	customValueJSX={dateFormatJSX()}
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
															/>
													) : null}
											</div>
											<div className="w-1/3">
													<DropDown
															options={slotOptions}
															selectedOption={selectedSlot}
															onSelect={handleSlotChange}
															placeholder="Time"
													/>
											</div>
									</div>
									{filteredProducts.length
											? filteredProducts.map(
														(item: IPlanProps, index: number) => {
																return <Plancard {...item} key={index} />;
														}
												)
											: null}
							</div>
					</div>
			</div>
	);
};

export default App;
