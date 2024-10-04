//import { ReactNode } from "react";
import { RouteProps } from "react-router-dom";

export type BaseRoutesItem = RouteProps & {
	path?: string,
	exact?: boolean,
	isAuth: boolean,
	//denyShowLoginPage?: boolean
};

// export interface BaseRoutesItem extends RouteProps {
// 	path?: string,
// 	exact?: boolean,
// 	isAuth: boolean,
// 	denyShowLoginPage?: boolean
// };

export type PrivateRoutes = Array<BaseRoutesItem>;
export type Routes = Array<BaseRoutesItem>;
