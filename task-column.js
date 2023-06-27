function moveAndChangeClasses(parentId) {
  try {
    // Get the parent element and its children
    const parent = document.getElementById(parentId);

    // Create flex row
    const flexRowElement = parent.firstChild;
    flexRowElement.classList.add('flex', 'flex-row');

    // Create new container for tasks
    const taskElement = document.createElement('div');
    taskElement.id = 'task-container';
    taskElement.style.width = "33%";

    // Move default queries
    const queriesElement = flexRowElement.children[0].children[0].children[1];
    queriesElement.parentElement.removeChild(queriesElement);
    taskElement.appendChild(queriesElement);

    // Move scheduled/deadline
    const deadlineElement = flexRowElement.children[0].children[0].children[1];
    deadlineElement.parentElement.removeChild(deadlineElement);
    taskElement.appendChild(deadlineElement);

    flexRowElement.appendChild(taskElement);
  } catch {
    console.error('Cannot move element or change classes');
  }
}

// Use the function
moveAndChangeClasses('main-content-container');
