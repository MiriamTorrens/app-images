import { favourites } from "../slices/myPhotosSlice";
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavourites, editDescription } from "../slices/myPhotosSlice";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import DownloadIcon from '@mui/icons-material/Download';
import { Box, ImageList, ImageListItem, ImageListItemBar, IconButton, Typography, useTheme, useMediaQuery  } from '@mui/material';

export default function MyPhotos(){
    const dispatch = useDispatch();
    const favouritesPhotos = useSelector(favourites);
    console.log(favouritesPhotos);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.up('sm'));
    
    
    return (
        <>
            <Box sx={{textAlign:'center', marginTop:5}}>
                <input type='text' placeholder='search'/>
                <select name='select'>
                    <option value='date'>Date</option>
                    <option value='width'>Width</option>
                    <option value='height'>Height</option>
                    <option value='likes'>Likes</option>
                </select>
            </Box>
            <Box sx={{width: '80%', margin:'0 auto', display:'flex'}}>
                <ImageList cols={isMobile? 4:1} gap={20} sx={{margin:'0 auto', marginTop:5 }}>
                    {favouritesPhotos && favouritesPhotos.length && favouritesPhotos.map((item) => (
                        <ImageListItem key={item.id}>
                            <img
                                src={`${item.urlsThumb}?w=248&fit=crop&auto=format`}
                                alt={item.description}
                            />
                        <ImageListItemBar
                            actionIcon={
                                <>
                                    <IconButton sx={{ color: 'white' }}><EditIcon sx={{fontSize:'xx-large'}} /></IconButton>
                                    <IconButton sx={{ color: 'white' }}><DownloadIcon sx={{fontSize:'xx-large'}} /></IconButton>
                                    <IconButton sx={{ color: 'white' }} onClick={() => dispatch(removeFromFavourites(item))}><DeleteOutlineIcon sx={{fontSize:'xx-large'}} /></IconButton>
                                </>
                            }
                        />
                        </ImageListItem>
                                    
                    ))} 
                </ImageList>
            </Box>
        </>

    )
}