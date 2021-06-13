import React,{ useState, useEffect } from "react";
import format from "date-fns/format";
import Plancard from "../../Components/Plancard/Plancard";
import { ddMMyyyy } from "../../utils/constants";
import { getAllCategories, getDatesForDropDown, getFilteredProducts, getSlotsForDropDown } from "../../utils/productUtils";
import DropDown from "../../Components/DropDown/DropDown";
import { ICategory, IPlanProps } from "../../shared/interfaces";

export const App = () => {
	const dateOptions = getDatesForDropDown();
	const slotOptions = getSlotsForDropDown();
	
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [selectedDate, setDate] = useState({
		value: format(new Date(), ddMMyyyy),
		label: format(new Date(), ddMMyyyy)
	});
	const [selectedSlot, setSlot] = useState(null);
	const [selectedCategory, setCategory] = useState<ICategory | null>(null);
	
	useEffect(() => {
		fetch('./products.json')
			.then((data)=> data.json())
			.then((response) => {
				setCategories(getAllCategories(response));
				setProducts(response);
			});
	}, []);

	useEffect(() => {
		const data = getFilteredProducts(products, selectedSlot, selectedDate, selectedCategory);
		setFilteredProducts(data);
	}, [selectedSlot, selectedDate, selectedCategory, products])
	
	const handleDateChange = (data: any) => {
		setDate(data);
	}
	
	const handleSlotChange = (data: any) => {
		setSlot(data);
	}

	const handleCategoryChange = (data: any) => {
		setCategory(data);
		setSlot(null);
	}

	return (
		<div className="App">
			<h4 className="pt-6 my-4 text-center font-medium">Its Happening Now</h4>
			<div className="flex w-full overflow-x-auto pb-4">
					{
						categories.map((citem : any) => {
							const isSelected = (selectedCategory ? citem.category === selectedCategory?.category : false)
							return (
								<div className={['mx-3 text-center', (isSelected ? 'selected' : '') ].join(' ')} key={citem.category} onClick={()=>handleCategoryChange(citem)}>
									<div className="rounded-full w-14 h-14 border bg-gray-200"></div>
									<span className="text-xs mt-2">{citem.category}</span>
								</div>
							)
						})
					}
			</div>
			<div className="mb-8">
				<div className="mb-4 text-right">
					<div>
						<DropDown 
							options={dateOptions} 
							selectedOption={selectedDate} 
							onSelect={handleDateChange} />
					</div>
					<div>
						<DropDown 
							options={slotOptions} 
							selectedOption={selectedSlot} 
							onSelect={handleSlotChange} 
							placeholder="select batch"
						/>
					</div>
				</div>
				{filteredProducts.length ? filteredProducts.map((item: IPlanProps, index: number) => {
					return <Plancard {...item} key={index} />
				}): null}
		</div>
		</div>
	);
}

export default App;
