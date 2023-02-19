import axios from '../utils/axios';

export const getSession = async () => {
    const { status } = await axios.get('/auth', {
        headers: {
            Authorization: localStorage.getItem("user")
        }
    });
    return status;
};