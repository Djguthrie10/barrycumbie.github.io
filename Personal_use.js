(document).ready(function() {

// create a loop to "print out" all elements on the DOM"
//1. create a loop structure. How to figure out the Length, i.e.,the number of iterations of my loop
//2. how do i access an element from my page...then ALL elements?
//3. how do i want to print them out? Start on the console.


var allElem = document.getElementsByTagName("*");
for (var i = 0; i < allElem.length; i++) {	
    // Do something with all element here
	console.log(allElem[i].tagName); //all[i] ... what METHOD do i need.... allElem[i].
	}	
});
