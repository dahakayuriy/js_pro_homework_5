"use strict";

const userNameInput = prompt("What is your name?");

if (userNameInput === null) {
  alert("Goodbye!");
} else {
  const trimName = userNameInput.trim();

  const validatedName = trimName ? trimName : "[noname]";

  alert(`Hello, ${validatedName}! How are you?`);
}
