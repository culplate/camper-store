import { useContext } from "react";
import { ModalContext } from "context";

export const useModal = () => useContext(ModalContext);

/* !!!= example to use =!!!

const SomeComponent = () => {
  const setModal = useModal();

  const openModal = useCallback(() => {
    setModal(<SomeModalWindowWithoutBackdrop />);
  });
  const closeModal = () => {
    setModal();
  };

  return (
    <div>
      <h2>Component Title</h2>
      <p>Some component content</p>

      <button type="button" onClick={openModal}>
        OpenModal
      </button>
      <button type="button" onClick={closeModal}>
        CloseModal
      </button>
    </div>
  );
};
 */
