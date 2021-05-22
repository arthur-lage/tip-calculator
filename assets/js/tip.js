const calculateButton = document.querySelector("#calculate-button");

const tipText = document.querySelector("#tip-text");

const tipSection = document.querySelector(".tip-section");
const tipContainer = document.querySelector("#tip-container");

const billAmountInput = document.querySelector("#bill-amount");
const serviceQualityOption = document.querySelector("#service-quality-select");
const peopleToPayInput = document.querySelector("#people-to-pay");

const calculateTip = (billAmount, serviceOption, numberOfPeople) => {
  const serviceQuality = {
    terrible: 5,
    bad: 10,
    ok: 15,
    good: 20,
    outstanding: 30,
  };

  let percentage = (billAmount * serviceQuality[serviceOption]) / 100;
  let totalTip = percentage / numberOfPeople;

  return totalTip;
};

calculateButton.addEventListener("click", (event) => {
  event.preventDefault();

  let tipValue = calculateTip(
    billAmountInput.value,
    serviceQualityOption.value,
    peopleToPayInput.value
  );

  tipValue = Number(tipValue);
  tipValue = tipValue.toFixed(2);

  tipSection.classList.remove("hidden");
  tipContainer.classList.add("go-left-animation");

  tipText.innerHTML = `The tip value is: $${tipValue}`;
});
