import { useState } from "react";
import Navbar from "../components/Navbar";
import GroupGrid from "./components/GroupGrid";
import { countries, years, types, tGroup } from "./groupdata"; // tGroup - массив объектов
import {
  Select,
  SelectChangeEvent,
  MenuItem,
  FormControl,
  InputLabel,
  Container,
} from "@mui/material";

export default function Chart() {
  const [group, setGroup] = useState<"Страна" | "Год" | "Тип">("Страна");

  // groupData должен быть массивом типа tGroup[]
  const [groupData, setGroupData] = useState<tGroup>(countries); // countries - это массив данных

  const handleChange = (event: SelectChangeEvent) => {
    const selectedGroup = event.target.value as "Страна" | "Год" | "Тип";
    setGroup(selectedGroup);

    // Обновляем данные в зависимости от выбранной группировки
    switch (selectedGroup) {
      case "Страна":
        setGroupData(countries); // countries - это массив объектов типа tGroup
        break;
      case "Год":
        setGroupData(years); // years - это массив объектов типа tGroup
        break;
      case "Тип":
        setGroupData(types); // types - это массив объектов типа tGroup
        break;
    }
  };

  return (
    <div>
      <Navbar active="3" /> {/* "Диаграммы" — третий пункт меню */}
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <FormControl sx={{ width: 200, mb: 2 }}>
          <InputLabel>Группировать по</InputLabel>
          <Select value={group} onChange={handleChange} label="Группировать по">
            <MenuItem value="Страна">Стране</MenuItem>
            <MenuItem value="Год">Году</MenuItem>
            <MenuItem value="Тип">Типу</MenuItem>
          </Select>
        </FormControl>
        <GroupGrid data={groupData} /> {/* Передаем массив данных */}
      </Container>
    </div>
  );
}
