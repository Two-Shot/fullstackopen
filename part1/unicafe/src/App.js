import { useState } from "react";
import Statistics from "./Statistics";
import Button from "./Button";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (score) => {
    score === 1
      ? setGood(good + 1)
      : score === 0
      ? setNeutral(neutral + 1)
      : setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => handleClick(1)} text="good" />
      <Button handleClick={() => handleClick(0)} text="neutral" />
      <Button handleClick={() => handleClick(-1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
