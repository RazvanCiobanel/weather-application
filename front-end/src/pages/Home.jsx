import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLatitude, setLongitude } from "../redux/slices/coordinatesSlice";
import { loader, showLoader } from "../redux/slices/loaderSlice";

import dayjs from "dayjs";

const Home = () => {

   const now = dayjs()
    console.log("day: ", now)
  const dispatch = useDispatch();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          if (position) {
            dispatch(setLatitude(position.coords.latitude));
            dispatch(setLongitude(position.coords.longitude));
          }
        },
        (error) => {
          console.error(error);
        },
        { enableHighAccuracy: true,
          maximumAge: 300000 }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <section>
      <div className="ww-card">
        <h1>Hello and welcome to "My weather" !</h1>
        <br />
        <br />
        <p>
          It is not only my weather, but it is also your weather, and her
          weather.
        </p>
        <p>Most important, it is our weather.</p>
        <p>Here you can get:</p>
        <ul className="home-list">
          <li>- local weather based on your location;</li>
          <li>
            - 3 days forecasts for any location 
          </li>
          <li>- and present weather for any location.</li>
        </ul>

        <p>Thank you very much, because you are here and please enjoy it!</p>
      </div>
    </section>
  );
};

export default Home;
