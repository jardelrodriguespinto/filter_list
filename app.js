function busca(){
    const inputEl = document.getElementById('meuInput');
    const filter = inputEl.value.toUpperCase();
    const ulEl = document.getElementById('minhaLista');
    const liEl = ulEl.getElementsByTagName('li');
    let match = false;
    for (i = 0; i < liEl.length; i++) {
        let a = liEl[i].getElementsByTagName("a")[0];
        let textValue = a.textContent || a.innerText;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
        match = true;
        liEl[i].style.display = "";
        } else {
        liEl[i].style.display = "none";
        }
    }
    const resultado = document.querySelector('#resultado');
    if (match === false) {
        resultado.style.visibility = 'visible';
      } else {
        resultado.style.visibility = 'hidden';
      }
}
