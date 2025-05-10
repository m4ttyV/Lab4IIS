import Navbar from "../components/Navbar";
import BuildingsGrid from "./components/BuildingsGrid";
import { ruRU } from '@mui/x-data-grid/locales';

function List() {
  return (
    <div>
        <Navbar active="2"/>
        <BuildingsGrid/>
    </div>
  );
}

export default List;