fetch("https://musik-cab7.restdb.io/rest/music", {
  method: "get",
  headers: {
    "x-apikey": "63eb7a00478852088da6824f",
  },
});

then((e) => e.json()).then(doSomething);

function doSomething(data) {
  console.log(data);
}
