import React from "react";
import useResources from "./useResources";

const Names = ({ resource }) => {
  const resources = useResources(resource);

  return (
    <ul className="ui list">
      {resources.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default Names;
