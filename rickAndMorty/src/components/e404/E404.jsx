import style from './e404.module.css'

function E404() {
  return (
    <div className={style.divError}>
      <h1>La página que buscas no existe por aqui. 😳</h1>
      <hr />
      <br></br>
      <img className={style.img404}
      src={'https://i.giphy.com/media/26BkNsQzs593dRzJ6/giphy.webp'}
      ></img>
      
      <br></br>
      <h3>presiona Home para regresar</h3>
    </div>
  );
}
export default E404;
