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
  constructor(firstName, lastName, age, birthDayDate, jobPosition) {
    super(firstName, lastName, age, birthDayDate);
    this.jobPosition = jobPosition;
  }
  #salary = 1000;
  getYearSalary() {
    return this.#salary * 12;
  }
  celebrate() {
    let thisYear = new Date().getFullYear();
    let birthdayThisYear = new Date(this.birthDayDate).setFullYear(thisYear);
    let dayOfWeek = new Date(birthdayThisYear).getDay();
    if (dayOfWeek == 0 || dayOfWeek == 6) {
      return "Happy Birthday, let`s celebrate";
    } else {
      return "Happy Birthday, but I need to work";
    }
  }
}
const person = new Person("Lena", "Pokhvalennaya", "19", "2002-05-22");
const employee = new Employee("Sofia", "Serdiuk", "20", "2001-12-14", "DevOps");

console.log(person.celebrate());
console.log(employee.celebrate());
