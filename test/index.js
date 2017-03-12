'use strict';

const date =  require('../dist/nodejs/calcudate');
const expect = require('chai').expect;

describe('add', () => {
    it('should do add 9 years', done => {
        let origin = new Date('2016-10-23 18:09:56.895'),
            addYears = new Date('2025-10-23 18:09:56.895'),
            summed = date.add(origin).years(9);
        expect(+summed).to.equal(+addYears);
        done();
    });
    it('should do add 4 months', done => {
        let origin = new Date('2016-05-23 18:09:56.895'),
            addMonths = new Date('2016-09-23 18:09:56.895'),
            summed = date.add(origin).months(4);
        expect(+summed).to.equal(+addMonths);
        done();
    });
    it('should do add 15 months', done => {
        let origin = new Date('2016-10-23T15:34:34.783'),
            addMonths = new Date('2018-01-23T15:34:34.783'),
            summed = date.add(origin).months(15);
        expect(+summed).to.equal(+addMonths);
        done();
    });
    it('should do add one day', done => {
        let origin = new Date('2016-10-23T15:34:34.783'),
            addDay = new Date('2016-10-24T15:34:34.783'),
            summed = date.add(origin).days(1);
        expect(+summed).to.equal(+addDay);
        done();
    });
    it('Should add 5 hours', done => {
        let origin = new Date('2016-10-23T15:34:34.783'),
            addHours = new Date('2016-10-23T20:34:34.783'),
            summed = date.add(origin).hours(5);
        expect(+summed).to.equal(+addHours);
        done();
    });
    it('Should add 18 minutes', done => {
        let origin = new Date('2016-10-23T15:34:34.783'),
            addMins = new Date('2016-10-23T15:52:34.783'),
            summed = date.add(origin).minutes(18);
        expect(+summed).to.equal(+addMins);
        done();
    });
    it('Should add 180 seconds', done => {
        let origin = new Date('2016-10-23T15:34:34.783'),
            addSecs = new Date('2016-10-23T15:37:34.783'),
            summed = date.add(origin).seconds(180);
        expect(+summed).to.equal(+addSecs);
        done();
    });
});

describe('add aliases', () => {
    it('should do add 9 years', done => {
        let test = new Date('2017-02-20T18:09:39.216Z'),
            control = date.add(test).years(9),
            tested = date.add(test).y(9),
            retested = date.add(test).Y(9);

        expect(+control).to.equal(+tested);
        expect(+control).to.equal(+retested);
        done();
    });
    it('should do add 1 months', done => {
        let test = new Date('2016-10-23T18:09:56.895'),
            control = date.add(test).months(1),
            tested = date.add(test).M(1),
            retested = date.add(test).mo(1);

        expect(+tested).to.equal(+control);
        expect(+retested).to.equal(+control);
        done();
    });
    it('should do add one day', done => {
        let test = new Date('2016-10-23T15:34:34.783'),
            control = date.add(test).days(1),
            tested = date.add(test).d(1);
        expect(+tested).to.equal(+control);
        done();
    });
    it('Should add 5 hours', done => {
        let test = new Date('2016-10-23T15:34:34.783'),
            control = date.add(test).hours(5),
            tested = date.add(test).h(5);
        expect(+tested).to.equal(+control);
        done();
    });
    it('Should add 18 minutes', done => {
        let test = new Date('2016-10-23T15:34:34.783'),
            control = date.add(test).minutes(18),
            tested = date.add(test).mins(18),
            retested = date.add(test).m(18),
            reretested = date.add(test).i(18);

        expect(+tested).to.equal(+control);
        expect(+retested).to.equal(+control);
        expect(+reretested).to.equal(+control);
        done();
    });
    it('Should add 180 seconds', done => {
        let test = new Date('2016-10-23T15:34:34.783'),
            control = date.add(test).seconds(180),
            tested = date.add(test).secs(180),
            retested = date.add(test).s(180);

        expect(+tested).to.equal(+control);
        expect(+retested).to.equal(+control);
        done();
    });
});

describe('sub', () => {
    it('Should subtract 12 years', done => {
        let origin = new Date('2016-07-10 18:32:25.223'),
            subYears = new Date('2004-07-10 18:32:25.223'),
            subtracted = date.sub(origin).years(12);
        expect(+subtracted).to.equal(+subYears);
        done();
    });
    it('Should subtract 24 months', done => {
        let origin = new Date('2016-07-10T15:34:34.783'),
            subMonths = new Date('2014-07-10T15:34:34.783'),
            subtracted = date.sub(origin).months(24);
        expect(+subtracted).to.equal(+subMonths);
        done();
    });
    it('Should subtract 29 days', done => {
        let origin = new Date('2016-07-10T15:34:34.783'),
            subdays = new Date('2016-06-11T15:34:34.783'),
            subtracted = date.sub(origin).days(29);
        expect(+subtracted).to.equal(+subdays);
        done();
    });
    it('Should subtract 29 hours', done => {
        let origin = new Date('2016-10-26T15:34:34.783'),
            subHours = new Date('2016-10-25T03:34:34.783'),
            subtracted = date.sub(origin).hours(36);
        expect(+subtracted).to.equal(+subHours);
        done();
    });
    it('Should subtract 25 minutes', done => {
        let origin = new Date('2016-10-26T15:34:34.783'),
            subMins = new Date('2016-10-26T15:09:34.783'),
            subtracted = date.sub(origin).minutes(25);
        expect(+subtracted).to.equal(+subMins);
        done();
    });
    it('Should subtract 90 seconds', done => {
        let origin = new Date('2016-10-26T15:34:34.783'),
            subMins = new Date('2016-10-26T15:33:04.783'),
            subtracted = date.sub(origin).seconds(90);
        expect(+subtracted).to.equal(+subMins);
        done();
    });
});

describe('sub aliases', () => {
    it('should do add 9 years', done => {
        let test = new Date('2017-02-20T18:09:39.216Z'),
            control = date.sub(test).years(9),
            tested = date.sub(test).y(9),
            retested = date.sub(test).Y(9);

        expect(+control).to.equal(+tested);
        expect(+control).to.equal(+retested);
        done();
    });
    it('should do add 1 months', done => {
        let test = new Date('2016-10-23T18:09:56.895'),
            control = date.sub(test).months(1),
            tested = date.sub(test).M(1),
            retested = date.sub(test).mo(1);

        expect(+tested).to.equal(+control);
        expect(+retested).to.equal(+control);
        done();
    });
    it('should do sub one day', done => {
        let test = new Date('2016-10-23T15:34:34.783'),
            control = date.sub(test).days(1),
            tested = date.sub(test).d(1);
        expect(+tested).to.equal(+control);
        done();
    });
    it('Should sub 5 hours', done => {
        let test = new Date('2016-10-23T15:34:34.783'),
            control = date.sub(test).hours(5),
            tested = date.sub(test).h(5);
        expect(+tested).to.equal(+control);
        done();
    });
    it('Should sub 18 minutes', done => {
        let test = new Date('2016-10-23T15:34:34.783'),
            control = date.sub(test).minutes(18),
            tested = date.sub(test).mins(18),
            retested = date.sub(test).m(18),
            reretested = date.sub(test).i(18);

        expect(+tested).to.equal(+control);
        expect(+retested).to.equal(+control);
        expect(+reretested).to.equal(+control);
        done();
    });
    it('Should sub 180 seconds', done => {
        let test = new Date('2016-10-23T15:34:34.783'),
            control = date.sub(test).seconds(180),
            tested = date.sub(test).secs(180),
            retested = date.sub(test).s(180);

        expect(+tested).to.equal(+control);
        expect(+retested).to.equal(+control);
        done();
    });
});

describe('last', () => {
    
    it('Should return last day of each month', done => {

    let jan = new Date('2016-01-01 00:00:00.000'),
        feb = new Date('2016-02-01 00:00:00.000'),
        febL = new Date('2015-02-01 00:00:00.000'),
        mar = new Date('2016-03-01 00:00:00.000'),
        apr = new Date('2016-04-01 00:00:00.000'),
        may = new Date('2016-05-01 00:00:00.000'),
        jun = new Date('2016-06-01 00:00:00.000'),
        jul = new Date('2016-07-01 00:00:00.000'),
        ago = new Date('2016-08-01 00:00:00.000'),
        sep = new Date('2016-09-01 00:00:00.000'),
        oct = new Date('2016-10-01 00:00:00.000'),
        nov = new Date('2016-11-01 00:00:00.000'),
        dez = new Date('2016-12-01 00:00:00.000');

    let lastJan = date.getLastOf(jan).day,
        lastFeb = date.getLastOf(feb).day,
        lastFebLast = date.getLastOf(febL).day,
        lastMar = date.getLastOf(mar).day,
        lastApr = date.getLastOf(apr).day,
        lastMay = date.getLastOf(may).day,
        lastJun = date.getLastOf(jun).day,
        lastJul = date.getLastOf(jul).day,
        lastAug = date.getLastOf(ago).day,
        lastSep = date.getLastOf(sep).day,
        lastOct = date.getLastOf(oct).day,
        lastNov = date.getLastOf(nov).day,
        lastDec = date.getLastOf(dez).day;

        expect(lastJan).to.equal(31);
        expect(lastFeb).to.equal(29);
        expect(lastFebLast).to.equal(28);
        expect(lastMar).to.equal(31);
        expect(lastApr).to.equal(30);
        expect(lastMay).to.equal(31);
        expect(lastJun).to.equal(30);
        expect(lastJul).to.equal(31);
        expect(lastAug).to.equal(31);
        expect(lastSep).to.equal(30);
        expect(lastOct).to.equal(31);
        expect(lastNov).to.equal(30);
        expect(lastDec).to.equal(31);

        done();
    });

    let jan = new Date('2016-01-01 00:00:00.000'),
        feb = new Date('2016-02-01 00:00:00.000'),
        febL = new Date('2015-02-01 00:00:00.000'),
        mar = new Date('2016-03-01 00:00:00.000'),
        apr = new Date('2016-04-01 00:00:00.000'),
        may = new Date('2016-05-01 00:00:00.000'),
        jun = new Date('2016-06-01 00:00:00.000'),
        jul = new Date('2016-07-01 00:00:00.000'),
        ago = new Date('2016-08-01 00:00:00.000'),
        sep = new Date('2016-09-01 00:00:00.000'),
        oct = new Date('2016-10-01 00:00:00.000'),
        nov = new Date('2016-11-01 00:00:00.000'),
        dez = new Date('2016-12-01 00:00:00.000');

    it('Should return last date of each month', done => {
        let lastJan = date.getLastOf(jan).date,
            lastFeb = date.getLastOf(feb).date,
            lastFebLast = date.getLastOf(febL).date,
            lastMar = date.getLastOf(mar).date,
            lastApr = date.getLastOf(apr).date,
            lastMay = date.getLastOf(may).date,
            lastJun = date.getLastOf(jun).date,
            lastJul = date.getLastOf(jul).date,
            lastAug = date.getLastOf(ago).date,
            lastSep = date.getLastOf(sep).date,
            lastOct = date.getLastOf(oct).date,
            lastNov = date.getLastOf(nov).date,
            lastDec = date.getLastOf(dez).date;

        expect(+lastJan).to.equal(+new Date('2016-01-31 00:00:00.000'));
        expect(+lastFeb).to.equal(+new Date('2016-02-29 00:00:00.000'));
        expect(+lastFebLast).to.equal(+new Date('2015-02-28 00:00:00.000'));
        expect(+lastMar).to.equal(+new Date('2016-03-31 00:00:00.000'));
        expect(+lastApr).to.equal(+new Date('2016-04-30 00:00:00.000'));
        expect(+lastMay).to.equal(+new Date('2016-05-31 00:00:00.000'));
        expect(+lastJun).to.equal(+new Date('2016-06-30 00:00:00.000'));
        expect(+lastJul).to.equal(+new Date('2016-07-31 00:00:00.000'));
        expect(+lastAug).to.equal(+new Date('2016-08-31 00:00:00.000'));
        expect(+lastSep).to.equal(+new Date('2016-09-30 00:00:00.000'));
        expect(+lastOct).to.equal(+new Date('2016-10-31 00:00:00.000'));
        expect(+lastNov).to.equal(+new Date('2016-11-30 00:00:00.000'));
        expect(+lastDec).to.equal(+new Date('2016-12-31 00:00:00.000'));
        
        done();
     });
});

describe('getOffset', () => {
    it('Should return offset integer', done => {
        let control = new Date().getTimezoneOffset(),
            offset = date.getOffset().int;
        expect(offset).to.equal(control);
        done();
    });
    it('Should return offset string', done => {
        let offset = date.getOffset().str,
            control = new Date().toString(),
            start = control.indexOf('GMT');
        expect(offset).to.equal(control.substring(start + 3, start + 8));
        done();
    });
});

describe('getStart', () => {
    it('Should return start hour of give time', done => {
        let test = new Date('2017-02-20 15:34:34.783'),
            control = +new Date('2017-02-20 15:00:00.000'),
            tested = date.getStart(test).hour;

        expect(+tested).to.deep.equal(control);
        done();
    });
    it('Should return start moment of the day of given date', done => {
        let test = new Date('2017-02-20 15:34:34.783'),
            offset = date.getOffset(test).int,
            control = date.add(new Date('2017-02-20T00:00:00.000')).minutes(offset),
            tested = date.getStart(test).day;

        expect(+tested).to.deep.equal(+control);
        done();
    });
});
