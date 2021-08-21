
document.getElementById("withdraw-button").addEventListener('click', function () {
    const withdraw = document.getElementById("withdraw");

})

document.getElementById("deposite-button").addEventListener('click', function () {

    const deposite = document.getElementById("deposite");
    const depositeValue = deposite.value;
    const depositeInt = parseFloat(depositeValue);

    const depositeTotal = document.getElementById("deposite-total");
    const depositeTotalValue = depositeTotal.innerText;
    const depositeTotalVAlueInt = parseFloat(depositeTotalValue);

    const currentDeposite = depositeTotalVAlueInt + depositeInt;
    depositeTotal.innerText = currentDeposite;

    const balance = document.getElementById("banalce");
    const balanceText = balance.innerText;
    const balanceTotal = parseFloat(balanceText);

    const totalBalance = balanceTotal + depositeInt;
    balance.innerText = totalBalance;

    console.log(totalBalance);

    deposite.value = '';
})