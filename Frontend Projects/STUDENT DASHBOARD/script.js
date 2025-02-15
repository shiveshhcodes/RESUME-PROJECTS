const recordForm = document.getElementById('record-form');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const emailInput = document.getElementById('email');
const recordList = document.getElementById('record-list');
const editIndexInput = document.getElementById('edit-index');

let records = JSON.parse(localStorage.getItem('records')) || [];
console.log(records.length);
// Function to check for duplicate names
function isDuplicateName(email) {
  return records.some(
    (record) =&gt; record.email.toLowerCase() === email.toLowerCase()
  );
}

// Display records
function displayRecords() {
  recordList.innerHTML = '';
  console.log(records.length);
  if (records.length === 0) {
    const row = document.createElement('tr');
    row.innerHTML = `<td colspan="5" style="text-align:center;color:red">No Record Found</td>`;
    recordList.appendChild(row);
  } else {
    records.forEach((record, index) =&gt; {
      const row = document.createElement('tr');
      row.innerHTML = `
                    <td>${record.name}</td>
                    <td>${record.age}</td>
                    <td>${record.email}</td>
                    <td><button>Edit</button></td>
                    <td class="deleteButton"><button>Delete</button></td>
                `;
      recordList.appendChild(row);
    });
  }
}

recordForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = nameInput.value;
    const age = ageInput.value;
    const email = emailInput.value;
    const editIndex = parseInt(editIndexInput.value);

    
    if (name &amp;&amp; age &amp;&amp; email) {
        if (isDuplicateName(email) &amp;&amp; editIndex === -1) {
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

function deleteRecord(index) {
    displayRecords();
    let delBtn = document.querySelectorAll('.deleteButton');
    console.log(delBtn);
    delBtn[
      index
    ].innerHTML = `<i id="yesBtn" class="fa-solid fa-check"></i><i id="noBtn" class="fa-solid fa-xmark"></i>`;
  }
  
  function confirmDelete(index) {
    records.splice(index, 1);
    localStorage.setItem('records', JSON.stringify(records));
    displayRecords();
  }
  
  function resetDelete(index) {
    displayRecords();
  }
  
  // Initial display
  displayRecords();