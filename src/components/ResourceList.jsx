import React from "react";
import useResources from "./useResources";

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  return (
    <ul className="ui list">
      {resources.map(record => {
        if (record.name) {
          return (
            <React.Fragment>
              <li key={record.id}>User: {record.name}</li>
              <p>Email: {record.email}</p>
            </React.Fragment>
          );
        }
        return <li key={record.id}>{record.title}</li>;
      })}
    </ul>
  );
};

export default ResourceList;
