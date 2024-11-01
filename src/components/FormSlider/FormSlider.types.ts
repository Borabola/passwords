import { TextFieldProps } from "../TextField/TextField.types";

export type FormSliderProps = Omit<TextFieldProps, "name" | "title"> & {
	name: string,
	defaultValue: number,
	minValue: number,
	maxValue: number,
	step?: number,
	labelText?: string,
};
