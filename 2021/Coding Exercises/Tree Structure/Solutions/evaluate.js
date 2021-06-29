 // useless: can't test my html tag
 
 describe('index.html', function() {
    it('<html> element should exist', function() {
        const html = document.querySelector("html");
        expect(html).toBeDefined();
    });
    
    it("<head> element should be the first child of <html>", function() {
        const html = document.querySelector("html");
        expect(html.firstElementChild).toEqual(document.head);
    });
    
    it("<body> element should be the last child of <html>", function() {
        const html = document.querySelector("html");
        expect(html.lastElementChild).toEqual(document.body);
    });
});

/*
describe('index.css', function() {
    it('content should be green', function() {
        const body = document.querySelector("body");
        const style = window.getComputedStyle(body);
        expect(style.color).toEqual('rgb(0, 128, 0)');
    });
});

describe('index.js', function() {
    it('console should log the <head> element', function() {
        spyOn(console, 'log');
        yourAnswer1();
        expect(console.log).toHaveBeenCalledWith(document.head);
    });
    
    it('console should log the <body> element', function() {
        spyOn(console, 'log');
        yourAnswer2();
        expect(console.log).toHaveBeenCalledWith(document.body);
    });
});
*/