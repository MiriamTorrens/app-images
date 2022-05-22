import { favourites } from "../slices/myPhotosSlice";
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import BasicModal from "../components/MyModal";
import { removeFromFavourites, editDescription } from "../slices/myPhotosSlice";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import DownloadIcon from '@mui/icons-material/Download';
import { Box, ImageList, ImageListItem, ImageListItemBar, IconButton, TextField,  useTheme, useMediaQuery, FormControl, InputLabel, Select, MenuItem } from '@mui/material';


export default function MyPhotos(){
    const dispatch = useDispatch();
    const [query, setQuery] = useState("");
    const [order,setOrder] = useState("");
    const favouritesPhotos = useSelector(favourites);
    const [myPhotos, setMyPhotos] = useState(favouritesPhotos);
    const [open, setOpen] = useState(false);
    const [description, setDescription] = useState("")

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.up('sm'));

    //Buscar por descripción
    function searchTerm(query){
        if(query !== ""){
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

    //Actualizar lista de imágenes al eliminar una foto
    useEffect(() => {
        setMyPhotos(favouritesPhotos);
     },[favouritesPhotos]);
    
    //Modificar la descripcion
    //const handleOpenModal = () => setOpen(true);
    const OpenModal = () => setOpen(true);
    const handleChangeDescription = (photo) => {
        OpenModal();
        setDescription(photo.description);
    }
   
    //Ordenar las fotos
    const handleChange = (event) => {
        setOrder(event.target.value);
    };

    return (
        <>
            <Box sx={{ marginTop:5, display:'flex', width:'100%', justifyContent:'center' }}>
                <TextField
                    label="Search"
                    value={query}
                    onChange={(e) => handleChangeSearch(e.target.value)}
                    sx={{width:'35%'}}/>
                <FormControl fullWidth sx={{width:'10%'}}>
                    <InputLabel>Order</InputLabel>
                    <Select
                        value={order}
                        label="Order"
                        onChange={handleChange} 
                    >
                        <MenuItem value='date'>Date</MenuItem>
                        <MenuItem value='width'>Width</MenuItem>
                        <MenuItem value='height'>Height</MenuItem>
                        <MenuItem value='likes'>Likes</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{width: '80%', margin:'0 auto', display:'flex'}}>
                <ImageList cols={isMobile? 4:1} gap={20} sx={{margin:'0 auto', marginTop:5 }}>
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
                                    <IconButton sx={{ color: 'white' }}><DownloadIcon sx={{fontSize:'xx-large'}} /></IconButton>
                                    <IconButton sx={{ color: 'white' }} onClick={() => dispatch(removeFromFavourites(item))}><DeleteOutlineIcon sx={{fontSize:'xx-large'}} /></IconButton>
                                </>
                            }
                        />
                        </ImageListItem>             
                    ))} 
                </ImageList>
            </Box>
            <BasicModal open={open} setOpen={setOpen} description={description} setDescription={setDescription}/>
        </>

    )
}