import React, { useEffect, useState } from "react";

function Alerts() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:4000/alerts");
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setAlerts((prev) => [data, ...prev]);
    };
    return () => socket.close();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Live Alerts</h1>
      <ul>
        {alerts.map((alert, idx) => (
          <li key={idx} className="mb-2 p-2 bg-red-100 border-l-4 border-red-600">
            <strong>{alert.device}</strong>: {alert.message}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Alerts;