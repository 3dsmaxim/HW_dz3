const question = EnterNumber(prompt("Введите температуру в градусах цельсия"));
tempFahrenheit(question);

function EnterNumber(n) {
    while (true) {
        try {
            if (n >= 0 || n <= 0) {
                break;
            }
            else {
                n = prompt("Ввод неверный, Повторите ввод циферками")
            }
        }
        finally { }
    }
    return n;
}

function tempFahrenheit(n) {
    fahrenheit = (9 / 5) * n + 32;
    alert(`${Math.round(n * Math.pow(10, 1)) / Math.pow(10, 1)} градусов по цельсию = ${Math.round(fahrenheit * Math.pow(10, 1)) / Math.pow(10, 1)} градусов по фаренгейту`);
}