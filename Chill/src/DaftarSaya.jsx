/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import './indexHomepage.css'
import NavbarHomepage from './components/navbarHomepage'
import HomepageFooter from './components/homepageFooter'
import { AddFilm } from "./components/addFilm";
import { ViewFilm } from "./components/viewFilm";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store/index.jsx';
import { useState } from "react";

export default function DaftarSaya() {

    const [filmTOEdit, setFilmTOEdit] = useState(null);

    const handleEditClick = (film) => {
        setFilmTOEdit(film);
    };
  
    return (
        <>
          <div className="homePage">
            <Provider store={store}>
              <NavbarHomepage />
              <ViewFilm handleEditClick={handleEditClick} filmTOEdit={filmTOEdit}/>
              <AddFilm filmTOEdit={filmTOEdit}/>
              <HomepageFooter />
            </Provider>
          </div>
        </>
      );
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <BrowserRouter>
        <DaftarSaya />
      </BrowserRouter>
    </React.StrictMode>
  );
