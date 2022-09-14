import { getImages } from "../slices/searchSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import InputSearch from "../components/InputSearch";
import ImageListSearch from "../components/ImageListSearch";
import { useDebounce } from "../hooks/useDebounce";

export default function AllPhotos(props) {
  const { query, setQuery } = props;
  const dispatch = useDispatch();
  const debouncedSearchTerm = useDebounce(query, 5000);

  useEffect(() => {
    dispatch(getImages(query));
  }, [dispatch, debouncedSearchTerm, query]);

  return (
    <>
      <InputSearch query={query} setQuery={setQuery} />
      <ImageListSearch />
    </>
  );
}
