const Manager = require('../lib/Manager');

const name = "Roman"
const email = "roman@sokol.com"
const id = 100
const officeNumber = 354
const testManager = new Manager(name, id, email, officeNumber)

test('Manager is an object',()=>{
      const obj = testManager
  
      expect(typeof (obj)).toBe("object");
})

test('Manager has office Number',()=>{
    const testValue = officeNumber

    expect(testManager.officeNumber).toBe(testValue);
})