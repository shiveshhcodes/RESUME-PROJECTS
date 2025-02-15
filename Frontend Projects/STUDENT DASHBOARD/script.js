const recordForm = document.getElementById('record-form');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const emailInput = document.getElementById('email');
const recordList = document.getElementById('record-list');
const editIndexInput = document.getElementById('edit-index');

let records = JSON.parse(localStorage.getItem('records')) || [];

// Function to check for duplicate names
function isDuplicateName(email) {
  return records.some(
    (record) => record.email.toLowerCase() === email.toLowerCase()
  );
}

// Display records
function displayRecords() {
  recordList.innerHTML = '';

  if (records.length === 0) {
    const row = document.createElement('tr');
    row.innerHTML = `<td colspan="5" style="text-align:center;color:red">No Record Found</td>`;
    recordList.appendChild(row);
  } else {
    records.forEach((record, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${record.name}</td>
        <td>${record.age}</td>
        <td>${record.email}</td>
        <td><button class="editButton" data-index="${index}">Edit</button></td>
        <td class="deleteButton"><button class="deleteBtn" data-index="${index}">Delete</button></td>
      `;
      recordList.appendChild(row);
    });

    // Attach event listeners to delete and edit buttons
    document.querySelectorAll('.deleteBtn').forEach(button => {
      button.addEventListener('click', function () {
        const index = this.getAttribute('data-index');
        confirmDelete(index);
      });
    });

    document.querySelectorAll('.editButton').forEach(button => {
      button.addEventListener('click', function () {
        const index = this.getAttribute('data-index');
        loadRecordForEdit(index);
      });
    });
  }
}

recordForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = nameInput.value;
  const age = ageInput.value;
  const email = emailInput.value;
  const editIndex = parseInt(editIndexInput.value);

  if (name && age && email) {
    if (isDuplicateName(email) && editIndex === -1) {
      alert('Student already exists.');
      return;
    }

    if (editIndex === -1) {
      // Add a new record
      records.push({ name, age, email });
    } else {
      // Update an existing record
      records[editIndex] = { name, age, email };
      editIndexInput.value = -1;
    }

    localStorage.setItem('records', JSON.stringify(records));
    nameInput.value = '';
    ageInput.value = '';
    emailInput.value = '';
    displayRecords();
  }
});

function confirmDelete(index) {
  if (confirm("Are you sure you want to delete this record?")) {
    records.splice(index, 1);
    localStorage.setItem('records', JSON.stringify(records));
    displayRecords();
  }
}

function loadRecordForEdit(index) {
  const record = records[index];
  nameInput.value = record.name;
  ageInput.value = record.age;
  emailInput.value = record.email;
  editIndexInput.value = index;
}

// Initial display
displayRecords();
