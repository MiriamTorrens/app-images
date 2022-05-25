import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer(){
    const styles = {
        textDecoration:'none',
        color:'white',
        cursor:'pointer'
    }
    const stylesIcon = {
        fontSize:{xs:'medium', sm:'x-large'}
    }
    return(
        <>
            <Box>
                <AppBar position="static" sx={{backgroundColor:'rgb(128,0,64)'}}>
                    <Toolbar>
                        <CameraEnhanceIcon sx={{fontSize:'xx-large', display:{xs:'none', sm:'block'}}}/>
                        {/* <Typography sx={{marginLeft:1, fontSize:'x-large', marginTop:0.5}}>IMG</Typography> */}
                        <Typography
                            noWrap
                            component="div"
                            sx={{fontSize:{xs:'small', sm:'medium', margin:'0 auto'}}}
                        >
                        <a href='https://unsplash.com/es/privacidad' target='_blank' rel='noreferrer' style={styles}>Privace Policy</a> |
                        <a href='https://unsplash.com/es/t%C3%A9rminos' target='_blank' rel='noreferrer' style={styles}> Terms</a> |
                        <a href='https://unsplash.com/security?utm_source=unsplash&utm_medium=referral' target='_blank' rel='noreferrer' style={styles}> Security</a>
                        </Typography>
                        <IconButton><a href='https://twitter.com/unsplash?utm_source=unsplash&utm_medium=referral' target='_blank' rel='noreferrer' style={styles}><TwitterIcon sx={stylesIcon}/></a></IconButton>
                        <IconButton><a href='https://www.facebook.com/unsplash/' target='_blank' rel='noreferrer' style={styles}><FacebookIcon sx={stylesIcon}/></a></IconButton>
                        <IconButton><a href='https://www.instagram.com/accounts/login/?next=/unsplash/'target='_blank' rel='noreferrer'  style={styles}><InstagramIcon sx={stylesIcon} /></a></IconButton>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}