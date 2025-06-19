import * as React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, TableContainer } from '@mui/material';


interface GroupGridProps {
    data: {
    id: number;
    group: string;
    min_duration: number;
    avg_duration: number;
    max_duration: number;
}[];
}

export default function GroupGrid({ data }: GroupGridProps) {
    return (
        <TableContainer component={Paper} sx={{ mt: 4 }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Группа</TableCell>
                        <TableCell>Минимальная продолжительность</TableCell>
                        <TableCell>Средняя продолжительность</TableCell>
                        <TableCell>Максимальная продолжительность</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(row => (
                        <TableRow key={row.id}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.group}</TableCell>
                            <TableCell>{row.min_duration}</TableCell>
                            <TableCell>{row.avg_duration}</TableCell>
                            <TableCell>{row.max_duration}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

