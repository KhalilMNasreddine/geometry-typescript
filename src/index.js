"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
__decorate([
    logMethod
], Circle.prototype, "getArea", null);
__decorate([
    logMethod
], Circle.prototype, "getPerimeter", null);
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}
__decorate([
    logMethod
], Rectangle.prototype, "getArea", null);
__decorate([
    logMethod
], Rectangle.prototype, "getPerimeter", null);
function logMethod(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Calling ${propertyKey} with arguments: ${JSON.stringify(args)}`);
        const result = originalMethod.apply(this, args);
        console.log(`${propertyKey} result: ${result}`);
        return result;
    };
}
const circle = new Circle(5);
console.log("Circle Area:", circle.getArea());
console.log("Circle Perimeter:", circle.getPerimeter());
const rectangle = new Rectangle(10, 5);
console.log("Rectangle Area:", rectangle.getArea());
console.log("Rectangle Perimeter:", rectangle.getPerimeter());
