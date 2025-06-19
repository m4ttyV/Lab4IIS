import {useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import GroupGrid from "./components/GroupGrid";
import {
  Select,
  SelectChangeEvent,
  MenuItem,
  FormControl,
  InputLabel,
  Container,
} from "@mui/material";
import axios from "axios";
import GroupChart from "./components/GroupChart";


export type tGroupItem = {
    id: number;
    group: string;
    min_duration: number;
    avg_duration: number;
    max_duration: number;
};

export default function Chart() {
   const [group, setGroup] = useState<"Страна" | "Штат" | "Город">("Страна");
  const [groupData, setGroupData] = useState<tGroupItem[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchGroupData = async (selectedGroup: typeof group) => {
    setLoading(true);
    try {
      let response;
      switch (selectedGroup) {
        case "Страна":
          response = await axios.get("http://127.0.0.1:5000/structures/api/v1/api/top_countries");
          break;
        case "Штат":
          response = await axios.get("http://127.0.0.1:5000/structures/api/v1/api/top_states");
          break;
        case "Город":
          response = await axios.get("http://127.0.0.1:5000/structures/api/v1/api/top_cities");
          break;
      }
      if (response) {
        setGroupData(response.data);

      }
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    } finally {
      setLoading(false);
    }
  };

    useEffect(() => {
    fetchGroupData(group);
  }, [group]);

  const handleChange = (event: SelectChangeEvent) => {
    const selectedGroup = event.target.value as typeof group;
    setGroup(selectedGroup);
  };

  return (
    <div>
      <Navbar active="3" /> {/* "Диаграммы" — третий пункт меню */}
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <FormControl sx={{ width: 200, mb: 2 }}>
          <InputLabel>Группировать по</InputLabel>
          <Select value={group} onChange={handleChange} label="Группировать по">
            <MenuItem value="Страна">Стране</MenuItem>
            <MenuItem value="Штат">Штату</MenuItem>
            <MenuItem value="Город">Городу</MenuItem>
          </Select>
        </FormControl>
        {loading ? (
          <div>Загрузка...</div>
        ) : (
          <>
            <GroupChart data={groupData} />
            <GroupGrid data={groupData} />
          </>
        )}
      </Container>
    </div>
  );
}
