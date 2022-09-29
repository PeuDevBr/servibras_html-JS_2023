const dropdownCapacity = document.querySelector('#dropdownCapacity');
const dropdownType = document.querySelector('#dropdownType');
const button = document.querySelector('.button');

const amount = 25.00;
quantity = 3;

const description_HTML = ['#firstCopper', '#secondCopper', '#firstSpongy', '#secondSpongy', '#aluminumTape', '#pvcTape', '#support', '#cable'];

const quantities_HTML = ['#firstCopperQuantity', '#secondCopperQuantity', '#firstSpongyQuantity', '#secondSpongyQuantity', '#aluminumTapeQuantity', '#pvcTapeQuantity', '#supportQuantity', '#cableQuantity'];

const amounts_HTML = ['#firstCopperAmount', '#secondCopperAmount', '#firstSpongyAmount', '#secondSpongyAmount', '#aluminumTapeAmount', '#pvcTapeAmount', '#supportAmount', '#cableAmount'];

const total_HTML = ['#firstCopperTotal', '#secondCopperTotal', '#firstSpongyTotal', '#secondSpongyTotal', '#aluminumTapeTotal', '#pvcTapeTotal', '#supportTotal', '#cableTotal'];

const description_9k = ['Cobre de 1/4', 'Cobre de 3/8', 'Esponjoso de 1/4', 'Esponjoso de 3/8', 'Fita alumínio', 'Fita pvc', 'Suporte 7k-12k', 'Cabo pp 3 x 1,5'];

const description_12k = ['Cobre de 1/4', 'Cobre de 1/2', 'Esponjoso de 1/4', 'Esponjoso de 1/2', 'Fita alumínio', 'Fita pvc', 'Suporte 7k-12k', 'Cabo pp 3 x 1,5'];

const description_18k = ['Cobre de 1/4', 'Cobre de 1/2', 'Esponjoso de 1/4', 'Esponjoso de 1/2', 'Fita alumínio', 'Fita pvc', 'Suporte 18-24k', 'Cabo pp 3 x 1,5'];

const description_24k = ['Cobre de 3/8', 'Cobre de 5/8', 'Esponjoso de 3/8', 'Esponjoso de 5/8', 'Fita alumínio', 'Fita pvc', 'Suporte 18-24k', 'Cabo pp 4 x 2,5'];

const description_30k = ['Cobre de 3/8', 'Cobre de 5/8', 'Esponjoso de 3/8', 'Esponjoso de 5/8', 'Fita alumínio', 'Fita pvc', 'Suporte 18-24k', 'Cabo pp 4 x 2,5'];

const description_36k = ['Cobre de 3/8', 'Cobre de 3/4', 'Esponjoso de 3/8', 'Esponjoso de 3/4', 'Fita alumínio', 'Fita pvc', 'Suporte 30-36k', 'Cabo pp 4 x 2,5'];

const description_48k = ['Cobre de 3/8', 'Cobre de 3/4', 'Esponjoso de 3/8', 'Esponjoso de 3/4', 'Fita alumínio', 'Fita pvc', '--------------', 'Cabo pp 4 x 2,5'];

const description_60k = ['Cobre de 3/8', 'Cobre de 3/4', 'Esponjoso de 3/8', 'Esponjoso de 3/4', 'Fita alumínio', 'Fita pvc', '--------------', 'Cabo pp 4 x 2,5'];


dropdownCapacity.onclick = function() {
    dropdownCapacity.classList.toggle('active');
}

dropdownType.onclick = function() {
    dropdownType.classList.toggle('active');
}


 function showAmountDescription(capacity) {
    document.querySelector('#inputCapacity').value = capacity;

    if(capacity === '9.000 Btus') {

        for (let i = 0; i < description_HTML.length; i++) {
            document.querySelector(description_HTML[i]).innerHTML = description_9k[i];
            document.querySelector(quantities_HTML[i]).innerHTML = quantity;
            document.querySelector(amounts_HTML[i]).innerHTML = `R$ ${amount}`;
            document.querySelector(total_HTML[i]).innerHTML = `R$ ${amount * quantity}`;
        }
    } else if(capacity === '12.000 Btus') {

        for (let i = 0; i < description_HTML.length; i++) {
            document.querySelector(description_HTML[i]).innerHTML = description_12k[i];
            document.querySelector(quantities_HTML[i]).innerHTML = quantity;
            document.querySelector(amounts_HTML[i]).innerHTML = `R$ ${amount}`;
            document.querySelector(total_HTML[i]).innerHTML = `R$ ${amount * quantity}`;
        }
    } else if(capacity === '18.000 Btus') {

        for (let i = 0; i < description_HTML.length; i++) {
            document.querySelector(description_HTML[i]).innerHTML = description_18k[i];
            document.querySelector(quantities_HTML[i]).innerHTML = quantity;
            document.querySelector(amounts_HTML[i]).innerHTML = `R$ ${amount}`;
            document.querySelector(total_HTML[i]).innerHTML = `R$ ${amount * quantity}`;
        }
    } else if(capacity === '24.000 Btus') {

        for (let i = 0; i < description_HTML.length; i++) {
            document.querySelector(description_HTML[i]).innerHTML = description_24k[i];
            document.querySelector(quantities_HTML[i]).innerHTML = quantity;
            document.querySelector(amounts_HTML[i]).innerHTML = `R$ ${amount}`;
            document.querySelector(total_HTML[i]).innerHTML = `R$ ${amount * quantity}`;
        }
    }  else if(capacity === '30.000 Btus') {

        for (let i = 0; i < description_HTML.length; i++) {
            document.querySelector(description_HTML[i]).innerHTML = description_30k[i];
            document.querySelector(quantities_HTML[i]).innerHTML = quantity;
            document.querySelector(amounts_HTML[i]).innerHTML = `R$ ${amount}`;
            document.querySelector(total_HTML[i]).innerHTML = `R$ ${amount * quantity}`;
        }
    } else if(capacity === '36.000 Btus') {

        for (let i = 0; i < description_HTML.length; i++) {
            document.querySelector(description_HTML[i]).innerHTML = description_36k[i];
            document.querySelector(quantities_HTML[i]).innerHTML = quantity;
            document.querySelector(amounts_HTML[i]).innerHTML = `R$ ${amount}`;
            document.querySelector(total_HTML[i]).innerHTML = `R$ ${amount * quantity}`;
        }
    } else if(capacity === '48.000 Btus') {

        for (let i = 0; i < description_HTML.length; i++) {
            document.querySelector(description_HTML[i]).innerHTML = description_48k[i];
            document.querySelector(quantities_HTML[i]).innerHTML = quantity;
            document.querySelector(amounts_HTML[i]).innerHTML = `R$ ${amount}`;
            document.querySelector(total_HTML[i]).innerHTML = `R$ ${amount * quantity}`;
        }
    } else if(capacity === '60.000 Btus') {

        for (let i = 0; i < description_HTML.length; i++) {
            document.querySelector(description_HTML[i]).innerHTML = description_60k[i];
            document.querySelector(quantities_HTML[i]).innerHTML = quantity;
            document.querySelector(amounts_HTML[i]).innerHTML = `R$ ${amount}`;
            document.querySelector(total_HTML[i]).innerHTML = `R$ ${amount * quantity}`;
        }
    }     
}


