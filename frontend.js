let result = document.getElementById("result")
let input = document.getElementById("input")
const xhttp = new XMLHttpRequest();

const segitiga = async () => {
  result.innerHTML = "";
  let value = await input.value;
  xhttp.onload = (el) => {
    console.log(el.target.response);
    const response = JSON.parse(el.target.response);
    response.arry.forEach(el => {
      let nodeP = document.createElement("p");
      nodeP.innerText = el
      result.appendChild(nodeP);
    }); 
  }
  xhttp.open(
    "POST",
    `http://localhost:3000/generate/segitiga?input=` + value, 
    true
  );
  xhttp.send();
}
const ganjil = () => {
  console.log("ganji");
}
const prisma = () => {
  console.log("prisma");
}