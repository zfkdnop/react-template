/*
 *
 *
 */
import { createPortal } from 'react-dom';

export function ModalFooter({
  negCallback = undefined,
  negTitle = 'Cancel',
  affCallback = undefined,
  affTitle = 'Okay',
  children = ' ',
}) {
  //   if (children === undefined) return;
  return (
    <div className='modal-footer'>
      {children}
      <button
        className='btn btn-secondary'
        onClick={negCallback}
        data-bs-dismiss='modal'>
        {negTitle}
      </button>
      <button
        className='btn btn-primary'
        onClick={affCallback}
        data-bs-dismiss='modal'>
        {affTitle}
      </button>
    </div>
  );
}

export function ModalBody({ children = ' ' }) {
  //   if (children === undefined) return;
  return <div className='modal-body'>{children}</div>;
}

export function ModalTitle({ children = ' ' }) {
  //   if (children === undefined) return;
  return (
    <div className='modal-header'>
      <span className='modal-title'>{children}</span>
      <button className='btn-close' data-bs-dismiss='modal'></button>
    </div>
  );
}

function ModalDialog({ modalID = undefined, children = undefined }) {
  if (children === undefined) return null;
  return (
    <div className='modal fade' tabIndex='-1' id={modalID}>
      <div className='modal-dialog modal-dialog-centered'>
        <div className='modal-content'>{children}</div>
      </div>
    </div>
  );
}

export default function Modal({ modalID = undefined, children = undefined }) {
  if (children === undefined || modalID === undefined) return null;
  return createPortal(
    <ModalDialog modalID={modalID}>{children}</ModalDialog>,
    document.getElementById('overlay-root')
  );
}
