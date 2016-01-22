'use strict';

// Create a constructor called CarStore, that takes an array of cars as a parameter:
// It should have an "addCar" method that adds a car object to it's list
// It should have a "getSumPrice" method that returns the sum of all cars price 
// It should have a "getOldestCarType" method that returns the oldest car's type
// It should have a "deleteCarByType" method that removes the cars from the inner list
// that have the given type

function CarStore(cars) {
	var me = this;
	this.cars = cars;

	this.addCar = function(carType, carPrice, carYear) {
		var car = {
			type: carType,
			price: carPrice,
			year: carYear
		};
		this.cars.push(car);
		return this.cars;
	}


	this.getSumPrice = function() {
		var sumPrice = 0;
		this.cars.forEach(function(car) {
			sumPrice += car.price;
		});
		return sumPrice;
	}

	this.getOldestCarType = function() {
		var oldestCarYear = cars[0].year;
		var oldestCarType = '';
		
		this.cars.forEach(function(car) {
			if (car.year < oldestCarYear) {
				oldestCarYear = car.year;
				oldestCarType = car.type;
			}
		});
		return oldestCarType;
	}

	this.deleteCarByType = function(car) {
		for (var i = 0; i < this.cars.length; i++) {
			if (this.cars[i].type === car) {
				this.cars.splice(i, 1);
			}
		}
	}

	this.getSumPrice = function() {
		var sumPrice = 0;
		this.cars.forEach(function(car) {
			sumPrice += car.price
		});
		return sumPrice;
	}

}



var cars = [
  {type: 'Dodge', price: 20000, year: 2012},
  {type: 'Tesla', price: 30000, year: 2015},
  {type: 'Nissan', price: 12000, year: 2010},
  {type: 'Trabant', price: 2000, year: 1980},
  {type: 'Ferrari', price: 40000, year: 2001}
];

var carStore = new CarStore(cars);

carStore.addCar('Smart', 18000, 2011);

 console.log(carStore.getSumPrice()); // 122000 
 console.log(carStore.getOldestCarType()); // 'Trabant'
 carStore.deleteCarByType('Ferrari');
 console.log(carStore.getSumPrice()); // 82000 

