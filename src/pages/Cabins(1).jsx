import CabinTable from "../features/cabins/CabinTable-v1";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddCabin from "../features/cabins/addCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";

function Cabins() {
  // eslint-disable-next-line no-unused-vars

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </Row>
      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
