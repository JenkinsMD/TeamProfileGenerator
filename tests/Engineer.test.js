const Engineer = require("../lib/Engineer");


describe('Engineer Tests', () => {
  
  const testEngineer = new Engineer("Bob", 1, "bob@bob.com", "Bob@github")

  it('Creates Engineer object', () => {
    expect(testEngineer).toEqual({ name: "Bob", id: 1, email: "bob@bob.com", github: "Bob@github" });
  });

  it('Get Role', () => {
    expect(testEngineer.getRole()).toEqual("Engineer");
  });

  it('Get github', () => {
    expect(testEngineer.getGithub()).toEqual("Bob@github");
  });

  });