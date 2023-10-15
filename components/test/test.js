import BigNumber from "bignumber.js"; // See https://github.com/MikeMcl/bignumber.js

const denominationsMultiplier = {
  WEI: new BigNumber(1, 10).times(10).exponentiatedBy(18),
  GWEI: new BigNumber(1, 10).times(10).exponentiatedBy(8),
  ETH: new BigNumber(1, 10).times(10).exponentiatedBy(1),
};

function getFiatValueToRender({
  value,
  conversionRate = 1,
  fromDenomination,
  fromCurrency,
}) {
  let number = new BigNumber(value, 16);
  if (fromCurrency !== "ETH") {
    number = number.multipliedBy(conversionRate);
  }
  if (fromDenomination !== "WEI") {
    number = number.multipliedBy(
      denominationsMultiplier.WEI.dividedBy(
        denominationsMultiplier[fromDenomination]
      )
    );
  }
  return number.toString(32);
}

function getResult(value) {
  return getFiatValueToRender({
    value,
    conversionRate: 1,
    fromDenomination: "GWEI",
    fromCurrency: "ABC",
  });
}

let x = 0;

console.log(getResult(0) === "0");
console.log(getResult(1) === "59682f00");
console.log(getResult(10600.47) === "e762bdf8a40");
