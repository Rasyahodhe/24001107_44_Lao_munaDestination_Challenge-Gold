import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// import Helmet from "react-helmet";
// function Custom() {
//   return (
//     <Helmet>
//       <script
//         defer="defer"
//         src="./components/script/scr_Navbar.js"
//         type="text/javascript"
//       ></script>
//     </Helmet>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
