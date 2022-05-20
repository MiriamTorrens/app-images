import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import{ NavLink } from 'react-router-dom';

export default function Header(){
    return(
        <>
            <Box sx={{ flexGrow: 1, textAlign:'right'}}>
                <AppBar position="static" sx={{backgroundColor:'rgb(128,0,64)'}}>
                    <Toolbar>
                        <CameraEnhanceIcon sx={{fontSize:{sm:'xx-large'}}}/>
                        <Typography sx={{marginLeft:1, fontSize:'x-large', marginTop:0.5}}>IMG</Typography>
                        
                        <Typography
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, fontSize:{xs:'large', sm:'x-large'}}}
                        >
                            <NavLink to='/' style={{textDecoration:'none', color:'white'}}> HOME </NavLink>|
                            <NavLink to='/MyPhotos' style={{textDecoration:'none', color:'white'}}> MY PHOTOS</NavLink>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}