import Header from "./components/Header";
import { Routes, Route } from 'react-router-dom';
import AllPhotos from './pages/AllPhotos';
import MyPhotos from './pages/MyPhotos';

function App() {
  return (
    <>
      <Header/>
        <Routes>
          <Route path='/' element={<AllPhotos/>}/>
          <Route path='myPhotos' element={<MyPhotos/>}/>
        </Routes>
    </>
  );
}

export default App;
