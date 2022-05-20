import { getImages, results} from "../slices/allPhotosSlice";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, ImageList, ImageListItem, ImageListItemBar, InputBase, IconButton, useTheme, useMediaQuery, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import { addToFavourites } from "../slices/myPhotosSlice";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    backgroundColor: 'rgb(128,0,64)',
    borderTop: '1px solid white',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:'white'
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'white',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%'
    },
  }));

export default function AllPhotos(){
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const resultsAPI = useSelector(results);

    useEffect(() => {
        dispatch(getImages(query));
     },[query, dispatch]);

     
     const theme = useTheme()
     const isMobile = useMediaQuery(theme.breakpoints.up('sm'))
     
    return (
        <>
            <Search>
                <SearchIconWrapper>
                <SearchIcon />
                </SearchIconWrapper>
                {<StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    value={query}
                    onChange={(e)=> setQuery(e.target.value)}
                />}
            </Search>
            <Box sx={{ width: '80%', margin:'0 auto'}}>
                <ImageList variant="masonry" cols={isMobile? 3:1} gap={20}>
                    {resultsAPI && resultsAPI.length && resultsAPI.map((item) => (
                    <ImageListItem key={item.id}>
                        <img
                        src={`${item.urls.thumb}?w=248&fit=crop&auto=format`}
                        alt={item.alt_description}
                        />
                    <ImageListItemBar
                        sx={{
                            background:
                            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                            fontSize:'small'
                        }}
                        title={item.likes}
                        position="top"
                        actionIcon={
                            <Box sx={{fontSize:'x-large'}}>
                                <IconButton
                                sx={{ color: 'white' }}
                                >
                                <FavoriteBorderIcon />
                                </IconButton>
                            </Box>
                        }
                        actionPosition="left"
                    />
                <ImageListItemBar
                    title={'Author: '+item.user.name}
                    subtitle={item.user.social.instagram_username}
                    actionIcon={
                    <IconButton sx={{ color: 'white' }} onClick={() => dispatch(addToFavourites(item))}>
                       <Typography variant='h5'>Add</Typography><AddPhotoAlternateIcon  sx={{fontSize:'xxx-large'}} />
                    </IconButton>
                    }
                    />
                </ImageListItem>
                    ))} 
                </ImageList>
            </Box>  
        </>
    )
}
