describe('index.html', function() {
    it('<p> tag should exist', function() {
        const p = document.querySelector("p");
        expect(p).not.toBeNull();
    });
    
    it("content should say 'hello world'", function() {
        const p = document.querySelector("p");
        expect(p.textContent.trim()).toEqual("Hello World");
    });
});

describe('index.css', function() {
    it('content should be green', function() {
        const p = document.querySelector("p");
        const style = window.getComputedStyle(p);
        expect(style.color).toEqual('rgb(0, 128, 0)');
    });
});

describe('index.js', function() {
    it('javascript should select <p> element', function() {
        spyOn(document, 'querySelector');
        yourAnswer();
        expect(document.querySelector).toHaveBeenCalledWith("p");
    });
});