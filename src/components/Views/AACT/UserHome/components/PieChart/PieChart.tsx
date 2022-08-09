import React from 'react';
import Chart from 'chart.js/auto';
import {
  Study,
  ConditionsCountDictionary,
  TopCondition,
  TopConditions,
} from '../../types';
import { ColorValue } from '../../../../../../helpers/colors';
import { chartStyles } from './PieChart.style';

const chartColors = [
  ColorValue.orangeRed,
  ColorValue.orange,
  ColorValue.yellow,
  ColorValue.green,
  ColorValue.teal,
  ColorValue.purple,
];

type Props = {
  loading: boolean;
  studyData: Study[];
};

const PieChart = ({ loading, studyData }: Props) => {
  const [loadingChart, setLoadingChart] = React.useState(true);

  const conditionsCount: ConditionsCountDictionary = React.useMemo(() => {
    const countDictionary: ConditionsCountDictionary = {};
    studyData.forEach((study) => {
      study.Condition.forEach((condition) => {
        if (!countDictionary[condition]) {
          countDictionary[condition] = 1;
        } else countDictionary[condition]++;
      });
    });
    return countDictionary;
  }, [studyData]);

  const topConditions: TopConditions = React.useMemo(() => {
    const sortedConditions: TopCondition[] = Object.keys(conditionsCount)
      .sort((first, second) => conditionsCount[second] - conditionsCount[first])
      .map((condition) => ({
        name: condition,
        count: conditionsCount[condition],
      }));
    const topFive = sortedConditions.slice(0, 5);
    const topFiveTotal = topFive.reduce((sum, { count }) => sum + count, 0);
    const otherCount =
      Object.values(conditionsCount).reduce((sum, count) => sum + count, 0) -
      topFiveTotal;
    const conditionData = [...topFive, { name: 'Other', count: otherCount }];
    return topFive.map((item, i) => ({
      ...item,
      color: chartColors[i],
    }));
  }, [conditionsCount]);

  React.useEffect(() => {
    if (document) {
      if (!loadingChart) setLoadingChart(true);
      const canvas = document.querySelector('canvas');
      const chart = new Chart(canvas, {
        type: 'pie',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [
            {
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
        },
      });
      (chart.canvas.parentNode as any).style.width = '20rem';
      (chart.canvas.parentNode as any).style.height = '20rem';
      (chart.canvas.parentNode as any).style.margin = '0 auto';
      (chart.canvas.parentNode as any).style.overflow = 'visible';

      return () => chart.destroy();
      // const chart = canvas.getContext('2d');
      // const totalConditions: number = topConditions.reduce(
      //   (sum, { count }) => sum + count,
      //   0
      // );
      // let currentAngle = 0;
      // for (let condition of topConditions) {
      //   const portionAngle = (condition.count / totalConditions) * 2 * Math.PI;
      //   chart.beginPath();
      //   chart.arc(100, 100, 100, currentAngle, currentAngle + portionAngle);
      //   currentAngle += portionAngle;
      //   chart.lineTo(100, 100);
      //   chart.fillStyle = condition.color;
      //   chart.fill();
      // }
      setLoadingChart(false);
    }
  }, [topConditions]);

  return (
    <div>
      <canvas />
    </div>
  );
};

export default PieChart;
