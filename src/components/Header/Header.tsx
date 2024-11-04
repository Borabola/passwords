import {
	FC, useCallback
} from "react";
import { useNavigate } from "react-router-dom";
import { useIntl } from "react-intl";
import {
	Box,
	IconButton,
	Tooltip,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import { AppRouteEnum } from "../../types";
import LogoImage from "../../assets/logo.png";
import { useAuth } from "../../contexts/AuthContext";
import {
	AuthCurrentUser,
	AuthValues
} from "../../contexts/AuthContext.types";
import { headerStyles as styles } from "./Header.styles";

export const Header: FC = () => {
	const intl = useIntl();
	const navigate = useNavigate();
	const authContext = useAuth() as AuthValues;

	const { currentUser, logout } = authContext as AuthCurrentUser;

	const onLogClick = useCallback(
		() => {
			return () => {
				(authContext !== null && currentUser) ?
					logout() :
					navigate(AppRouteEnum.LOGIN);
			};
		},
		[
			currentUser,
			currentUser?.userId,
			logout
		]
	);

	const ariaLabel = currentUser ?
		`${currentUser.email} ${intl.formatMessage({
			id: "logout",
			defaultMessage: "Logout"
		})}`
		:
		intl.formatMessage({
			id: "login",
			defaultMessage: "Login"
		});

	return (
		<Box
			component="div"
			sx={styles.headerWrapper}
		>
			<Box sx={styles.logoWrapper}>
				<img
					src={LogoImage}
					alt={"logo"}
					width="70"
				/>
			</Box>
			<Tooltip title={ariaLabel}>
				<IconButton
					aria-label={ariaLabel}
					sx={styles.iconBtn}
					onClick={onLogClick}
				>
					{(currentUser && currentUser?.email) ?
						<LogoutIcon />
						:
						<LoginIcon />
					}
				</IconButton>
			</Tooltip>
		</Box>
	);
};

export default Header;
