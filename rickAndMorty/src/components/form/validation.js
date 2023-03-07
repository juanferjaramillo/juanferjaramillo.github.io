// -  el nombre de usuario tiene que ser un email _(explora validaciónes REGEX en internet!)_.
// -  el nombre de usuario no puede estar vacío.
// -  el nombre de usuario no puede tener más de 35 caracteres.

// -  la contraseña tiene que tener al menos un número.
// -  la contraseña tiene que tener una longitud entre 6 y 10 caracteres.

const regexEmail =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const regexPass = new RegExp("[0-9]"); //contenga al menos un numero

const validate = (userData) => {
  const errors = {};
  if (!userData.username) errors.username = "el usuario no puede estar vacio";
  if (!regexEmail.test(userData.username))
    errors.username = "el usuario debe ser un email";
  if (userData.username.length > 35)
    errors.username = "el usuario es demasiado largo!";
  //si noexiste o tiene mas de 35 caracteres o no es igual a un email

  if (userData.password.length < 6)
    errors.password = "la contraseña es demasiado corta";
  if (userData.password.length > 10)
    errors.password = "la contraseña es demasiado larga";
  if (!regexPass.test(userData.password))
    errors.password = "el password debe tener al menos un numero";

  
  return errors;
};
export default validate;
