import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Button, Drawer, Typography } from '@mui/material';
import React, {ComponentProps} from "react";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MenuItem from '@mui/material/MenuItem';
import {Link} from 'react-router-dom';

const StyledToolbar = styled(Toolbar)(({ theme }) =>
({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    border: '1px solid',
    borderColor: theme.palette.divider,
    padding: '8px 12px',
}));

function Navbar({ active } : ComponentProps<any>) {
    {
        const [open, setOpen] = React.useState(false);

        const toggleDrawer = (newOpen: boolean) => () => {
            setOpen(newOpen);
        };
        return (
            <AppBar
                position="static"
                sx={{
                    boxShadow: 0,
                    bgcolor: 'transparent',
                    mt: '28px',
                }}
            >
                <Container maxWidth="xl">
                    <StyledToolbar>
                        <Typography variant="h6" sx={{color: '#5d8aa8'}}>
                            Самые высокие здания и сооружения
                        </Typography>
                        <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                            <Link to="/">
                                <Button variant="contained" color="info" size="medium">
                                    Главная
                                </Button>
                            </Link>
                            <Link to="/list">
                                <Button color="info" size="medium">
                                    Список зданий
                                </Button>
                            </Link>
                            <Link to="/chart">
                              <Button sx={{ color: active === "3" ? "red" : "inherit" }}>
                                Диаграммы
                              </Button>
                            </Link>
                            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                                <MenuIcon/>
                            </IconButton>
                            <Drawer
                                anchor="top"
                                open={open}
                                onClose={toggleDrawer(false)}
                            >
                                <Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'flex-end',
                                        }}
                                    >
                                        <IconButton
                                            onClick={toggleDrawer(false)}>
                                            <CloseRoundedIcon/>
                                        </IconButton>
                                    </Box>
                                    <MenuItem> Главная </MenuItem>
                                    <MenuItem>Список зданий</MenuItem>
                                    <MenuItem>Диаграммы</MenuItem>
                                </Box>
                            </Drawer>
                        </Box>
                        <Box sx={{display: {xs: 'flex', md: 'none'}}}>
                            <IconButton aria-label="Menu button">
                                <MenuIcon/>
                            </IconButton>
                        </Box>
                    </StyledToolbar>
                </Container>

            </AppBar>
        );
    }

}
export default Navbar;