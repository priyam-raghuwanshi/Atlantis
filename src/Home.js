import React, { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyapi.online/api/movies");
        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="m-5 container">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {data.map((movie) => (
          <div className="col" key={movie.id}>
            <div className="card h-100">
              {/* <img
                src={movie.image}
                className="card-img-top"
                alt={movie.movie}
              /> */}
              <div className="card-body">
                <h5 className="card-title">{movie.movie}</h5>
                <p className="card-text">Rating: {movie.rating}</p>
                <a href={movie.imdb_url} className="btn btn-primary" target="_blank">
                  View on IMDb
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
