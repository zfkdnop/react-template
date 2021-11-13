/*
 * Provides an easy way to update/interact with the Modal overlay globally
 */
import { useState, createContext, useRef } from 'react';
import { Modal, ModalTitle, ModalBody, ModalFooter } from '../components/layout/Modal';

export const ModalContext = createContext({
  ref: undefined,
  title: '',
  message: '',
  show: () => {},

  negTitle: 'Nah',
  negCallback: undefined,
  affTitle: 'Yep',
  affCallback: undefined,

  setNegative: ({ title, action }) => {},
  setAffirmative: ({ title, action }) => {},
  setTitle: (modalTitle) => {},
  setMessage: (modalBody) => {},
});

export const ModalContextProvider = ({ children }) => {
  const refModal = useRef();
  const [xtitle, setxtitle] = useState('');
  const [msg, setMsg] = useState('');
  const [neg, setNeg] = useState({ title: 'Nah', action: undefined });
  const [aff, setAff] = useState({ title: 'Yep', action: undefined });

  /** * * * * * * * * * * * * * * * **/
  const setNegative = ({ title, action }) => {
    setNeg({ title: title, action: action });
  };
  const setAffirmative = ({ title, action }) => {
    setAff({ title: title, action: action });
  };
  const setTitle = (title) => {
    setxtitle(title);
  };
  const setMessage = (mesg) => {
    setMsg(mesg);
  };
  const handleShow = () => {
    refModal.current.show();
  };

  /** * * * * * * * * * * * * * * * **/
  const defaultCtx = {
    ref: refModal,
    title: xtitle,
    message: msg,
    show: handleShow,

    negTitle: neg.title,
    negCallback: neg.action,
    affTitle: aff.title,
    affCallback: aff.action,

    setNegative: setNegative,
    setAffirmative: setAffirmative,
    setTitle: setTitle,
    setMessage: setMessage,
  };
  const defaultModal = (
    <Modal modalID='overlay-default' ref={refModal} key='modalctx-2'>
      <ModalTitle>{xtitle}</ModalTitle>
      <ModalBody>{msg}</ModalBody>
      <ModalFooter negTitle={neg.title} negCallback={neg.action} affTitle={aff.title} affCallback={aff.action} />
    </Modal>
  );

  return [
    <ModalContext.Provider value={defaultCtx} key='modalctx-1'>
      {children}
    </ModalContext.Provider>,
    defaultModal,
  ];
};
