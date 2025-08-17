'use strict';

const addName = document.getElementById('addName');
const ListOfPoule = document.getElementById('ListOfPoule');
const delName = document.getElementById('delName');

addName.addEventListener("click", function () {
  let name = prompt("Enter name please");
  let phone = prompt("Enter phone please");
  let email = prompt("Enter email please");
  let address = prompt("Enter address please");
  let age = prompt("Enter age please");

  if (!name || !phone) {
    alert('Name and phone are required');
    return;
  }

  const li = document.createElement('li');
  li.dataset.name = name;
  li.dataset.phone = phone;
  li.dataset.email = email || '';
  li.dataset.address = address || '';
  li.dataset.age = age || '';

  li.innerHTML = `
    <strong>שם:</strong> ${name} |
    <strong>טלפון:</strong> ${phone}
    <button class="showDetails">Show Details</button>
    <button class="deleteDetails">Delete Details</button>
    <button class="changeDetails">ReEdit Details</button>
  `;

  ListOfPoule.appendChild(li);

  addListeners(li);
});

delName.addEventListener("click", () => {
  ListOfPoule.textContent = "";
});

function addListeners(li) {
  li.querySelector('.showDetails').addEventListener('click', () => {
    alert(`שם: ${li.dataset.name}
טלפון: ${li.dataset.phone}
אימייל: ${li.dataset.email}
כתובת: ${li.dataset.address}
גיל: ${li.dataset.age}`);
  });

  li.querySelector('.deleteDetails').addEventListener('click', () => {
    li.remove();
  });

  li.querySelector('.changeDetails').addEventListener('click', () => {
    let newName = prompt("Edit name:", li.dataset.name);
    let newPhone = prompt("Edit phone:", li.dataset.phone);
    let newEmail = prompt("Edit email:", li.dataset.email);
    let newAddress = prompt("Edit address:", li.dataset.address);
    let newAge = prompt("Edit age:", li.dataset.age);

    if (!newName || !newPhone) {
      alert('Name and phone are required');
      return;
    }

    li.dataset.name = newName;
    li.dataset.phone = newPhone;
    li.dataset.email = newEmail || '';
    li.dataset.address = newAddress || '';
    li.dataset.age = newAge || '';

    li.innerHTML = `
      <strong>שם:</strong> ${newName} |
      <strong>טלפון:</strong> ${newPhone}
      <button class="showDetails">Show Details</button>
      <button class="deleteDetails">Delete Details</button>
      <button class="changeDetails">ReEdit Details</button>
    `;

    addListeners(li);
  });
}

// מוסיף מאזינים לפריטים קיימים מראש בדף
document.querySelectorAll('#ListOfPoule li').forEach(addListeners);
