// UPPGIFT: Skapa en egen sammansatt typ som beskriver stockMeasurements. Byt ut any mot passande typer / 2 poäng
// Kompilera TS-koden och se att den fortfarande fungerar som den ska.

type StockMeasurement = {
  day: string;
  price: number;
};

const getRisingStockDays = (stockMeasurements: StockMeasurement[]): StockMeasurement[] =>
  stockMeasurements.filter((data: StockMeasurement) => data.price > 100);

const stockMeasurements: StockMeasurement[] = [
  {
    day: "Monday",
    price: 105,
  },
  {
    day: "Tuesday",
    price: 98,
  },
  {
    day: "Wednesday",
    price: 110,
  },
];

const profitableDays: StockMeasurement[] = getRisingStockDays(stockMeasurements);
console.log(profitableDays);

