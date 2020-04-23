import { useState, useEffect } from "react";

const useResources = resource => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async resource => {
      let res = await window.fetch(
        `https://jsonplaceholder.typicode.com/${resource}`
      );
      let data = await res.json();
      setResources(data);
    })(resource);
  }, [resource]); // when resource changes we call func

  return resources;
};

export default useResources;
