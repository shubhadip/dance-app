import Select from "react-select";

interface IDropDown {
    options: { value: any; label: any }[];
    defaultValue?: any;
    selectedOption: { value: any; label: any } | null;
    onSelect: Function;
    placeholder?: string;
}

export default function DropDown(props: IDropDown) {
    const handleStateChange = (value: any) => {
        props.onSelect(value);
    };

    return (
        <div className="App">
            <Select
                options={props.options}
                value={props.selectedOption}
                onChange={handleStateChange}
                placeholder={props.placeholder}
                className="text-left outline-none"
            />
        </div>
    );
}
