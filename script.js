let money = prompt ("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let AppData = {
    budzhet: money,
    timeData: time,
    savings: false,
    income: [],
    optionalExpenses: 0,
    expenses: {a:b}
};
for (let i=0; i<2; i++) {
    let a = prompt ("Введите обязательную статью расходов в этом месяце");
    let b = prompt("Во сколько обойдется?");
}
var oneDay = ((AppData.budzhet)/30).toFixed(1);
alert(oneDay);


