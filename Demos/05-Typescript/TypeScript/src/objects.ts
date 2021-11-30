export class ObjectDemos {
    objectsBasics() {
        // Plain old JavaScript
        var myPerson = new Object();
        // myPerson.smile = function(){...}

        var otherPerson = <any>{};
        otherPerson.smile = function () {};

        let person: any = { Id: 1, Name: 'Giro' };
        person.walk = () => console.log(`I am ${person.Name} and I'm walking`);

        person.walk();
    }

    enhancedObjectLiterals() {
        //Property value shorthand
        function getCarES5(make, model, value) {
            return {
                make: make,
                model: model,
                value: value,
            };
        }

        function getCar(make, model, value) {
            return {
                // with property value shorthand
                // syntax, you can omit the property
                // value if key matches variable
                // name
                make,
                model,
                value,
            };
        }

        function getPersonClone(person: any) {
            return { ...person };
        }

        let person: any = { Id: 1, Name: 'Alexander' };
        var cloned = getPersonClone(person);

        //Method definition shorthand
        function getBusES5(value) {
            return {
                depreciate: function () {
                    this.value -= 2500;
                },
            };
        }

        function getBus(value) {
            return {
                // Method definition shorthand syntax
                // omits `function` keyword & colon
                depreciate() {
                    this.value -= 2500;
                },
            };
        }
    }

    destructuring() {
        let fullPerson = { firstName: 'John', name: 'Doe', age: 17 };
        let { firstName, name } = fullPerson;
        console.log(firstName + ', ' + name);
    }

    objAssign() {
        var obj = { name: 'Giro' };
        var copy = Object.assign({}, obj, {
            birth: new Date(),
        });
        console.log(copy);
    }

    valref() {
        let person: any = { Id: 1, Name: 'Alexander' };
        let myNumber: number = 100;

        function passArgs(nbr: number, pers: any) {
            nbr += 1;
            pers.Name = 'Alex';
        }

        passArgs(myNumber, person);
        console.log('result for myNumber & person:', myNumber, person);

        myNumber = 500;
        person.Name = 'Alexander';
        passArgs(myNumber, Object.assign({}, person));
        console.log('result for myNumber & person using Object.assign():', myNumber, person);

        passArgs(myNumber, { ...person });
        console.log('result for myNumber & person using spread:', myNumber, person);
    }

    copyspread() {
        //Spred operator on arrays
        var [x, y, ...remaining] = [1, 2, 3, 4];
        console.log(x, y); // 1, 2,
        console.log(remaining);

        //Spread operator on objects
        var simplePerson = { name: 'Giro' };
        var dataPerson = {
            birth: new Date(),
            job: 'dev dude',
        };
        console.log({ ...dataPerson });

        var person = { ...simplePerson, ...dataPerson };
        console.log(person);
    }
}
