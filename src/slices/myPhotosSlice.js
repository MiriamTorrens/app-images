import { createSlice } from '@reduxjs/toolkit'

function savePhoto(photo) {
    localStorage.setItem("favourite_photos", JSON.stringify(photo)); 
}

function getPhotos() {
    const fromStorage = localStorage.getItem('favourite_photos');
    return fromStorage ? JSON.parse(fromStorage) : [];
}

export const myPhotosSlice = createSlice({
  name: 'favourite_photos',
  initialState: {
    photos: getPhotos(),
  },
  reducers: {
    addToFavourites: (state, action) => {
        const f = new Date();
        const newPhoto = {
            date: f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear(),
            id: action.payload.id,
            likes: action.payload.likes,
            description: action.payload.description || "undefined",
            width: action.payload.width,
            height: action.payload.height,
            urlsFull: action.payload.urls.full,
            urlsThumb: action.payload.urls.thumb
        }
        const photosId = state.photos.map(p => p = p.id);
        if(!photosId.includes(action.payload.id)){
          state.photos.push(newPhoto);
          savePhoto(state.photos);
        }
    },
    removeFromFavourites: (state, action) => {
        state.photos = state.photos.filter(p => p.id !== action.payload.id);
        savePhoto(state.photos);
    },
    editDescription: (state, action) => {
        const newPhotos = [...state.photos];
        const index = newPhotos.findIndex(p => p.id === action.payload.id)
        newPhotos[index].description = action.payload.description;
        state.photos = newPhotos;
        savePhoto(state.photos);
    }
  }
})
export const { addToFavourites, removeFromFavourites, editDescription } = myPhotosSlice.actions
export default myPhotosSlice.reducer
export const favourites = state => state.myPhotos.photos;