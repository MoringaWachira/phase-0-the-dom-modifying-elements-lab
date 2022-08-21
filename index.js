// Write your code here!



const element = document.getElementById("main")
element.remove();

// const firstChild = main.querySelector("main(1)");
// main.removeChild(firstChild);

// const element = document.getElementById(victory);

// main.remove();

// const main = document.getElementById("main");
// main.innerHTML = <h1>victory</h1>

let newHeader = document.createElement('h1')
newHeader.setAttribute('id', 'victory');
newHeader.innerHTML = "Silvia is the champion"
body.append(newHeader);