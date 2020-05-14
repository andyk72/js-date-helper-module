import {
    nextDayOfWeek
} from './index';

describe('Module date-helper', () => {

    it('exposes nextDayOfWeek module', () => {
        expect(nextDayOfWeek.DAYS_OF_WEEK).not.toBeUndefined();
        expect(nextDayOfWeek.nextDayOfWeek).not.toBeUndefined();
    });
    
});