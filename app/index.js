const root = document.querySelector(".app");
const inputTitle = document.querySelector(".input-title");
const inputText = document.querySelector(".input-text");
const btnCreateNote = document.querySelector(".btn-create");


function createNote(root) {
    const noteDiv = document.createElement("div");
    noteDiv.classList.add('note');
    const titleNote = document.createElement("p");
    const textNote = document.createElement("p");
    titleNote.textContent = inputTitle.value;
    textNote.textContent = inputText.value;
    noteDiv.appendChild(titleNote);
    noteDiv.appendChild(textNote);
    const btnDeleteNote = document.createElement('button');
    btnDeleteNote.textContent = 'Del';
    btnDeleteNote.addEventListener('click', () => deleteNote(root, noteDiv));
    noteDiv.appendChild(btnDeleteNote);
    const btnEditNote = document.createElement("button");
    btnEditNote.textContent = 'Edit';

    noteDiv.appendChild(btnEditNote);
    root.appendChild(noteDiv);
}

btnCreateNote.addEventListener("click", () => createNote(root));


function deleteNote(root, element) {
    root.removeChild(element);
}

function editNote() {
    
}
