import Navbar from "../components/Navbar";
import BuildingsGrid from "./components/SightingsGrid";
import { ruRU } from '@mui/x-data-grid/locales';

function ListAll() {
  return (
    <div>
        <Navbar active="2"/>
        <BuildingsGrid/>
    </div>
  );
}

export default ListAll;