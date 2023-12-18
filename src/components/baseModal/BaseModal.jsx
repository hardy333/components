import Modal from "react-modal";
import "./modal.css";

const BaseModal = ({ modalIsOpen, closeModal, children }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      shouldCloseOnOverlayClick={true}
      onRequestClose={closeModal}
      className="base-modal"
      overlayClassName="base-modal-overlay"
      closeTimeoutMS={300}
      ariaHideApp={false}
    >
      <>
        {children}
      </>
    </Modal>
  );
};

export default BaseModal;
