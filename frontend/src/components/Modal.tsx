import React, { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => (
  <>
    <button className="text-5xl" onClick={showModal}>
      ➕
    </button>
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box bg-white min-w-[700px]">
        <form method="dialog">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => {
              closeModal;
              onClose();
            }}
          >
            ✕
          </button>
        </form>
        {children}
      </div>
    </dialog>
  </>
);

export const showModal = () => {
  const modal = document.getElementById("my_modal_3") as HTMLDialogElement;
  if (modal) {
    modal.showModal();
  }
};

export const closeModal = () => {
  const modal = document.getElementById("my_modal_3") as HTMLDialogElement;
  if (modal) {
    modal.close();
  }
};

export default Modal;
