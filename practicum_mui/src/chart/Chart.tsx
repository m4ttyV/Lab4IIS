import { Box, Container, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import Navbar from '../components/Navbar';
import GroupGrid from './components/GroupGrid';
import GroupChart from './components/GroupChart';
import { countries, states, cities } from './groupdata';
import React from 'react';

type GroupByOption = 'Страна' | 'Штат' | 'Город';

export default function Chart() {
    const [group, setGroup] = React.useState<GroupByOption>('Страна');
    const [groupData, setGroupData] = React.useState(countries);

    const handleChange = (event: SelectChangeEvent<GroupByOption>) => {
        const value = event.target.value as GroupByOption;
        setGroup(value);

        switch(value) {
            case 'Страна':
                setGroupData(countries);
                break;
            case 'Штат':
                setGroupData(states);
                break;
            case 'Город':
                setGroupData(cities);
                break;
            default:
                setGroupData(countries);
        }
    };

    return (
        <>
            <Navbar active="3" />
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Box sx={{ width: 200, mb: 4 }}>
                    <FormControl fullWidth>
                        <InputLabel>Группировать по</InputLabel>
                        <Select
                            id="select-group"
                            value={group}
                            label="Группировать по"
                            onChange={handleChange}
                        >
                            <MenuItem value="Страна">Стране</MenuItem>
                            <MenuItem value="Штат">Штату</MenuItem>
                            <MenuItem value="Город">Городу</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                {/* Добавляем компонент диаграммы перед таблицей */}
                <GroupChart data={groupData} />
                <GroupGrid data={groupData} />
            </Container>
        </>
    );
}