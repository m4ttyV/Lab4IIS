import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {styled} from "@mui/material/styles";
import {Link} from "react-router-dom";

interface ComponentProps {
    building: {
        img: string,
        title: string,
        description: string[],
    },
    index: number
}

const StyledTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    textAlign: 'justify',
    marginBottom: theme.spacing(2),
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 8,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
}));

const StyledLink = styled(Link)(({ theme }) => ({
    color: theme.palette.primary.main, // Используем тему MUI
    textDecoration: 'none',
    '&:hover': {
        textDecoration: 'none',
        opacity: '90%'
    },
}));

function SightingsCard({building, index}: ComponentProps) {
     const isEven = index % 2 === 1;

    return (
        <Card sx={{  display: 'flex', marginBottom: 3,
            maxHeight: 300, flexDirection: isEven ? 'row' : 'row-reverse' }}>
            <CardMedia
                component="img"
                alt={ building.title }
                image={ building.img }
                sx={{width: '40%',
                    objectFit: 'cover',
                    maxHeight: '300px',}}
            />
            <Box>
                <CardContent>
                    <Typography gutterBottom variant="h5" >
                        { building.title }
                    </Typography>
                    <StyledTypography variant="body2">
                        {building.description[0]}
                    </StyledTypography>
                </CardContent>
                <CardActions sx={{ justifyContent: isEven ? 'flex-end' : 'flex-start' }} >
                    <StyledLink key={ index } to={ "/list/" + index }>
                        <Button size="small">Подробнее</Button>
                    </StyledLink>
                </CardActions>
            </Box>
        </Card>
    )
}

export default SightingsCard;