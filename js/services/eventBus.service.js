
//  2 parmas event name and a listener its a func
function on(eventName, listener) {
    //              a fun that gets the data we send
    const callListener = ({ detail }) => {
        //run the func we got with the data
        listener(detail);
    };
    //put on the window an eventListener to our custom event we created 
    window.addEventListener(eventName, callListener);// when the event trigger run our func with the data we pass
    //return a func soo we could remove the listener
    return () => {
        window.removeEventListener(eventName, callListener);
    };
}

//2 params -> eventName and data that we want to pass
function emit(eventName, data) {
    //emit a custom event with the name and the data 
    window.dispatchEvent(new CustomEvent(eventName, { detail: data }));
}




// we got 2 funcs on and emit
export const eventBus = { on, emit };

// USER-MSG EVENT //
export function showUserMsg(msg) {
    emit('show-msg', msg)
}

// NOTE EVENT //

export function eventAddTodo(newNote) {
    emit('eventAddTodo', newNote)
}

export function eventAddNote(newNote) {
    emit('eventAddNote', newNote)
}

export function eventDeleteNote(noteId) {
    emit('eventDeleteNote', noteId)
}

export function eventPinNote(noteId) {
    emit('eventPinNote', noteId)
}

export function eventUpdateNote(note) {
    emit('eventUpdateNote', note)
}

export function eventSendNoteToMail(note) {
    emit('eventSendNoteToMail', note)
}



// EMAIL EVENTS //
//Calling: mailExtend,
export function deleteMail(mailId) {
    emit('deletedMail', mailId)
}

export function updateIsRead(mailId) {
    emit('updateIsRead', mailId)
}
//Save new mail
export function newMail() {
    emit('newMail')
}

//Chenge filter
export function addStar(emailId) {
    emit('addStar', emailId)
}
export function updateUnRead(emailId) {
    emit('updateUnRead', emailId)
}

export function closeExtendForUnread() {
    emit('closeExtendForUnread')
}
export function respondMail(emailId) {
    emit('respondMail', emailId)
}

export function eventSendMailToNote(mail) {
    emit('eventSendMailToNote', mail)
}

export function replayMail(emailId) {
    emit('replayMail', emailId)
}


export function eventFillMailReplay(email){
    emit('eventFillMailReplay', email)

}
