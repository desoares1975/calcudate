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