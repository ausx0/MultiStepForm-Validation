import React from "react";

const TableRowCell = (props) => {
  const { item, column, columnIndex, totalColumns } = props;
  const value = item[column.key];
  return (
    <td className=" text-muted custom-font-size" style={{}}>
      <div
        className="d-flex align-items-center"
        style={{
          padding: "20px",
          height: "55px",
          borderRight:
            columnIndex === totalColumns - 1
              ? "none"
              : "1px solid rgba(0, 0, 0, 0.08)",
        }}
      >
        {column.render ? column.render(column, item) : value}
      </div>
    </td>
  );
};

export default TableRowCell;
