import { createSlice } from '@reduxjs/toolkit';

export const quoteSlice = createSlice({
    name: 'quotes',
    initialState: {
        allQuotes: ['quote1', 'quote2','quote3', 'quote4','quote5', 'quote6','quote7', 'quote8'],
        allAuthors: ['author1','author2','author3', 'author4','author5', 'author6','author7', 'author8'],
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
