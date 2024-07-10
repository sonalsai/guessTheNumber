/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import "../styles/index.css"
import axios from 'axios';

function Index() {

    const hostAddress = "https://guess-the-number-backend-8wkw.onrender.com"

    const [userNumber, setUserNumber] = useState()
    const [answer, setAnswer] = useState("")

    const handleUserNumber = (e) => {
        setUserNumber(e.target.value);
    }


    const fetchNumber = async () => {
        if(userNumber){
            try {
                const response = await axios.get(`${hostAddress}/correctNum`)
                setAnswer(response.data)
                // console.log(response)
            }
            catch {
                console.error("Error..!!")
            }
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setAnswer(null)

        if (userNumber !== null) {
            const data = { num: userNumber };

            try {
                const response = await axios.post(`${hostAddress}/guessNum`, data);
                console.log("Number sent to backend", response);
            } catch (error) {
                console.error("Number not sent", error);
            }
        } else {
            console.error("Null Data");
        }
        fetchNumber();
    }


    useEffect(() => {
        fetchNumber();
    }, [])

    return (
        <center >
            <div className='guessContainer' >
                <label htmlFor="guessNumber">Guess The Number</label>
                <input type="number" name="guessNumber" id="guessNumber" placeholder='Enter A Number from 1 to 10' value={userNumber} min={1} max={100} onChange={(e) => handleUserNumber(e)} required />
                <button type='submit' onClick={(e) => handleSubmit(e)} >GUESS</button>
                <span>Result</span>
                <span className='answerBox'>{answer}</span>
            </div>
        </center>
    )
}

export default Index