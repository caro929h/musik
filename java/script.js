/** @type {Element | null | undefined} */
const template = document.querySelector("#song-template")?.content;
const list = document.querySelector("#album-list");

if (!template || !list) {
  console.log("Err null checks");
} else {
  const toMinsAndSecs = (millis) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  const pipeArr = (arr) => {
    if (!Array.isArray(arr)) {
      console.error("Result not array!");
      return;
    }

    for (const song of arr) {
      show(song);
    }
  };

  const show = (song) => {
    /** @type {Element} */
    const copy = template.cloneNode(true);

    const millis = Date.parse(song["song length"]) / 60;

    console.log(millis);

    copy.querySelector(".album-name").textContent = song["song name"];

    copy.querySelector(".album-image").src = `/galleri/${song["img"]}`;

    copy.querySelector(".artist").textContent = song["artist"];

    copy.querySelector(".info-release").textContent = new Date(song["released"]).getUTCFullYear();

    copy.querySelector(".info-length").textContent = toMinsAndSecs(millis);

    list.appendChild(copy);
  };

  fetch("https://musik-cab7.restdb.io/rest/music", {
    method: "get",
    headers: {
      "x-apikey": "63eb7a00478852088da6824f",
    },
  })
    .then((e) => e.json())
    .then(pipeArr)
    .catch(console.log);
}
