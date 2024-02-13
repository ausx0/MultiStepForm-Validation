import React from "react";
import TableRowCell from "./TableRowCell";

const TableRow = (props) => {
  const { data, columns } = props;
  return (
    <>
      {data.map((item, itemIndex) => (
        <tr
          className=""
          key={`table-body-${itemIndex}`}
          style={{
            height: "65px",
            backgroundColor: itemIndex % 2 === 0 ? "#F8F9FA" : "white",
          }}
        >
          {columns.map((column, columnIndex) => (
            <TableRowCell
              key={`${column.key}-${itemIndex}`}
              item={item}
              column={column}
              columnIndex={columnIndex}
              totalColumns={columns.length}
            />
          ))}
        </tr>
      ))}
    </>
  );
};

export default TableRow;
