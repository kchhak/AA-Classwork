function Student(fname, lname){
  this.fname = fname;
  this.lname = lname;
  this.courses = [];
}

Student.prototype.name = function() {
  return `${this.fname} ${this.lname}`
};

Student.prototype.enroll = function(course) {
  if (!(this.courses.includes(course)) && !(this.hasConflict(course))) {
    this.courses.push(course);
    course.students.push(this);
  }
};

Student.prototype.courseLoad = function(){
  let dept = {};
  
  this.courses.forEach((course) => {
    dept[course.department] = dept[course.department] || 0;
    dept[course.department] += course.credits;
  });

  return dept;
};

Student.prototype.hasConflict = function(newCourse) {
  this.courses.forEach((course) => {
    if (course.conflictsWith(newCourse)) {
      throw "Has a conflicting course!!";
      return true;
    }
  });
  return false;
};

function Course(name, department, credits, block, days) {
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.students = [];
  this.block = block;
  this.days = days;
}

Course.prototype.addStudent = function(student) {
  if (!this.students.includes(student)) {
    student.enroll(this);
  }
};

Course.prototype.conflictsWith = function(otherCourse) {
  let conflict = false;

  if (this.block !== otherCourse.block) {
    return false;
  }

  this.days.forEach((day) => {
    if (otherCourse.days.includes(day)) {
      conflict = true;
    }
  });

  return conflict;
};

let student1 = new Student("test", "testerson");
let student2 = new Student("student", "guy");
let c1 = new Course("c1", "math", 4, 1, ["Monday"]);
let c2 = new Course("c2", "english", 3, 1, ["Monday"]);

console.log(student1.name());
student1.enroll(c1);
c1.addStudent(student2);
console.log(c1.students);
console.log(student1.courseLoad());
student1.enroll(c2);
console.log(student1.courseLoad());