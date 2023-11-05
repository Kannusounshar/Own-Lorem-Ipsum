const generateButton = document.getElementById("generate");
const outputDiv = document.getElementById("output");

generateButton.addEventListener("click", () => {
  const paragraphsInput = document.getElementById("paragraphs").value;
  const paragraphsCount = parseInt(paragraphsInput);

  let dummyText = "";

  for (let i = 0; i < paragraphsCount; i++) {
    dummyText +=
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Enim ut sem viverra aliquet eget sit amet tellus cras. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo.</p>";
  }

  outputDiv.innerHTML = dummyText;

  dummyText = "";
});
