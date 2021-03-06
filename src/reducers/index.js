import productReducer from "./productReducer";
import basketReducer from "./basketReducer";
import authReducer from "./authReducer";
import profileReducer from "./profileReducer";
import filterReducer from "./filterReducer";
import checkoutReducer from "./checkoutReducer";
import userReducer from "./userReducer";
import appReducer from "./appReducer";
import orderReducer from "./orderReducer";

const rootReducer = {
	products: productReducer,
	basket: basketReducer,
	auth: authReducer,
	profile: profileReducer,
	filter: filterReducer,
	users: userReducer,
	checkout: checkoutReducer,
	app: appReducer,
	orders: orderReducer,
};

export default rootReducer;
