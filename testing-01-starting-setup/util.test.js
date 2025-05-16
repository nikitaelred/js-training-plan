const { generateText, checkAndGenerate } = require('./util');
test('should output name and age',()=>{
    const text = generateText('Niki',29);
    expect(text).toBe('Niki (29 years old)');
});


test('should generate a valid text output', () => {
    const text = checkAndGenerate('Max',29);
    expect(text).toBe('Max (29 years old)');
})