import { BarChart } from '@mui/x-charts/BarChart';
import Container from '@mui/material/Container';
import {axisClasses} from "@mui/x-charts";
import React from "react";
import { LineChart } from '@mui/x-charts/LineChart';
import SettingChart from "./SettingChart";

function GroupChart({ data }: { data: any[] }) {
  const [isBar, setIsBar] = React.useState(true); // Состояние для переключения между типами диаграмм

  const chartSetting = {
    yAxis: [{ label: 'Высота(м)' }],
    height: 500,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: 'translate(-10px, 0)',
      },
    },
  };

  return (
    <Container maxWidth="lg">
      {/* Ваш компонент управления типами диаграмм */}
      <SettingChart isBar={isBar} setIsBar={setIsBar} />

      {isBar ? (
        <BarChart
          dataset={data} // Данные для диаграммы
          xAxis={[{ scaleType: 'band', dataKey: 'Группа' }]} // Группировка по оси X
          series={[
            { dataKey: 'Максимальная высота', label: 'Максимальная высота' },
            { dataKey: 'Средняя высота', label: 'Средняя высота' },
            { dataKey: 'Минимальная высота', label: 'Минимальная высота' },
          ]}
          {...chartSetting}
        />
      ) : (
        <LineChart
          dataset={data} // Данные для линейной диаграммы
          xAxis={[{ scaleType: 'band', dataKey: 'Группа' }]}
          series={[
            { dataKey: 'Максимальная высота', label: 'Максимальная высота' },
            { dataKey: 'Средняя высота', label: 'Средняя высота' },
            { dataKey: 'Минимальная высота', label: 'Минимальная высота' },
          ]}
          {...chartSetting}
        />
      )}
    </Container>
  );
}

export default GroupChart;