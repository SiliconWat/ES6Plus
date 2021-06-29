describe('index.html', function() {
    it('<header> should exist', function() {
        expect(document.querySelector("body > header")).not.toBeNull();
    });
    
    it('<main> should exist', function() {
        expect(document.querySelector("body > main")).not.toBeNull();
    });
    
    it('<footer> should exist', function() {
        expect(document.querySelector("body > footer")).not.toBeNull();
    });
    
    it('Two <nav> elements should exist', function() {
        expect(document.querySelector("header > nav")).not.toBeNull();
        expect(document.querySelector("footer > nav")).not.toBeNull();
    });
    
    it('Three <section> elements should exist', function() {
        expect(document.querySelectorAll("main > section").length).toEqual(3);
    });
    
    it('Four <a> elements should exist', function() {
        expect(document.querySelectorAll("nav > a").length).toEqual(4);
    });
    
    it('<h1>, <h2>, <h3> should exist', function() {
        expect(document.querySelector("section:nth-of-type(1) > h1")).not.toBeNull();
        expect(document.querySelector("section:nth-of-type(2) > h2")).not.toBeNull();
        expect(document.querySelector("section:nth-of-type(3) > h3")).not.toBeNull();
    });
    
    it('<img> should exist', function() {
        expect(document.querySelector("section:nth-of-type(1) > img")).not.toBeNull();
    });
    
    it('<p> should exist', function() {
        expect(document.querySelector("section:nth-of-type(2) > p")).not.toBeNull();
    });
    
    it('<button> should exist', function() {
        expect(document.querySelector("section:nth-of-type(3) > button")).not.toBeNull();
    });
});