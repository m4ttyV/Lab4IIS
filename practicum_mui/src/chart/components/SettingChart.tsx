import { FormControl, FormLabel, FormControlLabel, RadioGroup, Radio } from '@mui/material';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

type SettingChartProps = {
  isBar: boolean;
  setIsBar: React.Dispatch<React.SetStateAction<boolean>>;
};

function SettingChart({ isBar, setIsBar }: SettingChartProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsBar(event.target.value === 'bar');  // Переключаем состояние в зависимости от выбранного значения
  };

  return (
    <Stack direction="row" justifyContent="center" divider={<Divider orientation="vertical" flexItem />} spacing={2} sx={{ m: "20px 0" }}>
      <FormControl>
        <FormLabel id="label-radio-group">Тип диаграммы:</FormLabel>
        <RadioGroup name="group-radio" value={isBar ? "bar" : "dot"} onChange={handleChange}>
          <FormControlLabel value="bar" control={<Radio checked={isBar} />} label="Гистограмма" />
          <FormControlLabel value="dot" control={<Radio checked={!isBar} />} label="Линейная" />
        </RadioGroup>
      </FormControl>
    </Stack>
  );
}

export default SettingChart;
