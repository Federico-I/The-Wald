import React, { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Cabins() {
  useEffect(function() {
    getCabins().then((data) => console.log(data));
  }, []);
  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
      <img src="test/buckets" />
    </Row>
  );
}

export default Cabins;
