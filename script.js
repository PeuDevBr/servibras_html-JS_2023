const dropdownCapacity = document.querySelector('#dropdownCapacity');
const dropdownType = document.querySelector('#dropdownType');
const button = document.querySelector('.button');

let capacityValue, typeValue

const values = 
    {
        copper_1_4: 15.00,
        copper_3_8: 20.00,
        copper_1_2: 22.00,
        copper_5_8: 27.00,
        copper_3_4: 30.00,

        spongy_1_4: 3.00,
        spongy_3_8: 3.00,
        spongy_1_2: 4.00,
        spongy_5_8: 5.00,
        spongy_3_4: 6.00,

        aluminumTape: 6.50,
        pvcTape: 5.00,

        support_7_12: 30.00,
        support_18_24: 50.00,
        support_30_36: 70.00,

        cable_3_x_1_5: 10.00,
        cable_4_x_2_5: 15.00,
    }

const description_HTML = ['#firstCopper', '#secondCopper', '#firstSpongy', '#secondSpongy', '#aluminumTape', '#pvcTape', '#support', '#cable'];

const quantities_HTML = ['#firstCopperQuantity', '#secondCopperQuantity', '#firstSpongyQuantity', '#secondSpongyQuantity', '#aluminumTapeQuantity', '#pvcTapeQuantity', '#supportQuantity', '#cableQuantity'];

const amounts_HTML = ['#firstCopperAmount', '#secondCopperAmount', '#firstSpongyAmount', '#secondSpongyAmount', '#aluminumTapeAmount', '#pvcTapeAmount', '#supportAmount', '#cableAmount'];

const total_HTML = ['#firstCopperTotal', '#secondCopperTotal', '#firstSpongyTotal', '#secondSpongyTotal', '#aluminumTapeTotal', '#pvcTapeTotal', '#supportTotal', '#cableTotal'];


const amountList = 
[
    //amount_9k
    [values.copper_1_4, values.copper_3_8, values.spongy_1_4, values.spongy_3_8, values.aluminumTape, values.pvcTape, values.support_7_12, values.cable_3_x_1_5], 
    //amount_12k
    [values.copper_1_4, values.copper_1_2, values.spongy_1_4, values.spongy_1_2, values.aluminumTape, values.pvcTape, values.support_7_12, values.cable_3_x_1_5], 
    //amount_18k
    [values.copper_1_4, values.copper_1_2, values.spongy_1_4, values.spongy_1_2, values.aluminumTape, values.pvcTape, values.support_18_24, values.cable_3_x_1_5], 
    //amounts_24k
    [values.copper_3_8, values.copper_5_8, values.spongy_3_8, values.spongy_5_8, values.aluminumTape, values.pvcTape, values.support_18_24, values.cable_4_x_2_5], 
    //amounts_30k
    [values.copper_3_8, values.copper_5_8, values.spongy_3_8, values.spongy_5_8, values.aluminumTape, values.pvcTape, values.support_30_36, values.cable_4_x_2_5], 
    //amounts_36k
    [values.copper_3_8, values.copper_3_4, values.spongy_3_8, values.spongy_3_4, values.aluminumTape, values.pvcTape, values.support_30_36, values.cable_4_x_2_5], 
    //amounts_48k
    [values.copper_3_8, values.copper_3_4, values.spongy_3_8, values.spongy_3_4, values.aluminumTape, values.pvcTape, 0, values.cable_4_x_2_5], 
    //amounts_60k
    [values.copper_3_8, values.copper_3_4, values.spongy_3_8, values.spongy_3_4, values.aluminumTape, values.pvcTape, 0, values.cable_4_x_2_5]
];

const descriptionList =
[
    //description_9k
    ['Cobre de 1/4', 'Cobre de 3/8', 'Esponjoso de 1/4', 'Esponjoso de 3/8', 'Fita alumínio', 'Fita pvc', 'Suporte 7k-12k', 'Cabo pp 3 x 1,5'], 
    //description_12k
    ['Cobre de 1/4', 'Cobre de 1/2', 'Esponjoso de 1/4', 'Esponjoso de 1/2', 'Fita alumínio', 'Fita pvc', 'Suporte 7k-12k', 'Cabo pp 3 x 1,5'], 
    //description_18k
    ['Cobre de 1/4', 'Cobre de 1/2', 'Esponjoso de 1/4', 'Esponjoso de 1/2', 'Fita alumínio', 'Fita pvc', 'Suporte 18-24k', 'Cabo pp 3 x 1,5'], 
    //description_24k
    ['Cobre de 3/8', 'Cobre de 5/8', 'Esponjoso de 3/8', 'Esponjoso de 5/8', 'Fita alumínio', 'Fita pvc', 'Suporte 18-24k', 'Cabo pp 4 x 2,5'], 
    //description_30k
    ['Cobre de 3/8', 'Cobre de 5/8', 'Esponjoso de 3/8', 'Esponjoso de 5/8', 'Fita alumínio', 'Fita pvc', 'Suporte 30-36k', 'Cabo pp 4 x 2,5'], 
    //description_36k
    ['Cobre de 3/8', 'Cobre de 3/4', 'Esponjoso de 3/8', 'Esponjoso de 3/4', 'Fita alumínio', 'Fita pvc', 'Suporte 30-36k', 'Cabo pp 4 x 2,5'], 
    //description_48k
    ['Cobre de 3/8', 'Cobre de 3/4', 'Esponjoso de 3/8', 'Esponjoso de 3/4', 'Fita alumínio', 'Fita pvc', '--------------', 'Cabo pp 4 x 2,5'], 
    //description_60k
    ['Cobre de 3/8', 'Cobre de 3/4', 'Esponjoso de 3/8', 'Esponjoso de 3/4', 'Fita alumínio', 'Fita pvc', '--------------', 'Cabo pp 4 x 2,5']
];

dropdownCapacity.onclick = function() {
    dropdownCapacity.classList.toggle('active');
}

dropdownType.onclick = function() {
    dropdownType.classList.toggle('active');
}


function formatAmount(amount) {
    const formatedAmount = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(amount);

    return formatedAmount;
}

function tableHTMLShow (index, quantity) {
    for (let i = 0; i < description_HTML.length; i++) {

        document.querySelector(description_HTML[i]).innerHTML = descriptionList[index][i];
        document.querySelector(amounts_HTML[i]).innerHTML = `R$ ${formatAmount(amountList[index][i])}`;
        
        if(i < 2) { //Calculate the total amount of copper
            document.querySelector(quantities_HTML[i]).innerHTML = quantity;
            document.querySelector(total_HTML[i]).innerHTML = `R$ ${formatAmount(amountList[index][i] * quantity)}`;
        } else if(i < 4) { //Calculate the total amount of the spongy
            document.querySelector(quantities_HTML[i]).innerHTML = Math.ceil(quantity / 2);
            document.querySelector(total_HTML[i]).innerHTML = `R$ ${formatAmount(amountList[index][i] * Math.ceil(quantity / 2))}`;
        } else if(i < 6) { //Calculate the total amount of the aluminumTape and pvcTape
            document.querySelector(quantities_HTML[i]).innerHTML = Math.ceil(quantity / 5);
            document.querySelector(total_HTML[i]).innerHTML = `R$ ${formatAmount(amountList[index][i] * Math.ceil(quantity / 5))}`;
        } else if(i === 7) { //Calculate the total amount of the cable
            document.querySelector(quantities_HTML[i]).innerHTML = quantity;
            document.querySelector(total_HTML[i]).innerHTML = `R$ ${formatAmount(amountList[index][i] * quantity)}`;
        } else { //Calculate the total amount of the support
            document.querySelector(quantities_HTML[i]).innerHTML = 1;
            document.querySelector(total_HTML[i]).innerHTML = `R$ ${formatAmount(amountList[index][i])}`;
        }
    }
}

function showTypeDescription(type) {
    document.querySelector('#inputType').value = type;
    typeValue = type;
}

 function showAmountDescription(capacity) {
    document.querySelector('#inputCapacity').value = capacity;     
    capacityValue = capacity;
}


function calculate() {

    let metreage = document.querySelector('#inputMetreage').value ; 

    if(capacityValue === '9.000 Btus') {

        tableHTMLShow(0, metreage);

    } else if(capacityValue === '12.000 Btus') {

        tableHTMLShow(1, metreage);

    } else if(capacityValue === '18.000 Btus') {

        tableHTMLShow(2, metreage);
        
    } else if(capacityValue === '24.000 Btus') {

        tableHTMLShow(3, metreage);
        
    }  else if(capacityValue === '30.000 Btus') {

        tableHTMLShow(4, metreage);

    } else if(capacityValue === '36.000 Btus') {

        tableHTMLShow(5, metreage);

    } else if(capacityValue === '48.000 Btus') {

        tableHTMLShow(6, metreage);

    } else if(capacityValue === '60.000 Btus') {

        tableHTMLShow(7, metreage);

    }
}