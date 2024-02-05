import React from "react";
const TableHeader = (props) => {
  const { columns } = props;
  return (
    <tr>
      {columns.map((column, columnIndex) => (
        <th
          // className="text-white"
          key={`table-head-cell-${columnIndex}`}
          style={{
            width: column.width,
            color: "white",
            padding: "10px",
            backgroundColor: "#7493A8",
            borderRadius:
              columnIndex === 0
                ? "8px 0 0 8px"
                : columnIndex === columns.length - 1
                ? "0 8px 8px 0"
                : "0",
          }}
        >
          {column.title}
        </th>
      ))}
    </tr>
  );
};

export default TableHeader;
