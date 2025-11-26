/* Question 1: Closure-Based Counter Implementation */


function createCounter() {
  
  let count = 0;

  
  return {
    increment: function() {
      count++;
      console.log(`Current count: ${count}`);
    },
    decrement: function() {
      count--;
      console.log(`Current count: ${count}`);
    },
    display: function() {
      console.log(`Current count: ${count}`);
    }
  };
}


const counter = createCounter();
counter.increment(); 
counter.increment(); 
counter.decrement(); 
counter.display();   


/* Question 2: Simulating Private Variables with Closures */
 
function createBankAccount() {
    let balance = 0;  

    return {
        deposit(amount) {
            balance += amount;
            console.log(`Deposited: ${amount}`);
        },

        withdraw(amount) {
            if (amount <= balance) {
                balance -= amount;
                console.log(`Withdrawn: ${amount}`);
            } else {
                console.log("Insufficient balance");
            }
        },

        checkBalance() {
            console.log(`Current balance: ${balance}`);
        }
    };
}


const account = createBankAccount();

account.deposit(500);      
account.withdraw(200);     
account.withdraw(400);     
console.log(account.balance); 






