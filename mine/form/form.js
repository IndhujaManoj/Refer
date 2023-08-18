const form = document.getElementById("myForm");
const selectedSkillsTable = document.getElementById("selectedSkillsTable").getElementsByTagName("tbody")[0];
const clearButton = document.getElementById("clearButton");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const htmlCheckbox = document.getElementById("htmlCheckbox");
  const cssCheckbox = document.getElementById("cssCheckbox");
  const jsCheckbox = document.getElementById("jsCheckbox");

  const selectedSkills = [];
  if (htmlCheckbox.checked) {
    selectedSkills.push(htmlCheckbox.value);
  }
  if (cssCheckbox.checked) {
    selectedSkills.push(cssCheckbox.value);
  }
  if (jsCheckbox.checked) {
    selectedSkills.push(jsCheckbox.value);
  }

  // Clear previous table rows
  selectedSkillsTable.innerHTML = "";

  // Add selected skills to table
  selectedSkills.forEach((skill) => {
    const row = selectedSkillsTable.insertRow();
    const cell = row.insertCell();
    cell.textContent = skill;
  });

  // Reset form
  form.reset();
});

clearButton.addEventListener("click", () => {
  form.reset();
});