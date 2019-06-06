import { combineReducers } from "redux";

import { uiReducers } from "./UiReducers";
import * as metadata from "./MetadataReducers";
import * as dataReducers from "./DataReducers";
import * as orderReducers from "./OrderReducers";

const CombineReducers = combineReducers({
	// Ui
	ui: uiReducers,

	// Metadata
	years: metadata.Year,
	makes: metadata.Make,
	models: metadata.Model,
	category: metadata.Category,
	states: metadata.States,

	// Data
	products: dataReducers.Products,
	search: dataReducers.Search,
	settings: dataReducers.Settings,
	pages: dataReducers.Pages,

	// Order
	order: orderReducers.Order,
	cart: orderReducers.Cart
});

export default CombineReducers;
