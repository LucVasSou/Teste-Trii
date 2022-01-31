const button = document.getElementById('button')

button.addEventListener('click', event => {
  event.preventDefault()

  const nome = document.getElementById('name')
  const email = document.getElementById('email')
  const telefone = document.getElementById('phone')
  const orcamento = document.getElementById('tipoOrcamento')
  const texto = document.getElementById('textArea')

  if (nome.value == '') {
    nome.classList.add('errorInput')
  } else {
    nome.classList.remove('errorInput')
  }

  if (
    email.value == '' ||
    email.value.indexOf('@') == -1 ||
    email.value.indexOf('.') == -1 ||
    email.value.indexOf('.') - email.value.indexOf('@') == 1
  ) {
    email.classList.add('errorInput')
  } else {
    email.classList.remove('errorInput')
  }

  if (telefone.value == '' || telefone.value.length !== 11) {
    telefone.classList.add('errorInput')
  } else {
    telefone.classList.remove('errorInput')
  }

  if (orcamento.value == '') {
    orcamento.classList.add('errorInput')
  } else {
    orcamento.classList.remove('errorInput')
  }

  if (texto.value == '') {
    texto.classList.add('errorInput')
  } else {
    texto.classList.remove('errorInput')
  }

  // alert de mensagem de erro

  if (
    nome.classList.contains('errorInput') ||
    email.classList.contains('errorInput') ||
    email.value.indexOf('@') == -1 ||
    email.value.indexOf('.') == -1 ||
    email.value.indexOf('.') - email.value.indexOf('@') == 1 ||
    orcamento.classList.contains('errorInput') ||
    texto.classList.contains('errorInput') ||
    telefone.classList.contains('errorInput') ||
    telefone.value.length !== 11
  ) {
    alert('Por favor, preencha os campos corretamente e os campos vazios!')
  } else {
    const nome = document.getElementById('name').value
    const email = document.getElementById('email').value
    const telefone = document.getElementById('phone').value
    const orcamento = document.getElementById('tipoOrcamento').value
    const texto = document.getElementById('textArea').value

    let valores = {
      nome,
      email,
      telefone,
      orcamento,
      texto
    }

    let convertData = JSON.stringify(valores)

    localStorage.setItem('lead', convertData)

    alert('Formulário salvo com sucesso!')
  }
})

//função limitando o campo de telefone
function isNumber(evt) {
  var ch = String.fromCharCode(evt.which)

  if (!/[0-9]/.test(ch)) {
    evt.preventDefault()
  }
}
//função limitando o campo de nome
function isChar(evt) {
  var ch = String.fromCharCode(evt.which)

  if (/[0-9]/.test(ch)) {
    evt.preventDefault()
  }
}
