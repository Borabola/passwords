
import "firebase/auth";
import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut
} from "firebase/auth";
import {
	createContext,
	FC,
	useContext,
	useEffect,
	useState
} from "react";
import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";
//import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import { stateType } from "../components/forms/LoginForm/LoginForm.types";
import { auth } from "../firebase/firebaseConfig";
import { requireAuthorization } from "../redux/auth/sliceReducer";
import {
	AppRouteEnum, AuthStatusEnum
} from "../types";
// import {
// 	outputtingError,
// 	outputtingGoogleError
// } from "../utils/toastHelper";
import {
	AuthProviderProps,
	AuthValues,
	CurrentUser,
	FirebaseError,
	SProps
} from "./AuthContext.types";
import {
	outputtingError, outputtingGoogleError
} from "../utils/toastHelper";

export const AuthContext = createContext<AuthValues>({
	currentUser:  null,
	login: ({ email, password }: SProps) => {},
	signup: ({
		email, password
	}: SProps) => {},
	logout: () => {},
	googlePopupSignIn: () => {},
});

export const useAuth = () => {
	return useContext(AuthContext);
};

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
	const intl = useIntl();
	const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	const dispatch = useDispatch();
	//const history = useHistory();
	const navigate = useNavigate();

	useEffect(
		() => {
			let newUser;
			setIsLoading(true);
			const unsubsribe = onAuthStateChanged(
				auth,
				(user) => {
					if (user && user.email && user.uid) {
						newUser = {
							email: user.email,
							userId: user.uid
						};
						setCurrentUser(newUser);
						dispatch(requireAuthorization(AuthStatusEnum.AUTH));
					} else {
						setCurrentUser(null);
						dispatch(requireAuthorization(AuthStatusEnum.NO_AUTH));
					}
					setIsLoading(false);
				}
			);
			return unsubsribe;
		},
		[]
	);

	const signup = async ({
		email, password
	}: SProps) => {
		try {
			await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			navigate(AppRouteEnum.LOGIN);

		} catch (error) {
			outputtingError(
				(error as FirebaseError).code,
				intl
			);
		}
	};

	const login = async ({ email, password }: SProps) => {
		try {
			const result = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			const newUser = {
				email: result.user.email,
				userId: result.user.uid
			};
			setCurrentUser(newUser);
			dispatch(requireAuthorization(AuthStatusEnum.AUTH));
			//history.replace(from);
			console.log("AuthContext login", auth)
			navigate("/");

		} catch (error) {
			outputtingError(
				(error as FirebaseError).code,
				intl
			);
		}
	};

	const logout = async () => {
		return signOut(auth).then(() => {
			dispatch(requireAuthorization(AuthStatusEnum.NO_AUTH));
		});
	};

	const googlePopupSignIn = async () => {
		const provider = new GoogleAuthProvider();
		try {
			const result = await signInWithPopup(
				auth,
				provider
			);
			const newUser = {
				email: result.user.email,
				userId: result.user.uid
			};

			console.log(
				"newUser",
				newUser
			);
			setCurrentUser(newUser);
			dispatch(requireAuthorization(AuthStatusEnum.AUTH));
			//history.replace(from);
			navigate("/");
		} catch (error) {
			outputtingGoogleError(
				(error as FirebaseError).code,
				intl
			);
		}
	};

	const value = {
		currentUser,
		login,
		signup,
		logout,
		googlePopupSignIn
	};

	return (
		<AuthContext.Provider value={value}>
			{!isLoading && children}
		</AuthContext.Provider>
	);
};
