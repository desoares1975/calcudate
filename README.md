#INITIAL VERSION NOT COMPLETE
##Usage
```bash
npm install calcudate
```

```js
let date = require('calcudate');
let someDate = new Date('2015-11-12');
date.add(new Date()).years(10) //will add ten years
date.add(someDate).months(10) // returns date '2015-11-12T00:00:00'
date.add(new Date('2016-10-10T10:10:10.000')).days(10) //return date '2016-10-20T10:10:10.000'
date.add(new Date()).hours(10) //will add ten hours
date.add(new Date()).minutes(10) //will add ten minutess
date.add(new Date()).secs(10) //will add ten seconds
```