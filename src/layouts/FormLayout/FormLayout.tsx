import { FC } from "react";
import {
	Box, Container
} from "@mui/material";
import { Props } from "./FormLayout.types";

export const FormLayout: FC<Props> = ({ children }) => {
	return (
		<Box>
			<Container >
				{children}
			</Container>
		</Box>
	);
};
