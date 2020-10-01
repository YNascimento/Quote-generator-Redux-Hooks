import { configureStore } from '@reduxjs/toolkit';
import quotesReducer from '../features/QuoteGenerator/quoteGeneratorSlice';

export default configureStore({
  reducer: {
    quotes: quotesReducer,
  },
});
