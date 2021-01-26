# Dicas de melhorias e ajustes

## Organização

- cade o package.json? se vc for instalar alguma lib, esse arquivo tem que ir junto pro git ou pros avaliadores
- não sei se pediram, mas é sempre bom ter um `ReadMe.md` que explica seu projeto ou código de forma resumida, ou alguma solução/abordagem diferente que usou e tal. Não precisa dar muitos detalhes, mas tb nao precisa estar em branco. 
  - EX.: Optei por usar as libs fetch, XYZ e ABC e e resolvi o problema de tal forma, que pode ser visto acessando os arquivos ContaAzul.js e helpers.js 😄 (usar emojis aqui é bem vindo ✅)
- isolar os valores de configurações e fixos (constantes) em um arquivo/pasta separado
  - ex.: `config2/src/config/index.js` e lá dentro desse arquivo vc coloca e exporta os valores de TOKEN e decryptNumber, por exemplo.
- SEMPRE usar const se vc não precisar editar o valor daquela variável, e sempre dar preferencia ao LET ao invés do VAR
- tente fazer com que cada função tenha apenas 1 responsabilidade, e da uma lida nesse guia de boas praticas aqui: https://medium.com/@rafaelcruz_48213/desenvolva-um-c%C3%B3digo-melhor-com-object-calisthenics-d5364767a9ba
- vc pode isolar as funções em arquivos e pastas separados tb pra ficar mais organizado.
  - ex: `config2/src/helpers/index.js` poderia ter as funções que salva um json num arquivo local, e só passa os parametros, e poderia ter a função `sha1` tambem
