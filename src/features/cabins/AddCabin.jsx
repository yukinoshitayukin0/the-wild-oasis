import Button from "../../ui/Button";
import Modal from "../../ui/Modal-v1";
import CreateCabinForm from "./CreateCabinForm";
// import CabinTable from "./CabinTable";
function AddCabin() {
  return (
    <Modal>
      <div>
        <Modal.open opensWindowName="cabin-form">
          <Button>Add Cabin</Button>
        </Modal.open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </div>
      {/* <Modal.open>
        <Button>Show table</Button>
      </Modal.open>
      <Modal.Window>
        <CabinTable />
      </Modal.Window> */}
    </Modal>
  );
}

// const [isOpenModal, setIsOpenModal] = useState(false);

// return (
//   <div>
//     <Button onClick={() => setIsOpenModal((show) => !show)}>
//       Add new cabin
//     </Button>
//     {isOpenModal && (
//       <Modal onClose={() => setIsOpenModal(false)}>
//         <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
//       </Modal>
//     )}
//   </div>
// );

export default AddCabin;
