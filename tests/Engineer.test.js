const Engineer = require('../lib/Engineer');



test('Engineer has github attribute',()=>{
      const obj = new Engineer ("Alice", 1, "test@test.com", "github")
      expect(obj.github).toBe("github");
})

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Alice", 1, "test@test.com");
    expect(e.getRole()).toBe(testValue);
  });
  
test("getGithub() should return \"Github User\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Alice", 1, "test@test.com",testValue);
    expect(e.getGithub()).toBe(testValue);
  });
  