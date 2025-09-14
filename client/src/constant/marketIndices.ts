const marketIndices = [
  {
    flag: "🇺🇸",
    name: "S&P 500",
    value: 6605.38,
    percentage: -0.05,
    isUp: -0.05 > 0,
    upValue: +Math.abs((6605.38 * -0.05) / 100).toFixed(2),
  },
  {
    flag: "🇺🇸",
    name: "NASDAQ",
    value: 15312.45,
    percentage: 0.28,
    isUp: 0.28 > 0,
    upValue: +Math.abs((15312.45 * 0.28) / 100).toFixed(2),
  },
  {
    flag: "🇮🇳",
    name: "NIFTY 50",
    value: 25114.0,
    percentage: 0.43,
    isUp: 0.43 > 0,
    upValue: +Math.abs((25114.0 * 0.43) / 100).toFixed(2),
  },
  {
    flag: "🇮🇳",
    name: "Bank NIFTY",
    value: 55432.6,
    percentage: -0.12,
    isUp: -0.12 > 0,
    upValue: +Math.abs((55432.6 * -0.12) / 100).toFixed(2),
  },
  {
    flag: "🇬🇧",
    name: "FTSE 100",
    value: 9283.29,
    percentage: -0.15,
    isUp: -0.15 > 0,
    upValue: +Math.abs((9283.29 * -0.15) / 100).toFixed(2),
  },
  {
    flag: "🇩🇪",
    name: "DAX",
    value: 23690.95,
    percentage: -0.05,
    isUp: -0.05 > 0,
    upValue: +Math.abs((23690.95 * -0.05) / 100).toFixed(2),
  },
  {
    flag: "🇯🇵",
    name: "Nikkei 225",
    value: 44018.78,
    percentage: 0.9,
    isUp: 0.9 > 0,
    upValue: +Math.abs((44018.78 * 0.9) / 100).toFixed(2),
  },
  {
    flag: "🇨🇳",
    name: "Shanghai Composite",
    value: 3168.3,
    percentage: 0.22,
    isUp: 0.22 > 0,
    upValue: +Math.abs((3168.3 * 0.22) / 100).toFixed(2),
  },
  {
    flag: "🇫🇷",
    name: "CAC 40",
    value: 7825.24,
    percentage: 0.82,
    isUp: 0.82 > 0,
    upValue: +Math.abs((7825.24 * 0.82) / 100).toFixed(2),
  },
];

export default marketIndices;

export type MarketIndex = {
  flag: string;
  name: string;
  value: number;
  percentage: number;
  isUp: boolean;
  upValue: number;
};
