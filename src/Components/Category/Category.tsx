import allBlack from "./../../assets/images/all-black-new.svg";
import allWhite from "./../../assets/images/all-white-new.svg";

export const Category = (props: any) => {
    const { categories, selectedCategory, handleCategoryChange } = props;
    return (
        <div className="flex w-full appearme overflow-x-auto pt-8 pb-4">
            <div
                className={[
                    "mx-3 cat-box text-center",
                    selectedCategory === null ? "selected" : "",
                ].join(" ")}
                key={"all"}
                onClick={() => handleCategoryChange(null)}
            >
                <div className="cat-box-img shadow rounded-full w-14 h-14 relative">
                <img
                    src={allBlack}
                    alt="yoga"
                    className=" absolute w-9 img-black"
                />
                <img
                    src={allWhite}
                    alt="yoga"
                    className=" absolute w-9 img-white"
                />
                </div>
                <span className="text-xs mt-2 cat-box-name capitalize">
                    All
                </span>
            </div>
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
                                src={citem.image}
                                alt="yoga"
                                className=" absolute w-9 img-black"
                            />
                            <img
                                src={citem.image}
                                alt="yoga"
                                className=" absolute w-9 img-white"
                            />
                        </div>
                        <span className="text-xs mt-2 cat-box-name capitalize whitespace-nowrap overflow-hidden">
                            {citem.name}
                        </span>
                    </div>
                );
            })}
        </div>
    );
};
