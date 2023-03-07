import { getDefaultNormalizer } from "@testing-library/react";
import React, {useEffect}  from "react";
import { useNavigate } from "react-router-dom";
import style from './form.module.css'
import validate from './validation.js'
import { connect } from "react-redux";
import { setLogin } from "../../redux/actions";

const usr_auth = 'juanfer.jaramillo@gmail.com';
const psw_auth = 'juan123';

function Form({setLogin}) {
  //const [access, setAccess] = React.useState(false);

  const navigate = useNavigate();  //se asigna para poder usarla dentro de la funcion login
  
  
  const login = (userData, event) => {
    //setea el estado de login
    event.preventDefault()
    if (
      userData.username === usr_auth &&
      userData.password === psw_auth
      ) {
        setLogin();
        navigate('/home');
      }
    }
    
    //   useEffect(() => {
    //     !access && navigate('/');
    //  }, [access]);

  //si se permite acceso, vaya a home
  // useEffect(useNavigate('/home'), [access]);

  const [userData, setUserData] = React.useState({ 
    username: '', 
    password: '' });

  const [errors, setErrors] = React.useState({
    username: '', 
    password: '' 
  });

  const handleInputChange = (evento) => {
    setUserData({
      ...userData,
      [evento.target.name]: evento.target.value
    });
    const validar = validate({...userData,[evento.target.name]:evento.target.value});
    //retorna un objeto de errores {username: errors:}
    setErrors(validar);
  };

  return (
    <div>
      <div className={style.frame}>
        <label className={style.title}>ACCESO RESTRINGIDO</label>
        <hr />
        <form 
        className={style.form}
        type='submit'
        onSubmit={(event)=>login(userData, event)}
        >
          <input 
          className={style.inputForm} 
          name='username'
          type='text'
          placeholder='usuario'
          value={userData.username}
          onChange={handleInputChange}>
          </input>
          <p className={style.warning}
          >{errors.username}
          </p>

          <br></br>
          <input 
          className={style.inputForm}
          name='password'
          type='password'
          placeholder='password'
          value={userData.password}
          onChange={handleInputChange}>  
          </input>
          <p className={style.warning}
          >{errors.password}
          </p>
          <br></br>
          <button 
          type='submit' 
          className={style.submit}>Log in</button>
        </form>
      </div>
    </div>
  );
}


export const mapDispatchToProps = (dispatch) => {
  return {
    setLogin: ()=> dispatch(setLogin())
}
}

// export default Form;
export default connect(
  null, //arma un objeto de lo que obtiene del global state y lo alimenta a props de su mismo componente
  mapDispatchToProps //adiciona la funcion dispatch que obtiene del global state que recibe a los props
)(Form)