import { FC } from "react";
import { toast } from "react-toastify";
import {
	Box,
	Typography,
	IconButton
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { resulBlockStyles as styles } from "./ResultBlock.styles";
import { ResultBlockProps } from "./ResultBlock.types";
import { useIntl } from "react-intl";

export const ResultBlock: FC<ResultBlockProps> = ({
	password
}) => {
	const intl = useIntl();
	//toast.error(intl.formatMessage({ id: "emailAlreadyExist" }));
	const handleCopyToClipboard = () => {
		if (password) {
			navigator.clipboard
				.writeText(password)
				.then(() => toast.success(intl.formatMessage({
					id: "passwordCopied",
					defaultMessage: "Password was copied to your clipboard!"
				})));
		}
	};

	return (
		<Box sx={styles.wrapper}>
			<Box sx={styles.scrollContainer}>
				<Typography sx={styles.text}>
					{password}
				</Typography>
			</Box>
			<IconButton
				aria-label="copy password"
				sx={styles.iconBtn}
				onClick={handleCopyToClipboard}
			>
				<ContentCopyIcon
					sx={styles.icon}
				/>
			</IconButton>
		</Box>
	);
};

export default ResultBlock;
