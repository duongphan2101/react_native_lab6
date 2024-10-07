const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const calcTip = (bill)=> {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const tips = [];
const total = [];

const billsLen = bills.length;

for(let i = 0; i < billsLen; i++){
    const element = bills[i];
    tips.push(calcTip(element));
    total.push(element + tips[i]);
}

const calcAverage = (arr) => {
    var sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum / arr.length;
};

document.write(calcAverage(total));