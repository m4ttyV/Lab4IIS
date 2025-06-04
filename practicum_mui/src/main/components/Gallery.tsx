import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import structures from "../../data";
import Box from "@mui/material/Box";
import Container from '@mui/material/Container';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const imgData=structures.slice(0, -1);

function Gallery() {
  return (
<Container maxWidth="lg">
      <Box sx={{width: 900, height: 480, overflowY: 'scroll', m: '20px auto'}}>
        <ImageList variant="quilted" cols={ 5 } gap={ 5 } >
          {imgData.map((item) => (
            <ImageListItem key={item.img}>
              <img

                srcSet={ item.img }
                src={ item.img }
                alt={ item.title }
                loading="lazy"
              />
              <ImageListItemBar position="bottom" title={ item.title } />
            </ImageListItem>
          ))}
        </ImageList>
          </Box>
</Container>
  );
}

export default Gallery;