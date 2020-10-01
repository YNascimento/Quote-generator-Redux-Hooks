import { createSlice } from '@reduxjs/toolkit';

export const quoteSlice = createSlice({
    name: 'quotes',
    initialState: {
        allQuotes: ['quote1', 'quote2'],
        allAuthors: ['author1','author2'],
    },
    reducers: {
        setQuote: (state, action) => {
            const {newQuote, newAuthor} = action.payload
            state.allQuotes = [...state.allQuotes, newQuote]
            state.allAuthors = [...state.allAuthors, newAuthor]
        }
    },
});

export const { setQuote } = quoteSlice.actions;

export const selectQuotes = state => state.quotes.allQuotes;
export const selectAuthors = state => state.quotes.allAuthors;

export default quoteSlice.reducer;
