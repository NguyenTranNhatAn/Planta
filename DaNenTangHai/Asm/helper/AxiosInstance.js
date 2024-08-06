import axios from "axios";
// import AsyncStorage from '@react-native-async-storage/async-storage';

// khai báo cấu hình cho axios
const AxiosInstance = (contentType = 'application/json') => {
    const axiosInstance = axios.create({
        baseURL: 'http://10.0.2.2:3000'
        //           baseURL: 'https://65bafceeb4d53c066553cff3.mockapi.io'

    });

    // cấu hình gửi đi
    axiosInstance.interceptors.request.use(
        async (config) => {
            // const token = await AsyncStorage.getItem('token');
            const token = 'your_temporary_token';
            config.headers = {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': contentType
            }
            return config;
        },
        err => Promise.reject(err)
    );

    // cấu hình nhận về
    axiosInstance.interceptors.response.use(
        res => res.data,
        err => Promise.reject(err)
    );
    return axiosInstance;
};

export default AxiosInstance;