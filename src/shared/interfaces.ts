export interface ICalendarInterface {
  timeFormat: string
  timeIntervals: number
  dateFormat: string
  minDate: Date
  maxDate: Date
  timeCaption: string
  inline: boolean
  withPortal: boolean
  showTimeSelect: boolean
  startDate: Date | null
  onChange: Function
  showTimeSelectOnly: boolean
  placeholderText?: string
}

export interface ISpinnerProps {
  customClass?: string;
}

type ButtonTheme =
  | "orange"
  | "empty"
  | "orange-gradient"
  | "basedark"
  | "loading"
  | "link"
  | "lightblue"
  | "bordered";

export interface IButtonProps {
  title?: any;
  type?: "" | "loading";
  customClass?: string;
  onClick?: any;
  disabled?: boolean;
  disableOnLoading?: boolean;
  member?: string;
  customValueAttr?: any;
  // ref?: string;
  theme?: ButtonTheme;
  name?: string;
}

