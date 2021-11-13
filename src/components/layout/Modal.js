/*
 *
 */
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

/* Modal Component (primary component)
 * * * * * * * * * * * * * * * * */
export const Modal = forwardRef(({ modalID, children }, ref) => {
  const refShowModalBtn = useRef();
  const handleShow = () => {
    refShowModalBtn.current.click();
  };
  useImperativeHandle(ref, () => {
    return { show: handleShow };
  });

  if (children === undefined) return null; /* if no children, dont render */
  if (modalID === undefined || String(modalID).trim().length <= 0) /* if no modalID specified, generate one for internal use */
    modalID = 'modal' + Math.round(Math.random() * 100_000_000);

  return createPortal(
    <>
      <button
        className='visually-hidden d-none'
        ref={refShowModalBtn}
        type='button'
        data-bs-toggle='modal'
        data-bs-target={'#'+modalID}>
        _
      </button>
      <div className='modal fade' tabIndex='-1' id={modalID}>
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>{children}</div>
        </div>
      </div>
    </>,
    document.getElementById('overlay-root')
  );
});

/* other Components (secondary components)
 * * * * * * * * * * * * * * * * */
export function ModalFooter({
  affCallback /* called when the affirmative butotn is clicked (optional) */,
  affTitle = 'Okay' /* caption of the affirmative button */,
  affStyle = 'primary' /* used to finish the `btn-_____' bootstrap class and add additional classes to the affirmative button */,
  negCallback /* callback called when negative button clicked */,
  negTitle /* caption of the negative button. if undefined, the negative button will not be rendered */,
  negStyle = 'secondary' /* use this to finish the `btn-_____' bootstrap class and add additional classes to the negative button */,
  children /* react */,
}) {
  let negBtn = <></>;
  if (String(negTitle).trim() !== '' && negTitle !== undefined)
    negBtn = (
      <button className={'btn btn-' + negStyle} onClick={negCallback} data-bs-dismiss='modal'>
        {negTitle}
      </button>
    );

  return (
    <div className='modal-footer'>
      {children}
      {negBtn}
      <button className={'btn btn-' + affStyle} onClick={affCallback} data-bs-dismiss='modal'>
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
