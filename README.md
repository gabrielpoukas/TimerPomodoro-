# 🍅 Timer Pomodoro: O Mundo Foco e Produtividade

Este é um **Timer Pomodoro** interativo e totalmente responsivo, construído com HTML, CSS e JavaScript puro. O projeto implementa a técnica Pomodoro (25 minutos de foco, 5 minutos de pausa) e adiciona funcionalidades modernas como a alternância entre temas Claro e Escuro, demonstrando o domínio sobre gerenciamento de estado e manipulação do DOM.



---

## ✨ Funcionalidades

* **Contagem Regressiva:** Timer regressivo preciso em tempo real para os períodos de Foco (25:00) e Pausa (05:00).
* **Gerenciamento de Estado:** Alterna automaticamente entre os modos **FOCO** e **PAUSA** ao término de cada ciclo.
* **Botões de Controle:** Funcionalidade completa de **Iniciar**, **Parar/Continuar** e **Resetar**.
* **Alternância de Tema (Modo Dia/Noite):** Permite ao usuário alternar instantaneamente entre o **Tema Escuro (Noite)**, que utiliza cores vibrantes de Foco/Pausa (vermelho/azul), e o **Tema Claro (Dia)**, que utiliza um fundo claro e limpo.
* **Design Responsivo:** Layout adaptável para ser visualizado em qualquer dispositivo (desktop, tablet ou mobile).
* **Interface Intuitiva:** Mudança visual no tema da tela para indicar o modo atual (Foco ou Pausa).

---

## 💻 Tecnologias Utilizadas

| Tecnologia | Finalidade |
| :--- | :--- |
| **HTML5** | Estrutura semântica da aplicação e elementos de interface. |
| **CSS3** | Estilização, responsividade, animações de transição e gerenciamento das classes de estado (`pausa-mode`, `light-theme`). |
| **JavaScript (ES6+)** | Lógica central do timer (`setInterval`), gerenciamento das variáveis de tempo e estado, e manipulação dinâmica do DOM para alternar modos e temas. |

---


---

## 🧠 Lógica Chave do JavaScript

O projeto foi construído em torno de duas lógicas de estado principais:

1.  **Controle de Tempo (`setInterval`):** A função `decrementarTempo()` é chamada a cada 1000ms. A função `atualizarDisplay()` usa `Math.floor()` e `padStart()` para formatar o tempo em `MM:SS`.
2.  **Alternância de Modo:** A função `alternarModo()` verifica se a classe `pausa-mode` está presente no `<body>` para decidir o próximo estado, trocando a duração (`DURACAO_FOCO` ou `DURACAO_PAUSA`) e aplicando/removendo a classe CSS.
3.  **Alternância de Tema:** A função `toggleTheme()` usa o método `classList.toggle('light-theme')` para aplicar o tema Claro, demonstrando o controle eficiente sobre as regras de sobrescrita do CSS.

---
