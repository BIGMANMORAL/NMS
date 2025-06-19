import React, { useEffect, useRef } from "react";
import cytoscape from "cytoscape";

function Topology() {
  const cyRef = useRef(null);

  useEffect(() => {
    const cy = cytoscape({
      container: cyRef.current,
      elements: [
        { data: { id: "a" } },
        { data: { id: "b" } },
        { data: { source: "a", target: "b" } },
      ],
      style: [
        {
          selector: "node",
          style: { "background-color": "#0074D9", label: "data(id)" },
        },
        { selector: "edge", style: { width: 3, "line-color": "#ccc" } },
      ],
      layout: { name: "grid" },
    });
    return () => cy.destroy();
  }, []);

  return (
    <div className="p-6">
      <div ref={cyRef} style={{ height: "500px" }} />
    </div>
  );
}

export default Topology;