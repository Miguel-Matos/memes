import { useState } from "react";

export default function Form() {

  function imgSelect(val) {
    return Math.floor(Math.random() * val);
  }

  const [currentMeme, setMeme] = useState({
    topText: '',
    botText: '',
    url: 'https://i.imgflip.com/1bgw.jpg',
    alt: '',
  }


);

  function handleClick(e) {
    e.preventDefault();

    async function GetMemes() {
      const response = await fetch('https://api.imgflip.com/get_memes', {mode: 'cors'});
      const memeData = await response.json();
      let memeInfo = memeData.data.memes[imgSelect(100)];
        setMeme(() => {
          return {
            ...currentMeme,
            url: memeInfo.url,
            alt: memeInfo.name
          }
        });
        
    }
    
    GetMemes();

  }

  function top() {
    setMeme(() => {
      return {
        ...currentMeme,
        topText: document.getElementById('top').value
      }
    });
  }


  function bottom() {
    setMeme(() => {
      return {
        ...currentMeme,
        botText: document.getElementById('bottom').value
      }
    });
  }


  return (
    <main className="formLayout">
      <form>
        <div className="inputs">
          <input id="top" onInput={top} placeholder="Top" type="text" />
          <input id="bottom" onInput={bottom} placeholder="Bottom" type="text" />
        </div>
        <button onClick={handleClick} type="submit">Get a random new meme!</button>
      </form>
      <div className="memeBox">
        <p className="text" id="topText">{currentMeme.topText}</p>
        <img src={currentMeme.url} className="meme" alt={currentMeme.alt} />
        <p className="text" id="botText">{currentMeme.botText}</p>
      </div>
    </main>

  )
}