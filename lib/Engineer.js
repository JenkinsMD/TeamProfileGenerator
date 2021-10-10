const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(github) {
    super(name, id, email);
    this.github = github;
    
  }

  getGithub() {
    //Add code
    return this.github
  }
  getRole() {
    //Add code
    return 'Engineer'
}


