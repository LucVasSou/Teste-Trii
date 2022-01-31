const nome = document.getElementById('name')
const email = document.getElementById('email')
const orcamento = document.getElementById('tipoOrcamento')
const texto = document.getElementById('textArea')
const tel = document.getElementById('phone')

tel.addEventListener('keypress', e => mascaraTelefone(e.target.value)) // Dispara quando digitado no campo
tel.addEventListener('change', e => mascaraTelefone(e.target.value)) // Dispara quando autocompletado o campo

const mascaraTelefone = valor => {
  valor = valor.replace(/\D/g, '')
  valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2')
  valor = valor.replace(/(\d)(\d{4})$/, '$1-$2')
  tel.value = valor // Insere o(s) valor(es) no campo
}

const button = document.getElementById('button')

function verifyTel() {
  if (tel.value == '') {
    tel.parentNode.children[1].classList.remove('sobeTexto')
    tel.classList.add('errorInput')
  } else if (tel.value.length !== 15) {
    tel.parentNode.children[1].classList.add('sobeTexto')
    tel.classList.add('errorInput')
  } else {
    tel.classList.remove('errorInput')
  }
}

function verifyEmail() {
  if (email.value == '') {
    email.parentNode.children[1].classList.remove('sobeTexto')
    email.classList.add('errorInput')
  } else if (
    email.value.indexOf('@') == -1 ||
    email.value.indexOf('.') == -1 ||
    email.value.indexOf('.') - email.value.indexOf('@') == 1
  ) {
    email.parentNode.children[1].classList.add('sobeTexto')
    email.classList.add('errorInput')
  } else {
    email.classList.remove('errorInput')
  }
}

function verifyNome() {
  if (nome.value == '') {
    nome.classList.add('errorInput')
  } else {
    nome.classList.remove('errorInput')
  }
}

function verifyOrc() {
  if (orcamento.value == '') {
    orcamento.classList.add('errorInput')
  } else {
    orcamento.classList.remove('errorInput')
  }
}

function verifyMsg() {
  if (texto.value == '') {
    texto.classList.add('errorInput')
  } else {
    texto.classList.remove('errorInput')
  }
}

button.addEventListener('click', event => {
  event.preventDefault()

  verifyNome()
  verifyEmail()
  verifyTel()
  verifyOrc()
  verifyMsg()
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
