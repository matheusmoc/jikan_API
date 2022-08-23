import React from "react";
import Container from "react-bootstrap/esm/Container";
import CardCharacter from "../components/CardCharacter";
import Search from "../components/Search";
import { useState, useEffect } from "react";

function Anime() {
  const [Anime, setAnime] = useState([]);
  // console.log(text);

  const getMangaAnime = async () => {
    const temp = await fetch(
      "https://api.jikan.moe/v4/anime?q=Berserk&sfw"
    ).then((res) => res.json());
    console.log(temp); //requisição dos dados como json

    setAnime(temp.data.slice()); //pega todo array dentro de data
  };

  useEffect(() => {
    // console.log("Character List");
    getMangaAnime();
  }, []);



  return (
    <Container className="cardCharacter">
      <div className="card-group col-md-12">
        <CardCharacter props={Anime} />
      </div>
    </Container>
  );
}
export default Anime;
