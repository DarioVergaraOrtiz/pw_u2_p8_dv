import axios from "axios"; //la liberia lo que esta entre comilla

const consultarRespuesta = async () => {
    const respuesta = axios.get('https://yesno.wtf/api').then(rpt => rpt.data); //genera una respuestaa 
    console.log();
    return respuesta;

}

//funciones fachada
export const consultarRespuestaFachada = async () => {
    return await consultarRespuesta();
}