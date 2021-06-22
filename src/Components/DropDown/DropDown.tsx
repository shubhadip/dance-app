import Select from "react-select";

interface IDropDown {
	options: { value: any; label: any }[];
	defaultValue?: any;
	selectedOption: { value: any; label: any } | null;
	onSelect: Function;
	placeholder?: string
	customValueLabel?: boolean;
	customValueJSX?: any
	customOptions?: boolean
	customOptionsJSX?: any
	customClass?: string
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

	if (props.customValueLabel) {
		customComponents = {
			...customComponents, ...{
				ValueContainer: () => (props.customValueJSX)
			}
		}
	}

	const formatOptionLabel = ({ value, label, customAbbreviation }: { value: any, label: any, customAbbreviation?: any }) => {
		return (
			<div className={['flex', props.selectedOption?.label === label ? 'selected text-green font-bold' : 'text-blue font-bold'].join(' ')}>
				<div>{label}</div>
			</div>
		)
	};

	const customStyles = {
		control: (provided: any, state: any) => {
			return ({
				...provided,
				border: state.hasValue ? '2px solid green' : '2px solid blue',
				borderRadius: '6px',
				backgroundColor: 'white'
			})
		},
		dropdownIndicator: (provided: any, state: any) => {
			return ({
				...provided,
				color: state.hasValue ? 'green' : 'blue'
			})
		},
		valueContainer: (provided: any, state: any) => {
			return ({
				...provided,
				color: state.hasValue ? 'green' : 'blue'
			})
		},
		option: (provided: any, state: any) => ({
			...provided,
			backgroundColor: 'white'
		}),
	}

	return (
		<div className="App">
			<Select
				options={props.options}
				value={props.selectedOption}
				onChange={handleStateChange}
				className={['text-left outline-none', props.customClass].join(' ')}
				components={customComponents}
				formatOptionLabel={formatOptionLabel}
				styles={customStyles}
				controlColor={'blue'}
				valueContainer={'blue'}
				dropdownIndicator={'blue'}
			/>
		</div>
	);
}
