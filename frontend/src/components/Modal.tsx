import React, { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  const showModal = () => {
    const modal = document.getElementById("my_modal_3") as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  const closeModal = () => {
    const modal = document.getElementById("my_modal_3") as HTMLDialogElement;
    if (modal) {
      modal.close();
    }
  };

  return (
    <>
      <button className="text-5xl" onClick={showModal}>
        ➕
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white min-w-[700px]">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={closeModal}
            >
              ✕
            </button>
          </form>
          {children}
        </div>
      </dialog>
    </>
  );
};

export default Modal;
