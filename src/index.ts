interface Shape {
  getArea(): number;
  getPerimeter(): number;
}


class Circle implements Shape {
 constructor(private radius: number) {}

  @logMethod
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
  
  @logMethod
  getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}
  
class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}
 
  @logMethod
  getArea(): number {
    return this.width * this.height;
  }
  
  @logMethod
  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }
}


function logMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  
  descriptor.value = function (...args: any[]) {
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