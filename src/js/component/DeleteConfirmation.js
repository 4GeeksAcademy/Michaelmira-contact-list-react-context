import React from "react";

export const DeleteConfirmation = ({contact,actions}) => {
    return (
        <div class="modal fade" id={"deleteModal"+contact.id } tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Delete Contact</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Are you sure you want to permenantly delete <strong>{contact.full_name}</strong> from your contact list? This step is irreversible.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary" onClick= {() => actions.deleteContact(contact.id)}>Delete</button>
      </div>
    </div>
  </div>)
</div>
    )
}