import createElement from './utils/createElement'

function validarSoat(inicio, fin) {
    let fechaInicio = new Date(parseInt(inicio, 10)).getTime();
    let fechaFin = new Date(parseInt(fin, 10)).getTime();

    let diff = (fechaFin - fechaInicio) / (1000 * 60 * 60 * 24);
    return diff
}

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

    FechaIniV1 = new Intl.DateTimeFormat().format(parseInt(vehicles.vehicles[0].soatValidFrom, 10))
    FechaIniV2 = new Intl.DateTimeFormat().format(parseInt(vehicles.vehicles[1].soatValidFrom, 10))
    FechaIniV3 = new Intl.DateTimeFormat().format(parseInt(vehicles.vehicles[2].soatValidFrom, 10))
    FechaIniV4 = new Intl.DateTimeFormat().format(parseInt(vehicles.vehicles[3].soatValidFrom, 10))
    FechaIniV5 = new Intl.DateTimeFormat().format(parseInt(vehicles.vehicles[4].soatValidFrom, 10))

    FechaExpV1 = new Intl.DateTimeFormat().format(parseInt(vehicles.vehicles[0].soatValidUntil, 10))
    FechaExpV2 = new Intl.DateTimeFormat().format(parseInt(vehicles.vehicles[1].soatValidUntil, 10))
    FechaExpV3 = new Intl.DateTimeFormat().format(parseInt(vehicles.vehicles[2].soatValidUntil, 10))
    FechaExpV4 = new Intl.DateTimeFormat().format(parseInt(vehicles.vehicles[3].soatValidUntil, 10))
    FechaExpV5 = new Intl.DateTimeFormat().format(parseInt(vehicles.vehicles[4].soatValidUntil, 10))

    circulo1 = createElement('div', { id: 'circulo1', class: 'circulo' }, [''])
    circulo2 = createElement('div', { id: 'circulo2', class: 'circulo' }, [''])
    circulo3 = createElement('div', { id: 'circulo3', class: 'circulo' }, [''])
    circulo4 = createElement('div', { id: 'circulo4', class: 'circulo' }, [''])
    circulo5 = createElement('div', { id: 'circulo5', class: 'circulo' }, [''])

    SOAT1 = validarSoat(vehicles.vehicles[0].soatValidFrom, vehicles.vehicles[0].soatValidUntil)
    SOAT2 = validarSoat(vehicles.vehicles[1].soatValidFrom, vehicles.vehicles[1].soatValidUntil)
    SOAT3 = validarSoat(vehicles.vehicles[2].soatValidFrom, vehicles.vehicles[2].soatValidUntil)
    SOAT4 = validarSoat(vehicles.vehicles[3].soatValidFrom, vehicles.vehicles[3].soatValidUntil)
    SOAT5 = validarSoat(vehicles.vehicles[4].soatValidFrom, vehicles.vehicles[4].soatValidUntil)
    if (SOAT1 == 365) {
        circulo1 = createElement('div', { id: 'circulo1', class: 'circulo', id: 'valido' }, [''])
    } else {
        circulo1 = createElement('div', { id: 'circulo1', class: 'circulo', id: 'invalido' }, [''])
    }
    if (SOAT2 == 365) {
        circulo2 = createElement('div', { id: 'circulo1', class: 'circulo', id: 'valido' }, [''])
    } else {
        circulo2 = createElement('div', { id: 'circulo1', class: 'circulo', id: 'invalido' }, [''])
    }
    if (SOAT3 == 365) {
        circulo3 = createElement('div', { id: 'circulo1', class: 'circulo', id: 'valido' }, [''])
    } else {
        circulo3 = createElement('div', { id: 'circulo1', class: 'circulo', id: 'invalido' }, [''])
    }
    if (SOAT4 == 365) {
        circulo4 = createElement('div', { id: 'circulo1', class: 'circulo', id: 'valido' }, [''])
    } else {
        circulo4 = createElement('div', { id: 'circulo1', class: 'circulo', id: 'invalido' }, [''])
    }
    if (SOAT5 == 365) {
        circulo5 = createElement('div', { id: 'circulo1', class: 'circulo', id: 'valido' }, [''])
    } else {
        circulo5 = createElement('div', { id: 'circulo1', class: 'circulo', id: 'invalido' }, [''])
    }


    h1 = createElement('h1', {}, ['SOAT'])
    title = createElement('div', { id: 'title' }, [h1])
    nav = createElement('nav', { id: 'nav1', class: 'elementos' }, ['Status ', 'brand ', 'licensePlate ', 'soatValidFrom ', 'soatValidUntil'])

    element1 = createElement('div', { class: 'elementos' }, [circulo1, ' ', vehicles.vehicles[0].brand, ' ', vehicles.vehicles[0].licensePlate, ' ', FechaIniV1, ' ', FechaExpV1])
    element2 = createElement('div', { class: 'elementos' }, [circulo2, ' ', vehicles.vehicles[1].brand, ' ', vehicles.vehicles[1].licensePlate, ' ', FechaIniV2, ' ', FechaExpV2])
    element3 = createElement('div', { class: 'elementos' }, [circulo3, ' ', vehicles.vehicles[2].brand, ' ', vehicles.vehicles[2].licensePlate, ' ', FechaIniV3, ' ', FechaExpV3])
    element4 = createElement('div', { class: 'elementos' }, [circulo4, ' ', vehicles.vehicles[3].brand, ' ', vehicles.vehicles[3].licensePlate, ' ', FechaIniV4, ' ', FechaExpV4])
    element5 = createElement('div', { class: 'elementos' }, [circulo5, ' ', vehicles.vehicles[4].brand, ' ', vehicles.vehicles[4].licensePlate, ' ', FechaIniV5, ' ', FechaExpV5])

    const container = createElement('div', { id: 'container' }, [title, nav, element1, element2, element3, element4, element5])
    console.log(container)
    app.innerHTML = '';
    app.appendChild(container);
}
soat()