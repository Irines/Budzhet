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
    expenses: {},
    chooseExpenses: function(){
        for (let i=0; i<2; i++) {
            let a = prompt ("Введите обязательную статью расходов в этом месяце");
            let b = prompt("Во сколько обойдется?");
            
            if ( (typeof(a)) == 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length <50) {
                console.log ("done!");
                AppData.expenses[a] = b;
            }
            else {
                console.log('bad result');
                i--;
            }
        }   
    },
    detectOneDay: function(){
        AppData.oneDay = ((AppData.budzhet)/30).toFixed();
        alert("Ежедневный бюджет " + AppData.oneDay);
        return AppData.oneDay;
    },
    detectLevel: function(){
        if( AppData.oneDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (AppData.oneDay > 100 && AppData.oneDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (AppData.oneDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function(){
        if (AppData.savings == true){
            let save = +prompt("Какова сумма накоплений"),
                percent = +prompt("Под какой процент?");
                AppData.monthIncome = save/100/12*percent;
                alert("Доход в месяц с вашего депозита: " + (AppData.monthIncome).toFixed());
        }
    },
    chooseOptExpenses: function(){
        for (let i=0; i<3; i++){
            let questionOptExpenses = prompt("Статья необязательных расходов?");
            AppData.optionalExpenses[i] = questionOptExpenses;
            console.log(AppData.optionalExpenses);
        }
    },
    chooseIncome: function(){
        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");

        if (typeof(items) != "string" || items == "" || typeof(items) == null) {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        } else {
            AppData.income = items.split(", ");
            AppData.income.push(prompt("Может что-то еще?"));
            AppData.income.sort();
        }

        AppData.income.forEach(function(item, i){
            console.log('Способы доп. заработка: '+ (i+1)+'-й'+ ' - '+ item);
        });

        // for (let i=0; i<2; i++) {
        //     let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)",  '');
        //     if (typeof(items)=='string' || typeof(items)!=null || items =='' ){
        //         AppData.income = items.split(', ');
        //         AppData.income.push(prompt('Может что-то ещё?'));
        //         AppData.income.sort();
        //         AppData.income.forEach(function(item, i){
        //             console.log('Способы доп. заработка: '+ (i+1)+'-й'+ ' - '+ item);
        //         });
        //     } 
        //     else {
        //         console.log("Вы ввели некорректные данные или не ввели их вовсе");
        //         console.log('bad result');
        //         i--;
        //     }
        // }
    }
};
AppData.chooseExpenses();
AppData.chooseIncome();
for (let key in AppData){
    console.log('Наша программа включает в себя:'  + key + " - " + AppData[key]);
}


