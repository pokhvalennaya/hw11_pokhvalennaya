class Person {
  constructor(firstName, lastName, age, birthDayDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.birthDayDate = birthDayDate;
  }
  celebrate() {
    return "Happy Birthday, let`s celebrate";
  }
}

class Employee extends Person {
  #salary;
  constructor(firstName, lastName, age, birthDayDate, salary, jobPosition) {
    super(firstName, lastName, age, birthDayDate);
    this.#salary = salary;
    this.jobPosition = jobPosition;
  }

  getYearSalary() {
    return this.#salary * 12;
  }
  celebrate() {
    let thisYear = new Date().getFullYear();
    let birthdayThisYear = new Date(this.birthDayDate).setFullYear(thisYear);
    if (isWeekend(birthdayThisYear) === true) {
      return super.celebrate();
    } else {
      return "Happy Birthday, but I need to work";
    }
  }
}

function isWeekend(date) {
  let dayOfWeek = new Date(date).getDay();
  let weekend = dayOfWeek == 0 || dayOfWeek == 6;
  return weekend;
}

const person = new Person("Lena", "Pokhvalennaya", "19", "2002-05-22");
const employee = new Employee(
  "Sofia",
  "Serdiuk",
  "20",
  "2001-12-14",
  1000,
  "DevOps"
);

console.log(person.celebrate());
console.log(employee.celebrate());
