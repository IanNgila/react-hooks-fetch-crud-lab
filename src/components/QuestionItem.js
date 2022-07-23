import React,{useState} from "react";

function QuestionItem({ question, questionsDisplay, deleteQuestion, updateAnswer }) {

  
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li id={id}>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={updateAnswer}>{options}</select>
      </label>
      <button id={id} onClick={deleteQuestion}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;

