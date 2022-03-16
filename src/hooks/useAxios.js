import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      });
    setLoading(false);
  }, [url]);
  return { loading, error, data };
};

export default useAxios;
