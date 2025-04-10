const prompt = require('prompt-sync')();
const fs = require('fs');

class Budgeter{
    constructor() {
        this.income = 0;
        this.expenses = [];
    }

    setIncome(income) {
        this.income = income;
        this.saveToFile();
    }

    food(){
        let food = parseFloat(prompt('Wprowadź swoje dzienne wydatki na żywność: '));
        while (isNaN(food) || food < 0) {
            console.log('Proszę wprowadzić prawidłową dodatnią liczbę wydatków.');
            food = parseFloat(prompt('Wprowadź swoje dzienne   wydatki na żywność: '));
        }
        this.expenses.push({ category: 'Jedzenie', amount: food });
        this.saveToFile();
    }

    transport(){
        let transport = parseFloat(prompt('Wprowadź swoje dzienne  wydatki na transport:'));
        while (isNaN(transport) || transport < 0) {
            console.log('Proszę wprowadzić prawidłową dodatnią liczbę wydatków.');
            transport = parseFloat(prompt('Wprowadź swoje dzienne  wydatki na transport: '));
        }
        this.expenses.push({ category: 'Transport', amount: transport });
        this.saveToFile();
    }

    entertainment(){
        let entertainment = parseFloat(prompt('Wprowadź swoje dzienne  wydatki na rozrywkę: '));
        while (isNaN(entertainment) || entertainment < 0) {
            console.log('Proszę wprowadzić prawidłową dodatnią liczbę wydatków.');
            entertainment = parseFloat(prompt('Wprowadź swoje dzienne  wydatki na rozrywkę: '));
        }
        this.expenses.push({ category: 'Rozrywka', amount: entertainment });
        this.saveToFile();
    }

    
    finalBalanceCalculation(){
        const totalExpenses = this.expenses.reduce((sum, expense) => sum + expense.amount, 0);
        return this.income - totalExpenses;
       
    }

    displayFinalBalance(){
        const finalBalance = this.finalBalanceCalculation();
        console.log("\n--- PODSUMOWANIE WYDATKÓW ---");
        this.expenses.forEach(expense => {
            console.log(`Kategoria: ${expense.category}, Kwota: ${expense.amount} PLN`);
        });
        console.log(`Twoje miesięczne wydatki wynoszą: ${finalBalance} PLN`);        
        
       
    }
    saveToFile(filename = 'budzet.json'){
        const data = {
            income: this.income,
            expenses: this.expenses
        };
        try{
            fs.writeFileSync(filename, JSON.stringify(data, null, 2), 'utf-8');
            
        }catch(err) {
            console.error(' Błąd zapisu pliku:', err);
        }
    }
    loadFromFile(filename = 'budzet.json') {
        try{
            if (fs.existsSync(filename)){
                const content = fs.readFileSync(filename, 'utf-8');
                const data = JSON.parse(content);
                this.income = data.income || 0;
                this.expenses = data.expenses || [];
               
            }else{
                console.log(`Plik ${filename} nie istnieje – zaczynamy od nowa.`);
            }
        }catch(err){
            console.error(' Błąd odczytu pliku:', err);
        }
    }
}

function main(){
const budgeter = new Budgeter();
budgeter.loadFromFile();
console.log("Witaj w budżeterze!");
if (budgeter.income === 0) {
    let income = parseFloat(prompt('Wprowadź swój miesięczny dochód w PLN: '));
    while (isNaN(income) || income < 0) {
        console.log('Proszę wprowadzić prawidłową dodatnią liczbę dochodu.');
        income = parseFloat(prompt('Wprowadź swój miesięczny dochód w PLN: '));
    }
    budgeter.setIncome(income); 
}

while(true){
    console.log("\n--- MENU ---");
    console.log("1. Wyświetl saldo");
    console.log("2. Dodaj wydatki na jedzenie");
    console.log("3. Dodaj wydatki na transport");
    console.log("4. Dodaj wydatki na rozrywkę");
    console.log("5. Wyjście z programu");

const option =  parseInt(prompt('Co chcesz zrobic : '));

switch(option){
    case 1:
        budgeter.displayFinalBalance();
        break;
    case 2:
        budgeter.food();
        break;
    case 3:
        budgeter.transport();
        break;
    case 4:
        budgeter.entertainment();
        break;
    case 5:
        console.log("Dziękujemy za skorzystanie z budżetera. Do zobaczenia!");
        process.exit(0); 
    default:
        console.log("Niepoprawny wybór, spróbuj ponownie.");
    }
}
}

main();