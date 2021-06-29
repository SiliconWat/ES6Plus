describe('index.html', function() {
    it('background should be skyblue', function() {
        const body = document.querySelector("body");
        const style = window.getComputedStyle(body);
        expect(style.color).toEqual('rgb(0, 0, 0)');
    });
});