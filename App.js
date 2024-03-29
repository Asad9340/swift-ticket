const buySection = document.getElementById('buySection');
buySection.addEventListener('click', function () {
  const destination = document.getElementById('destination');
  if (destination) {
    destination.scrollIntoView({ behavior: 'smooth' });
  }
});

const btns = document.getElementsByClassName('seatBtn');
let btnClick = 0;
let totalCost = 0;
let grandTotal = 0;
let count = 0;
let alertCount = 0;
for (const btn of btns) {
  btn.addEventListener('click', (e) => {
    btnClick += 1;
    if (btnClick > 4) {
      btnClick -= 1;
      alert('You can book only four tickets');
      return;
    }
    document.getElementById('seatCounter').innerText = btnClick;
    colorBtn(e.target.id);
    costDisplay();
    const nextBtn = document.getElementById('nextBtn');
    nextBtn.addEventListener('click', () => {
      const name = document.getElementById('name').value;
      const mobile = document.getElementById('mobile').value;
      if (btnClick > 0 && name !== '' && mobile !== '') {
        my_modal_1.showModal();
      }
    });
  });
}

function colorBtn(btn) {
  document.getElementById(btn).style.background = '#1DD100';
  const p = document.createElement('p');
  p.textContent = btn;
  p.classList.add('text-start');
  const p2 = document.createElement('p');
  p2.textContent = 'Economoy';
  p2.classList.add('text-center');
  const p3 = document.createElement('p');
  p3.textContent = 550;
  p3.classList.add('text-end');
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
  const grandCost = document.getElementById('grandTotal');
  grandTotal += 550;
  grandCost.innerText = grandTotal;

  const applyBtn = document.getElementById('applyBtn');

  applyBtn.addEventListener('click', () => {
    const couponInput = document.getElementById('couponInput').value;
    const offer1 = document.getElementById('new15').innerText;
    const offer2 = document.getElementById('couple20').innerText;
    if (btnClick === 4 && couponInput === offer1) {
      grandCost.innerText = grandTotal - grandTotal * 0.15;
      discount(grandTotal, 0.15);
      applyBtn.removeAttribute('disabled');
      const inputBox = document.getElementById('inputBox');
      inputBox.style.display = 'none';
    } else if (btnClick === 4 && couponInput === offer2) {
      grandCost.innerText = grandTotal - grandTotal * 0.2;
      discount(grandTotal, 0.2);
      const inputBox = document.getElementById('inputBox');
      inputBox.style.display = 'none';
    }
    else if(alertCount===0){
      alert("you entered an invalid input");
      alertCount++;
    }
  });
}

function discount(grandTotal, amount) {
  if (count === 0) {
    const discountAmount = document.getElementById('discountAmount');
    const p = document.createElement('p');
    p.textContent = 'DiscountAmount : ';
    const p2 = document.createElement('p2');
    p2.textContent = parseInt(grandTotal * amount);
    discountAmount.appendChild(p);
    discountAmount.appendChild(p2);
  }
  count++;
}