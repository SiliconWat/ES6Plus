const header = document.querySelector("header");
const img = document.querySelector("img");

describe('index.css', function() {
    it('header should be scrollable along y-axis only', function() {
        const style = window.getComputedStyle(header);
        expect(style.overflowX).toEqual('hidden');
        expect(style.overflowY).toEqual('scroll');
    });
    
    it('img should be relative and 5px from the top and 10px from the left', function() {
        const style = window.getComputedStyle(img);
        expect(style.position).toEqual('relative');
        expect(style.top).toEqual('5px');
        expect(style.left).toEqual('10px');
    });
});

describe('index.js', function() {
    it('console should log the viewport width', function() {
        spyOn(console, 'log');
        yourAnswer1();
        expect(console.log).toHaveBeenCalledWith(window.innerWidth);
    });
    
    it('console should log the viewport height', function() {
        spyOn(console, 'log');
        yourAnswer2();
        expect(console.log).toHaveBeenCalledWith(window.innerHeight);
    });
    
    it('console should log the clientWidth', function() {
        spyOn(console, 'log');
        yourAnswer3();
        expect(console.log).toHaveBeenCalledWith(header.clientWidth);
    });
    
    it('console should log the clientHeight', function() {
        spyOn(console, 'log');
        yourAnswer4();
        expect(console.log).toHaveBeenCalledWith(header.clientHeight);
    });
    
    it('console should log the offsetWidth', function() {
        spyOn(console, 'log');
        yourAnswer5();
        expect(console.log).toHaveBeenCalledWith(header.offsetWidth);
    });
    
    it('console should log the offsetHeight', function() {
        spyOn(console, 'log');
        yourAnswer6();
        expect(console.log).toHaveBeenCalledWith(header.offsetHeight);
    });
    
    it('console should log the scrollWidth', function() {
        spyOn(console, 'log');
        yourAnswer7();
        expect(console.log).toHaveBeenCalledWith(header.scrollWidth);
    });
    
    it('console should log the scrollHeight', function() {
        spyOn(console, 'log');
        yourAnswer8();
        expect(console.log).toHaveBeenCalledWith(header.scrollHeight);
    });
    
    it('console should log the scrollTop', function() {
        spyOn(console, 'log');
        yourAnswer9();
        expect(console.log).toHaveBeenCalledWith(header.scrollTop);
    });
    
    it('console should log the scrollLeft', function() {
        spyOn(console, 'log');
        yourAnswer10();
        expect(console.log).toHaveBeenCalledWith(header.scrollLeft);
    });
    
    it('console should log the offsetTop', function() {
        spyOn(console, 'log');
        yourAnswer11();
        expect(console.log).toHaveBeenCalledWith(img.offsetTop);
    });
    
    it('console should log the offsetLeft', function() {
        spyOn(console, 'log');
        yourAnswer12();
        expect(console.log).toHaveBeenCalledWith(img.offsetLeft);
    });
});