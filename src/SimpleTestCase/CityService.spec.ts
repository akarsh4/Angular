import { CityService } from "./CityService";

fdescribe('CityService', () => {
    let cityService : CityService;

    beforeEach(() => {
        cityService = new CityService();
    });

    afterEach(()=>{
//
    });

    it('Array Test', ()=>{
        let a=[1,2,3];
        expect(a).toEqual([1,2,3]);
    });

    it('should check if a new city is added', () => {
        const newCity = 'pune';
        const newCity1 = 'abc';

        cityService.addCity(newCity);
        expect(cityService.cities).toContain(newCity);
    });

});