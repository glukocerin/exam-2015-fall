'use strict';

// Create a Circle constructor that creates a circle object:
// it should take the circle's radius as a parameter
// it should have a "getCircumference" method that returns it's circumference
// it should have a "getArea" method that returns it's area
// it should have a "toString" method that returns it's stats as a string like:
// 'Radius: 4, Circumference: 25.132741228718345, Area: 50.26548245743669'


function Circle(radius) {
	var me = this;
	this.radius = radius;
	this.area;
	this.circumference;

	this.pi = Math.PI;
	
	this.getCircumference = function() {
		this.circumference = 2 * this.radius * this.pi; 
	}

	this.getArea = function() {
		this.area =  Math.pow(me.radius, 2) * this.pi;
	}

	this.toString = function() {
		var toStringRadius = 'Radius: ' + this.radius + ', ';
		var toStringCircumference = 'Circumference: ' + this.circumference + ', ';
		var toStringArea = 'Area: ' + this.area;
 		console.log(String(toStringRadius + toStringCircumference + toStringArea)); 
	}
}

var circle = new Circle(4);
circle.getCircumference();
circle.getArea();
circle.toString();



