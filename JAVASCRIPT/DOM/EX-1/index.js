// 


// ACCESSING

// var img = document.images
// console.log(img)
// console.log(img[2])
// console.log(img.length)



// CREATE ELEMENT

// var para = document.createElement("p")
// document.body.appendChild(para)
// para.innerText="Hello"

// var div = document.createElement("div")
// document.body.appendChild(div)
// var heading = document.createElement("h1")
// var headi = document.createElement("h2")
// heading.innerText="HELLO WORLD1"
// headi.innerText="HELLO WORLD"
// div.append(heading,headi)

// console.log(heading.innerText)
// console.log(document.body.innerHTML)

// var div = document.createElement("div")
// document.body.appendChild(div)
// var img = document.createElement("img")
// img.src="coolie.png"
// var h1 = document.createElement("h1")
// h1.innerText="COOLIE"
// var p = document.createElement("p")
// p.innerText="Coolie is an upcoming Indian Tamil-language action thriller film[3] directed by Lokesh Kanagaraj and produced by Kalanithi Maran under Sun Pictures. The film stars Rajinikanth, Nagarjuna, Soubin Shahir, Upendra, Shruti Haasan, Sathyaraj, and Aamir Khan in the lead roles."
// div.append(img,h1,p)

// // NAVBAR-EXAMPLE
// var navbar = document.createElement("div")
// navbar.id="navbar"
// // navbar.style.display="flex"
// // navbar.style.justifyContent="space-around"
// navbar.style = `
//   display: flex;
//   justify-content: space-between; 
//   align-items: center;
// `;
// document.body.appendChild(navbar)
// // img
// var img = document.createElement("img")
// img.src="coolie.png"
// img.style=`
// width: 20%;
// border-radius: 50%;
// `
// // links
// var a1 = document.createElement("a")
// a1.innerText="HOME"
// a1.href="#HOME"
// var a2 = document.createElement("a")
// a2.innerText="ABOUT"
// a2.href="#ABOUT"
// var a3 = document.createElement("a")
// a3.innerText="CONTACT"
// a3.href="#CONTACT"
// var links = document.createElement("div")
// links.id="links"
// links.style=`
// display: flex;
// gap: 1rem;
// `
// links.append(a1,a2,a3)
// navbar.append(img,links)


// ACCESSING & MODIFICATION
// var h1 = document.querySelector("h1")
// h1.innerText="hii"
// var h1 = document.getElementById("h1")
// h1.innerText="Hello"
// var img = document.querySelector("img")
// img.src=""

// // #DELETE
// var div1 = document.getElementById("text-1")
// var div2 = document.getElementById("text-2")
// var flag = window.confirm
// ("Do you want to delete ?")
// if (flag) {
//     console.log(div1.innerHTML)
// }
// else {
//     console.log(div2.innerHTML)
// }

// // CONATINER -EXAMPLE
// var main = document.getElementById("main")
// main.style=`
// width: 100%;
// display: flex;
// flex-direction: column;
// gap: 2rem;
// justify-content: center;
// align-items: center;
// `
// var container = document.getElementById("container")
// container.style=`
// width: 40%;
// height: 20vh;
// background-color: white;
// box-shadow: 0 0 10px grey;
// `
// var image = document.createElement("img")
// container.appendChild(image)
// function btn1() {
//     image.src="coolie.png"
// }
// function btn2() {
//     image.src="war-2.png"
// }
// function btn3() {
//     image.src="peddi.png"
// }
// function btn4() {
//     image.src="athadu.png"
// }