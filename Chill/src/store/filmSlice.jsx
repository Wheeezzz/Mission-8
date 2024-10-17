/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import db from "../firebase.jsx";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const addFilmToFirestore = createAsyncThunk(
    'films/addFilmToFirestore',
    async (film) => {
        const addFilmRef = await addDoc(collection(db, "films"), film);
        const newFilm = { id: addFilmRef.id, film };
        return newFilm;
    }
);

export const fetchFilms = createAsyncThunk(
    'films/fetchFilms',
    async () => {
        const querySnapshot = await getDocs(collection(db, "films"));
        const films = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            film: doc.data(),
        }));
        return films;
    }
);

export const deleteFilms = createAsyncThunk(
    'films/deleteFilms',
    async (id) => {
        const films = await getDocs(collection(db, "films"));
        for (var snap of films.docs) {
            if (snap.id === id) {
                await deleteDoc(doc(db, "films", snap.id));
            }
        }
        return id;
    }
)

export const editFilm = createAsyncThunk( 
    'films/editFilm', 
    async (editedFilm) => {
        const films = await getDocs(collection(db, "films"));
        for (var snap of films.docs) {
            if (snap.id === editedFilm.id) {
                const filmRef = doc(db, "films", snap.id);
                updateDoc(filmRef, editedFilm.film);
            }
        }
        return editedFilm;
  }
)

const filmSlice = createSlice({
    name: "film",
    initialState: {
        filmArray: [],
    },
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(addFilmToFirestore.fulfilled, (state, action) => {
          // handle the fulfilled case
          state.filmArray.push(action.payload);
        });
        builder.addCase(addFilmToFirestore.rejected, (state, action) => {
          // handle the rejected case
        });
        builder.addCase(addFilmToFirestore.pending, (state, action) => {
          // handle the pending case
        });
        builder.addCase(fetchFilms.fulfilled, (state, action) => {
          // handle the fulfilled case
          state.filmArray = action.payload;
        });
        builder.addCase(deleteFilms.fulfilled, (state, action) => {
          // handle the fulfilled case
          state.filmArray = state.filmArray.filter((film) => film.id !== action.payload);
        });
        builder.addCase(editFilm.fulfilled, (state, action) => {
          // handle the fulfilled case
          const {id, film} = action.payload;
          const filmIndex = state.filmArray.findIndex((film) => film.id === id);
          if (filmIndex !== -1) {
            state.filmArray[filmIndex] = {id: id, film};
          }
        });
      },
});

export default filmSlice.reducer;