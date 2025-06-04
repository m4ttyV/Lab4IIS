import { BarChart, LineChart } from '@mui/x-charts';
import Container from '@mui/material/Container';
import { tGroup } from '../groupdata';
import React from 'react';
import SettingChart from './SettingChart';

type GroupChartProps = {
    data: tGroup;
};

export default function GroupChart({ data }: GroupChartProps) {
    const [seriesState, setSeriesState] = React.useState({
        'Максимальная продолжительность': true,
        'Средняя продолжительность': false,
        'Минимальная продолжительность': false,
    });
    const [isBar, setIsBar] = React.useState(true);

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

    const series = Object.entries(seriesState)
        .filter(([_, visible]) => visible)
        .map(([key, _]) => ({
            dataKey: key,
            label: key,
            valueFormatter: (value: number | null) => value ? `${value} с` : '',
            ...(Object.values(seriesState).filter(Boolean).length === 1
                ? { barLabel: 'value' as const }
                : {})
        }));

    return (
        <Container maxWidth="lg" sx={{ mb: 4 }}>
            {isBar ? (
                <BarChart
                    dataset={data}
                    xAxis={[{ scaleType: 'band', dataKey: 'Группа' }]}
                    series={series}
                    colors={['#ff7043', '#6bbf59', '#5d8aa8']}
                    slotProps={{
                        legend: {
                            position: { vertical: 'bottom', horizontal: 'center' },
                        },
                    }}
                    {...chartSetting}
                />
            ) : (
                <LineChart
                    dataset={data}
                    xAxis={[{ scaleType: 'band', dataKey: 'Группа' }]}
                    series={series}
                    colors={['#ff7043', '#6bbf59', '#5d8aa8']}
                    slotProps={{
                        legend: {
                            position: { vertical: 'bottom', horizontal: 'center' },
                        },
                    }}
                    {...chartSetting}
                />
            )}

            <SettingChart
                series={seriesState}
                setSeries={setSeriesState}
                isBar={isBar}
                setIsBar={setIsBar}
            />
        </Container>
    );
}