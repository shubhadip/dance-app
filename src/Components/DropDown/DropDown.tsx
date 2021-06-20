import Select from "react-select";

interface IDropDown {
    options: { value: any; label: any }[];
    defaultValue?: any;
    selectedOption: { value: any; label: any } | null;
    onSelect: Function;
    placeholder?: string
    customValueLabel?: boolean;
    customValueJSX?: any
}

export default function DropDown(props: IDropDown) {
    const handleStateChange = (value: any) => {
        props.onSelect(value);
    };
    let customComponents = {
        IndicatorSeparator: () => null,
        Placeholder: () => (
            <span>{props.placeholder}</span>
        )
    }
    if(props.customValueLabel){
        customComponents = {...customComponents, ...{
        ValueContainer: () => (props.customValueJSX)}}
    }
    return (
        <div className="App">
            <Select
                options={props.options}
                value={props.selectedOption}
                onChange={handleStateChange}
                className="text-left outline-none"
                components={customComponents}
            />
        </div>
    );
}
