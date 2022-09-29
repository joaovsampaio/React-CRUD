function ModalSuccess() {
  const div1 = document.createElement("div");
  div1.style.position = "fixed";
  div1.style.left = "0";
  div1.style.top = "15%";
  div1.style.zIndex = "1";
  div1.style.width = "100%";
  document.getElementById("root").appendChild(div1);
  const div2 = document.createElement("div");
  div2.style.backgroundColor = "#A8DCD9";
  div2.style.margin = "auto";
  div2.style.border = "3px solid #60435F";
  div2.style.borderRadius = "20px";
  div2.style.width = "20%";
  div1.appendChild(div2);

  const par = document.createElement("p");
  par.innerHTML = "Item Alterado";
  par.style.textAlign = "center";
  par.style.color = "#60435F";
  par.style.fontSize = "1.5rem";
  par.style.fontFamily = "BebasNeueRegular";
  div2.appendChild(par);

  setTimeout(() => {
    div1.remove();
  }, 800);
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
  div2.style.backgroundColor = "#fc2a2a";
  div2.style.margin = "auto";
  div2.style.border = "3px solid #fff";
  div2.style.borderRadius = "20px";
  div2.style.width = "20%";
  div1.appendChild(div2);

  const par = document.createElement("p");
  par.innerHTML = "Erro Ao Alterar";
  par.style.textAlign = "center";
  par.style.color = "#fff";
  par.style.fontSize = "1.5rem";
  par.style.fontFamily = "BebasNeueRegular";
  div2.appendChild(par);

  setTimeout(() => {
    div1.remove();
  }, 800);
}

export { ModalSuccess, ModalError };
