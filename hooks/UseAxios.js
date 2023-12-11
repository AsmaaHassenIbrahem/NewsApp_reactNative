import { useEffect, useState} from 'react';
import axios from 'axios';


const UseAxios = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const url = "https://newsapi.org/v2/everything?q=tesla&from=2023-11-10&sortBy=publishedAt&apiKey=e9a4934c51a940119b91329b8c658223&pageSize=30";

  
  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await axios.get(url, {
        'Content-Type': 'application/json'});
      setNewsData(response.data.articles);
    } catch (error) {
      console.log("error "+ error)

      setError(error)
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    newsData,
    loading,
    error
  };
};

export default UseAxios;

