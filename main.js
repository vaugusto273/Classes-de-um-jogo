/*
# 3️⃣ Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- ✅ Variáveis
- ✅ Operadores
- Laços de repetição
- ✅ Estruturas de decisões
- ✅ Funções
- ✅ Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
ex: mago atacou usando magia
guerreiro atacou usando espada
*/
class Hero{
    constructor(herostats){
        this.name = herostats.name;
        this.age = herostats.age;
        this.type = herostats.type;
    }
    Atacar(){
        switch (this.type){
            case "guerreiro":
                console.log(`o ${this.type} atacou usando ${attacktype(this.type)}`)
                break
            case "mago":
                console.log(`o ${this.type} atacou usando ${attacktype(this.type)}`)
                break
            case "monge":
                console.log(`o ${this.type} atacou usando ${attacktype(this.type)}`)
                break
            case "ninja":
                console.log(`o ${this.type} atacou usando ${attacktype(this.type)}`)
                break
            default:
                console.log("Error: Unknown hero class, insert another")
        }
    }
}
function attacktype(type){
    switch (type){
        case "guerreiro":
            return Attacktype = "espada"
        case "mago":
            return Attacktype = "magia"
        case "monge":
            return Attacktype = "artes marciais"
        case "ninja":
            return Attacktype = "shuriken"
        default:
            return Attacktype = "error"
    }
}

let herostats = {
    name: "Vaugusto",
    age: 21,
    type: "mago"
}
let myhero = new Hero(herostats);
myhero.Atacar();

