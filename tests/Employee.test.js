const Employee = require("../lib/Employee");
const name = "Roman"
const email = "roman@sokol.com"
const id = 100
const testEmployee = new Employee(name, id, email)

test('Employee is an object',()=>{
      const obj = testEmployee
  
      expect(typeof (obj)).toBe("object");
})

test('Employee name',()=>{
  const testValue = name

  expect(testEmployee.name).toBe(testValue);
})


test('Employee getName',()=>{
  const testValue = testEmployee.name

  expect(testEmployee.getName()).toBe(testValue);
})

test('Employee getId',()=>{
  const testValue = testEmployee.id

  expect(testEmployee.getId()).toBe(testValue);
})

test('Employee getEmail',()=>{
  const testValue = testEmployee.email

  expect(testEmployee.getEmail()).toBe(testValue);
})



// describe("test EmployeeName", () => {
//   it("should return a property name of employee", () => {
//     const testvalue = name
//     expect(testEmployee.name).toBe(testvalue);
//   });
// });

// describe("testEmployeeId", () => {
//   it("should return a property Id employe", () => {

//     const testvalue = id
//     expect(testEmployee.id).toBe(testvalue);
//   });
// });

// describe("testEmployeeEmail", () => {
//   it("should return a property email of employee", () => {

//     const testvalue = email
//     expect(testEmployee.email).toBe(testvalue);
//   });
// });
