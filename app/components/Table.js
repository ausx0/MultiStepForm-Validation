import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const Table = (props) => {
  const { data, columns } = props;
  return (
    <table
      style={{
        width: "100%",
      }}
    >
      <thead>
        <TableHeader columns={columns} />
      </thead>
      <tbody>
        <TableRow data={data} columns={columns} />
      </tbody>
    </table>
  );
};

export default Table;
