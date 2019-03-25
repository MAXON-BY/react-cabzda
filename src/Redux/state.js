import { createStore} from 'redux'

const store = createStore();

let store_s = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'First Post', likesCount: 15},
                {id: 2, message: 'This post is 2, not 1', likesCount: 5},
            ],
            newPostText: 'Max? Hello!'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hello!'},
                {id: 2, message: 'Yo!'},
                {id: 3, message: 'Fuck You!'},
            ],
            dialogs: [
                {id: 1, name: 'Igor'},
                {id: 2, name: 'Max'},
                {id: 3, name: 'Valera'},
                {id: 4, name: 'Kate'},
                {id: 5, name: 'Maxon'},
                {id: 6, name: 'Jane'},
                {id: 7, name: 'Kill'},
                {id: 8, name: 'San'},
                {id: 9, name: 'Vasia'},
                {id: 10, name: 'Gopnik'},
            ]
        },
        newsPage: {
            newss: [
                {id: 1, title: 'News #1', text: 'Text News for #1'},
                {id: 2, title: 'News #2', text: 'Text News for #2'},
                {id: 3, title: 'News #3', text: 'Text News for #3'},
                {id: 4, title: 'News #4', text: 'Text News for #4'}
            ]
        },
        sidebar: {
            friends: [
                {id: 1, friend: 'Alex', avaSrc: 'https://loremflickr.com/70/70?random=1'},
                {id: 2, friend: 'Lias', avaSrc: 'https://loremflickr.com/70/70?random=2'},
                {id: 3, friend: 'Lack', avaSrc: 'https://loremflickr.com/70/70?random=3'},
                {id: 4, friend: 'Mary', avaSrc: 'https://loremflickr.com/70/70?random=4'},
                {id: 5, friend: 'John', avaSrc: 'https://loremflickr.com/70/70?random=5'},
                {id: 6, friend: 'Kate', avaSrc: 'https://loremflickr.com/70/70?random=6'},
            ]
        },
    },
    getState() {
        return this._state
    },
    _rerendeerEntireTree() {
        console.log('State change')
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.postData.newPostText = '';
        this._rerendeerEntireTree(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._rerendeerEntireTree(this._state);
    },
    subscribe(observer) {
        this._rerendeerEntireTree = observer;
    },
};

window.store = store;

export default store;
