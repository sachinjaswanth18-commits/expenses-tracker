let total = 0;

function addExpense() {
    const category = document.getElementById("category").value.trim();
    const amount = Number(document.getElementById("amount").value);

    if (category === "" || amount <= 0) {
        alert("Please enter valid details.");
        return;
    }

    const table = document.getElementById("expenseTable");
    const row = table.insertRow();

    row.insertCell(0).textContent = category;
    row.insertCell(1).textContent = amount;

    total += amount;

    document.getElementById("total").textContent = "Total Expense: " + total;

    document.getElementById("category").value = "";
    document.getElementById("amount").value = "";
}