document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  const tableBody = document.querySelector('#dataTable tbody');

  document.getElementById('submit').addEventListener('click', submitForm);

  function submitForm() {
      if (form.checkValidity()) {
          const firstName = document.getElementById('first-name').value;
          const lastName = document.getElementById('last-name').value;
          const address = document.getElementById('address').value;
          const city = document.getElementById('city').value;
          const state = document.getElementById('state').value;
          const pinCode = document.getElementById('pincode').value;
          const gender = document.getElementById('gender').value;
          const choiceoffood = document.getElementById('choiceoffood').value;

          const newRow = document.createElement('tr');
          newRow.innerHTML = `
              <td>${firstName}</td>
              <td>${lastName}</td>
              <td>${address}</td>
              <td>${city}</td>
              <td>${state}</td>
              <td>${pinCode}</td>
              <td>${gender}</td>
              <td>${choiceoffood}</td>
          `;

          tableBody.appendChild(newRow);

          form.reset();
      } else {
         
          form.reportValidity();
      }
  }
});
