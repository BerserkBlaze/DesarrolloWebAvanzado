import createElement from './utils/createElement'


async function soat() {
    let response = await fetch('https://dwaapi.juvasquez88.now.sh/soatdwa');
    let json;
    if (response.ok) {
        json = await response.json();
        vehicles = json
    } else {
        alert("HTTP-Error: " + response.status);
    }
    console.log(json)


    div0 = createElement('div', { id: 'status' }, [])
    div1 = createElement('div', { id: 'brand' }, ['brand', '<br>', '<br>', vehicles.vehicles[0].brand, '<br>',
        vehicles.vehicles[1].brand, '<br>', vehicles.vehicles[2].brand, '<br>',
        vehicles.vehicles[3].brand, '<br>', vehicles.vehicles[4].brand
    ])
    div2 = createElement('div', { id: 'licensePlate' }, ['licensePlate', '<br>', '<br>', vehicles.vehicles[0].licensePlate, '<br>',
        vehicles.vehicles[1].licensePlate, '<br>', vehicles.vehicles[2].licensePlate, '<br>',
        vehicles.vehicles[3].licensePlate, '<br>', vehicles.vehicles[4].licensePlate
    ])

    div3 = createElement('div', { id: 'soatValidFrom' }, ['soatValidFrom', '<br>', '<br>', vehicles.vehicles[0].soatValidFrom, '<br>',
        vehicles.vehicles[1].soatValidFrom, '<br>', vehicles.vehicles[2].soatValidFrom, '<br>',
        vehicles.vehicles[3].soatValidFrom, '<br>', vehicles.vehicles[4].soatValidFrom
    ])
    div4 = createElement('div', { id: 'soatValidUntil' }, ['soatValidUntil', '<br>', '<br>', vehicles.vehicles[0].soatValidUntil, '<br>',
        vehicles.vehicles[1].soatValidUntil, '<br>', vehicles.vehicles[2].soatValidUntil, '<br>',
        vehicles.vehicles[3].soatValidUntil, '<br>', vehicles.vehicles[4].soatValidUntil
    ])

    const container = createElement('div', { id: 'container' }, [div1, div2, div3, div4])
    console.log(container)
    app.innerHTML = '';
    app.appendChild(container);
}
soat()