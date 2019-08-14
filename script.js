let money, time;
function start(){
    money = +prompt ("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    while(isNaN(money)||''|| money == null) {
        money = +prompt ("Ваш бюджет на месяц?", '');
    }
}

start();

let AppData = {
    budzhet: money,
    timeData: time,
    savings: true,
    income: [],
    optionalExpenses: {},
    expenses: {}
};
function chooseExpenses(){
    for (let i=0; i<2; i++) {
        let a = prompt ("Введите обязательную статью расходов в этом месяце");
        let b = prompt("Во сколько обойдется?");
        
        if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length <50) {
            console.log ("done!");
            AppData.expenses[a] = b;
        }
        else {
            continue;
        }
    };    
}
chooseExpenses();


function checkSavings(){
    if (AppData.savings == true){
        let save = +prompt("Какова сумма накоплений"),
            percent = +prompt("Под какой процент?");
            AppData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + (AppData.monthIncome).toFixed());
    }
}
checkSavings();

function detectOneDay(){
    AppData.oneDay = ((AppData.budzhet)/30).toFixed();
    alert("Ежедневный бюджет " + AppData.oneDay);
    return AppData.oneDay;
}

detectOneDay();

function detectLevel(){
    if( AppData.oneDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (AppData.oneDay > 100 && AppData.oneDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (AppData.oneDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}
detectLevel();

function chooseOptExpenses(){
    for (let i=0; i<3; i++){
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        AppData.optionalExpenses[i] = questionOptExpenses;
        console.log(AppData.optionalExpenses);
    }
}
chooseOptExpenses();