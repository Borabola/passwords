import { FC } from "react";
import { toast } from "react-toastify";
import {
	Box,
	Typography,
	IconButton,
	Tooltip
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { resulBlockStyles as styles } from "./ResultBlock.styles";
import { ResultBlockProps } from "./ResultBlock.types";
import { useIntl } from "react-intl";

export const ResultBlock: FC<ResultBlockProps> = ({
	password
}) => {
	const intl = useIntl();
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

	const ariaLabel = intl.formatMessage({
		id: "copy",
		defaultMessage: "Copy"
	});

	return (
		<Box sx={styles.wrapper}>
			<Box sx={styles.scrollContainer}>
				<Typography sx={styles.text}>
					{password}
				</Typography>
			</Box>
			<Tooltip title={ariaLabel}>
				<IconButton
					aria-label="ariaLabel"
					sx={styles.iconBtn}
					onClick={handleCopyToClipboard}
				>
					<ContentCopyIcon
						sx={styles.icon}
					/>
				</IconButton>
			</Tooltip>
		</Box>
	);
};

export default ResultBlock;
