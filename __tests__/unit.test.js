// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');
test('is (858)-204-2989 a phone number', () => {
    expect(functions.isPhoneNumber("(858)204-2989")).toBe(true);
    
  });
  
test('is (858)-204-3121 a phone number', () => {
    expect(functions.isPhoneNumber("(858)204-3121")).toBe(true);
    
});

test('is (858)23121900 a phone number', () => {
    expect(functions.isPhoneNumber("(858)23121999")).toBe(false); 
});
 
test('is (858)204989283 a phone number', () => {
    expect(functions.isPhoneNumber("(858)204989283")).toBe(false);
    
});

test('is afkhoon@gmail.com an email', () => {
    expect(functions.isEmail("afkhoon@gmail.com")).toBe(true);
    
});

test('is yok029@gmail.com an email', () => {
    expect(functions.isEmail("yok029@gmail.com")).toBe(true);
    
});

test('is afkhoonmail.com an email', () => {
    expect(functions.isEmail("afkhoonmail.com")).toBe(false);
    
});
test('is afkhoonokeil.com an email', () => {
    expect(functions.isEmail("afkhoonnokeil.com")).toBe(false);
    
});

test('is qufgPwmsks78 a strong password', () => {
    expect(functions.isStrongPassword("qufgPwmsks78")).toBe(true);
    
});
test('is qufgPwmsks878 a strong password', () => {
    expect(functions.isStrongPassword("qufgPwmsks878")).toBe(true);
    
});
test('is ui a strong password', () => {
    expect(functions.isStrongPassword("ui")).toBe(false);
    
});
test('is 999 a strong password', () => {
    expect(functions.isStrongPassword("999")).toBe(false);
    
});

test('is 06/18/2020 a valid date', () => {
    expect(functions.isDate("06/18/2020")).toBe(true);
    
});
test('is 06/18/2021 a valid date', () => {
    expect(functions.isDate("06/18/2021")).toBe(true);
    
});
test('is 06/18/202 a valid date', () => {
    expect(functions.isDate("06/18/202")).toBe(false);
    
});
test('is 06/182/999 a valid date', () => {
    expect(functions.isDate("06/182/999")).toBe(false);
    
});
test('is FFFFFF a valid HexColor', () => {
    expect(functions.isHexColor("FFFFFF")).toBe(true);
    
});
test('is FAB a valid HexColor', () => {
    expect(functions.isHexColor("FAB")).toBe(true);
    
});
test('is 02 a valid HexColor', () => {
    expect(functions.isHexColor("02")).toBe(false);
    
});
test('is Y#E@E@9 a valid HexColor', () => {
    expect(functions.isHexColor("Y#E@E@9")).toBe(false);
    
});