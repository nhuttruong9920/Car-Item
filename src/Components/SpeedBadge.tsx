const SpeedBadge = ({ value, unit }: { value: number; unit: string }) => (
  <div className="flex flex-col justify-center items-center">
    <p className="speed-value text-sm font-bold">{value}</p>
    <p className="speed-unit text-xs font-normal">{unit}</p>
  </div>
);
export default SpeedBadge;
