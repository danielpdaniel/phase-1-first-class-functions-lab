// Code your solution in this file!
const returnFirstTwoDrivers = x => [x[0], x[1]];

const returnLastTwoDrivers = x => [x[x.length-2], x[x.length-1]];

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    function fareMultiplier(fare) {
        return (fare * multiplier);
    }
    return fareMultiplier;
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
}

const fareTripler = (fare) => {return createFareMultiplier(3)(fare)};

function selectDifferentDrivers(x, driversSelection) {
    if (driversSelection === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(x);
    } else if (driversSelection === returnLastTwoDrivers) {
        return returnLastTwoDrivers(x);
    }

}