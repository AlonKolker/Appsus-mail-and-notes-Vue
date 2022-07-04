import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/storage.service.js'
import { asyncStorageService } from '../../../services/async-storage.service.js'

const NOTE_KEY = 'notes_db'
const notesDb = storageService.load(NOTE_KEY) || _createDefaultNote()


export const noteService = {
    getNotes,
    addNote,
    remove,
    get,
    save,
}

function getNotes() {
    return Promise.resolve(notesDb)
}

function addNote(note) {
    const newNote = {
        type: note.type,
        noteType: note.noteType,
        info: {
            img: note.info.img || '',
            title: note.info.title || '',
            video: note.info.video || '',
            txt: note.info.txt || '',
            todos: note.info.todos || null,
        },
        style: {
            backgroundColor: utilService.getRandomColor()
        }
    }
    return save(newNote)
}

function query() {
    return asyncStorageService.query(NOTE_KEY)
}

function remove(noteId) {
    return asyncStorageService.remove(NOTE_KEY, noteId)
}

function get(noteId) {
    return asyncStorageService.get(NOTE_KEY, noteId)
}

function save(note) {
    if (note.id) return asyncStorageService.put(NOTE_KEY, note)
    else return asyncStorageService.post(NOTE_KEY, note)
}


function _createDefaultNote() {
    const notes = [
        {
            id: utilService.makeId(),
            type: 'noteText',
            noteType: 'txt',
            isPinned: false,
            info: {
                txt: 'Alen the King'
            },
            style: {
                backgroundColor: '#ffff88'
            }
        },
        {
            id: utilService.makeId(),
            type: 'noteImg',
            noteType: 'img',
            isPinned: false,
            info: {
                img: 'https://www.gardeningknowhow.com/wp-content/uploads/2019/08/flower-color.jpg',
                title: 'Flowers'
            },
            style: {
                backgroundColor: '#fdfdfd'
            }
        },
        {
            id: utilService.makeId(),
            type: 'noteTodos',
            noteType: 'todos',
            isPinned: false,
            info: {
                title: 'Market List:',
                todos: [
                    { txt: 'Buy Bisli', isComplete: true, doneAt: null },
                    { txt: 'Buy KornFlex', isComplete: false, doneAt: null },
                    { txt: 'Buy Bamba', isComplete: false, doneAt: null }
                ]
            },
            style: {
                backgroundColor: '#aaffee'
            }
        },
        {
            id: utilService.makeId(),
            type: 'noteVideo',
            noteType: 'video',
            isPinned: false,
            info: {
                video: '0qQZqT3GHQE',
            },
            style: {
                backgroundColor: '#fdfdfd'
            }

        },
        {
            id: utilService.makeId(),
            type: 'noteText',
            noteType: 'txt',
            isPinned: false,
            info: {
                txt: 'password: Kings___@2'
            },
            style: {
                backgroundColor: '#ccff99'
            }
        },

        {
            id: utilService.makeId(),
            type: 'noteImg',
            noteType: 'img',
            isPinned: false,
            info: {
                img: 'https://c.tenor.com/_VZMHoUXhI4AAAAC/sasuke-thinking.gif',
            },
            style: {
                backgroundColor: '#ffcc88'
            }
        },
        {
            id: utilService.makeId(),
            type: 'noteImg',
            noteType: 'img',
            isPinned: false,
            info: {
                img: 'https://cdn2.beachdeals.com/blog/storage/app/media/www_beachdeals_com/wp-blog/2018/02/BB-5-hip-small-towns-in-Hawaii-EDITONLY-Hawi-IHVB_0303.tif-2.jpg',
                title: 'Hawaii'
            },
            style: {
                backgroundColor: '#ddbbff'
            }
        },
        {
            id: utilService.makeId(),
            type: 'noteTodos',
            noteType: 'todos',
            isPinned: false,
            info: {
                title: 'Sprint:',
                todos: [
                    { txt: 'Finish the Sprint!!!', isComplete: true, doneAt: null },
                    { txt: 'Help Alon with Mail', isComplete: true, doneAt: null },
                    { txt: 'Make layout', isComplete: false, doneAt: null }
                ]
            },
            style: {
                backgroundColor: '#ffcb88'
            }
        },
        {
            id: utilService.makeId(),
            type: 'noteImg',
            noteType: 'img',
            isPinned: true,
            info: {
                img: 'https://media2.giphy.com/media/SggILpMXO7Xt6/giphy.gif?cid=ecf05e47pbc4atopra8j3459nczfdk38t667ho3ked30smdq&rid=giphy.gif&ct=g',
            },
            style: {
                backgroundColor: '#ff8888'
            }
        },
        {
            id: utilService.makeId(),
            type: 'noteText',
            noteType: 'txt',
            isPinned: false,
            info: {
                txt: 'Yuval Wedding 1.9.22'
            },
            style: {
                backgroundColor: '#ddbbff'
            }
        },
        {
            id: utilService.makeId(),
            type: 'noteVideo',
            noteType: 'video',
            isPinned: false,
            info: {
                video: 'q9Fj3Ss1Uyo',
            },
            style: {
                backgroundColor: '#ffff88'
            }
        },
    ]

    storageService.store(NOTE_KEY, notes)
    return notes
}