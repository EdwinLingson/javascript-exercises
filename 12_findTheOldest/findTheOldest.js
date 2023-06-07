const findTheOldest = function(people) {

    people.map(e =>{
        e.yearOfDeath = e.yearOfDeath ===undefined?2023:e.yearOfDeath;
    })
    const Oldest = people.reduce(
        (accumulator, currentValue) => 
        
        {
          return accumulator.yearOfDeath - accumulator.yearOfBirth > currentValue.yearOfDeath - currentValue.yearOfBirth ? accumulator : currentValue},
        people[0].yearOfDeath - people[0].yearOfBirth
      );
      return Oldest;

};
// Do not edit below this line
module.exports = findTheOldest;
