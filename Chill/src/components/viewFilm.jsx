/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import "../Homepage.css";
import "../App.css";
import "../daftarSaya.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchFilms, deleteFilms } from "../store/filmSlice";

// eslint-disable-next-line react/prop-types
export const ViewFilm = ({handleEditClick, filmTOEdit}) => {
  const data = useSelector((state) => state.films.filmArray);

  // fetch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);

  // delete
  const handleDelete = (id) => {
    dispatch(deleteFilms(id));
  }

  return (
    <div className="viewFilm">
      {data.length > 0 ? (
        <>
          {data.map((newfilm) => (
            <div key={newfilm.id} className="filmView">
              <div className="filmViewContent">
                <h6 className="filmTitle">{newfilm.film.title}</h6>
                <p>{newfilm.film.rating}</p>
                <p>{newfilm.film.catatan}</p>
              </div>
              <div>
                <span onClick={() => handleDelete(newfilm.id)}>
                    <button className="deleteButton">Delete</button>
                </span>
                <span onClick={() => handleEditClick(newfilm)}>
                    <button className="editButton">Edit</button>
                </span>
              </div>
            </div>
          ))}
        </>
      ) : (
        <p>No films found</p>
      )}
    </div>
  );
};
