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