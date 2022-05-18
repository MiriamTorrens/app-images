import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import{ NavLink } from 'react-router-dom';

export default function Header(){
    return(
        <>
            <Box sx={{ flexGrow: 1, textAlign:{sx:'left', sm:'right' }}}>
                <AppBar position="static" sx={{backgroundColor:'rgb(128,0,64)'}}>
                    <Toolbar>
                        <Typography
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, fontSize:{sx:'small', sm:'x-large'}}}
                        >
                            <NavLink to='/' style={{textDecoration:'none', color:'white'}}>HOME </NavLink>|
                            <NavLink to='/MyPhotos' style={{textDecoration:'none', color:'white'}}> MY PHOTOS</NavLink>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}