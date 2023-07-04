const range = document.getElementById("range") as HTMLInputElement;
const box = document.querySelector(".box") as HTMLDivElement;

range.addEventListener("input", function () {
  const value = Number(this.value);
  box.style.borderRadius = `${value / 2}px`;
  const middle = (value / 100) * 127 + 128;
  const left = (value / 100) * 255;
  box.style.backgroundColor = `rgb(${left},${middle},0)`;
  box.style.marginLeft = `${value * 3}px`;
});

range.value = "0";
