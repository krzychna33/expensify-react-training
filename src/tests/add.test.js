const add = (a,b) => a+b;
const generateGreeting = name => `Hello ${name}!`;

test('should add two numbers', () =>{
    const result = add(3,1);
    expect(result).toBe(4);
});

test('should generate greeting', () => {
    const greeting = generateGreeting('Krzysiek');
    expect(greeting).toBe('Hello Krzysiek!')
})