let result = document.getElementById("result")
let input = document.getElementById("input")
const xhttp = new XMLHttpRequest();

const segitiga = async () => {

  let value = await input.value;
  xhttp.onload = (el) => {
    console.log(el.target.response);
    const response = JSON.parse(el.target.response);
    result.innerHTML = response.arry
  }
  xhttp.open("POST", `http://localhost:3000/generate/segitiga?input=` + value, true);
  xhttp.send();
}
const ganjil = () => {
  console.log("ganji");
}
const prisma = () => {
  console.log("prisma");
}