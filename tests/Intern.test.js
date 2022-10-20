const Intern = require('../lib/intern');



test('Intern has school attribute',()=>{
      const obj = new Intern ("Alice", 1, "test@test.com", "Oxford")
      expect(obj.school).toBe("Oxford");
})

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Alice", 1, "test@test.com");
    expect(e.getRole()).toBe(testValue);
  });
  
test("getSchool() should return \"school\"", () => {
    const testValue = "Oxford";
    const e = new Intern("Alice", 1, "test@test.com",testValue);
    expect(e.getSchool()).toBe(testValue);
  });
  