import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addAPI, fetchAPI, removeAPI } from '../../API/apis';

const FETCH_BOOKS = 'bookstore/books/FETCH_BOOKS';
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const fetchBooks = createAsyncThunk(
  FETCH_BOOKS,
  async () => {
    const response = await fetchAPI();
    return response;
  },
);

const addBook = createAsyncThunk(
  ADD_BOOK,
  async (Obj) => {
    await addAPI(Obj);
    return Obj;
  },
);

const removeBook = createAsyncThunk(
  REMOVE_BOOK,
  async (id) => {
    await removeAPI(id);
    return id;
  },
);

const initialState = {
  status: null,
  entities: [],
};

const handleBookSlice = createSlice({
  name: 'handleBook',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      const newBookList = [];
      Object.entries(action.payload).forEach((item) => {
        newBookList.push({
          id: item[0],
          title: item[1][0].title,
          author: item[1][0].author,
        });
      });
      // eslint-disable-next-line no-param-reassign
      state.entities = newBookList;
    });
    builder.addCase(addBook.fulfilled, (state, action) => {
      state.entities.push({
        id: action.payload.item_id,
        title: action.payload.title,
        author: action.payload.author,
      });
    });
    builder.addCase(removeBook.fulfilled, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.entities = state.entities.filter((book) => book.id !== action.payload);
    });
  },
});

export default handleBookSlice.reducer;
export { fetchBooks, addBook, removeBook };
