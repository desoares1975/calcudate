#Calcudate 2.0

##Usage
```bash
npm install calcudate
```

Sum Years, months, days, hours, minutes or seconds to a date:
```js
let date = require('calcudate');

let someDate = new Date('2015-11-12');
//add ten years
date.add(new Date()).years(10)

//returns date '2015-11-12T00:00:00'
date.add(someDate).months(10)

//return date '2016-10-20T10:10:10.000'
date.add(new Date('2016-10-10T10:10:10.000')).days(10)

//add ten hours
date.add(new Date()).hours(10)

//add ten minutess
date.add(new Date()).minutes(10)

//add ten seconds
date.add(new Date()).secs(10)
```
Subtract Years, months, days, hours, minutes or seconds of a date:
```js
let date = require('calcudate');

let someDate = new Date('2015-11-12');

//subtract ten years
date.sub(new Date()).years(10)

// returns date '2015-01-12T00:00:00'
date.sub(someDate).months(10)

//return date '2016-10-10T10:10:10.000'
date.sub(new Date('2016-10-10T10:10:10.000')).days(10)

//subtract ten hours
date.sub(new Date()).hours(10)

//subtract ten minutess
date.sub(new Date()).minutes(10)

//subtract ten seconds
date.sub(new Date()).secs(10)
```
Get start time of day or hour (On local time!)
```js
let date = require('calcudate');
let aDate = new Date('2017-02-20T22:02:36:23.296');
let myDate = getStart(aDate).day;
/*
WARNING - return 2017-02-20T00:00:00:00.000 or
2017-02-20T03:00:00:00.000 depeding local time
*/
```
Get the last day or date of a month:
```js
let date = require('calcudate');
let lastFebLast = date.getLastOf(new Date('2015-02-01 03:00:00')).day;
//return 28
let lastMar = date.getLastOf(new Date('2016-03-01 03:00:00')).day;
//return 29
let lastApr = date.getLastOf(new Date('2016-04-01 03:00:00')).day;
//return 31
```
Get the integer timezone offset or the string
```js
let date = require('calcudate');

//return local offset integer like 0 for GMT or 180 for BRT
let offset = date.getOffset().int;

//return local offset integer like +0000 for GMT or -0300 for BRT
let offset = date.getOffset().str;

```
##Main differences from 1.x.x versions:
 Added support for browser (calcudate/dist/js/calcudate.js)
 ```html
<script type="text/javascript" src="../dist/js/calcudate.js"></script>
 ```
 -Fixed several error on add and sub for years ans months that disconsidered minutes and seconds.
 -Fixed getOffset() for regions with GMT whithout straight hours offset.(-01:30, +04:45, ...) 
 - Added aliases to all add and sub methods, becouse the didi not have veri intuitive names
    - Add secconds
    ```js
    let myDate = new Date();
    let date = require('calcudate');
    let test = date.add(myDate).s(10);
    let test1 = date.add(myDate).secs(10);
    let test2 = date.add(myDate).seconds(10);
    return +test === +test1 && test === test2;
    //returns true
    ```
    Alias that works just like it's relative method, both in add and sub. Here ar all of then:
        - secs -> s, seconds;
        - minutes -> m, i, mins;
        - hours -> h;
        - days -> d;
        - months -> M, mo;
        - years -> y, Y;
    Other alias that works:
        - getLastOf.day -> getLastOf.d
        - getStart.day -> getStart.d
        - getStart.hour -> getStart.h
        - getOffset.str -> getOffset.string -> getOffset.s
        - getOffset.int -> getOffset.integer -> getOffset.i
