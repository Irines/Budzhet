let money = prompt ("Ваш бюджет на месяц?")
let time = prompt("Введите дату в формате YYYY-MM-DD")
var a = prompt ("Введите обязательную статью расходов в этом месяце")
var b = prompt("Во сколько обойдется?")
var AppData = {
    budzhet: money,
    timeData: time,
    savings: false,
    income: [],
    optionalExpenses: 0,
    expenses: {a:b}

}
var oneDay = ((AppData.budzhet)/30).toFixed(1)
alert(oneDay)


