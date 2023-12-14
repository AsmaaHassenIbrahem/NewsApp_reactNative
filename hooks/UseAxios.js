import { useEffect, useState} from 'react';

const useAxios = (configObj) => {
  const {
    responseObject, 
      axiosInstance,
      method,
      url='/',
      requestConfig = {}
  } = configObj;

  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  // const controller = new AbortController();

  const fetchData = async () => {
    try {
      setLoading(true)
      const responseData = await axiosInstance[method.toLowerCase()](url, {
        ...requestConfig,
        // signal: controller.signal
    });
      setResponse(responseData.data[responseObject]);
    } catch (error) {
      console.log("errorFrom Api "+ error)

      setError(error)
    }
    setLoading(false);
  };

  useEffect(() => {

    fetchData();
    // return () => controller.abort();
  }, []);

  return {
    response,
    loading,
    error
  };
};

export default useAxios;

