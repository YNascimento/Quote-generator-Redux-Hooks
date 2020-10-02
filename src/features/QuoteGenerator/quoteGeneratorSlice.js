import { createSlice } from '@reduxjs/toolkit';

export const quoteSlice = createSlice({
    name: 'quotes',
    initialState: {
        allQuotes: ['Quote1', 'Quote2', 'Quote3'],
        allAuthors: ['Author1','Author2','Author3'],
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
