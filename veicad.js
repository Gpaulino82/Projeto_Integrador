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
            <td>${formatDate(vehicle.registrationDate)}</td> 
        `;
        vehicleList.appendChild(row);
    });
}

displayVehicles();

function deleteSelected() {
    const vehicles = JSON.parse(localStorage.getItem('vehicles')) || [];
    const selectedIndexes = [];

    vehicles.forEach(function(vehicle, index) {
        const checkbox = document.getElementById(`vehicle${index}`);
        if (checkbox.checked) {
            selectedIndexes.push(index);
        }
    });

    selectedIndexes.reverse().forEach(function(index) {
        vehicles.splice(index, 1);
    });

    localStorage.setItem('vehicles', JSON.stringify(vehicles));
    displayVehicles();
}

function deleteAll() {
    localStorage.removeItem('vehicles');
    displayVehicles();
}

function formatDate(dateString) {
    const dateParts = dateString.split('/');
    const day = dateParts[0] || ""; 
    const month = dateParts[1] || ""; 
    const year = dateParts[2] || ""; 

    return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`; 
}
