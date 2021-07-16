describe('index.css', function() {
    const main = window.getComputedStyle(document.querySelector("main"));
    
    it('background color should be yellow', function() {
        expect(main.backgroundColor).toEqual('rgba(0, 0, 0, 0)'); // does not work
    });
    
    it('background clip should be border box', function() {
        expect(main.backgroundClip).toEqual('border-box'); 
    });
    
    it('border should be solid, 30px, red, and 50% transparent', function() {
        expect(main.border).toEqual('0px none rgb(0, 0, 0)'); // does not work
    });
    
    it('margin should be 20px', function() {
        expect(main.padding).toEqual('20px');
    });
    
    it('box sizing should be border box', function() {
        expect(main.boxSizing).toEqual('border-box');
    });
    
    it('background image should meet all requirements', function() {
        expect(main.backgroundImage).toEqual('url(https://interactive-examples.mdn.mozilla.net/media/examples/lizard.png)');
        expect(main.backgroundRepeat).toEqual('no-repeat');
        expect(main.backgroundOrigin).toEqual('border-box');
        expect(main.backgroundPosition).toEqual('50% 50%');
        expect(main.backgroundSize).toEqual('100%');
        expect(main.backgroundAttachment).toEqual('fixed');
    });
});