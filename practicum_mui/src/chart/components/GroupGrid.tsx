// components/GroupGrid.tsx
import { DataGrid, GridColDef, GridInitialState } from "@mui/x-data-grid";
import { tGroup } from "../groupdata";

type GroupProps = {
  data: tGroup[];
};

export default function GroupGrid({ data }: GroupProps) {
  const columns: GridColDef[] = [
    { field: "Группа", headerName: "Группа", flex: 1 },
    { field: "Минимальная высота", headerName: "Минимальная высота" },
    { field: "Максимальная высота", headerName: "Максимальная высота" },
    { field: "Средняя высота", headerName: "Средняя высота" },
  ];

  // Корректный тип для initialState
  const initialState: GridInitialState = {
    pagination: {
      paginationModel: { pageSize: 10 },
    },
  };

  return (
    <DataGrid
      rows={data}
      columns={columns}
      autoHeight
      initialState={initialState} // Передаем объект с правильным типом
    />
  );
}