/*
 * NOTE: We could use refs to get a line on the buttons or other elements...
 *   const modalNegBtn = useRef();
 *   const modalAffBtn = useRef();
 *   <Modal modalID='errormodal' negRef={modalNegBtn} affRef={modalAffBtn}
 *     ... (in ModalFooter) ... <button ref={props.negRef}> ... <button ref={props.affRef}> ....
 */
import { createPortal } from 'react-dom';

export function ModalFooter({
  negCallback,
  negTitle = 'Cancel',
  affCallback,
  affTitle = 'Okay',
  children,
}) {
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

export function ModalBody({ children }) {
  return <div className='modal-body'>{children}</div>;
}

export function ModalTitle({ children }) {
  return (
    <div className='modal-header'>
      <span className='modal-title'>{children}</span>
      <button className='btn-close' data-bs-dismiss='modal'></button>
    </div>
  );
}

function ModalDialog({ modalID, children }) {
  return (
    <div className='modal fade' tabIndex='-1' id={modalID}>
      <div className='modal-dialog modal-dialog-centered'>
        <div className='modal-content'>{children}</div>
      </div>
    </div>
  );
}

export default function Modal({ modalID, children }) {
  if (children === undefined || modalID === undefined || String(modalID).trim().length <= 0) return null;
  return createPortal(
    <ModalDialog modalID={String(modalID).trim()}>{children}</ModalDialog>,
    document.getElementById('overlay-root')
  );
}
