import React from 'react';
import ChartJS from 'chart.js/auto';
import useMobile from '../../../../../../hooks/useMobile';
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
import LoadingAnimation from '../../../../../Shared/LoadingAnimation';
import { NoResults } from '../../../../../Shared/Shared.style';
import { ChartContainer, ChartTitle, Chart } from './PieChart.style';

const chartColors = [
  ColorValue.pink,
  ColorValue.blue,
  accessibleContrastColor(ColorValue.blue),
  ColorValue.lightBlue,
];

type Props = {
  loading: boolean;
  studyData: Study[];
};

const PieChart = ({ loading, studyData }: Props) => {
  const isMobile = useMobile();
  const noData = studyData.length < 1;
  const hideTable = loading || noData;

  const LoadingOrBlank = (): JSX.Element | null => {
    if (loading) {
      return <LoadingAnimation />;
    } else if (noData) {
      return <NoResults>No results</NoResults>;
    } else return null;
  };

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
    const conditionData = noData
      ? []
      : [...topThree, { label: 'Other', count: otherCount }];
    return conditionData.map((item, i) => ({
      ...item,
      color: chartColors[i],
    }));
  }, [conditionsCount]);

  React.useEffect(() => {
    if (document) {
      const labels = topConditions.reduce(
        (labels, { label, count }) => [...labels, `${label} (${count})`],
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
      const chart = new ChartJS(canvas, {
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
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              position: 'bottom',
              labels: {
                usePointStyle: true,
              },
            },
          },
        },
      });
      (chart.canvas.parentNode as any).style.display = noData
        ? 'none'
        : 'block';
      (chart.canvas.parentNode as any).style.width = isMobile ? '50%' : '20rem';
      (chart.canvas.parentNode as any).style.height = isMobile
        ? 'auto'
        : '20rem';
      (chart.canvas.parentNode as any).style.margin = 'auto';
      (chart.canvas.parentNode as any).style.overflow = 'visible';
      return () => chart.destroy();
    }
  }, [topConditions, isMobile]);

  return (
    <ChartContainer>
      <ChartTitle>Common Conditions</ChartTitle>
      {hideTable ? <LoadingOrBlank /> : null}
      <Chart hide={loading}>
        <canvas />
      </Chart>
    </ChartContainer>
  );
};

export default PieChart;
