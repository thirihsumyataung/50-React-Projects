import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'

const table = {
  sports: 21,
  history: 23,
  politics: 24,
  animals: 27,
  mythology: 20,
  general_knowledge: 9,
  vehicles: 28,
  art: 25,
  gadgets: 30,
}
//'https://opentdb.com/api.php?amount=10'
//https://opentdb.com/api.php?amount=10&category=27&type=multiple
const API_ENDPOINT = 'https://opentdb.com/api.php?'

const url = ''
const tempURL = "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [error, setError] = useState(false);
  const [quiz, setQuiz] = useState({
    amount:10,
    category: 'sports',
    difficulty: 'easy'
  }); // Once we set up the form we will construct url 
  const [isModalOpen, setModalOpen] = useState(false);

  const fetchQuestions = async (url) => {
    setLoading(true);
    setWaiting(false);
    const response = await axios(url).catch(err => console.log(err));
    console.log(response);
    if (response) {
      const data = response.data.results;
      if (data.length > 0) {
        setQuestions(data);
        setLoading(false);
        setWaiting(false);
        setError(false); 
      }
      else {
        setWaiting(true);
        setError(true); 
      }
    }
    else {
      setWaiting(true); 
    }
  };
  const nextQuestion = () => {
    setIndex((oldIndex) => {
      const index = oldIndex + 1;
      if (index > questions.length - 1) {
        openModal (); 
        return 0; 
      }
      return index; 
    })
  }

  const checkAnswer = value => {
    if (value) {
      setCorrect((oldState) => oldState + 1);
    }
    nextQuestion(); 
  }

  const openModal = () => {
    setModalOpen(true); 
  }

  const closeModal = () => {
    setWaiting(true);
    setCorrect(0); 
    setModalOpen(false); 
  }
  // useEffect(() => {
  //   fetchQuestions(tempURL);
  // }, []); 
  
  const handleChange = (e) => {
    //console.log(e); 
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setQuiz({...quiz,[name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { amount, category, difficulty } = quiz;
    
    //const tempURL = "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"
    const url = `${API_ENDPOINT}amount=${amount}&difficulty=${difficulty}&category=${table[category]}&type=multiple`; 
    
    fetchQuestions(url);
  }
  return <AppContext.Provider value={{waiting, loading, questions, index, correct, error , isModalOpen, nextQuestion, checkAnswer, closeModal , quiz, handleChange, handleSubmit}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
