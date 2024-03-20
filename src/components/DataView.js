import React from "react";
import "./Components.css";

export default function DataView(props) {
  const { name, data } = props;

  return (
    <div className="data-view">
      <p>{name} Data</p>

      {data &&
        Object.entries(data).map(([key, value]) =>
          value != null ? (
            <div key={key} className="data-table">
              <div className="table-row">
                <p>
                  <strong> {key}: </strong>
                </p>
                <p>{value}</p>
              </div>
            </div>
          ) : null
        )}
    </div>
  );
}
