import type { PreloadedState } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import {
	TypedUseSelectorHook, useDispatch, useSelector
} from "react-redux";
import {
	FLUSH, PAUSE,
	PERSIST, persistReducer, PURGE,
	REGISTER, REHYDRATE
} from "redux-persist";
import storage from "redux-persist/lib/storage";
//import { isDevelopment } from "../../utils";
import rootReducer from "../rootReducer";
import type {
	AppDispatch, RootState
} from "./store.types";

const persistConfig = {
	key: "primary",
	storage: storage,
	whitelist: ["auth", "user"],
};

const persistedReducer = persistReducer(
	persistConfig,
	rootReducer
);

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
	return configureStore({
		reducer: persistedReducer,
		middleware: (getDefaultMiddleware) => {

			return getDefaultMiddleware({
				serializableCheck: {
					ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
				}
			});
		},
		preloadedState,
	});
};

/*const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => {
		const extraMiddleweres = [some.middleware];

		if (isDevelopment()) { extraMiddleweres.push(logger); }

		return getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		}).concat(extraMiddleweres);
	},
});*/

//const persistor = persistStore(store);

//export { persistor, store };
//export { persistor };
export const useTypedDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
