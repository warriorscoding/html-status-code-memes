const selectBox = document.querySelector("#selectBox");
const result = document.querySelector("#result");
const url = 'HTTP_JSON_DATA_URL';

getCodes();

function getCodes() {
  fetch(url)
    .then(d => d.json())
    .then(renderDom)
    .catch(console.error)
}

function renderDom(codesArr) {
  codesArr.forEach(ob => {
    const option = new Option(ob.code + ' - ' + ob.name, ob.code);
    selectBox.add(option)
  })

  selectBox.addEventListener('change', changeImage)
}

function changeImage() {
  result.src = 'https://http.cat/' + this.value;
  result.alt = "this.val";
}



