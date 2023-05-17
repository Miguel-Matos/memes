import React from "react";

function imgSelect(val) {
  return Math.floor(Math.random() * val);
}

export default async function GetMemes() {
  const response = await fetch('https://api.imgflip.com/get_memes', {mode: 'cors'});
  response.json().then(function(response) {
    console.log(response.data.memes[imgSelect(100)].url)
    let data = response.data.memes[imgSelect(100)].url
    return (data)
  });
}