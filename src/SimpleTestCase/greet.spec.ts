import { greet } from "./greet";
fdescribe('greet', () => {
    it('should have name', () => {
        const name = 'sahana';
        const name1 = 'p';
        expect(greet(name)).toContain(name);
    });
});