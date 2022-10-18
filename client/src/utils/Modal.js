function ModalSuccess() {
  const div1 = document.createElement("div");
  div1.style.position = "fixed";
  div1.style.left = "0";
  div1.style.top = "15%";
  div1.style.zIndex = "1";
  div1.style.width = "100%";

  document.getElementById("root").appendChild(div1);
  const div2 = document.createElement("div");
  div2.style.backgroundColor = "#4dda30";
  div2.style.margin = "auto";
  div2.style.border = "2px solid #ffffff8b";
  div2.style.boxShadow = "5px 10px 18px #888888";
  div2.style.width = "300px";
  div1.appendChild(div2);

  const par = document.createElement("p");
  par.innerHTML = "&#10003; Tudo Certo";
  par.style.textAlign = "center";
  par.style.color = "#fff";
  par.style.fontSize = "1.5rem";
  par.style.fontFamily = "BebasNeueRegular";
  div2.appendChild(par);

  setTimeout(() => {
    div1.remove();
  }, 1000);
}

function ModalError() {
  const div1 = document.createElement("div");
  div1.style.position = "fixed";
  div1.style.left = "0";
  div1.style.top = "15%";
  div1.style.zIndex = "1";
  div1.style.width = "100%";

  document.getElementById("root").appendChild(div1);
  const div2 = document.createElement("div");
  div2.style.backgroundColor = "#da3030";
  div2.style.margin = "auto";
  div2.style.border = "2px solid #ffffff8b";
  div2.style.boxShadow = "5px 10px 18px #888888";
  div2.style.width = "300px";
  div1.appendChild(div2);

  const par = document.createElement("p");
  par.innerHTML = "&#10754; Algo deu Errado";
  par.style.textAlign = "center";
  par.style.color = "#fff";
  par.style.fontSize = "1.5rem";
  par.style.fontFamily = "BebasNeueRegular";
  div2.appendChild(par);

  setTimeout(() => {
    div1.remove();
  }, 1000);
}

export { ModalSuccess, ModalError };
