import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import quotesReducer from '../features/QuoteGenerator/quoteGeneratorSlice';

export default configureStore({
  reducer: {
    // counter: counterReducer,
    quotes: quotesReducer,
  },
});
