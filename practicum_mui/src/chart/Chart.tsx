import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import * as React from 'react';
import List from "../list/List";
import {years, countries, types } from "./groupdata";
import GroupGrid from "./components/GroupGrid";
type tSelect = "Страна" | "Год" | "Тип";


function Chart() {
 const [group, setGroup] = React.useState<tSelect>('Страна');

  const [groupData, setGroupData] = React.useState(countries);

  const handleChange = (event: SelectChangeEvent) => {
    setGroup(event.target.value as tSelect);

    /* самостоятельно включить изменение состояния groupData */

  };
  return (
      <div>

        <Box sx={{ width:"200px", m:"auto" }}>
          <FormControl fullWidth>
            <InputLabel> Группировать по </InputLabel>
            <Select
              id="select-group"
              value={ group }
              label="Группировать по"
              onChange={ handleChange }
            >
              <MenuItem value="Страна"> Стране </MenuItem>
              <MenuItem value="Год"> Году </MenuItem>
              <MenuItem value="Тип"> Типу </MenuItem>
            </Select>
         </FormControl>
        </Box>

    </div>
  );
}
export default Chart;