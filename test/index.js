'use strict';

const date =  require('../dist/calcudate');
const expect = require('chai').expect;

describe('add', () => {
    it('should do add 9 years', done => {
        let origin = new Date('2016-10-23T18:09:56.895'),
            addYears = new Date('2025-10-23T18:09:56.895'),
            summed = date.add(origin).years(9);
        expect(+summed).to.equal(+addYears);
        done();
    });
    it('should do add 4 months', done => {
        let origin = new Date('2016-10-23T18:09:56.895'),
            addMonths = new Date('2016-11-23T18:09:56.895'),
            summed = date.add(origin).months(1);
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
            summed = date.add(origin).secs(180);
        expect(+summed).to.equal(+addSecs);
        done();
    });
});

describe('sub', () => {
    it('Should subtract 12 years', done => {
        let origin = new Date('2016-07-10T18:32:25.223'),
            subYears = new Date('2004-07-10T18:32:25.223'),
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
            subtracted = date.sub(origin).secs(90);
        expect(+subtracted).to.equal(+subMins);
        done();
    });
});

describe('last', () => {
     it('Should return last day of each month', done => {
        let lastJan = date.getLastOf(new Date('2016-01-01 00:00:00')).day,
            lastFeb = date.getLastOf(new Date('2016-02-01 00:00:00')).day,
            lastFebLast = date.getLastOf(new Date('2015-02-01 03:00:00')).day,
            lastMar = date.getLastOf(new Date('2016-03-01 03:00:00')).day,
            lastApr = date.getLastOf(new Date('2016-04-01 03:00:00')).day,
            lastMay = date.getLastOf(new Date('2016-05-01 12:00:00')).day,
            lastJun = date.getLastOf(new Date('2016-06-01 03:53:33')).day,
            lastJul = date.getLastOf(new Date('2016-07-01 03:00:00')).day,
            lastAug = date.getLastOf(new Date('2016-08-01 03:00:00')).day,
            lastSep = date.getLastOf(new Date('2016-09-01 03:00:00')).day,
            lastOuc = date.getLastOf(new Date('2016-10-01 02:00:00')).day,
            lastNov = date.getLastOf(new Date('2016-11-01 02:00:00')).day,
            lastDec = date.getLastOf(new Date('2016-12-01 02:00:00')).day;

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
        expect(lastOuc).to.equal(31);
        expect(lastNov).to.equal(30);
        expect(lastDec).to.equal(31);
        done();
     });
     it('Should return last date of each month', done => {
        let lastJan = date.getLastOf(new Date('2016-01-01 00:00:00')).date,
            lastFeb = date.getLastOf(new Date('2016-02-01 00:00:00')).date,
            lastFebLast = date.getLastOf(new Date('2015-02-01 03:00:00')).date,
            lastMar = date.getLastOf(new Date('2016-03-01 03:00:00')).date,
            lastApr = date.getLastOf(new Date('2016-04-01 03:00:00')).date,
            lastMay = date.getLastOf(new Date('2016-05-01 12:00:00')).date,
            lastJun = date.getLastOf(new Date('2016-06-01 03:00:00')).date,
            lastJul = date.getLastOf(new Date('2016-07-01 03:00:00')).date,
            lastAug = date.getLastOf(new Date('2016-08-01 03:00:00')).date,
            lastSep = date.getLastOf(new Date('2016-09-01 03:00:00')).date,
            lastOuc = date.getLastOf(new Date('2016-10-01 02:00:00')).date,
            lastNov = date.getLastOf(new Date('2016-11-01 02:00:00')).date,
            lastDec = date.getLastOf(new Date('2016-12-01 02:00:00')).date;

        expect(lastJan.toString()).to.equal(new Date('Sun, 31 Jan 2016 02:00:00 GMT').toString());
        expect(lastFeb.toString()).to.equal(new Date('2016-02-29 00:00:00').toString());
        expect(lastFebLast.toString()).to.equal(new Date('2015-02-28 00:00:00').toString());
        expect(lastMar.toString()).to.equal(new Date('2016-03-31 00:00:00').toString());
        expect(lastApr.toString()).to.equal(new Date('2016-04-30 00:00:00').toString());
        expect(lastMay.toString()).to.equal(new Date('2016-05-31 00:00:00').toString());
        expect(lastJun.toString()).to.equal(new Date('2016-06-30 00:00:00').toString());
        expect(lastJul.toString()).to.equal(new Date('2016-07-31 00:00:00').toString());
        expect(lastAug.toString()).to.equal(new Date('2016-08-31 00:00:00').toString());
        expect(lastSep.toString()).to.equal(new Date('2016-09-30 00:00:00').toString());
        expect(lastOuc.toString()).to.equal(new Date('2016-10-31 00:00:00').toString());
        expect(lastNov.toString()).to.equal(new Date('2016-11-30 00:00:00').toString());
        expect(lastDec.toString()).to.equal(new Date('2016-12-31 00:00:00').toString());
        done();
     });
});

describe('getStart', () => {
    it('Should return start hour of give time', done => {
        let test = new Date('2017-02-20T15:34:34.783'),
            control = +new Date('2017-02-20T15:00:00.000'),
            tested = date.getStart(test).hour;

        expect(+tested).to.deep.equal(control);
        done();
    });
    it('Should return start momonto of the day of given date', done => {
        let test = new Date('2017-02-20T15:34:34.783'),
            offset = date.getOffset(test).int,
            control = date.add(new Date('2017-02-20T00:00:00.000')).minutes(offset),
            tested = date.getStart(test).day;

        expect(+tested).to.deep.equal(+control);
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

        expect(offset).to.equal(control.substring( start + 3, start + 8));
        done();
    });
});
