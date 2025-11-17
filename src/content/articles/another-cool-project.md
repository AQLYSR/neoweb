---
title: "CLI Task Manager"
description: "A simple command-line interface for managing daily tasks."
publishDate: 2023-12-01
type: "project"
---

## Managing Tasks from the Terminal

I've always been a fan of the command line for its speed and efficiency. To streamline my own workflow, I decided to build a simple task manager that I could use directly from my terminal, without having to switch contexts to a GUI application.

### Core Functionality

The CLI tool is built with Node.js and uses a simple JSON file to store the tasks. It supports the following commands:

-   `tasks add "My new task"`: Adds a new task to the list.
-   `tasks list`: Lists all pending tasks with their corresponding IDs.
-   `tasks done <id>`: Marks a task as complete.
-   `tasks clear`: Removes all completed tasks from the list.

### Challenges and Learning

The main challenge was parsing the command-line arguments and flags correctly. I used the `yargs` library to handle this, which made the process much smoother. It was a great exercise in building a practical tool that I can use every day.

### Future Enhancements

I plan to add features like setting due dates, prioritizing tasks, and maybe even syncing the JSON file with a cloud service. It's a small project, but it has a lot of potential for growth.