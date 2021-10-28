/* 
 * 
 */
import { createPortal } from 'react-dom';

/* Modal Component (primary component)
 * * * * * * * * * * * * * * * * */
export function Modal({ modalID, children }) {
  if (
    children === undefined ||
    modalID === undefined ||
    String(modalID).trim().length <= 0
  )
    return null;
  return createPortal(
    <ModalDialog modalID={String(modalID).trim()}>{children}</ModalDialog>,
    document.getElementById('overlay-root')
  );
}

/* other Components (secondary components)
 * * * * * * * * * * * * * * * * */
export function ModalFooter({
  affCallback,          /* called when the affirmative butotn is clicked (optional) */
  affTitle = 'Okay',    /* caption of the affirmative button */
  affStyle = 'primary', /* used to finish the `btn-_____' bootstrap class and add additional classes to the affirmative button */
  negCallback,          /* callback called when negative button clicked */
  negTitle,             /* caption of the negative button. if undefined, the negative button will not be rendered */
  negStyle = 'secondary', /* use this to finish the `btn-_____' bootstrap class and add additional classes to the negative button */
  children,             /* react */
}) {
  let negBtn = <></>;
  if (String(negTitle).trim() !== '' && negTitle !== undefined)
    negBtn = (
      <button
        className={'btn btn-' + negStyle}
        onClick={negCallback}
        data-bs-dismiss='modal'>
        {negTitle}
      </button>
    );

  return (
    <div className='modal-footer'>
      {children}
      {negBtn}
      <button
        className={'btn btn-' + affStyle}
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

export function ModalHeader({ children }) {
  return <ModalTitle>{children}</ModalTitle>;
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
