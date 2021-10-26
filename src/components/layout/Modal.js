/*
 *
 *
 */
import { createPortal } from 'react-dom';

export function MModal() {
  return (
    <div className='card'>
      <div className='card-header'>head</div>
      <div className='card-body'>body</div>
    </div>
  );
}
export default function Modal(props) {
  return createPortal(<MModal />, document.getElementById('overlay-root'));
}
