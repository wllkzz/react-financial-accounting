import { useState, useEffect } from 'react';
import PieChart from './PieChart';

function Graphic({ totalIncome, totalExpense }) {
  const [userData, setUserData] = useState({
    labels: ['Income', 'Expenses'],
    datasets: [
      {
        data: [totalIncome, totalExpense],
        backgroundColor: ['green', 'red'],
      },
    ],
  });

  useEffect(() => {
    setUserData((prevData) => ({
      ...prevData,
      datasets: [
        {
          ...prevData.datasets[0],
          data: [totalIncome, totalExpense],
        },
      ],
    }));
  }, [totalIncome, totalExpense]);

  return (
    <div>
      <div>
        <PieChart chartData={userData} />
      </div>
    </div>
  );
}

export default Graphic;
