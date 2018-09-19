import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { interval } from "rxjs/Observable/interval";
import { map } from 'rxjs/operators';
import { from } from "rxjs/Observable/from";
import { skipUntil } from 'rxjs/operators';
import "rxjs/add/operator/pluck";
//import "rxjs/add/operator/skipUntil";

    //using the map operator (note use of pipe function in new version 6)
    Observable.create((observer:any) => {
        observer.next('Hey guys!')
    })
    .pipe(map((val:any) => val.toUpperCase()))
    .subscribe((x:any) => addItem(x));

    //using the pluck operator
    from([
        { first: 'Gary', last: 'Simon', age: '34'},
        { first: 'Jane', last: 'Simon', age: '34'},
        { first: 'John', last: 'Simon', age: '34'},
    ])
    .pluck('first')
    .subscribe((x:any) => addItem(x));

    //using the skipUntil operator
    /*var observable1 = Observable.create((data:any) => {
        var i = 1
        setInterval(() => {
            data.next(i++)
        }, 1000)
    })
    
    var observable2 = new Subject;
    
    setTimeout(() => {
        observable2.next('Hey!')
    }, 3000)
    
    var newObs = observable1.pipe(skipUntil(observable2))
    
    newObs.subscribe((x:any) => addItem(x));*/

// Our handy function for showing the values:
function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}