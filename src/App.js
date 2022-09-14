import { useState } from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import Collection from "./pages/Collection";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  const [query, setQuery] = useState("");
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home query={query} />} />
        <Route
          path="/dashboard"
          element={<Search query={query} setQuery={setQuery} />}
        />
        <Route
          path="myPhotos"
          element={<Collection query={query} setQuery={setQuery} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
