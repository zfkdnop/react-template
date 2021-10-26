/*
 *
 *
 */
import Modal, { ModalTitle, ModalBody, ModalFooter } from '../layout/Modal';

export default function HomePage() {
  return (
    <>
      <div className='card card-body text-center'>home
        <button className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#modTest'>Modal</button>
      </div>
      <Modal modalID='modTest'>
          <ModalTitle>Test: Modal</ModalTitle>
          <ModalBody>Modal body</ModalBody>
          <ModalFooter negTitle='Nah' affTitle='Yep' />
      </Modal>
    </>
  );
}
