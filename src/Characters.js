import React, { useState } from "react";
import { useQuery } from "react-query";
import Character from "./Character";

function Characters() {
  const [page, setPage] = useState(1);

  const fetchCharacters = async ({ queryKey }) => {
    //querykey is unique key passed by useQuery
    // replace props to x & console x inhere to see allvalues.
    const res = await fetch(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    );
    return res.json();
  };

  //useQuery(unique key, callback function)...
  const { data, status, isPreviousData, isError, isLoading } = useQuery(
    ["characters", page],
    fetchCharacters,
    { keepPreviousData: true }
  );
  // isLoading or status === "loading"...
  if (isLoading) {
    return (
      <div className="loading" style={{ color: "whitesmoke" }}>
        {" "}
        <h4> Loading.... </h4>{" "}
      </div>
    );
  }
  // isError or status === "error"...
  if (isError) {
    return (
      <div className="loading" style={{ color: "white" }}>
        {" "}
        <h4>something went wrong...</h4>{" "}
      </div>
    );
  }

  return (
    <div className="characters">
      {data.results.map((character) => (
        <Character character={character} key={character.id} />
      ))}
      <button
        className="button"
        disabled={!data.info.prev}
        onClick={() => setPage((old) => old - 1)}
      >
        {" "}
        prev{" "}
      </button>
      <button
        className="button"
        disabled={!data.info.next} //(isPreviousData && !data.info.next)
        onClick={() => setPage((old) => old + 1)}
      >
        {" "}
        next{" "}
      </button>
    </div>
  );
}

export default Characters;
