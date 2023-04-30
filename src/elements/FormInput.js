export default function FormInput({
  name,
  placeholder,
  type,
  value,
  error,
  hasError,
  onChangeAct
}) {
  return (
    <>
      <input
        id={name}
        name={name}
        type={type}
        onChange={onChangeAct}
        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
        placeholder={placeholder}
        value={value}
      />
      {hasError && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </>
  );
}
