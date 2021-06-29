describe('index.js', function() {
    it('console should log the number 12', function() {
        spyOn(console, 'log');
        yourAnswer1();
        expect(console.log).toHaveBeenCalledWith(12);
    });
    
    it('console should log the string "hello world"', function() {
        spyOn(console, 'log');
        yourAnswer2();
        expect(console.log).toHaveBeenCalledWith("hello world");
    });
    
    it('console should log a number', function() {
        spyOn(console, 'log');
        yourAnswer3();
        expect(console.log).toHaveBeenCalledWith(document.querySelector("p"));
    });
});