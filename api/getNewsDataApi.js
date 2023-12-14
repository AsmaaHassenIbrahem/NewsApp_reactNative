
import axios from './apiFactory'
import useAxios from '../hooks/useAxios'

const getNewsDataApi = (apiValue, responseObject="articles" ) => {

const {response, loading, error} = useAxios({
    responseObject,
    axiosInstance: axios,
    method: 'GET',
    requestConfig: {
        params: { q: "tesla", from:"2023-11-14" ,sortBy: "publishedAt", apiKey: apiValue ,pageSize: "30"},
        headers: {
            'Content-Language': 'en-US',
        }
    }
    
});

return {
    response,
    loading,
    error
  };
};

export default getNewsDataApi