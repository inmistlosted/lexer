/*
    The main Math class
    Contains all methods for performing basic math functions
*/

this.fThree({strA: 'a',

strB: 'b',

strC: 'c',

strD: 'd'

}, 'strE');


const c = 'bgf';
const c = 'b';
const c = '';
// gfhfghhgfh sta;tic int Add(int a, int b)
var rows = prompt("How many rows for your multiplication table?");
    var cols = prompt("How many columns for your multiplication table?");
    if(rows == "" || rows == null)
   		 rows = 10;
    if(cols== "" || cols== null)
   		 cols = 10;
    createTable(rows, cols);
    function createTable(rows, cols){
      var j=1;
      var output = "<table border='1' width='500' cellspacing='0'cellpadding='5'>";
      for(i=1;i<=rows;i++){
    	output = output + "<tr>";
        while(j<=cols)
        {
  		  output = output + "<td>" + i*j + "</td>";
   		  j = j+1;
   		}
   		 output = output + "</tr>";
   		 j = 1;
    }
    output = output + "</table>";
    document.write(output);
    }

foo(
"demo",
{
	title: "Demo",
	width: 100
},
function () {
	object.firstCall(
	{
		a: 'a',
		b: 'b'
	})
	.secondCall()


	.make();
}
);

import { Component } from 'react';

export class Greeter {
    greetNTimes( to , { from , times } ) {
        return range(times).map(item => this.greet(to , from))
    }
}

export class ConsoleGreeter extends Greeter {
    greet( to , from ) {
        return "Hello, ${to} from ${from.join(',')}"
    }
}

export class ReactGreeter extends Greeter {
    greet( to , from ) {
        return "hjkkhkhk"
    }
}

new ConsoleGreeter().greetNTimes('World' , { name : [ 'Webstorm' ] , times : 3 });

function fibonacci( current = 1 , next = 1 ) {
    yield*fibonacci(next , current + next);
}

function foo( x , y , z ) {
    var i = 0;
    var x = { 0 : "zero" , 1 : "one" };
    var a = [ 0 , 1 , 2 ];
    var foo = function () {
    }
    var asyncFoo = async ( x , y , z ) => {
    }
    var v = x.map(s => s.length);
    if (!i > 10) {
        for (var j = 0 ; j < 10 ; j++) {
            switch (j) {
                case 0:
                    value = "zero";
                    break;
                case 1:
                    value = "one";
                    break;
            }
            var c = j > 5 ? "GT 5" : "LE 5";
        }
    } else {
        var j = 0;
        try {
            while (j < 10) {
                if (i == j || j > 5) {
                    a[j] = i + j * 12;
                }
                i = ( j << 2 ) & 4;
                j++;
            }
            do {
                j--;
            } while (j > 0)
        } catch (e) {
            alert("Failure: " + e.message);
        } finally {
            reset(a , i);
        }
    }
}

module.exports = {
  host: '127.0.0.1',
  sessionSecret: process.env.SESSION_SECRET,

  github: {
    clientID: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET
  }
};

var myLink = {
        img : "btn.gif" ,
        text : "Button" ,
        width : 128,
    } ,
    local = true ,
    initial = -1;
var cssClasses = [ "bold" ,
    "red",
];
var selector = "id";

var color = "red" "rtd";
var offset = 10;

varName = val;