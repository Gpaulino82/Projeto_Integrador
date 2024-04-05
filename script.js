document.addEventListener('DOMContentLoaded', function() {
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
    });
});
