import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import type { MarketIndex } from "@/constant/marketIndices";

function MarketIndiceCard({ marketIndex }: { marketIndex: MarketIndex }) {
  const { flag, name, value, isUp, upValue, percentage } = marketIndex;

  return (
    <div className="flex flex-row items-center gap-3 ml-10">
      <span className="font-gray-500">{flag}</span>
      <span className="font-semibold">{name}</span>
      <h3 className="font-semibold">{value}</h3>

      {isUp ? (
        <BiSolidUpArrow className="text-green-700" />
      ) : (
        <BiSolidDownArrow className="text-red-700" />
      )}

      <span className="text-gray-500 text-sm">
        {isUp ? `+${upValue}` : `-${upValue}`}
      </span>
      <span className={`${isUp ? "text-green-700" : "text-red-700"}`}>
        {percentage}
      </span>
    </div>
  );
}

export default MarketIndiceCard;
