import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { tGroup } from '../groupdata';

const columns: GridColDef[] = [
    { field: 'Группа', headerName: 'Группа', width: 150 },
    { field: 'Минимальная продолжительность', headerName: 'Минимальная продолжительность', width: 180, type: 'number' },
    { field: 'Максимальная продолжительность', headerName: 'Максимальная продолжительность', width: 180, type: 'number' },
    { field: 'Средняя продолжительность', headerName: 'Средняя продолжительность', width: 180, type: 'number' },
];

type GroupProps = {
    data: tGroup;
};

export default function GroupGrid({ data }: GroupProps) {
    return (
        <div style={{ height: 600, width: '100%' }}>
            <DataGrid
                rows={data}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { pageSize: 10 },
                    },
                }}
                pageSizeOptions={[10]}
                disableRowSelectionOnClick
            />
        </div>
    );
}