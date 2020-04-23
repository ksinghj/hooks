import React, { useState } from "react";
import ResourceList from "./ResourceList";
import Names from "./Names";

const App = () => {
  const [resource, setResource] = useState("posts");

  return (
    <div className="ui container">
      <div>
        <button onClick={() => setResource("posts")}>Posts</button>
        <button onClick={() => setResource("todos")}>Todos</button>
        <button onClick={() => setResource("users")}>Users</button>
      </div>
      <ResourceList resource={resource} />
      <Names resource={resource} />
    </div>
  );
};

export default App;
