import { useEffect, useState } from "react";

export const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url, options)
      .then((response) => {
        const logEntry = {
          url,
          body: options.body || null,
          status: response.status,
        };

        let logs;
        try {
          logs = JSON.parse(localStorage.getItem("api_logs")) || [];
        } catch {
          logs = [];
        }
        logs.push(logEntry);
        localStorage.setItem("api_logs", JSON.stringify(logs));

        return response.json();
      })
      .then((json) => setData(json))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
};
