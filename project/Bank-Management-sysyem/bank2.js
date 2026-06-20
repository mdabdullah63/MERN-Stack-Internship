const prompt = require('prompt-sync')();
let users = [
    {
        name: "Rahul Sharma",
        accountNumber: 10000,
        phone: "9876543210",
        email: "rahul@gmail.com",
        balance: 5000,
        loanTotal: [0, 0, 0],
        EMIcost: [0, 0, 0],
        EMIcount: [0, 0, 0],
        loanStatus: [false, false, false]
    }
];

let accountNumber = 10100;
let bankFunds = 999999;

function getValidNumber(msg) {
    while (true) {
        let value = Number(prompt(msg));
        if (!isNaN(value) && value > 0) return value;
        console.log("Invalid input");
    }
}

function getInterestRate(months) {
    if (months <= 3) return 10;
    if (months <= 6) return 12;
    if (months <= 12) return 15;
    if (months <= 36) return 20;
    return null;
}

function Register() {
    let name = prompt("Name: ").trim();
    let email = prompt("Email: ").trim();
    let phone = prompt("Phone: ").trim();

    if (users.some(u => u.email === email || u.phone === phone)) {
        console.log("User already exists");
        return;
    }

    users.push({
        name,
        accountNumber,
        phone,
        email,
        balance: 0,
        loanTotal: [0, 0, 0],
        EMIcost: [0, 0, 0],
        EMIcount: [0, 0, 0],
        loanStatus: [false, false, false]
    });

    console.log("Account Created:", accountNumber);
    accountNumber += 100;
}

function Login() {
    let acc = Number(prompt("Account No: "));
    let phone = prompt("Phone: ");

    let user = users.find(u => u.accountNumber === acc && u.phone === phone);

    if (!user) {
        console.log("Invalid login");
        return;
    }

    console.log("Login Success");
    userMenu(user);
}

function userMenu(user) {
    while (true) {
        console.log("\n1.Deposit 2.Withdraw 3.Loan 4.EMI 5.Balance 6.Exit");

        let choice = Number(prompt("Choice: "));

        switch (choice) {
            case 1: deposit(user); break;
            case 2: withdraw(user); break;
            case 3: loanMenu(user); break;
            case 4: payEMI(user); break;
            case 5: console.log("Balance:", user.balance); break;
            case 6: return;
            default: console.log("Invalid");
        }
    }
}
function deposit(user) {
    let amt = getValidNumber("Amount: ");
    user.balance += amt;
    console.log("Deposited:", amt);
}

function withdraw(user) {
    let amt = getValidNumber("Amount: ");
    if (amt > user.balance) return console.log("Insufficient funds");

    user.balance -= amt;
    console.log("Withdrawn:", amt);
}
function loanMenu(user) {
    console.log("1.Home 2.Business 3.Education");
    let type = Number(prompt("Choice: ")) - 1;

    if (type < 0 || type > 2) return console.log("Invalid");

    if (user.loanStatus[type]) {
        console.log("Loan already active");
        return;
    }

    let amount = getValidNumber("Loan Amount: ");
    let months = getValidNumber("Months: ");

    let rate = getInterestRate(months);
    if (!rate) return console.log("Invalid duration");

    rate += [2, 5, 0][type];

    let total = amount + (amount * rate / 100);
    let emi = total / months;

    console.log("EMI:", emi.toFixed(2));

    if (bankFunds < amount) return console.log("Bank low funds");

    user.loanTotal[type] = total;
    user.EMIcost[type] = emi;
    user.EMIcount[type] = months;
    user.loanStatus[type] = true;

    user.balance += amount;
    bankFunds -= amount;

    console.log("Loan Approved");
}
function payEMI(user) {
    console.log("1.Home 2.Business 3.Education");
    let type = Number(prompt("Choice: ")) - 1;

    if (!user.loanStatus[type]) return console.log("No active loan");

    let emi = user.EMIcost[type];

    if (user.balance < emi) return console.log("Low balance");

    user.balance -= emi;
    user.loanTotal[type] -= emi;
    user.EMIcount[type]--;
    bankFunds += emi;

    if (user.EMIcount[type] === 0) {
        user.loanStatus[type] = false;
        user.loanTotal[type] = 0;
        console.log("Loan Completed");
    }

    console.log("Remaining:", user.loanTotal[type]);
}
while (true) {
    console.log("\n1.Register 2.Login 3.Exit");
    let ch = Number(prompt("Choice: "));

    switch (ch) {
        case 1: Register(); break;
        case 2: Login(); break;
        case 3: process.exit();
        default: console.log("Invalid");
    }
}