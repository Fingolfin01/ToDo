import { noteStorage } from "./Storage";

// Helper
export const $ = selector => document.querySelector(selector)

export const domElements = {
  addNoteInput: $("#add-note"),
  addNoteButton: $("#add-note-button"),
  noteContainer: $("#notes"),
  noteDiv: null
}

export const renderNotes = notes => {
  domElements.noteContainer.innerHTML = notes
    .map(
      (note,index) => {
      return `
        <div class="note col-lg-4" id=${index}>
          ${note}
        </div>
      `
    }
    
    )
    .join("")

    domElements.noteDiv = document.querySelectorAll(".note")
    targetNotes();
  }
const targetNotes = () => {
const noteDiv = document.querySelectorAll('.note');
if (noteDiv !== null)
noteDiv.forEach(oneDiv => {
  oneDiv.addEventListener("click", () => {
    //console.log(`Clicked a div ${oneDiv.id}`)
    const id = oneDiv.id;
    noteStorage.emit("removeItem", id)

  
})

})
}