# **<u>Validação de Formulário</u>** 

### Link do Deploy: https://alura-validacao-doguito.vercel.app

Formulário utilizado para prática de conhecimentos de ***JavaScript*** durante as aulas de ***Validação de Formulários*** do programa ***Desenvolve 2023*** do ***Grupo Boticário*** em parceria com a ***Alura***.

**Expressão Regular (Regex) para validação de Email no HTML** `^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ !@#$%^&*_=+-]).{8,12}$`

`^` Representa o inicio da verificação

`$` Representa o final da verificação

`()` Bloco de verificação 

`?=` Aceita, permitido

`?!` Rejeita, não permitido

`.` Não aceita espaço

`*` Necessário pelo menos 1 caractere do tipo informado

`[]` Parâmetros avaliados vão aqui dentro

`{}` Tamanho mínimo e máximo 

`(?=.*[a-z])` Não pode conter espaço, aceita de `a` até `z`, necessário ao menos 1

`(?=.*[A-Z])` Não pode conter espaço, aceita de `A` até `Z`, necessário ao menos 1

`(?=.*[0-9])` Não pode conter espaço, aceita de `0` até `9`, necessário ao menos 1

`(?!.*[ !@#$%^&*_=+-])` Rejeita todos os caracteres informado

`{8,12}` Aceita de `8` a `12` caracteres

