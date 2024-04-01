import  axios from 'axios';


export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: '1e08d275210140c5848343c81e26d463'
    }
})