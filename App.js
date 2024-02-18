const btns = document.getElementsByClassName('btn');
let btnClick = 0;
let totalCost = 0;
let grandTotal = 0;
let count = 0;
for (const btn of btns) {
  btn.addEventListener('click', e => {
    btnClick += 1;
    console.log(btnClick);
    if (btnClick > 4) {
      alert('You can only buy four seats');
      return;
    }
    colorBtn(e.target.id);
    costDisplay();
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

function costDisplay() {
  const cost = document.getElementById('totalPrice');
  totalCost += 550;
  cost.innerText = totalCost;
  console.log(totalCost);
  const grandCost = document.getElementById('grandTotal');
  grandTotal += 550;
  grandCost.innerText = grandTotal;
  console.log(grandTotal);

  const applyBtn = document.getElementById('applyBtn');
  applyBtn.addEventListener('click', () => {
    const couponInput = document.getElementById('couponInput').value;
    if (btnClick === 4 && couponInput === 'NEW15') {
      grandCost.innerText = grandTotal - grandTotal * 0.15;
      discount(grandTotal);
      const inputBox = document.getElementById('inputBox');
      inputBox.style.display = 'none';
    }
    console.log(couponInput);
  });
}

function discount() {
  if (count === 0) {
    const discountAmount = document.getElementById('discountAmount');
    const p = document.createElement('p');
    p.textContent = 'DiscountAmount : ';
    const p2 = document.createElement('p2');
    p2.textContent = parseInt(grandTotal * 0.15);
    discountAmount.appendChild(p);
    discountAmount.appendChild(p2);
  }
  count++;
}
