export default function BoilingVerdict({ celsius = 0 }) {
  if (celsius >= 100) {
    return <p className="mt-4 text-blue-400 font-semibold">The water would boiled!</p>;
  }
  return <p className="mt-4 text-red-400 font-semibold">Water would not boiled</p>;
}
