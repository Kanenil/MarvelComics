export default function IconButton({ icon, type, className, onClickAct }) {
  return (
    <>
      <button
        type={type}
        className={className}
        onClick={onClickAct}
      >
        {icon}
      </button>
    </>
  );
}
