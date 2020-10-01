import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {setQuote, selectQuotes, selectAuthors} from './quoteGeneratorSlice'
import styles from './Counter.module.css';

function changeDisplay(){
    const showQuote = document.getElementById('showQuote')
    const addQuote = document.getElementById('addQuote')

    if(showQuote.classList.contains('hide')){
        showQuote.classList.remove('hide')
        addQuote.classList.add('hide')
    }
    else if(addQuote.classList.contains('hide')){
        addQuote.classList.remove('hide')
        showQuote.classList.add('hide')
    }
}

export function QuoteGenerator() {
    const dispatch = useDispatch();
    const allQuotes = useSelector(selectQuotes);
    const allAuthors = useSelector(selectAuthors);
    
    const [newQuote, setNewQuote] = useState('');
    const [newAuthor, setNewAuthor] = useState('');

    let n = Math.floor(Math.random()* allQuotes.length)
    const [presentQuote, setPresentQuote] = useState( allQuotes[n]);
    const [presentAuthor, setPresentAuthor] = useState(allQuotes[n]);

    let loadRandomQuote = () => {
        let n = Math.floor(Math.random()* allQuotes.length)
        console.log(n)

        setPresentQuote(allQuotes[n])
        setPresentAuthor(allAuthors[n])

        console.log(presentQuote)
    }

    return (
        <div>
            <div>
                <div id="showQuote" className={styles.box}>
                    <h3>Click on "New Quote"</h3>
                    <div id={styles.quote}>
                        <p id="text">"{presentQuote}"</p>
                        <small id="author">{presentAuthor}</small>  
                    </div>
                    
                    <div className={styles.buttons}>
                        <button className={styles.button} id="new-quote" onClick={loadRandomQuote}>Change Quote</button>

                        <button className={styles.button}>Insert New Quote</button>

                        <a href="/twitter.com/intent/tweet" className={styles.button} id="tweet-quote" target="_blank">
                        Tweet Quote
                        </a>
                    </div>
                </div>

                <div id="addQuote" className={styles.box}>
                    <div>
                        <h3>Insert New Quote</h3>
                        <form>
                            <div id={styles.quote}>
                                <input type='text' placeholder="Insert the Quote" name="quote" className={styles.input} value={newQuote} 
                                    onChange={e => setNewQuote(e.target.value)}/>
                                    
                                <input type='text' placeholder="Insert the Author" name="author" className={styles.input} value={newAuthor} 
                                    onChange={e => setNewAuthor(e.target.value)}/>
                            </div>
                            
                            <div className={styles.buttons}>
                                 <button className={styles.button} 
                                    onClick={(e) => {e.preventDefault(); dispatch(setQuote( {newQuote, newAuthor}))}}>
                                    Insert
                                </button> 
                                <button className={styles.button}>Back</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* <div>
                <div className={styles.row}>
                    <button className={styles.button} aria-label="Increment value" onClick={() => dispatch(increment())}> + </button>

                    <span className={styles.value}>{count}</span>

                    <button className={styles.button} aria-label="Decrement value" onClick={() => dispatch(decrement())}> - </button>
                </div>

                <div className={styles.row}>
                    <input className={styles.textbox} aria-label="Set increment amount" value={incrementAmount} onChange={e => setIncrementAmount(e.target.value)} />
                    <button className={styles.button} onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>
                        Add Amount
                    </button>
                    <button className={styles.asyncButton} onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}>
                        Add Async
                    </button>
                </div>
            </div> */}
        </div>
    );
}
