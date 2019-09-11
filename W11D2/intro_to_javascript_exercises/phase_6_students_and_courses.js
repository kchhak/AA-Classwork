function Student(fname, lname){
  this.fname = fname;
  this.lname = lname;
  this.courses = [];
}

Student.prototype.name = function() {
  return `${this.fname} ${this.lname}`;
}

Student.prototype.enroll = function(course) {
  if (!this.courses.includes(course) && !this.hasConflict(course)) {
    this.courses.push(course);
    course.students.push(this);
  }
}

Student.prototype.courseLoad = function() {
  let deptHash = {};

  this.courses.forEach(function(course){
    let dept = course.department;
    deptHash[dept] = deptHash[dept] || 0;
    deptHash[dept] += course.credits;
  });

  return deptHash;
}

Student.prototype.hasConflict = function(newCourse){
  this.courses.forEach(function(course){
    if (course.conflictsWith(newCourse)){
      throw "Conflicts with existing course";
    }
  });
  return false;
}
// COURSE CLASS

function Course(name, department, credits, block, days){
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.block = block;
  this.days = days;
  this.students = [];
}

Course.prototype.addStudent = function(student) {
  if (!this.students.includes(student)){
    student.enroll(this);
  }
}

Course.prototype.conflictsWith = function(course){
  let conflict = false;

  if (this.block !== course.block) {
    return false;
  }

  this.days.forEach(function(day){
    if (course.days.includes(day)){
      conflict = true;
    }
  });

  return conflict;
}

let student1 = new Student('Bob', 'Bobberson');
let course1 = new Course('Underwater Basket Weaving', 'Art', 4, 1, ['m','w','f']);
let course2 = new Course('Intro to Intro', 'Philosophy', 4, 1, ['t', 'th']);
let course3 = new Course('All Day Ery Day', 'GE', 9001, 1, ['m', 't', 'w', 'th', 'f']);

console.log(student1.name());
student1.enroll(course1);
console.log(course1.students);
student1.enroll(course2);
console.log(student1.courseLoad());

course1.conflictsWith(course3);
student1.enroll(course3);
console.log(student1.courses);