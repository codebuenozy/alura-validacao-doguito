export function valida(input) {
    const tipoDeInput = input.dataset.tipo

    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }

    if(input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalido")
        input.parentElement.querySelector(".input-mensagem-erro").innerHTML = ""
    } else {
        input.parentElement.classList.add("input-container--invalido")
        input.parentElement.querySelector(".input-mensagem-erro").innerHTML = mostraMensagemDeErro(tipoDeInput, input)
    }
}

const tiposDeErro = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError"
]

const mensagensDeErro = {
    nome: {
        valueMissing: "O campo nome não pode estar vazio."
    },

    email: {
        valueMissing: "O campo email não pode estar vazio.",
        typeMismatch: "O email digitado não é válido."
    },

    senha: {
        valueMissing: "O campo senha não pode estar vazio.",
        patternMismatch: "A senha deve conter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula, um número e não deve conter símbolos."
    },

    dataNascimento: {
        valueMissing: "O campo data de nascimento não pode estar vazio.",
        customError: "Você deve ser maior que 18 anos para se cadastrar."
    },

    cpf: {
        valueMissing: "O campo CPF não pode estar vazio.",
        typeMismatch: "O CPF digitado não é válido."
    },

    cep: {
        valueMissing: "O campo CEP não pode estar vazio.",
        typeMismatch: "O CEP digitado não é válido."
    },

    logradouro: {
        valueMissing: "O campo nome da rua não pode estar vazio.",
    },

    cidade: {
        valueMissing: "O campo cidade não pode estar vazio.",
    },

    estado: {
        valueMissing: "O campo estado não pode estar vazio.",
    }
}

const validadores = {
    dataNascimento:input => validaDataNascimento(input)
}

function mostraMensagemDeErro(tipoDeInput, input) {
    let mensagem = ""
    tiposDeErro.forEach(erro => {
        if(input.validity[erro]) {
            mensagem = mensagensDeErro[tipoDeInput][erro]
        }
    })

    return mensagem
}

function validaDataNascimento(input) {
    const dataRecebida = new Date(input.value)
    let mensagem = ''

    if(!maiorQue18(dataRecebida)) {
        mensagem = 'Você deve ser maior que 18 anos para se cadastrar.'
    }

    input.setCustomValidity(mensagem)
}

function maiorQue18(data) {
    const dataAtual = new Date()
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

    return dataMais18 <= dataAtual
}
