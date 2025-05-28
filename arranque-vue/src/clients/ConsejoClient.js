import axios from 'axios'; //Facilita las solicitudes HTTP
// Importamos axios para realizar solicitudes HTTP

const consultarRespuesta = async () => {
  // esperamos y extraemos advice directamente
  const { data } = await axios.get('https://api.adviceslip.com/advice');
  return data.slip.advice;
};

// fachada
export const consultarRespuestaFachada = () => {
  return consultarRespuesta();
};
