
var tbody = document.querySelector('table tbody');

var form = document.querySelector('.form');

var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

form.addEventListener('submit', function(event) {
    event.preventDefault();

    var tr = document.createElement('tr');
    
    campos.forEach(function(campo) {
        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    var tdVolume = document.createElement('td');
    var quantidade = campos[1].value;
    var valor = campos[2].value;
    tdVolume.textContent = quantidade * valor;
    tr.appendChild(tdVolume);

    tbody.appendChild(tr);

    form.reset();
});