import axios from 'axios';

export default axios.create({
    baseURL: "https://react-java-fullstack-backend-production.up.railway.app/",
    headers: { "ngrok-skip-browser-warning": "true" }
})