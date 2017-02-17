'use strict';

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const jimmysCar = new Car('zsiguli', '1200', '1999');

console.log(jimmysCar);

const Animal = {
  type: 'Invertebrates',
  displayType: function () {
    console.log(this.type);
  },
};

const animal1 = Object.create(Animal);
animal1.displayType();

const fish = Object.create(Animal);
fish.type = 'Fishes';
fish.displayType();
