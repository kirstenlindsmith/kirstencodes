import React from 'react';
import Chart from 'chart.js/auto';
import {
  Study,
  ConditionsCountDictionary,
  TopCondition,
  TopConditions,
} from '../../types';
import {
  ColorValue,
  changeHexColor,
  accessibleContrastColor,
} from '../../../../../../helpers/colors';
import { chartStyles } from './PieChart.style';

const chartColors = [
  ColorValue.pink,
  ColorValue.blue,
  accessibleContrastColor(ColorValue.blue, true),
  ColorValue.lightBlue,
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
        label: condition,
        count: conditionsCount[condition],
      }));
    const topSix = sortedConditions.slice(0, 6);
    const topThree = topSix.slice(0, 3);
    const other = topSix.slice(3);
    const otherCount = other.reduce((sum, { count }) => sum + count, 0);
    const conditionData = [...topThree, { label: 'Other', count: otherCount }];
    return conditionData.map((item, i) => ({
      ...item,
      color: chartColors[i],
    }));
  }, [conditionsCount]);

  React.useEffect(() => {
    if (document) {
      if (!loadingChart) setLoadingChart(true);
      const labels = topConditions.reduce(
        (labels, { label }) => [...labels, label],
        []
      );
      const data = topConditions.reduce(
        (counts, { count }) => [...counts, count],
        []
      );
      const backgroundColor = topConditions.reduce(
        (colors, { color }) => [...colors, color],
        []
      );
      const borderColor = topConditions.reduce(
        (colors, { color }) => [...colors, changeHexColor(color, -20)],
        []
      );
      const canvas = document.querySelector('canvas');
      const chart = new Chart(canvas, {
        type: 'pie',
        data: {
          labels,
          datasets: [
            {
              label: 'Common conditions',
              data,
              backgroundColor,
              borderColor,
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

      setLoadingChart(false);
      return () => chart.destroy();
    }
  }, [topConditions]);

  return (
    <div>
      <canvas />
    </div>
  );
};

export default PieChart;