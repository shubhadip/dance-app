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

export enum Slots {
  morning,
  afternoon,
  evening
}

export interface IButtonProps {
  title?: any;
  type?: "" | "loading";
  customClass?: string;
  onClick?: any;
  disabled?: boolean;
  disableOnLoading?: boolean;
  member?: string;
  customValueAttr?: any;
  theme?: ButtonTheme;
  name?: string;
}


export interface IPlanProps {
  product_id: string
  product_name: string
  image?: string
  video?: string
  product_price: number
  discounted_price: number
  product_tag: string
  description?: string
  title?: string
  subtitle?: string
  enrolled_qty?: number 
  selectedDate?: any
  selectedSlot?: any
  selectedBatch?: any
  slots?: any
  product_image_url?:any
  product_cat_image_url?:any 
}

export interface ICategory {
  category:string
  name: string
  image:string
}