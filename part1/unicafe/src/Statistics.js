import StatisticsLine from "./StatisticsLine";

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all || 0;
  const positive = (good / all) * 100 || 0;

  return (
    <>
      <h1>statistics</h1>
      {all === 0 ? (
        <p>No feedback given</p>
      ) : (
        <table>
          <tbody>
            <StatisticsLine text="good" value={good} />
            <StatisticsLine text="neutral" value={neutral} />
            <StatisticsLine text="bad" value={bad} />
            <StatisticsLine text="all" value={all} />
            <StatisticsLine text="average" value={average.toFixed(1)} />
            <StatisticsLine text="positive" value={positive.toFixed(1) + "%"} />
          </tbody>
        </table>
      )}
    </>
  );
};

export default Statistics;
