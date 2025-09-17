# 📝 Projeto To-Do List  

Este é um projeto de uma aplicação de lista de tarefas (**To-Do List**) desenvolvida com foco em **componentização**, **design system** e uma **experiência de usuário fluida**.  
A aplicação permite gerenciar tarefas diárias com persistência de dados no navegador.  

---

## ✨ Funcionalidades  

- **Listagem de Tarefas:** Visualização clara de todas as tarefas.  
- **Contadores:** Exibição do número total de tarefas e de tarefas concluídas.  
- **Criação de Tarefas:** Adição de novas tarefas à lista.  
- **Marcar como Concluída:** Checkbox para marcar ou desmarcar uma tarefa como finalizada.  
- **Exclusão de Tarefas:** Funcionalidade para remover tarefas da lista.  
- **Feedback Visual:**  
  - *Skeleton Loading*: Exibe um esqueleto de interface enquanto as tarefas são carregadas.  
  - *Handling States*: Ícones de **spinner** são exibidos durante operações assíncronas (salvar/excluir), desabilitando a ação para evitar cliques duplicados.  
- **Persistência de Dados:** As tarefas são salvas no **localStorage**, garantindo que não sejam perdidas ao recarregar a página.  

---

## 🚀 Tecnologias Utilizadas  

A arquitetura do projeto é baseada em **componentes reutilizáveis** e **hooks customizados**, utilizando:  

- ⚛️ **React** – Biblioteca para construção da interface de usuário.  
- 📘 **TypeScript** – Superset do JavaScript que adiciona tipagem estática.  
- 🎨 **Tailwind CSS** – Framework utility-first para estilização rápida e consistente.  
- 🎛️ **Class Variance Authority (CVA)** – Sistema para variantes de estilo de forma organizada e escalável.  
- 🪝 **Hooks Customizados** –  
  - `useTasks` para gerenciar a lista de tarefas.  
  - `useTask` para controlar o estado individual (criação, atualização e exclusão).  
- ⚡ **Vite** – Build tool moderna e rápida.  
- 🖼️ **SVG as React Components** – Ícones em SVG importados diretamente como componentes.  

---

## 🏗️ Arquitetura de Componentes  

O projeto é estruturado com um conjunto de **componentes atômicos e reutilizáveis**, formando um **mini design system**:  

- `Button` e `ButtonIcon`  
- `Card`  
- `InputText` e `InputCheckbox`  
- `Badge`  
- `Skeleton`  
- `Text` e `Icon`  

Essa abordagem, combinada com o **CVA**, garante **consistência visual** e facilita a criação de novas interfaces.  

---

