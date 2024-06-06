# Test Rover

## Descrição do Projeto

Este é um projeto chamado Test Rover, desenvolvido para demonstrar habilidades de desenvolvimento back-end para a empresa Foxbit. O objetivo é resolver o problema de um esquadrão de rovers que será pousado pela NASA em Marte, permitindo que se movimentem pelo terreno e obtenham uma visão completa para enviar à Terra.

## Entrada de Dados

Os dados são recebidos por meio de um arquivo, com as seguintes linhas:

### Exemplo de Entrada

```
5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM
```

### Descrição da Entrada

1. **Coordenadas superiores direitas do plateau**: `5 5`
2. **Posição inicial do rover** em coordenadas (x, y) e sua direção (N, E, S, W): `1 2 N`
3. **Instruções de movimentação do rover**: `LMLMLMLMM`

Observação: Cada rover possui duas linhas.

### Instruções de Movimentação

- `L`: Movimenta o rover para a esquerda (left) em um ângulo de 90°, ou seja, gira no sentido anti-horário.
- `R`: Movimenta o rover para a direita (right) em um ângulo de 90°, ou seja, gira no sentido horário.
- `M`: Avança um ponto na direção atual.


## Saída de dados

### Exemplo de Saída

A saída é representada pelos pontos x, y e a direção final de cada rover

```
1 3 N
5 1 E
```

## Execução

Para executar o projeto, siga os seguintes comandos:

### Instalação das Dependências

Realize a instalação das bibliotecas necessárias:

```sh
npm install
```

### Execução do Projeto

Execute o projeto:

```sh
npm start
```

### Execução dos Testes Automatizados

Execute os testes automatizados:

```sh
npm test
```