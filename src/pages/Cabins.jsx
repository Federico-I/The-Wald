import React, { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Cabins() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>

      <Row>
        <CabinTable />

        <Button onClick={() => setShowForm((show) => !show)}>Add New Cabin</Button>
      </Row>
    </>
  );
}

export default Cabins;
