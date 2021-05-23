import React from 'react'
import { useGlobalContext } from './context'

const SetupForm = () => {
  const { quiz, handleSubmit, handleChange, error } = useGlobalContext();
  
  return <main>
    <section className="quiz quiz-small">
      <form className="setup-form">
        <h2>Setup Quiz</h2>
        <div className="form-control">
          <label htmlFor="amount"> number of questions: </label>
          <input type="number" name="amount" id="amount" value={quiz.amount} onChange={handleChange} className="form-input" min={1} max={50} />
          
        </div>
        {/* {category} */}

        {/* <option value=" "> </option>
        <option value=" "> </option>
        <option value=" "> </option> */}

        <div className="form-control">
          <label htmlFor="difficulty">
            Select Difficulty
          </label>
          <select name="difficulty" id="difficulty" className="form-input" value={quiz.difficulty} onChange={handleChange}>
          <option value="easy">easy</option>
        <option value="medium">medium</option>
        <option value="hard">hard</option>

          </select>
        </div>

        <div className="form-control">
          <label htmlFor="category">
            category
          </label>
          <select name="category" id="category" className="form-input" value={quiz.category} onChange={handleChange}>
            <option value="sports">sports</option>
            <option value="history">history</option>
            <option value="politics">politics</option>
                <option value="animals">animals</option>
            <option value="mythology">mythology</option>
            <option value="general_knowledge">general knowledge</option>
            <option value="vehicles">vehicles</option>
            <option value="art">art</option>
        <option value="gadgets">gadgets</option>

          </select>
        </div>

        {error && <p className="error"> can't generate questions , please try different options</p>}
  <button  type="submit" onClick={handleSubmit} className="submit-btn"> Start </button>
      </form>
    </section>
  </main>
}
export default SetupForm
