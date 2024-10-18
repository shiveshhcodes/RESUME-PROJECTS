let totalAmount = document.getElementById("total-amount");

totalAmountButton.addEventListener("click", () => {
    tempAmount = totalAmount.value;
    //empty or negative input
    if (tempAmount === "" || tempAmount < 0) {
      errorMessage.classList.remove("hide");
    } else {
      errorMessage.classList.add("hide");
      //Set Budget
      amount.innerHTML = tempAmount;
      //Set Balance
      balanceValue.innerText = tempAmount - expenditureValue.innerText;
      //Clear Input Box
      totalAmount.value = "";
    }
  });

  //Function To Disable Edit and Delete Button
const disableButtons = (bool) => {
    let editButtons = document.getElementsByClassName("edit");
    Array.from(editButtons).forEach((element) => {
      element.disabled = bool;
    });
  };

  //Function To Modify List Elements
const modifyElement = (element, edit = false) => {
    let parentDiv = element.parentElement;
    let currentBalance = balanceValue.innerText;
    let currentExpense = expenditureValue.innerText;
    let parentAmount = parentDiv.querySelector(".amount").innerText;
    if (edit) {
      let parentText = parentDiv.querySelector(".product").innerText;
      productTitle.value = parentText;
      userAmount.value = parentAmount;
      disableButtons(true);
    }
    balanceValue.innerText = parseInt(currentBalance) + parseInt(parentAmount);
    expenditureValue.innerText =
      parseInt(currentExpense) - parseInt(parentAmount);
    parentDiv.remove();
  };