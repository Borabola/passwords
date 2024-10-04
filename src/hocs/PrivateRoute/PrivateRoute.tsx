import {FC, useEffect} from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppRouteEnum } from "../../types";
//import { useTypedSelector } from "../store";
//import MainLayout from "../layouts/MainLayout";
//import { AppRouteEnum } from "@salesSuite/shared/types";
import { PrivateRouteProps } from "./PrivateRoute.types";

//import { resetStateAction } from "@salesSuite/redux";

//export const PrivateRoute: FC<PropsWithChildren<PrivateRouteProps>> = ({

export const PrivateRoute: FC<PrivateRouteProps> = ({
	children
}) => {
	const location = useLocation();
	//const dispatch = useDispatch();

	//const { isAuth, isUserLoggedIn } = useIsLoggedIn();

	const isAuth = true;
	const isUserLoggedIn = true;

	// useEffect(
	// 	() => {
	// 		if (isAuth) dispatch(resetStateAction());
	// 	},
	// 	[isAuth]
	// );

	if (!isUserLoggedIn) {
		return (
			<Navigate
				to={AppRouteEnum.LOGIN}
				state={{ from: location }}
				replace
			/>
		);
	}

	//return <MainLayout>{children}</MainLayout>;
	return <>children</>;
};

export default PrivateRoute;
