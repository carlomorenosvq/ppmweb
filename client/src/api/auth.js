import axios from "./axios.js";


//Métodos para la autenticación, (el verifyTokeRequest también me dio más de un problema)
export const registerRequest = (user) => axios.post(`/register`, user);

export const loginRequest = ( user) => axios.post(`/login`, user);

export const verifyTokenRequest = (user) => axios.get(`/verify`);

