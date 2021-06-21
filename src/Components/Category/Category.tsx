import yoga from "./../../assets/images/yoga.svg";
import yogaWhite from "./../../assets/images/yoga-white.svg";
export const Category = (props: any) => {
    const { categories, selectedCategory, handleCategoryChange } = props;
    return (
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
                        <div className="cat-box-img shadow rounded-full w-14 h-14 relative">
                            <img
                                src={yoga}
                                alt="yoga"
                                className=" absolute w-9 img-black"
                            />
                            <img
                                src={yogaWhite}
                                alt="yoga"
                                className=" absolute w-9 img-white"
                            />
                        </div>
                        <span className="text-xs mt-2 cat-box-name capitalize">
                            {citem.category}
                        </span>
                    </div>
                );
            })}
        </div>
    );
};
