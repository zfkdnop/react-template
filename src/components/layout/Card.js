/*
 *
 *
 */

export default function Card({
  className = undefined,
  childClassName = undefined,
  children = undefined,
}) {
  const rootClass = className !== undefined ? 'card ' + className : 'card';
  const childClass = childClassName !== undefined ? 'card-body ' + childClassName : 'card-body';
  return (
    <div className={rootClass}>
      <div className={childClass}>{children}</div>
    </div>
  );
}
