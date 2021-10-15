export default function Grid({ children, col, row }) {
  return (
    <div
      className={`lg:grid grid-cols-${col} grid-rows-${row} md:grid-cols-2 h-auto block bg-gray-100 pt-10`}
    >
      {children}
    </div>
  );
}
