# 📝 To-Do List Project  

This is a **To-Do List** application project developed with a focus on **componentization**, **design system**, and a **smooth user experience**.  
The app allows you to manage daily tasks with data persistence in the browser.  

---

## ✨ Features  

- **Task Listing:** Clear visualization of all tasks.  
- **Counters:** Display of total tasks and completed tasks.  
- **Task Creation:** Add new tasks to the list.  
- **Mark as Completed:** Checkbox to mark or unmark a task as finished.  
- **Task Deletion:** Functionality to remove tasks from the list.  
- **Visual Feedback:**  
  - *Skeleton Loading*: Shows a skeleton UI while tasks are loading.  
  - *Handling States*: **Spinner** icons are displayed during async operations (save/delete), disabling the action to prevent duplicate clicks.  
- **Data Persistence:** Tasks are saved in **localStorage**, ensuring they are not lost when the page reloads.  

---

## 🚀 Technologies Used  

The project architecture is based on **reusable components** and **custom hooks**, using:  

- ⚛️ **React** – Library for building user interfaces.  
- 📘 **TypeScript** – JavaScript superset that adds static typing.  
- 🎨 **Tailwind CSS** – Utility-first framework for fast and consistent styling.  
- 🎛️ **Class Variance Authority (CVA)** – System for organized and scalable style variants.  
- 🪝 **Custom Hooks** –  
  - `useTasks` to manage the task list.  
  - `useTask` to handle individual state (create, update, and delete).  
- ⚡ **Vite** – Modern and fast build tool.  
- 🖼️ **SVG as React Components** – SVG icons imported directly as components.  

---

## 🏗️ Component Architecture  

The project is structured with a set of **atomic and reusable components**, forming a **mini design system**:  

- `Button` and `ButtonIcon`  
- `Card`  
- `InputText` and `InputCheckbox`  
- `Badge`  
- `Skeleton`  
- `Text` and `Icon`  

This approach, combined with **CVA**, ensures **visual consistency** and makes it easier to build new interfaces.  

---

### ✍️ Author
Developed by Bruno Oliveira 🧠

## 📝 License
This project is under the MIT license.
