import { Observable } from "rxjs/Observable";
import { map, pluck } from "rxjs/operators";
import { from } from "rxjs/Observable/from";
import "rxjs/add/operator/pluck";

//using the map operator (note use of pipe function in new version 6)
new Observable((observer: any) => {
  observer.next("Here is a list of superheroes");
})
  .pipe(map((val: any) => val.toUpperCase()))
  .subscribe((x: any) => addItem(x));

//using the pluck operator
from([
  { first: "Gary", last: "Simon", age: "32" },
  { first: "Jane", last: "Bates", age: "34" },
  { first: "John", last: "Kent", age: "36" },
])
  .pipe(pluck("first"))
  .subscribe((x: any) => addItem(x));

// function for showing the values:
function addItem(val: any) {
  const node = document.createElement("li");
  const textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}
