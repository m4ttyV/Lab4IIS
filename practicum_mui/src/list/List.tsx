import Navbar from "../components/Navbar";
import SightingsGrid from "./components/SightingsGrid";
import { ruRU } from '@mui/x-data-grid/locales';

function List() {
  return (
    <div>
        <Navbar active="2"/>
        <SightingsGrid/>
    </div>
  );
}

export default List;