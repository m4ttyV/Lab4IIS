import Navbar from "../components/Navbar";
import SightingsGrid from "./components/SightingsGrid";
import { ruRU } from '@mui/x-data-grid/locales';
import {Container, Typography} from "@mui/material";
import Page from "./page";
import {useParams} from "react-router-dom";

function List() {
    const { id } = useParams();
    if (!id) {
        return (
            <Container maxWidth="lg" sx={{mt: '20px'}}>
                <Typography variant="h4">Запись не найдена😭😭😭</Typography>
            </Container>
        );
    }

    return (
        <div>
            <Navbar active="0"/>
            <Page building_id={id} />
        </div>
    );
}

export default List;