const btns = document.getElementsByClassName('btn');
let btnClick = 0;
let total = 0;
for (const btn of btns) {
  btn.addEventListener('click', e => {
    colorBtn(e.target.id);
    // totalCost.innerText = total + 550;
  });
}

function colorBtn(btn) {
  document.getElementById(btn).style.background = 'green';
  const p = document.createElement('p');
  p.textContent = btn;
  const p2 = document.createElement('p');
  p2.textContent = 'Economoy';
  const p3 = document.createElement('p');
  p3.textContent = 550;
  let displayElement = document.getElementById('displayElement');
  displayElement.appendChild(p);
  displayElement.appendChild(p2);
  displayElement.appendChild(p3);
  document.getElementById(btn).disabled = true;
}
