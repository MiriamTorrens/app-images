import Slider from "../components/Slider";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getImages } from "../slices/searchSlice";
import { NavLink } from "react-router-dom";
import ButtonSearch from "../components/ButtonSearch";

export default function Home(props) {
  const { query } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImages(query));
  }, [dispatch, query]);

  return (
    <>
      <div className="title">
        <h1>
          Find your <span className="color">favorite</span> photos and add them
          to your <span className="color">collection</span>.
        </h1>
        <NavLink to="/dashboard">
          <ButtonSearch />
        </NavLink>
      </div>
      <Slider />
    </>
  );
}
