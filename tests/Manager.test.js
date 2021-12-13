const Manager = require("../lib/Manager");

describe('Manager Tests', () => {
  
  const testManager = new Manager("Bob", 1, "bob@bob.com", 200)

  it('Creates Engineer object', () => {
    expect(testManager).toEqual({ name: "Bob", id: 1, email: "bob@bob.com", officeNum: 200 });
  });

  it('Get Role', () => {
    expect(testManager.getRole()).toEqual("Manager");
  });

  it('Get OfficeNum', () => {
    expect(testManager.getOfficeNum()).toEqual(200);
  });

  });