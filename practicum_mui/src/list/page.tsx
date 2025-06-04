import React from 'react';
import {Link} from 'react-router-dom';
import structures from '../data';
import { Box, Typography, Container } from '@mui/material';
import {styled} from "@mui/material/styles";

interface ParamsProps {
    building_id: string;
}

const StyledLink = styled(Link)(({ theme }) => ({
    color: theme.palette.primary.main, // Используем тему MUI
    textDecoration: 'none',
    '&:hover': {
        textDecoration: 'underline',
    },
}));


function Page({ building_id }: ParamsProps) {
    const building = structures.find((item, index) => index === Number(building_id));
    if (!building) {
        return (
            <Container maxWidth="lg" sx={{mt: '20px'}}>
                <Typography variant="h4">Запись не найдена😭😭😭</Typography>
            </Container>
        );
    }

    return (
        <Container maxWidth="lg" sx={{mt: '20px'}}>
            <Container sx={{ml: '20px', mb: '10px'}}>
                <Typography variant="body1" sx={{ mt: 3 }}>
                   <StyledLink to="/">Главная</StyledLink>   -  {building.title}
                </Typography>
            </Container>

            <Box sx={{ textAlign: 'center', my: 4 }}>
                <Typography variant="h4" sx={{ mt: 3 }}>
                    {building.title}
                </Typography>
                <img
                    src={building.img}
                    alt={building.title}
                    style={{ maxWidth: '100%', maxHeight: '400px', borderRadius: '8px' }}
                />
            </Box>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { md: '1fr', lg: '1fr 1fr' },
                    gap: 3,
                    mt: 4,
                }}
            >
                {building.description.map((paragraph, index) => (
                    <Box
                        key={index}
                        sx={{
                            gridColumn: { sm: index % 2 === 0 ? 1 : 2 },
                        }}
                    >
                        <Typography variant="body1" sx={{ mb: 2 }}>
                            {paragraph}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Container>
    );
}

export default Page;