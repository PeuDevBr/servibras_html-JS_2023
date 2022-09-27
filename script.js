const dropdown = document.querySelector('.dropdown');

const elements = ['#firstCopper', '#secondCopper', '#firstSpongy', '#secondSpongy', '#aluminumTape', '#pvcTape', '#support', '#cable'];

const description_9k = ['Cobre de 1/4', 'Cobre de 3/8', 'Esponjoso de 1/4', 'Esponjoso de 3/8', 'Fita alumínio', 'Fita pvc', 'Suporte 7k-12k', 'Cabo pp 3 x 1,5'];

const description_12k = ['Cobre de 1/4', 'Cobre de 1/2', 'Esponjoso de 1/4', 'Esponjoso de 1/2', 'Fita alumínio', 'Fita pvc', 'Suporte 7k-12k', 'Cabo pp 3 x 1,5'];

const description_18k = ['Cobre de 1/4', 'Cobre de 1/2', 'Esponjoso de 1/4', 'Esponjoso de 1/2', 'Fita alumínio', 'Fita pvc', 'Suporte 18-24k', 'Cabo pp 3 x 1,5'];

const description_24k = ['Cobre de 3/8', 'Cobre de 5/8', 'Esponjoso de 3/8', 'Esponjoso de 5/8', 'Fita alumínio', 'Fita pvc', 'Suporte 18-24k', 'Cabo pp 4 x 2,5'];

const description_30k = ['Cobre de 3/8', 'Cobre de 5/8', 'Esponjoso de 3/8', 'Esponjoso de 5/8', 'Fita alumínio', 'Fita pvc', 'Suporte 18-24k', 'Cabo pp 4 x 2,5'];

const description_36k = ['Cobre de 3/8', 'Cobre de 3/4', 'Esponjoso de 3/8', 'Esponjoso de 3/4', 'Fita alumínio', 'Fita pvc', 'Suporte 30-36k', 'Cabo pp 4 x 2,5'];

const description_48k = ['Cobre de 3/8', 'Cobre de 3/4', 'Esponjoso de 3/8', 'Esponjoso de 3/4', 'Fita alumínio', 'Fita pvc', '--------------', 'Cabo pp 4 x 2,5'];

const description_60k = ['Cobre de 3/8', 'Cobre de 3/4', 'Esponjoso de 3/8', 'Esponjoso de 3/4', 'Fita alumínio', 'Fita pvc', '--------------', 'Cabo pp 4 x 2,5'];

dropdown.onclick = function() {
    dropdown.classList.toggle('active');
}

 function showAmountDescription(capacity) {
    document.querySelector('.inputText').value = capacity;

    if(capacity === '9.000 Btus') {

        for (let i = 0; i < elements.length; i++) {
            document.querySelector(elements[i]).innerHTML = description_9k[i];
        }
    } else if(capacity === '12.000 Btus') {

        for (let i = 0; i < elements.length; i++) {
            document.querySelector(elements[i]).innerHTML = description_12k[i];
        }
    } else if(capacity === '18.000 Btus') {

        for (let i = 0; i < elements.length; i++) {
            document.querySelector(elements[i]).innerHTML = description_18k[i];
        }
    } else if(capacity === '24.000 Btus') {

        for (let i = 0; i < elements.length; i++) {
            document.querySelector(elements[i]).innerHTML = description_24k[i];
        }
    } else if(capacity === '36.000 Btus') {

        for (let i = 0; i < elements.length; i++) {
            document.querySelector(elements[i]).innerHTML = description_36k[i];
        }
    } else if(capacity === '60.000 Btus') {

        for (let i = 0; i < elements.length; i++) {
            document.querySelector(elements[i]).innerHTML = description_60k[i];
        }
    }
    
}

