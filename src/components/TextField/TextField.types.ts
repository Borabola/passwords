
import { ReactNode } from "react";
import { TextFieldProps as MuiTextFieldProps } from "@mui/material";

export type TextFieldProps = MuiTextFieldProps & {
	title: ReactNode;
};
