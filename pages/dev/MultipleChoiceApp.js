// import questions from './tests.json';
// import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

export default function MultipleChoiceApp() {
  const questions = [
    {
      "id": 1,
      "question": "A Member of Parliament from Montreal announces that she will spend her weekend in her electoral district. This means she would be:",
      "answers": [
        "In her office on Parliament Hill.",
        "Visiting the province of Quebec.",
        "In the part of Montreal where she was elected.",
        "Going on a vacation."
      ],
      "correctAnswer": "In the part of Montreal where she was elected.",
      "isMultipleChoice": true,
      "explanation": "",
      "stats": {
        "countA": 0,
        "countB": 0,
        "countC": 0,
        "countD": 0
      }
    },
    {
      "id": 2,
      "question": "After a federal election, which party forms the new government?",
      "answers": [
        "The party with the most elected representatives is invited by the Governor General to become the party in power.",
        "The King himself picks any party to run the government.",
        "The Governor General proposes a law for elected officials to become the governing body.",
        "The Premiers of each province pick a party to run the government"
      ],
      "correctAnswer": "The party with the most elected representatives is invited by the Governor General to become the party in power.",
      "isMultipleChoice": true,
      "explanation": "",
      "stats": {
        "countA": 0,
        "countB": 0,
        "countC": 0,
        "countD": 0
      }
    },
  ];
  const [choices, setChoices] = useState({});
  const onChoiceSelected = (name, choice) => {
    let newChoices = {...choices};
    newChoices[`${name}`] = choice;
    setChoices(newChoices);
  }
  const onSubmit = () => {
    Object.entries(choices).forEach(each => {
      const id = each[0];
      const question = questions.filter(each => each.id == id)[0];
      const {correctAnswer} = question;
      if (correctAnswer === choices[id]) {
        
      }
      else {

      }
    });
  }
  return (
    <div>
      <h1>Canadian Citizenship App</h1>
      {questions.map(each => <Question 
        key={each.id} 
        id={each.id} 
        question={each.question} 
        answers={each.answers} 
        onChoiceSelected={onChoiceSelected}
        />
      )}
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}

function Question({
  id,
  question,
  answers,
  correctAnswer,
  isMultipleChoice,
  explanation,
  stats,
  onChoiceSelected,
}) {
  const mapping = {
    0: 'a',
    1: 'b',
    2: 'c',
    3: 'd',
  };
  return (
    <div>
      <h3>{question}</h3>
      <div>
        {answers.map((each, index) => <Choice 
          key={`${id}-${mapping[index]}`} 
          choice={each} 
          name={id}
          // name={`question-${id}`}
          onChoiceSelected={onChoiceSelected} />
        )}
      </div>
    </div>
  );
}

function Choice({ choice, name, onChoiceSelected }) {
  return (
    <div>
      <input type="radio" name={name} value={choice} onChange={() => onChoiceSelected(name, choice)} />
      <label htmlFor={name}>{choice}</label>
    </div>
  );
}
