const students = [
  {
    firstName: "Evelien",
    lastName: "De Pauw",
    isMarried: true,
    genderCode: 2,
    height: 1.65,
    account: {
      userName: "lola4u",
      email: "blacklola@gmail.com",
      thumbnail:
        "https://media-exp1.licdn.com/dms/image/C4E03AQGWnuufcnCFcw/profile-displayphoto-shrink_800_800/0/1650829277020?e=2147483647&v=beta&t=wGT2ALGAIIT93jtMOpv6FqzYNnn5qYbTes989_e4yH0",
    },
    courses: [
      {
        name: "Web Design",
        studiepoints: 6,
        lecturers: ["Wachem Huyge", "Evelien Rutsaert", "Matthieu Spillebeen"],
      },
      {
        name: "Programmeren 1",
        studiepoints: 6,
        lecturers: [
          "Philippe De Pauw",
          "Michael Vanderpoel",
          "Jannes Lamrechts",
        ],
      },
    ],
  },
  {
    firstName: "Bart",
    lastName: "De prins",
    isMarried: false,
    genderCode: 1,
    height: 1.95,
    account: {
      userName: "zebbie",
      email: "tetstesttest@gmail.com",
    },
    courses: [
      {
        name: "Web Design",
        studiepoints: 6,
        lecturers: ["Wachem Huyge", "Evelien Rutsaert", "Matthieu Spillebeen"],
      },
      {
        name: "Computer Systems",
        studiepoints: 3,
        lecturers: ["Clair", "Adriaan"],
      },
    ],
  },
];

(() => {
  const app = {
    init() {
      console.log("1. Application Initialized");
      // Variables
      // call the funcion cacheElements
      this.cacheElements();
      //Call the function generateUI
      this.generateUI();
    },
    cacheElements() {
      console.log("2. cache the elements");
      // Get the element with class name students-list
      this.$studentsList = document.querySelector(".students-list");
      console.log(this.$studentsList);
    },
    generateUI() {
      console.log("3. Generate user interface");
      this.$studentsList.innerHTML = this.generateStringForStudents(students);
    },
    generateStringForStudents(students) {
      let tmpStr = "";
      tmpStr += students
        .map((student) => {
          return `
              <article class="student">
              <h3>${student.firstName} ${student.lastName}</h3>
              <p>Married: ${student.isMarried ? "yes" : "No"}</p>
              <p>Gender: ${this.generateStringForGenderCode(
                student.genderCode
              )}</p>
              <div>
                <h4>Account</h4>
                ${this.generateStringForAccount(student.account)}
              </div>
              <div class="courses">
                <h4>Courses</h4>
                ${this.generateStringForCourses(student.courses)}
              </div>
            </article>
            `;
        })
        .join("");
      return tmpStr;
    },
    generateStringForGenderCode(genderCode) {
      switch (genderCode) {
        case 0:
          return "Not Specified";
        case 1:
          return "Male";
        case 2:
          return "Female";
        case 9:
        default:
          return "Not Applicable";
      }
    },
    generateStringForAccount(account) {
      let tmpStr = "";
      tmpStr += ` 
       <p>Username: ${account.userName}</p>
       <p>Email: ${account.email}</p>
       ${account.thumbnail ? `<img src="${account.thumbnail}">` : ""}"
      `;
      return tmpStr;
    },
    generateStringForCourses(courses) {
      let tmpStr = "Courses";
      for (let course of courses) {
        tmpStr += `
          <article class="course">
          <h5>${course.name}</h5>
          <p>${course.studiepoints}</p>
          <ul>${course.lecturers
            .map((lecturer) => `<li>${lecturer}</li>`)
            .join("")}</ul>
          </article>
        `;
      }
      return tmpStr;
    },
  };
  app.init();
})();
