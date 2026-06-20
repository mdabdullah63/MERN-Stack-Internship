9const prompt = require('prompt-sync')();
let users = [
    {
        name: "Rahul Sharma",
        accountNumber: 10000,
        phone: "9876543210",
        email: "rahul@gmail.com",
        Balance: 5000,
        loanTotal: [0, 0, 0],
        EMIcost: [0, 0, 0],
        EMIcount: [0, 0, 0],
        loanStatus: [false, false, false]
    },
    {
        name: "Aman Verma",
        accountNumber: 10100,
        phone: "9123456780",
        email: "aman@gmail.com",
        Balance: 8000,
        loanTotal: [0, 0, 0],
        EMIcost: [0, 0, 0],
        EMIcount: [0, 0, 0],
        loanStatus: [false, false, false]
    },
    {
        name: "Priya Singh",
        accountNumber: 10200,
        phone: "9988776655",
        email: "priya@gmail.com",
        Balance: 12000,
        loanTotal: [0, 0, 0],
        EMIcost: [0, 0, 0],
        EMIcount: [0, 0, 0],
        loanStatus: [false, false, false]
    }
];
let accountNumber = 10300;
let Bankfunds = 999999;

function Register() {
    console.clear();
    let name;
    while (true) {
        name = prompt("Enter your name:->").trim();
        let nameformat = /^[A-Za-z]+( [A-Za-z]+)*$/;
        if (!nameformat.test(name) || name.length < 4 || name.length > 20) {
            console.log("Invalid name format");
            continue;
        }
        break;
    }

    let email;
    while (true) {
        email = prompt("Enter your email:->").trim();
        let emailformat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailformat.test(email)) {
            console.log("Wrong email format");
            continue;
        }
        break;
    }

    let phone;
    while (true) {
        phone = prompt("Enter your phone number:->").trim();
        let phoneformat = /^\d{10}$/;
        if (!phoneformat.test(phone)) {
            console.log("Wrong phone number format");
            continue;
        }
        break;
    }

    let duplicate = users.find(u => u.phone === phone || u.email === email);
    if (duplicate) {
        console.log("User already exists");
        return;
    }

    let user = {
        name,
        accountNumber,
        phone,
        email,
        Balance: 0,
        loanTotal: [0, 0, 0],
        EMIcost: [0, 0, 0],
        EMIcount: [0, 0, 0],
        loanStatus: [false, false, false]
    };

    users.push(user);
    console.log(`Account created!\nAccount Number: ${accountNumber}`);
    accountNumber += 100;
}

function Login() {
    let acc = Number(prompt("Enter account number: "));
    let phone = prompt("Enter phone number: ").trim();

    let user = users.find(u => u.accountNumber === acc && u.phone === phone);

    if (!user) {
        console.log("Invalid account detail");
        return;
    }

    console.log("Login successful!");

    let hour = new Date().getHours();
    let greeting;

    if (hour >= 5 && hour < 12) {
        greeting = "Good Morning";
    }
    else if (hour < 17) {
        greeting = "Good Afternoon";
    }
    else if (hour < 21) {
        greeting = "Good Evening";
    }
    else {
        greeting = "Good Night";
    }

    console.log(`${greeting}, ${user.name}!`);
    userMenu(user);
}
function userMenu(user) {
    while (true) {
        console.log("\n-Banking Action-");
        console.log("1. Deposit");
        console.log("2. Withdraw");
        console.log("3. Get-Loan");
        console.log("4. Pay-EMI");
        console.log("5. Check Balance");
        console.log("6. Account Details");
        console.log("7. Update Profile");
        console.log("8. Back");
        let choice = Number(prompt("Enter your choice: "));

        switch (choice) {
            case 1:
                Deposit(user);
                break;
            case 2:
                withdraw(user);
                break;
            case 3:
                Loan(user);
                break;
            case 4:
                EMI(user);
                break;
            case 5:
                Balance(user);
                break;
            case 6:
                Details(user);
                break;
            case 7:
                Update(user);
                break;
            case 8:
                return;
            default: console.log("Invalid choice");
        }
    }
}

function Deposit(user) {
    let amount = Number(prompt("Enter deposit amount: "));
    if (isNaN(amount) || amount <= 0) {
        console.log("Invalid amount");
        return;
    }
    user.Balance += amount;
    console.log("Deposited:", amount);
    console.log("Balance:", user.Balance);
}

function withdraw(user) {
    let amount = Number(prompt("Enter withdraw amount: "));
    if (isNaN(amount) || amount <= 0) {
        console.log("Invalid amount");
        return;
    }
    if (amount > user.Balance) {
        console.log("Insufficient funds");
        return;
    }
    user.Balance -= amount;
    console.log("Withdrawn:", amount);
    console.log("Balance:", user.Balance);
}
function getInterestRate(months) {
    if (months >= 1 && months <= 3)
        return 10;
    else if (months >= 4 && months <= 6)
        return 12;
    else if (months >= 7 && months <= 12)
        return 15;
    else if (months >= 13 && months <= 36)
        return 20;
    else return null;
}
function Loan(user) {
    console.log("Which type of loan you want");

    while (true) {
        console.log("\nLoan Types");
        console.log("1. Home Loan");
        console.log("2. Business Loan");
        console.log("3. Education Loan");
        console.log("4. Return");

        let choice = Number(prompt("Enter your choice: "));

        switch (choice) {
            case 1:
                HomeLoan(user);
                break;

            case 2:
                BusinessLoan(user);
                break;

            case 3:
                EducationLoan(user);
                break;

            case 4:
                return;

            default:
                console.log("Invalid choice");
        }
    }
}
function HomeLoan(user) {
    console.log("We are in Home Loan section");

    if (user.loanStatus[0] === true) {
        console.log("You  have already a pending Home Loan");
        return;
    }

    let loanAmount;
    while (true) {
        loanAmount = Number(prompt("Enter loan amount: "));
        if (isNaN(loanAmount) || loanAmount <= 0) {
            console.log("Invalid amount");
            continue;
        }
        break;
    }

    if (Bankfunds < loanAmount) {
        console.log("Loan not approved (low bank funds)");
        return;
    }

    let loanDuration;
    while (true) {
        loanDuration = Number(prompt("Enter repayment period (months): "));
        if (isNaN(loanDuration) || loanDuration <= 0) {
            console.log("Invalid repayment duration");
            continue;
        }
        break;
    }

    let rate = getInterestRate(loanDuration);

    if (rate === null) {
        console.log("Only 1 to 36 months allowed");
        return;
    }

    rate += 2;

    let interest = (loanAmount * rate) / 100;
    let total = loanAmount + interest;
    let EMI = total / loanDuration;

    console.log("Interest Rate:", rate + "%");
    console.log("Total Payable:", total);
    console.log("Monthly EMI:", EMI.toFixed(2));

    let confirm;
    while (true) {
        confirm = Number(prompt("Press 1 to confirm, 2 to cancel: "));
        if (confirm === 1 || confirm === 2) break;
        console.log("Invalid choice");
    }

    if (confirm === 1) {
        console.log("Home Loan Approved!");
        Bankfunds -= loanAmount;
        user.loanTotal[0] = total;
        user.EMIcost[0] = EMI;
        user.EMIcount[0] = loanDuration;
        user.loanStatus[0] = true;
        user.Balance += loanAmount;


        console.log("Loan successfully taken");
    } else {
        console.log("Loan cancelled");
    }
}
function BusinessLoan(user) {
    console.log("We are in Business Loan setion");
    if (user.loanStatus[1] === true) {
        console.log("You have already a pending Business Loan");
        return;
    }

    let loanAmount;
    while (true) {
        loanAmount = Number(prompt("Enter loan amount: "));
        if (isNaN(loanAmount) || loanAmount <= 0) {
            console.log("Invalid amount");
            continue;
        }
        break;
    }

    if (Bankfunds < loanAmount) {
        console.log("Loan not approved (low bank funds)");
        return;
    }

    let loanDuration;
    while (true) {
        loanDuration = Number(prompt("Enter repayment period (months): "));
        if (isNaN(loanDuration) || loanDuration <= 0) {
            console.log("Invalid repayment duration");
            continue;
        }
        break;
    }

    let rate = getInterestRate(loanDuration);

    if (rate === null) {
        console.log("Only 1 to 36 months allowed");
        return;
    }

    rate += 5;

    let interest = (loanAmount * rate) / 100;
    let total = loanAmount + interest;
    let EMI = total / loanDuration;

    console.log("Interest Rate:", rate + "%");
    console.log("Total Payable:", total);
    console.log("Monthly EMI:", EMI.toFixed(2));

    let confirm;
    while (true) {
        confirm = Number(prompt("Press 1 to confirm, 2 to cancel: "));
        if (confirm === 1 || confirm === 2) break;
        console.log("Invalid choice");
    }

    if (confirm === 1) {
        console.log("Business Loan Approved!");
        Bankfunds -= loanAmount;

        user.loanTotal[1] = total;
        user.EMIcost[1] = EMI;
        user.EMIcount[1] = loanDuration;
        user.loanStatus[1] = true;
        user.Balance += loanAmount;


        console.log("Loan successfully taken");
    } else {
        console.log("Loan cancelled");
    }
}

function EducationLoan(user) {
    console.log("We are in Education Loan setion");
    if (user.loanStatus[2] === true) {
        console.log("You have already a pending Home Loan");
        return;
    }

    let loanAmount;
    while (true) {
        loanAmount = Number(prompt("Enter loan amount: "));
        if (isNaN(loanAmount) || loanAmount <= 0) {
            console.log("Invalid amount");
            continue;
        }
        break;
    }

    if (Bankfunds < loanAmount) {
        console.log("Loan not approved (low bank funds)");
        return;
    }

    let loanDuration;
    while (true) {
        loanDuration = Number(prompt("Enter repayment period (months): "));
        if (isNaN(loanDuration) || loanDuration <= 0) {
            console.log("Invalid repayment duration");
            continue;
        }
        break;
    }

    let rate = getInterestRate(loanDuration);
    if (rate === null) {
        console.log("Only 1 to 36 months allowed");
        return;
    }
    let interest = (loanAmount * rate) / 100;
    let total = loanAmount + interest;
    let EMI = total / loanDuration;

    console.log("Interest Rate:", rate + "%");
    console.log("Total Payable:", total);
    console.log("Monthly EMI:", EMI.toFixed(2));

    let confirm;
    while (true) {
        confirm = Number(prompt("Press 1 to confirm, 2 to cancel: "));
        if (confirm === 1 || confirm === 2) break;
        console.log("Invalid choice");
    }

    if (confirm === 1) {
        console.log("Education Loan Approved!");
        Bankfunds -= loanAmount;
        user.loanTotal[2] = total;
        user.EMIcost[2] = EMI;
        user.EMIcount[2] = loanDuration;
        user.loanStatus[2] = true;
        user.Balance += loanAmount;

        console.log("Loan successfully taken");
    } else {
        console.log("Loan cancelled");
    }
}
function EMI(user) {
    if (!user.loanStatus[0] && !user.loanStatus[1] && !user.loanStatus[2]) {
        console.log("No active loans");
        return;
    }
    // Details(user);
    // Balance(user);
    // console.log("Home laon amount " + user.loanTotal[0])
    // console.log("HOME loan EMI Cost " + user.EMIcost[0])
    // console.log("HOME loan EMI left " + user.EMIcount[0])
    // console.log("Business laon amount " + user.loanTotal[1])
    // console.log("Business loan EMI Cost " + user.EMIcost[1])
    // console.log("Business loan EMI left " + user.EMIcount[1])
    // console.log("Education laon amount " + user.loanTotal[2])
    // console.log("Education loan EMI Cost " + user.EMIcost[2])
    // console.log("Education loan EMI left " + user.EMIcount[2])
    else {
        console.log("Which type of EMI you want Payment");
    }
    while (true) {
        console.log("\nLoan Types");
        console.log("1. Home Loan");
        console.log("2. Business Loan");
        console.log("3. Education Loan");
        console.log("4. Return");

        let choice = Number(prompt("Enter your choice: "));

        switch (choice) {
            case 1:
                HomeLoanEMI(user);
                break;

            case 2:
                BusinessLoanEMI(user);
                break;

            case 3:
                EducationLoanEMI(user);
                break;

            case 4:
                return;

            default:
                console.log("Invalid choice");
        }
    }
}
function HomeLoanEMI(user) {
    if (user.loanStatus[0] === false) {
        console.log("you have no any active home laon ")
        return;
    }
    console.log("Pay your home EMI");
    console.log("Pending EMI:", user.EMIcost[0]);

    let EMIAmount = user.EMIcost[0];

    if (user.Balance < EMIAmount) { 
        console.log("Insufficient funds");
        return;
    }

    let confirm;
    while (true) {
        confirm = Number(prompt("Press 1 to confirm, 2 to cancel: "));
        if (confirm === 1 || confirm === 2) break;
        console.log("Invalid choice");
    }

    if (confirm === 1) {
        console.log("Successfully EMI Paid");
        user.EMIcount[0] -= 1;
        user.loanTotal[0] -= EMIAmount;
        user.Balance -= EMIAmount;
        Bankfunds += EMIAmount;

        if (user.EMIcount[0] === 0) {
            user.loanStatus[0] = false;
            user.loanTotal[0] = 0;
            console.log("Home Loan Completed ");
        }

        console.log("Remaining loan:", user.loanTotal[0]);
        console.log("EMIs left:", user.EMIcount[0]);
    } else {
        console.log("EMI payment incomplete ");
    }
}
function BusinessLoanEMI(user) {
    if (user.loanStatus[1] === false) {
        console.log("you have no any active business laon ")
        return;
    }
    console.log("Pay your Business EMI");
    console.log("Pending EMI:", user.EMIcost[1]);

    let EMIAmount = user.EMIcost[1];

    if (user.Balance < EMIAmount) { 
        console.log("Insufficient funds");
        return;
    }

    let confirm;
    while (true) {
        confirm = Number(prompt("Press 1 to confirm, 2 to cancel: "));
        if (confirm === 1 || confirm === 2) break;
        console.log("Invalid choice");
    }

    if (confirm === 1) {
        console.log("Successfully EMI Paid");
        user.EMIcount[1] -= 1;
        user.loanTotal[1] -= EMIAmount;
        user.Balance -= EMIAmount;
        Bankfunds += EMIAmount;

        if (user.EMIcount[1] === 0) {
            user.loanStatus[1] = false;
            user.loanTotal[1] = 0;
            console.log("Business Loan Completed ");
        }

        console.log("Remaining loan:", user.loanTotal[1]);
        console.log("EMIs left:", user.EMIcount[1]);
    }
    else {
        console.log("EMI payment incomplete ");
    }
}

function EducationLoanEMI(user) {
    if (user.loanStatus[2] === false) {
        console.log("you have no any active education laon ")
        return;
    }
    console.log("Pay your Education EMI");
    console.log("Pending EMI:", user.EMIcost[2]);

    let EMIAmount = user.EMIcost[2];

    if (user.Balance < EMIAmount) {
        console.log("Insufficient funds");
        return;
    }

    let confirm;
    while (true) {
        confirm = Number(prompt("Press 1 to confirm, 2 to cancel: "));
        if (confirm === 1 || confirm === 2) break;
        console.log("Invalid choice");
    }

    if (confirm === 1) {

        console.log("Successfully EMI Paid");
        user.EMIcount[2] -= 1;
        user.loanTotal[2] -= EMIAmount;
        user.Balance -= EMIAmount;
        Bankfunds += EMIAmount;

        if (user.EMIcount[2] === 0) {
            user.loanStatus[2] = false;
            user.loanTotal[2] = 0;
            console.log("Education Loan Completed ");
        }

        console.log("Remaining loan:", user.loanTotal[2]);
        console.log("EMIs left:", user.EMIcount[2]);
    } else {
        console.log("EMI payment process incomplete ");
    }
}
function Balance(user) {
    console.log("Hey! ", user.name);
    console.log("Balance:", user.Balance);
}
function Details(user) {
    console.log("\n--- Account Details ---");
    console.log("Name:", user.name);
    console.log("Email:", user.email);
    console.log("Phone:", user.phone);
    console.log("Account Number:", user.accountNumber);
    console.log("Balance:", user.Balance);
    let loanNames = ["Home Loan", "Business Loan", "Education Loan"];
    let loanTack = false;
    for (let i = 0; i < 3; i++) {
        if (user.loanStatus[i]) {
            loanTack = true;
            let months = user.EMIcount[i];
            let years = Math.floor(months / 12);
            let left = months % 12;
            console.log(`\n${loanNames[i]}:`);
            console.log("Total Remaining:", user.loanTotal[i]);
            console.log("EMI Amount:", user.EMIcost[i]);
            console.log("EMIs Left:", months);

            if (years > 0) {
                console.log("Duration Left:", `${years} year(s) ${left} month(s)`);
            } else {
                console.log("Duration Left:", `${left} month(s)`);
            }
        }
    }

    if (!loanTack) {
        console.log("\nNo Active Loans");
    }
}

function Update(user) {
    while (true) {
        let verify = prompt("Enter phone to verify: ").trim();
        if (verify !== user.phone) {
            console.log("Wrong phone");
            continue;
        }
        while (true) {
            console.log("\n--Updating process--");
            console.log("1. Edit name");
            console.log("2. Edit Email");
            console.log("3. Edit Phone");
            console.log("4. Exit");
            let choice = Number(prompt("Enter your choice: "));
            switch (choice) {
                case 1: {
                    let newname;
                    while (true) {
                        newname = prompt("New name: ").trim();
                        if (!/^[A-Za-z]+( [A-Za-z]+)*$/.test(newname)) {
                            console.log("Invalid name format");
                            continue;
                        }
                        if (newname === user.name) {
                            console.log(" OLD Name No change");
                            break;
                        }
                        user.name = newname;
                        console.log("Name Updated");
                        break;
                    }
                    break;
                }

                case 2: {
                    let email;
                    while (true) {
                        email = prompt("New email: ").trim();
                        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                            console.log("Invalid email format ");
                            continue;
                        }
                        if (email === user.email) {
                            console.log("OLD Email No change");
                            break;
                        }
                        if (users.some(u => u.email === email && u !== user)) {
                            console.log("Email Already exists");
                            continue;
                        }
                        user.email = email;
                        console.log(" Email Updated");
                        break;
                    }
                    break;
                }

                case 3: {
                    let phone;
                    while (true) {
                        phone = prompt("New phone: ").trim();
                        if (!/^\d{10}$/.test(phone)) {
                            console.log("Invalid phone format");
                            continue;
                        }
                        if (phone === user.phone) {
                            console.log("OLD Phone No change");
                            break;
                        }
                        if (users.some(u => u.phone === phone && u !== user)) {
                            console.log("Phone exists");
                            continue;
                        }
                        user.phone = phone;
                        console.log("phone no Updated ");
                        break;
                    }
                    break;
                }

                case 4:
                    console.log("Exit from update pahse");
                    return;

                default:
                    console.log("Invalid choice");
            }
        }
    }
}

function show_All_Account() {
    console.log("\n--- All Accounts ---");
    if (users.length === 0) {
        console.log("No accounts found");
    } else {
        users.forEach(u =>
            console.log(`Acc: ${u.accountNumber}, Name: ${u.name}`)
        );
    }
}

function Exit() {
    console.log("Exiting...");
    process.exit();
}

while (true) {
    console.log("\n--Bank Management--");
    console.log("1. Register");
    console.log("2. Login");
    console.log("3. Show All Accounts");
    console.log("4. Exit");

    let choice = Number(prompt("Enter your choice: "));

    switch (choice) {
        case 1:
            Register();
            break;
        case 2:
            Login();
            break;
        case 3:
            show_All_Account();
            break;
        case 4:
            Exit();
        default: console.log("Invalid choice");
    }
}