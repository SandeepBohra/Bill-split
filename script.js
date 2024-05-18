let totalBillInputEle = document.getElementById("bill-amount");
let tipButtons = document.querySelectorAll(".tip-buttons button");
let customBillInputEle = document.getElementById("custom-tip-input");
let noOfPeopleInputEle = document.getElementById("number-of-people");
let generateBillButton = document.querySelector(".generate-bill button");
let resetButton = document.getElementById("reset-button");

let tipAmountElement = document.getElementById("tip-amount");
let totalBillElement = document.getElementById("total-bill");
let amountPerPersonElement = document.getElementById("bill-per-person");

console.log(tipButtons);
let tipButtonsArr = Array.from(tipButtons);

let totalBill = totalBillInputEle.value;
let selectedTip = null;
let totalTip = null;
let numberOfPersons = null;
let finalTotalAmount = null;
let amountPerPerson = null;

totalBillInputEle.addEventListener("input", function (e) {
  totalBill = parseInt(e.target.value);
  console.log(totalBill);
});

noOfPeopleInputEle.addEventListener("input", (e) => {
  numberOfPersons = parseInt(e.target.value);
});

tipButtonsArr.forEach((tipButton) => {
  tipButton.addEventListener("click", function (e) {
    customBillInputEle.value = null;
    tipButtonsArr.forEach((item) => item.classList.remove("active"));
    selectedTip = null;
    selectedTip = parseInt(tipButton.innerText.split("%")[0]);
    tipButton.classList.toggle("active");
  });
});

customBillInputEle.addEventListener("input", () => {
  tipButtonsArr.forEach((item) => item.classList.remove("active"));
  selectedTip = parseInt(customBillInputEle.value);
});

function formattedAmount(amount) {
  return `₹${amount}.00`;
}

generateBillButton.addEventListener("click", () => {
  if (!totalBill || !selectedTip || !numberOfPersons) return;
  totalTip = (totalBill * selectedTip) / 100;
  finalTotalAmount = totalBill + totalTip;
  amountPerPerson = Math.floor(finalTotalAmount / numberOfPersons);
  console.log(finalTotalAmount, amountPerPerson);

  tipAmountElement.innerText = formattedAmount(totalTip);
  totalBillElement.innerText = formattedAmount(finalTotalAmount);
  amountPerPersonElement.innerText = formattedAmount(amountPerPerson);
});

resetButton.addEventListener("click", () => {
  selectedTip = null;
  totalTip = null;
  numberOfPersons = null;
  finalTotalAmount = null;
  amountPerPerson = null;
});
