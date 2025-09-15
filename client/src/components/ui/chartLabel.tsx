function ChartLabel({ label, color }: { label: string; color: string }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className="w-[15px] h-[15px] rounded-full"
        style={{ backgroundColor: color }}
      ></div>
      <span>{label}</span>
    </div>
  );
}

export default ChartLabel;
