import { numberTest } from "./numberTest";

fdescribe('numberTest', () => {

    it('should return 0 if the input is negative', ()=>{
        const result = numberTest(-1);
        expect(result).toBe(0);
    });

    it('should increment the input if it is positive', () =>{
        const result = numberTest(1);
        expect(result).toBe(2);
    });
});