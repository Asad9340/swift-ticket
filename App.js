const btns = document.getElementsByClassName('btn');
let btnClick = 0;
let totalCost = 0;
for (const btn of btns) {
  btn.addEventListener('click', e => {
    btnClick += 1;
    console.log(btnClick);
    if (btnClick > 4) {
      alert("You can only click four times");
      return;
    }
    colorBtn(e.target.id);
    const cost = document.getElementById('totalPrice');
    totalCost += 550;
    cost.innerText = totalCost;
    console.log(totalCost);
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
  let totalSeat = document.getElementById('totalSeat');
  totalSeat.innerText = parseInt(totalSeat.innerText) - 1;
}
