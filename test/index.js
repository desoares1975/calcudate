'use strict';

const date =  require('../dist/calcudate');
const expect = require('chai').expect;

describe('add', () => {
    it('should do add 9 years', done => {
        let origin = new Date('2016-10-23T18:00:00.000');
        let addYears = new Date('2025-10-23T18:00:00.000');
        let summed = date.add(origin).years(9);
        expect(summed.toString()).to.equal(addYears.toString());
        done();
    });
    it('should do add 4 months', done => {
        let origin = new Date('2016-10-23T18:00:00.000');
        let addMonths = new Date('2016-11-23T18:00:00.000');
        let summed = date.add(origin).months(1);
        expect(summed.toString()).to.equal(addMonths.toString());
        done();
    });
    it('should do add 15 months', done => {
        let origin = new Date('2016-10-23T18:00:00.000');
        let addMonths = new Date('2018-01-23T18:00:00.000');
        let summed = date.add(origin).months(15);
        expect(summed.toString()).to.equal(addMonths.toString());
        done();
    });
    it('should do add one day', done => {
        let origin = new Date('2016-10-23T18:00:00.000');
        let addDay = new Date('2016-10-24T18:00:00.000');
        let summed = date.add(origin).days(1);
        expect(summed.toString()).to.equal(addDay.toString());
        done();
    });
    it('Should add 5 hours', done => {
        let origin = new Date('2016-10-23T18:00:00.000');
        let addHours = new Date('2016-10-23T23:00:00.000');
        let summed = date.add(origin).hours(5);
        expect(summed.toString()).to.equal(addHours.toString());
        done();
    });
    it('Should add 18 minutes', done => {
        let origin = new Date('2016-10-23T18:00:00.000');
        let addMins = new Date('2016-10-23T18:18:00.000');
        let summed = date.add(origin).minutes(18);
        expect(summed.toString()).to.equal(addMins.toString());
        done();
    });
    it('Should add 180 seconds', done => {
        let origin = new Date('2016-10-23T18:00:00.000');
        let addSecs = new Date('2016-10-23T18:03:00.000');
        let summed = date.add(origin).secs(180);
        expect(summed.toString()).to.equal(addSecs.toString());
        done();
    });
});

describe('sub', () => {
    it('Should subtract 12 years', done => {
        let origin = new Date('2016-07-10T18:00:00.000');
        let subYears = new Date('2004-07-10T18:00:00.000');
        let subtracted = date.sub(origin).years(12);
        expect(subtracted.toString()).to.equal(subYears.toString());
        done();
    });
    it('Should subtract 24 months', done => {
        let origin = new Date('2016-07-10T18:00:00.000');
        let subMonths = new Date('2014-07-10T18:00:00.000');
        let subtracted = date.sub(origin).months(24);
        expect(subtracted.toString()).to.equal(subMonths.toString());
        done();
    });
    it('Should subtract 29 days', done => {
        let origin = new Date('2016-07-10T18:00:00.000');
        let subdays = new Date('2016-06-11T18:00:00.000');
        let subtracted = date.sub(origin).days(29);
        expect(subtracted.toString()).to.equal(subdays.toString());
        done();
    });
    it('Should subtract 36 hours', done => {
        let origin = new Date('2016-10-26T21:23:00.000');
        let subHours = new Date('2016-10-25T16:23:00.000');
        let subtracted = date.sub(origin).hours(29);
        expect(subtracted.toString()).to.equal(subHours.toString());
        done();
    });
    it('Should subtract 25 minutes', done => {
        let origin = new Date('2016-10-26T21:28:00.000');
        let subMins = new Date('2016-10-26T21:03:00.000');
        let subtracted = date.sub(origin).minutes(25);
        expect(subtracted.toString()).to.equal(subMins.toString());
        done();
    });
    it('Should subtract 90 seconds', done => {
        let origin = new Date('2016-10-26T21:28:00.000');
        let subMins = new Date('2016-10-26T21:26:30.000');
        let subtracted = date.sub(origin).secs(90);
        expect(subtracted.toString()).to.equal(subMins.toString());
        done();
    });
});

describe('last', () => {
     it('Should return last day of each month', done => {
        let lastJan = date.getLastOf(new Date('2016-01-01 03:00:00')).day;
        let lastFeb = date.getLastOf(new Date('2016-02-01 03:00:00')).day;
        let lastFebLast = date.getLastOf(new Date('2015-02-01 03:00:00')).day;
        let lastMar = date.getLastOf(new Date('2016-03-01 03:00:00')).day;
        let lastApr = date.getLastOf(new Date('2016-04-01 03:00:00')).day;
        let lastMay = date.getLastOf(new Date('2016-05-01 03:00:00')).day;
        let lastJun = date.getLastOf(new Date('2016-06-01 03:00:00')).day;
        let lastJul = date.getLastOf(new Date('2016-07-01 03:00:00')).day;
        let lastAug = date.getLastOf(new Date('2016-08-01 03:00:00')).day;
        let lastSep = date.getLastOf(new Date('2016-09-01 03:00:00')).day;
        let lastOuc = date.getLastOf(new Date('2016-10-01 02:00:00')).day;
        let lastNov = date.getLastOf(new Date('2016-11-01 02:00:00')).day;
        let lastDec = date.getLastOf(new Date('2016-12-01 02:00:00')).day;

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
});

describe('getOffset', () => {
    it('Should return offset integer', done => {
        let control = new Date().getTimezoneOffset();
        let offset = date.getOffset().int;
        expect(offset).to.equal(control);
        done();
    });
    it('Should return -0300', done => {
        let offset = date.getOffset().str;
        let control = new Date().toString();
        let start = control.indexOf('GMT');
        control.substring( start + 3, start + 8)

        expect(offset).to.equal(control.substring( start + 3, start + 8));
        done();
    });
});