import React from "react";

import Modal from "./Modal";

function DeleteBadgeModal(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="DeleteBadgeModal">
        <h1>Esta usted seguro?</h1>
        <p>Esta a punto de borrar este badge.</p>
      </div>
      <div>
        <button onClick={props.onDeleteBadge} className="btn btn-danger mr-4">
          Delete
        </button>
        <button onClick={props.onClose} className="btn btn-primary">
          Cancel
        </button>
      </div>
    </Modal>
  );
}

export default DeleteBadgeModal;
