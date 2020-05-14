import moment from 'moment';
import {
    DAYS_OF_WEEK,
    dateFormat,
    nextDayOfWeek,
    nextSunday
} from './nextDayOfWeek';

describe('Module nextDayOfWeek', () => {

    let fromDate;

    beforeEach(() => {
        fromDate = new Date('2020-05-14');
    });

    it('exposes DAYS_OF_WEEK constant', () => {
        const daysOfWeek = DAYS_OF_WEEK;
        expect(daysOfWeek).not.toBeUndefined();
    });

    it('nextDayOfWeek() returns a Moment object', () => {
        const sunday = nextDayOfWeek();
        const isMomentInstance = sunday instanceof moment;
        expect(isMomentInstance).toBe(true);
    });

    it('nextDayOfWeek() with "tuesday" dayOfWeek param returns the correct date', () => {
        const tuesday = dateFormat(nextDayOfWeek('tuesday', fromDate));
        const expectded = '19/05/2020';
        expect(tuesday).toBe(expectded);
    });

    it('nextDayOfWeek() with "2" dayOfWeek param returns the correct date', () => {
        const tuesday = dateFormat(nextDayOfWeek(2, fromDate));
        const expectded = '19/05/2020';
        expect(tuesday).toBe(expectded);
    });

    it('nextSunday() returns a Moment object', () => {
        const sunday = nextSunday();
        const isMomentInstance = sunday instanceof moment;
        expect(isMomentInstance).toBe(true);
    });

    it('dateFormat() with no format param returns DD/MM/YYYY formatted date', () => {
        const sunday = dateFormat(nextSunday(fromDate));
        const expectded = '17/05/2020';
        expect(sunday).toBe(expectded);
    });

    it('dateFormat() with YYYY.MM.DD format param returns correct formatted date', () => {
        const sunday = dateFormat(nextSunday(fromDate), 'YYYY.MM.DD');
        const expectded = '2020.05.17';
        expect(sunday).toBe(expectded);
    });

});