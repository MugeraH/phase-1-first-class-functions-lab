// const returnFirstTwoDrivers = function (array) {
//   let res = array.splice(0, 2);
//   return res;
// };
// const returnLastTwoDrivers = function (array) {
//   let res = array.splice(-2);
//   return res;
// };
const returnFirstTwoDrivers = function (array) {
  return array.slice(0, 2);
};

const returnLastTwoDrivers = function (array) {
  return array.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (value) {
  return function (multipliervalue) {
    return value * multipliervalue;
  };
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
// const fareDoubler = (value) => {
//   return value * 2;
// };

// const fareTripler = (value) => {
//   return value * 3;
// };

const selectDifferentDrivers = function (arrayOfDrivers, func) {
  return func(arrayOfDrivers);
};

const drivers = ["Antonia", "Nuru", "Amari", "Mo"];
console.log(returnLastTwoDrivers(drivers));
