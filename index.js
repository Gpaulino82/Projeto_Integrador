    document.addEventListener('DOMContentLoaded', function() {
    const registrationDateInput = document.getElementById('registrationDate');
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    registrationDateInput.value = formattedDate;

    const vehicleForm = document.getElementById('vehicleForm');

    vehicleForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const manufacturer = document.getElementById('manufacturer').value;
        const model = document.getElementById('model').value;
        const version = document.getElementById('version').value;
        const color = document.getElementById('color').value;
        const manufactureYear = document.getElementById('manufactureYear').value;
        const registrationDate = document.getElementById('registrationDate').value;

        const vehicle = {
            manufacturer,
            model,
            version,
            color,
            manufactureYear,
            registrationDate
        };

        let vehicles = JSON.parse(localStorage.getItem('vehicles')) || [];
        vehicles.push(vehicle);
        localStorage.setItem('vehicles', JSON.stringify(vehicles));

        alert('Veículo cadastrado com sucesso!');

        document.getElementById('manufacturer').value = "";
        document.getElementById('model').value = "";
        document.getElementById('version').value = "";
        document.getElementById('color').value = "";
        document.getElementById('manufactureYear').value = "";

        displayVehicles();
    });

    function displayVehicles() {
        const vehicles = JSON.parse(localStorage.getItem('vehicles')) || [];
        const vehicleList = document.getElementById('vehicleList');

        vehicleList.innerHTML = '';

        vehicles.forEach(function(vehicle, index) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="checkbox-cell"><input type="checkbox" id="vehicle${index}"></td>
                <td>${vehicle.manufacturer}</td>
                <td>${vehicle.model}</td>
                <td>${vehicle.version}</td>
                <td>${vehicle.color}</td>
                <td>${vehicle.manufactureYear}</td>
                <td>${vehicle.registrationDate}</td> 
            `;
            vehicleList.appendChild(row);
        });
    }

    displayVehicles();
});
