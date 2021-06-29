describe('index.html', function() {
    it('<nav> tag should exist', function() {
        const nav = document.querySelector("header > nav");
        expect(nav).not.toBeNull();
    });
});

describe('index.css', function() {
    const nav = document.querySelector("header");
    
    it('header box', function() {
        const style = window.getComputedStyle(nav);
        
        expect(style.width).toEqual('364px');
        expect(style.height).toEqual('220px');
        expect(style.padding).toEqual('0px');
        expect(style.border).toEqual('10px solid rgb(0, 128, 0)');
        expect(style.margin).toEqual('0px');
    });
    
    it('nav box', function() {
        const style = window.getComputedStyle(nav.firstElementChild);
        
        expect(style.width).toEqual('200px');
        expect(style.height).toEqual('150px');
        expect(style.backgroundColor).toEqual('rgb(173, 216, 230)');
        expect(style.backgroundClip).toEqual('content-box');
        expect(style.padding).toEqual('10px');
        expect(style.paddingTop).toEqual('10px');
        expect(style.paddingRight).toEqual('10px');
        expect(style.paddingBottom).toEqual('10px');
        expect(style.paddingLeft).toEqual('10px');
        expect(style.border).toEqual('5px double rgb(0, 0, 255)');
        expect(style.margin).toEqual('20px');
    });
});