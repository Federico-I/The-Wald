import React from 'react';
import TableOperations from "../../ui/TableOperations";
import Filter from "";

function CabinTableOperatinos() {
  return (
    <TableOperations>
      <Filter filterField="discount" options={[
        {value: "all", label: "All"}
      ]}/>
    </TableOperations>
  )
}

export default CabinTableOperatinos;