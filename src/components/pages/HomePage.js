/*
 *
 *
 */
import { useRef } from 'react';
import { Modal, ModalTitle, ModalBody, ModalFooter } from '../layout/Modal';

export default function HomePage() {
  const refModal = useRef();
  const showModal = () => {
    refModal.current.show();
  };

  return (
    <>
      <div className='card card-body text-center'>
        home
        <button className='btn btn-primary' onClick={showModal}>
          Modal via ref v1
        </button>
        <button className='btn btn-primary' onClick={() => {refModal.current.show()}}>
          Modal via ref v2
        </button>
        <button className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#modTest'>
          Modal via standard bootstrap HTML/CSS-API
        </button>
      </div>
      <Modal /* modalID='modTest' */ ref={refModal}>
        <ModalTitle>Test: Modal</ModalTitle>
        <ModalBody>Modal body</ModalBody>
        <ModalFooter negTitle='Nah' affTitle='Yep' />
      </Modal>
    </>
  );
}
