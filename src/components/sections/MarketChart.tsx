import { displayHeading } from "@/lib/styles";

const values = [
  { year: 2021, value: "₹30L", height: 80 },
  { year: 2022, value: "₹42L", height: 120 },
  { year: 2023, value: "₹45.4L", height: 165 },
  { year: 2024, value: "₹53.5L", height: 215 },
  { year: 2025, value: "₹61.8L", height: 275 },
];

export function MarketChart() {
  return (
    <div
      className="h-[463px] rounded-[20px] bg-white p-[40px] shadow-[0_8px_42px_rgba(25,57,98,.08)] max-sm:p-5"
      role="img"
      aria-label="Growing market opportunity chart from 2021 to 2025"
    >
      <h3
        className={`${displayHeading} flex items-center gap-3 text-[20px] font-medium`}
      >
        <span className="h-[32px] w-3 rounded bg-[#193962]" />
        Growing Market Opportunity
      </h3>
      <div className="mt-8 flex h-[330px] items-end justify-around gap-4 bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_63px,rgba(0,0,0,.13)_64px)] px-3 pb-8">
        {values.map((item) => (
          <div
            className="relative flex h-full w-[60px] items-end justify-center"
            key={item.year}
          >
            <span
              className="absolute z-2 rounded bg-[#193962] px-2 py-1 text-sm text-white"
              style={{ bottom: `${item.height + 34}px` }}
            >
              {item.value}
            </span>
            <i
              className="w-[38px] rounded-t-[6px] bg-[#89b92f]"
              style={{ height: item.height }}
            />
            <small className="absolute -bottom-7 text-[13px]">
              {item.year}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}
