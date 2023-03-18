// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers=function(array){
    return drivers.slice(0,2);
}
const returnLastTwoDrivers=function(array){
    return drivers.slice(2,4);
}
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];
const createFareMultiplier=function(number){
    return function(fare){
        return (fare*number);
    }
}
const fareDoubler=createFareMultiplier(2);
const fareTripler=createFareMultiplier(3);
function selectDifferentDrivers(drivers,selectingDrivers){
    return selectingDrivers(drivers);
}