import React from "react";
import Container from "react-bootstrap/esm/Container";
import CardCharacter from "../components/CardCharacter";
import Search from "../components/Search";
import { useState, useEffect } from "react";

function Characters() {
  const [Character, setCharacter] = useState([]);
  const [ text, setText ] = useState("");
  const [info, setInfo] = useState({})
  // console.log(text);

  const getMangaCharacters = async () => {
    const temp = await fetch(
      "https://api.jikan.moe/v4/manga/2/characters"
    ).then((res) => res.json());
    // console.log(temp); //requisição dos dados como json

    setCharacter(temp.data.slice()); //pega todo array dentro de data
  };

  useEffect(() => {
    // console.log("Character List");
    getMangaCharacters();
  }, []);


  useEffect(() => { //códigos não executados na primeira renderização
    // console.log(text)    
    if(text){
      fetch(`https://api.jikan.moe/v4/manga/2/characters?q=${text}&limit=1`)
      .then((res) => res.json())
      .then((res) => {
        setInfo(res)
        // console.log(res);
      })
    }
  }, [text]);


  return (
    <Container className="cardCharacter">
      <Search value={text} onChange={(search) => setText(search)} />
      {info.data &&(
        <ul>
          {info.data.map((item)=>(
            <li key={item.mal_id}>
              {item.character.name}
            </li>
          ))}
        </ul>
      )}
      <div className="card-group col-md-12">
        <CardCharacter props={Character} />
      </div>
    </Container>
  );
}
export default Characters;
