import { DataGrid, GridRowsProp, GridColDef, GridToolbarContainer,
    GridToolbarColumnsButton, GridToolbarFilterButton, GridToolbarExport } from "@mui/x-data-grid";
import { ruRU } from '@mui/x-data-grid/locales';
import rows from "../table";
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";

function SightingsGrid() {

    const rows1: GridRowsProp = rows;

    const columns: GridColDef[] = [
        {field: 'id', headerName: 'id', flex: 1},
        {field: 'datetime', flex: 0.5},
        {field: 'city', flex: 0.5},
        {field: 'state', flex: 0.5},
        {field: 'country', flex: 0.5},
        {field: 'shape'},
        {field: 'duration (seconds)'},
        {field: 'duration (hours/min)'},
        {field: 'comments'},
        {field: 'date posted'},
        {field: 'latitude'},
        {field: 'longitude'},
    ];
  function CustomToolbar() {
        return (
          <GridToolbarContainer>
            <GridToolbarColumnsButton />
            <GridToolbarFilterButton />
            <Box sx={{ flexGrow: 1 }} />
            <GridToolbarExport/>
          </GridToolbarContainer>
        );
    }
    return (
        <Container maxWidth="lg" sx={{height: '700px', mt: '20px'}}>
          <DataGrid
            localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
            rows={rows1}
            columns={columns}

            slots={{
                toolbar: CustomToolbar,
            }}

          slotProps={{
             pagination: {
                    rowsPerPageOptions: [ 10, 20, 30, 100, 1000 ],
                 }
             }}
          />
        </Container>
  );
}
 export default SightingsGrid;