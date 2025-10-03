const outputDiv = document.getElementById("output");

function showResult(value, isFinal = false) {
  const p = document.createElement("p");
  p.textContent = (isFinal ? "Final Result: " : "Result: ") + value;
  outputDiv.appendChild(p);
}

// Step 1: Initial Promise
function FirstPromise(value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      showResult(value);
      resolve(value);
    }, 2000);
  });
}

// Step 2: Multiply by 2
function secondPromise(value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = value * 2;
      showResult(result);
      resolve(result);
    }, 2000);
  });
}

// Step 3: Subtract 3
function thirdPromise(value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = value - 3;
      showResult(result);
      resolve(result);
    }, 1000);
  });
}

// Step 4: Divide by 2
function fourthPromise(value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = value / 2;
      showResult(result);
      resolve(result);
    }, 1000);
  });
}

// Step 5: Add 10 (Final Result)
function fifthPromise(value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = value + 10;
      showResult(result, true);
      resolve(result);
    }, 1000);
  });
}

// Start all transformations
function startTransformations(inputVal) {
  FirstPromise(inputVal)
    .then(secondPromise)
    .then(thirdPromise)
    .then(fourthPromise)
    .then(fifthPromise);
}

// Event listener for the button
document.getElementById("btn").addEventListener("click", () => {
  const inputVal = Number(document.getElementById("ip").value);
  outputDiv.innerHTML = ""; // Clear previous results
  if (!isNaN(inputVal)) {
    startTransformations(inputVal);
  } else {
    outputDiv.innerHTML = "⚠️ Please enter a valid number!";
  }
});
