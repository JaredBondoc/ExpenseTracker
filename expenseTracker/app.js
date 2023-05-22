let expenseTable = document.getElementById("expenseTable");

//clear button
let clear = document.getElementById("clear");
clear.addEventListener("click", function() {
    if(expenseTable.rows.length > 1) {
    var rowCount = expenseTable.rows.length;
    for (var i = rowCount - 1; i > 0; i--) {
        expenseTable.deleteRow(i);
    }
    document.getElementById("totalCost").innerHTML = "No expenses added yet";
    }
    else {
        alert("There is nothing to clear.")
    }
})

//delete row button
    //put delete button next to new task
    function deleteRowButton() {
    let deleteTask = document.createElement("button");
    deleteTask.innerText = "X";
    deleteTask.setAttribute("id", "delete");
    
    deleteTask.addEventListener("click", function(){
        expenseTable.deleteRow(-1)
    })
}

//adding total cost of expenses
function totalCostOfExpenses() {
    var totalExpense = 0;
    for(var i = 1; i<expenseTable.rows.length; i++) {
        totalExpense = totalExpense + parseFloat(expenseTable.rows[i].cells[2].innerHTML);
    }
    if(totalExpense <= 0) {
        document.getElementById("totalCost").innerHTML = "No expenses added yet";
    } else {
    document.getElementById("totalCost").innerHTML = "Total Cost of Expenses: $" + totalExpense;
    }
}

//addExpense button

let submit = document.getElementById("submit");
submit.addEventListener("click", newExpense);
function newExpense() {
    if(expenseName.value.length!=0 && expenseDate.value.length!=0 && expenseCost.value.length!=0){
    var row = expenseTable.insertRow(-1);
    var name = row.insertCell(0);
    var date = row.insertCell(1);
    var amount = row.insertCell(2);
    var deleteButton = row.insertCell(3);
    name.innerHTML = expenseName.value;
    date.innerHTML = expenseDate.value;
    amount.innerHTML = expenseCost.value;
    deleteButton.innerHTML = '<button class="deleteBtn">Delete</button>';

    //resetting the input fields
    expenseName.value = "";
    expenseDate.value = "";
    expenseCost.value = "";
    totalCostOfExpenses()

    }
    else {
        alert("Please enter all your expense values first.");
    }
}

expenseTable.addEventListener('click', onDeleteRow)
function onDeleteRow(e) {
    if (!e.target.classList.contains('deleteBtn')) {
        return;
    }
    const btn = e.target;
    btn.closest('tr').remove();
    totalCostOfExpenses()
}

totalCostOfExpenses()

// refactored addExpense button
// const tbodyEl = document.querySelector('tbody')
// let submit = document.getElementById("submit");
// submit.addEventListener("click", newExpense);

// function newExpense() {
//     if(expenseName.value.length!=0 && expenseDate.value.length!=0 && expenseCost.value.length!=0){
//         tbodyEl.innerHTML += '
//             <tr>
//                 <td>${expenseName}</td>
//                 <td>${expenseDate}</td>
//                 <td>${expenseCost}</td>
//                 <td>test</td>
//             </tr>
//         '
//     }
//     else {
//         alert("Please enter all your expense values first.");
//     }
// }