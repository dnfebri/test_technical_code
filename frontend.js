let result = document.getElementById("result");
let input = document.getElementById("input");
const xhttp = new XMLHttpRequest();

const segitiga = async () => {
  result.innerHTML = "";
  let value = await input.value;
  xhttp.onload = (el) => {
    const response = JSON.parse(el.target.response);
    if (response.msg) {
      return alert(response.msg);
    }
    response.arry.forEach((el) => {
      let elementP = document.createElement("p");
      elementP.innerText = el;
      result.appendChild(elementP);
    });
  };
  xhttp.open(
    "POST",
    `http://localhost:3000/generate/segitiga?input=` + value,
    true
  );
  xhttp.send();
};
const ganjil = () => {
  result.innerHTML = "";
  let value = input.value;
  xhttp.onload = (el) => {
    const response = JSON.parse(el.target.response);
    if (response.msg) {
      return alert(response.msg);
    }
    response.arry.forEach((el) => {
      let elementP = document.createElement("p");
      elementP.innerText = el;
      result.appendChild(elementP);
    });
  };
  xhttp.open(
    "POST",
    `http://localhost:3000/generate/ganjil?input=` + value,
    true
  );
  xhttp.send();
};
const prima = () => {
  result.innerHTML = "";
  let value = input.value;
  xhttp.onload = (el) => {
    const response = JSON.parse(el.target.response);
    if (response.msg) {
      return alert(response.msg);
    };
    response.arry.forEach((el) => {
      let elementP = document.createElement("p");
      elementP.innerText = el;
      result.appendChild(elementP);
    });
  };
  xhttp.open(
    "POST",
    `http://localhost:3000/generate/prima?input=` + value,
    true
  );
  xhttp.send();
};