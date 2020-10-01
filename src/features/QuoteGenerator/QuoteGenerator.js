import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {setQuote, selectQuotes, selectAuthors} from './quoteGeneratorSlice'
import styles from './QuoteGenerator.module.css';

function changeDisplay(){
    const showQuote = document.getElementById('showQuote')
    const addQuote = document.getElementById('addQuote')

    for (let i = 0; i < showQuote.classList.length; i++) {
        if(showQuote.classList[i].includes('hide')){
            addQuote.className += `, ${styles.hide}`
            showQuote.className = ` ${styles.box}`
            return
        }
    }

    for (let i = 0; i < addQuote.classList.length; i++) {
        if(addQuote.classList[i].includes('hide')){
            showQuote.className += ` ${styles.hide}`
            addQuote.className = ` ${styles.box}`
            return
        }
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
        setPresentQuote(allQuotes[n])
        setPresentAuthor(allAuthors[n])
    }

    return (
        <div>
            <div id="showQuote" className={styles.box}>
                <h3>Click on "New Quote"</h3>
                <div id={styles.quote}>
                    <p id="text">"{presentQuote}"</p>
                    <small id="author">{presentAuthor}</small>  
                </div>
                
                <div className={styles.buttons}>
                    <button className={styles.button} id="new-quote" onClick={loadRandomQuote}>Change Quote</button>

                    <button className={styles.button} onClick={changeDisplay}>Insert New Quote</button>

                    <a href="/twitter.com/intent/tweet" className={styles.button} id="tweet-quote" target="_blank">
                    Tweet Quote
                    </a>
                </div>
            </div>

            <div id="addQuote" className={`${styles.box}, ${styles.hide}`}>
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
                        </div>
                    </form>
                    
                    <div className={styles.buttons}>
                        <button className={styles.button} onClick={changeDisplay}>Back</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
