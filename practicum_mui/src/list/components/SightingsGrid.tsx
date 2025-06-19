import {
  DataGrid,
  GridColDef,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport
} from "@mui/x-data-grid";
import { ruRU } from '@mui/x-data-grid/locales';
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import axios from "axios";
import { useEffect, useState } from "react";

function SightingsGrid() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/structures/api/v1/api/all_rows")
      .then((res) => {
        // Преобразуем в формат DataGrid
        const formatted = res.data.map((row: any) => ({
          id: row.event_id,
          comments: row.comments,
          date_posted: row.date_posted,
          duration_seconds: row.duration_seconds,
          city: row.city,
          state: row.state,
          country: row.country,
        }));
        setRows(formatted);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Ошибка при загрузке данных:", err);
        setLoading(false);
      });
  }, []);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', flex: 0.3 },
    { field: 'date_posted', headerName: 'Дата публикации', flex: 0.7 },
    { field: 'duration_seconds', headerName: 'Длительность (сек)', flex: 0.5 },
    { field: 'city', headerName: 'Город', flex: 0.5 },
    { field: 'state', headerName: 'Штат', flex: 0.5 },
    { field: 'country', headerName: 'Страна', flex: 0.5 },
    { field: 'comments', headerName: 'Комментарии', flex: 1.2 },
  ];

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <Box sx={{ flexGrow: 1 }} />
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ height: '700px', mt: '20px' }}>
      <DataGrid
        localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
        rows={rows}
        columns={columns}
        loading={loading}
        pagination
        slots={{
          toolbar: CustomToolbar,
        }}
        slotProps={{
          pagination: {
            rowsPerPageOptions: [10, 20, 30, 100],
          },
        }}
      />
    </Container>
  );
}

export default SightingsGrid;
