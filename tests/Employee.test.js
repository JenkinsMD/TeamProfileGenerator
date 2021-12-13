const Employee = require("../lib/Employee");

describe('Employee Tests', () => {
  
  const testEmployee = new Employee("Bob", 1, "bob@bob.com", "Bob@github")

  it('Creates Employee object', () => {
    expect(testEmployee).toEqual({ name: "Bob", id: 1, email: "bob@bob.com"});
  });

  it('Get Name', () => {
    expect(testEmployee.getName()).toEqual("Bob");
  });

  it('Get ID', () => {
    expect(testEmployee.getId()).toEqual(1);
  });

  it('Get Email', () => {
    expect(testEmployee.getEmail()).toEqual("bob@bob.com");
  });

  it('Get Role', () => {
    expect(testEmployee.getRole()).toEqual("Employee");
  });

  });