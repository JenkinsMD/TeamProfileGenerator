const Intern = require("../lib/Intern");

describe('Intern class', () => {
  
  const testIntern = new Intern("Bob", 1, "bob@bob.com", "OSU")

  it('Creates Intern object', () => {
    expect(testIntern).toEqual({ name: "Bob", id: 1, email: "bob@bob.com", school: "OSU" });
  });

  it('Get Role', () => {
    expect(testIntern.getRole()).toEqual("Intern");
  });

  it('Get School', () => {
    expect(testIntern.getSchool()).toEqual("OSU");
  });

  });