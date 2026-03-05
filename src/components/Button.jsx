export default function Button({ message, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        alert(message);
      }}
    >
      {children}
    </button>
  );
}
