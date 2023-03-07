const URL_BASE = "https://be-a-rym.up.railway.app/api";
const URL_SEP1 = "/character/";
const URL_SEP2 = "?key=";
const API_KEY = "ff4167f2d3a5.29a3b285bc3fb414a23a";
//const URL_H = `${URL_BASE}/character/${id}?key=${API_KEY}`;
//'https://be-a-rym.up.railway.app/api/character/1?key=ff4167f2d3a5.29a3b285bc3fb414a23a'

const serverFetch = () => {
//const serverFetch = (id) => {
//     //console.log(`${URL_BASE}${URL_SEP1}${id}${URL_SEP2}${API_KEY}`);
//     fetch(`${URL_BASE}${URL_SEP1}${id}${URL_SEP2}${API_KEY}`)
//       //URL_H = 'https://be-a-rym.up.railway.app/api/character/1?key=ff4167f2d3a5.29a3b285bc3fb414a23a'
//       .then((item) => item.json())
//       .then((datos) => {
//          let CharFetched = [...characters, datos]; //nuevo array con los caracteres existentes unidos al nuevo.
//         return CharFetched;
//     })
//       .catch((err) => console.log(`Ocurrio el error ${err}`));
   };
  export default serverFetch;