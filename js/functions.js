// var num = 0; // global variable

// function button1() {
//     num++;
//     document.getElementById("output").innerHTML = "Press x " + num;
// }

// function toggleStyleSheet(){
//     // Task 1
//     // Steps
//     // 1 (a) Get style element by ID (hint: getElementById)
//     const elem = document.getElementById('main-stylesheet');

//     // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
//     var filename = localStorage.getItem('fn');
//     // 1 (c) Determine new stylesheet file name
//     if (filename === "css/style.css") {
//         elem.setAttribute("href", "css/style2.css");
//         filename = 'css/style2.css';
//     }
//     else {
//         elem.setAttribute("href", "css/style.css");
//         filename = 'css/style.css';
//     }
//     // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)


//     // TASK 2
//     // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
//     localStorage.setItem('fn', filename)

// }


// window.onload = function(){
//     // TASK 2
//     // TODO: Make the last div color persist even when someone refreshes the page.

//     // Steps
//     // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
//     const name = localStorage.getItem('fn');
//     // 2 (b) get html style element by ID
//     const elem = document.getElementById('main-stylesheet');
//     // 2 (c) replace href attribute of html element.
//     elem.setAttribute('href', name);
// }


