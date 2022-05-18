import { getImages, results} from "../slices/allImagesSlice";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

export default function AllPhotos(){
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const resultado = useSelector(results);

    // useEffect(() => {
    //     dispatch(getImages(query))
    //     console.log('hola')
    // },[dispatch]);
    console.log(query)
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        backgroundColor: 'rgb(128,0,64)',//alpha(theme.palette.common.white, 0.15),,
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
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '12ch',
             '&:focus': {
               width: '20ch',
             },
          },
        },
      }));
    
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
            <Box sx={{ width: '90%', margin:'0 auto' }}>
                <ImageList variant="masonry" cols={3} gap={8}>
                    {resultado && resultado.length && resultado.map((item) => (
                    <ImageListItem key={item.id}>
                        <img
                        src={`${item.urls.small}?w=248&fit=crop&auto=format`}
                        alt={item.description}
                        />
                    </ImageListItem>
                    ))}
                </ImageList>
            </Box>  
        </>
    )
}
