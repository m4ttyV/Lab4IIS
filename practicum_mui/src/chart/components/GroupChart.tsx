import { BarChart } from '@mui/x-charts/BarChart';
import Container from '@mui/material/Container';
import { axisClasses } from "@mui/x-charts";
import React from "react";
import { LineChart } from '@mui/x-charts/LineChart';
import SettingChart from "./SettingChart";

function GroupChart({ data }: { data: any[] }) {
    const [isBar, setIsBar] = React.useState(true);

    const [seriesState, setSeriesState] = React.useState(
        {
            'Максимальная продолжительность': true,
            'Средняя продолжительность': false,
            'Минимальная продолжительность': false,
        });

    const chartSetting = {
        yAxis: [
            {
                label: 'Продолжительность',
            },
        ],
        height: 500,
        margin: { left: 70, bottom: 100 },
        sx: {
            [`& .MuiChartsAxis-left .MuiChartsAxis-label`]: {
                transform: 'translate(-10px, 0)',
            },
        },
    };

    const availableSeries = [
          seriesState['Максимальная продолжительность'] && { dataKey: 'max_duration', label: 'Максимальная продолжительность' },
          seriesState['Средняя продолжительность'] && { dataKey: 'avg_duration', label: 'Средняя продолжительность' },
          seriesState['Минимальная продолжительность'] && { dataKey: 'min_duration', label: 'Минимальная продолжительность' },
        ].filter(Boolean) as { dataKey: string; label: string }[];

    return (
        <Container maxWidth="lg">
            <SettingChart
                series={seriesState}
                setSeries={setSeriesState}
                isBar={isBar}
                setIsBar={setIsBar}
            />

           {isBar ? (
              <BarChart
                dataset={data}
                xAxis={[{ scaleType: 'band', dataKey: 'group' }]}
                series={availableSeries}
                {...chartSetting}
              />
           ) : (
           <LineChart
           dataset={data}
           xAxis={[{ scaleType: 'band', dataKey: 'group' }]}
           series={availableSeries}
           {...chartSetting}
                />
           )}
        </Container>
    );
}

export default GroupChart;
