const form = document.getElementById("myForm");
const table = document.getElementById("table")
const tbody = document.getElementById("tbody")

//const clearButton = document.getElementById("clearButton");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameInput = document.getElementById("nameInput");
  const ageInput = document.getElementById("ageInput");
  const phoneInput = document.getElementById("phoneInput");
  const emailInput = document.getElementById("emailInput");
  const genderSelect = document.getElementById("genderSelect");
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

  // Create new row in table
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = nameInput;
  row.appendChild(nameCell);

  const ageCell = document.createElement("td");
  ageCell.textContent = ageInput;
  row.appendChild(ageCell);

  const phoneCell = document.createElement("td");
  phoneCell.textContent = phoneInput;
  row.appendChild(phoneCell);

  const emailCell = document.createElement("td");
  emailCell.textContent = emailInput;
  row.appendChild(emailCell);

  const genderCell = document.createElement("td");
  genderCell.textContent = genderSelect;
  row.appendChild(genderCell);

  const actionsCell = document.createElement("td");
  const editButton = document.createElement("button");
  editButton.textContent="edit"
  editButton.addEventListener("click",()=>{
    nameInput.value=name;
    ageInput.value=age;
    phoneInput.value=phone;
    emailInput.value=email;
    genderSelect.value=gender;
    selectedSkills=skills;
    row.remove()
  });
  actionsCell.appendChild(editButton);
  const deleteButton=document.createElement('button')
  deleteButton.textContent='Delete';
  deleteButton.addEventListener('click',()=>{
    row.remove()
})
actionsCell.appendChild(deleteButton);
row.appendChild(actionsCell);
tbody.appendChild(row);
nameInput.value=""
    ageInput.value=""
    phoneInput.value=""
    emailInput.value=""
    genderSelect.value=""
    selectedSkills.value=""
})
const clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", () => {
  form.reset();
});