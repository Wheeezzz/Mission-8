/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "../Homepage.css";
import "../App.css";
import "../daftarSaya.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addFilmToFirestore, editFilm } from "../store/filmSlice";

// eslint-disable-next-line react/prop-types
export const AddFilm = ({ filmTOEdit }) => {
  const dispatch = useDispatch();

  // add film
  const [title, setJudul] = useState("");
  const [rating, setRating] = useState("");
  const [catatan, setCatatan] = useState("");

  // update film
  const [editedTitle, setEditedJudul] = useState("");
  const [editedRating, setEditedRating] = useState("");
  const [editedCatatan, setEditedCatatan] = useState("");

  useEffect(() => {
    if (filmTOEdit !== null) {
      setEditedJudul(filmTOEdit.film.title);
      setEditedRating(filmTOEdit.film.rating);
      setEditedCatatan(filmTOEdit.film.catatan);
    }
  }, [filmTOEdit]);

  const addFilmHandler = (e) => {
    e.preventDefault();
    let film = { title, rating, catatan };
    dispatch(addFilmToFirestore(film));
    setJudul("");
    setRating("");
    setCatatan("");
  };

  const editFilmHandler = (e) => {
    e.preventDefault();
    let film = {
      title: editedTitle, 
      rating: editedRating, 
      catatan: editedCatatan
    }
    dispatch(editFilm({id: filmTOEdit.id, film}));
  }

  return (
    <>
      {filmTOEdit === null ? (
        <div className="addFilm">
          <form onSubmit={addFilmHandler}>
            <h1>Tambahkan Film</h1>
            <table className="input-block">
              <tr>
                <label>Judul:</label>
                <input
                  required
                  onChange={(e) => setJudul(e.target.value)}
                  type="text"
                  name="title"
                  id="title"
                  value={title}
                />
              </tr>
              <tr>
                <label>Rating:</label>
                <input
                  required
                  onChange={(e) => setRating(e.target.value)}
                  type="text"
                  name="rating"
                  id="rating"
                  value={rating}
                />
              </tr>
              <tr>
                <label>Catatan:</label>
                <input
                  onChange={(e) => setCatatan(e.target.value)}
                  type="text"
                  name="year"
                  id="catatan"
                  value={catatan}
                />
              </tr>
              <p></p>
              <p></p>
              <button type="submit" className="saveButton">
                Simpan
              </button>
            </table>
          </form>
        </div>
      ) : (
        <div className="addFilm">
          <form onSubmit={editFilmHandler}>
            <h1>Tambahkan Film</h1>
            <table className="input-block">
              <tr>
                <label>Judul:</label>
                <input
                  required
                  onChange={(e) => setEditedJudul(e.target.value)}
                  type="text"
                  name="title"
                  id="title"
                  value={editedTitle}
                />
              </tr>
              <tr>
                <label>Rating:</label>
                <input
                  required
                  onChange={(e) => setEditedRating(e.target.value)}
                  type="text"
                  name="rating"
                  id="rating"
                  value={editedRating}
                />
              </tr>
              <tr>
                <label>Catatan:</label>
                <input
                  onChange={(e) => setEditedCatatan(e.target.value)}
                  type="text"
                  name="year"
                  id="catatan"
                  value={editedCatatan}
                />
              </tr>
              <p></p>
              <p></p>
              <button type="submit" className="saveButton">
                Update
              </button>
            </table>
          </form>
        </div>
      )}
    </>
  );
};
