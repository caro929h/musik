fetch("https://musik-cab7.restdb.io/rest/music", {
  method: "get",
  headers: {
    "x-apikey": "63eb7a00478852088da6824f",
  },
});

.then((e)=>e.json())
.then(showMusics);

function showMusics(music) {
  products.forEach(showMusic);
}

function showMusic(music) {
  console.log(music);
  //fang template
  const template = document.querySelector("#song_template").content;
  //lav en kopi
  const copy = template.cloneNode(true);
}
