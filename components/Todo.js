// another component. Name starts with Capitalised letter. Props is a JS object that comes with properties like 'text'. Access by using {} and dot notation or other JS selectors to make reusable components.
import { useState } from "react"; //import form library
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false); //state is false so modal is closed initially. Always returns 2 elements. First element is current state, second is a function that allows you to change the value.

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler () {
      setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
      {modalIsOpen && <Backdrop onCancel= {closeModalHandler}/>}
    </div>
  );
}
// the && section is asking. if modalIsOpen = true. Then use <Modal and Backdrop components. Else, don't

export default Todo;
