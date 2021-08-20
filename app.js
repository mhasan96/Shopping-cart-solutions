function updateProductNumber(product, price, isIncreasing) {
  const productInput = document.getElementById(product + "-number");
  let productNumber = parseInt(productInput.value);
  if (isIncreasing) {
    productNumber = productNumber + 1;
  } else if (productNumber > 0) {
    productNumber = productNumber - 1;
  }
  productInput.value = productNumber;

  const productTotal = document.getElementById(product + "-total");
  productTotal.innerText = productNumber * price;
  //calculate total
  calculateTotal();
}

function getInputValue(product) {
  const productInput = document.getElementById(product + "-number");
  const productNumber = parseInt(productInput.value);
  return productNumber;
}
function calculateTotal() {
  const phoneTotal = getInputValue("phone") * 1219;
  const caseTotal = getInputValue("case") * 59;
  const subTotal = phoneTotal + caseTotal;

  //calculate tax
  const tax = subTotal / 10;
  const totalPrice = subTotal + tax;
  //update on the html
  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("tax-amount").innerText = tax;
  document.getElementById("total-price").innerText = totalPrice;
}

//Phone Increase decrease Events

document.getElementById("phone-plus").addEventListener("click", function () {
  updateProductNumber("phone", 1219, true);
});

document.getElementById("phone-minus").addEventListener("click", function () {
  updateProductNumber("phone", 1219, false);
});

//handle phoneCover Increase Decrease Events
document.getElementById("case-plus").addEventListener("click", function () {
  updateProductNumber("case", 59, true);
  //console.log(caseNumber);
});

document.getElementById("case-minus").addEventListener("click", function () {
  updateProductNumber("case", 59, false);
});
