import React from "react";
import ReactDOM from "react-dom";

import App from "./App.js";
import registerServiceWorker from './registerServiceWorker';
import App1 from "./App1.js";
import ArticleData from "./API.js";


ReactDOM.render(
	<App />,
	document.getElementById("to-render-1")
);

ReactDOM.render(

	<ArticleData />,
	document.getElementById("to-render-2")
);


registerServiceWorker();