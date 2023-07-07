let itemOrder = [
    {
        dipesan : false,
        harga : 15000,
        nama : 'Bakso Kecil',
    },
    {
        dipesan : false,
        harga : 25000,
        nama : 'Bakso Besar',
    },
    {
        dipesan : false,
        harga : 12000,
        nama : 'Mie Ayam',
    },
    {
        dipesan : false,
        harga : 17000,
        nama : 'Mie Ayam Bakso',
    },
    {
        dipesan : false,
        harga : 15000,
        nama : 'Bakso Bakar',
    },
    {
        dipesan : false,
        harga : 30000,
        nama : 'Bakso Beranak',
    },
];

let totalOrder = 0;

const itemTerpilih = document.getElementsByClassName('item');

const textTotal = document.getElementById('last-item');


for (let i = 0; i < itemTerpilih.length; i++) {
    itemTerpilih[i].addEventListener('click', function () {
        setItemPemesanan(i, itemTerpilih[i]);
    });
}

function setItemPemesanan(index, elemen) {
    if (itemOrder[index].dipesan == false){ 
        itemOrder[index].dipesan = true;
        elemen.style.backgroundColor = "brown";
        elemen.style.color = "white";
        totalOrder = totalOrder + itemOrder[index].harga;
    } else {
        itemOrder[index].dipesan = false;
        elemen.style.backgroundColor = "aqua";
        elemen.style.color = "black";
        totalOrder = totalOrder - itemOrder[index].harga;
    }
    textTotal.innerHTML = "Total <span>Rp" + totalOrder + '</span>';
}