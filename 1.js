// Нобходимо пользователя попросить ввести температуру в градусах Цельсия, преобразовать введенное пользователем значение в соответствующую температуру в градусах по Фаренгейту и вывести в alert сообщение с текстом (пример): Цельсий: 21, Фаренгейт: 69.8

function translateCelsiusFahrenheit(temp) {
    return ((9/5)*temp + 32).toFixed(1);
}

let temperatureC = Number.parseInt(prompt("Веедите температуру в градусах Цельсия:"));
let temperatureF = translateCelsiusFahrenheit(temperatureC);
alert(`температура: ${temperatureC}C = ${temperatureF}F`);