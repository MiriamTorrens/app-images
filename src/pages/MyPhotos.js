import { favourites } from "../slices/myPhotosSlice";
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import ModalMyPhotos from "../components/ModalMyPhotos";
import { removeFromFavourites } from "../slices/myPhotosSlice";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import DownloadIcon from '@mui/icons-material/Download';
import { Box, ImageList, ImageListItem, ImageListItemBar, IconButton, TextField,  useTheme, useMediaQuery, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
const FileSaver = require('file-saver');

export default function MyPhotos(){
    const dispatch = useDispatch();
    const [query, setQuery] = useState("");
    const [order, setOrder] = useState("");
    const favouritesPhotos = useSelector(favourites);
    const [myPhotos, setMyPhotos] = useState(favouritesPhotos);
    const [open, setOpen] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState({});

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.up('sm'));

    //Buscar por descripción
    function searchTerm(query){
        if(query && query.length){
            const filter = favouritesPhotos.filter(photo => photo.description.toLowerCase().includes(query));
            setMyPhotos(filter);
        }else{
            setMyPhotos(favouritesPhotos);
        }
    }
    const handleChangeSearch = (value) => {
        setQuery(value);
        searchTerm(value);
    };

    //Actualizar lista de imágenes 
    useEffect(() => {
        setMyPhotos(favouritesPhotos);
     },[favouritesPhotos]);

    
    //Modificar la descripcion
    const OpenModal = () => setOpen(true);
    const handleChangeDescription = (photo) => {
        OpenModal();
        setCurrentPhoto(photo);
    }
   
    //Ordenar las fotos
    const handleChange = (order) => {
        setOrder(order);
        const newPhotos = [...favouritesPhotos];
        // no funciona newPhotos.sort((a,b) => a.order - b.order);
        switch(order){
            case 'date':
                newPhotos.sort((a,b) => a.date - b.date);  
                break;
            case 'width': 
                newPhotos.sort((a,b) => a.width - b.width);  
                break;
            case 'height':
                newPhotos.sort((a,b) => a.height - b.height);  
                break;
            case 'likes':
                newPhotos.sort((a,b) => b.likes - a.likes);  
                break;
            default:
                return newPhotos;
        }
        setMyPhotos(newPhotos);
    };
   
    return (
        <>
            <Box sx={{ marginTop:5, display:'flex', width:'100%', justifyContent:'center' }}>
                <TextField
                    label="Search"
                    value={query}
                    onChange={(e) => handleChangeSearch(e.target.value)}
                    sx={{width:{xs:'50%', sm:'35%'}, backgroundColor:'white'}}/>
                <FormControl fullWidth sx={{width:{xs:'30%', sm:'10%'}, backgroundColor:'white'}}>
                    <InputLabel>Order</InputLabel>
                    <Select
                        value={order}
                        label="Order"
                        onChange={(e) => handleChange(e.target.value)} 
                    >
                        <MenuItem value='date'>Date</MenuItem>
                        <MenuItem value='width'>Width</MenuItem>
                        <MenuItem value='height'>Height</MenuItem>
                        <MenuItem value='likes'>Likes</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{width: '80%', margin:'0 auto', display:'flex'}}>
                <ImageList cols={isMobile? 4:1} gap={20} sx={{margin:'0 auto', marginTop:5, marginBottom:10 }}>
                    {myPhotos && myPhotos.length && myPhotos.map((item) => (
                        <ImageListItem key={item.id}>
                            <img
                                src={`${item.urlsThumb}?w=248&fit=crop&auto=format`}
                                alt={item.description}
                            />
                        <ImageListItemBar
                            actionIcon={
                                <>
                                    <IconButton sx={{ color: 'white' }} onClick={() => handleChangeDescription(item)}><EditIcon sx={{fontSize:'xx-large'}} /></IconButton>
                                    <IconButton sx={{ color: 'white' }} onClick={() => FileSaver.saveAs(item.urlsFull, "image")}><DownloadIcon sx={{fontSize:'xx-large'}} /></IconButton>
                                    <IconButton sx={{ color: 'white' }} onClick={() => dispatch(removeFromFavourites(item))}><DeleteOutlineIcon sx={{fontSize:'xx-large'}} /></IconButton>
                                </>
                            }
                        />
                        </ImageListItem>             
                    ))} 
                </ImageList>
            </Box>
            <ModalMyPhotos open={open} setOpen={setOpen} currentPhoto={currentPhoto} setCurrentPhoto={setCurrentPhoto} />
        </>
    )
}