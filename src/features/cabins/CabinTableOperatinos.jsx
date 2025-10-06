import React from 'react';
import TableOperations from "../../ui/TableOperations";
import Filter from "";
import SortBy from '../../ui/SortBy';

function CabinTableOperatinos() {
  return (
    <TableOperations>
      <Filter filterField="discount" options={[
        {value: "all", label: "All"},
        {value: "no-discount", label: "No discount"},
        {value: "with-discount", label: "With discount"}
      ]}/>

      <SortBy options={[
        {value: "name-asc", label: "Sort by name (A-Z)"},
        {value: "name-desc", label: "Sort by name (Z-A)"},
      ]}/>
    </TableOperations>
  )
}

export default CabinTableOperatinos;