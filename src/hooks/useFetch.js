import React from "react";

const useFetch = (URL) => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetch(URL, {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        setError(err);
      });
  }, [URL]);
  return [data, error];
};

export default useFetch;
