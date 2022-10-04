import { addition } from "./addition";

fdescribe('addition', () =>{
    it('should add', () =>{
       // const a = 10;
       // const b = 10;
        expect(addition(10,10)).toBe(20);
    });
});