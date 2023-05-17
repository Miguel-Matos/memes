import { useState } from "react";

export default function Form() {

  function imgSelect(val) {
    return Math.floor(Math.random() * val);
  }

  const [currentMeme, setMeme] = useState('');
  const [alt, setAlt] = useState('');

  function handleClick(e) {
    e.preventDefault();

    async function GetMemes() {
      const response = await fetch('https://api.imgflip.com/get_memes', {mode: 'cors'});
      const memeData = await response.json()
      let memeInfo = memeData.data.memes[imgSelect(100)]
        let imgUrl = memeInfo.url;
        let imgAlt = memeInfo.name;
        setMeme(imgUrl);
        setAlt(imgAlt);
    }
    
    GetMemes();

  }


  return (
    <main className="formLayout">
      <form>
        <div className="inputs">
          <input placeholder="Top" type="text" />
          <input placeholder="Bottom" type="text" />
        </div>
        <button onClick={handleClick} type="submit">Get a random new meme!</button>
      </form>
      <img src={currentMeme} className="meme" alt={alt} />
    </main>

  )
}