document.querySelector('button')
    .addEventListener('click', _ => {
        const chequeados = document.querySelectorAll('[type=checkbox]:checked');
        let continentesIds = '';
        chequeados.forEach(chequeado => continentesIds += chequeado.value + ',');
        window.location = 'continente.html?continentes=' + continentesIds;
    });

