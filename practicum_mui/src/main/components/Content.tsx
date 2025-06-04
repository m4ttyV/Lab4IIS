import Container from '@mui/material/Container';
import structures from "../../data";
import {Grid} from "@mui/material";
import SightingsCard from "./SightingsCard";

const cardData = [structures[6], structures[0],
    structures[5], structures[4]]

function Content() {
  return (
      <Container maxWidth="xl">
          <Grid container spacing={{xs: 9, md: 6}}>
              {cardData.map((item, index) => (
                  <Grid key={index} size={{xs: 12, md: 6}}>
                      <SightingsCard building={item} index={index}/>
                  </Grid>
              ))}
          </Grid>
          <br/>
      </Container>
  );
}

export default Content;