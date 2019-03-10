let rerendeerEntireTree = () => {
    console.log('State change')
}

let state = {
    profilePage: {
        postData : [
            {id:1, message:'First Post', likesCount:15},
            {id:2, message:'This post is 2, not 1', likesCount:5},
        ],
        newPostText: 'Max? Hello!'
    },
    dialogsPage: {
        messages : [
            {id:1, message:'Hello!'},
            {id:2, message:'Yo!'},
            {id:3, message:'Fuck You!'},
        ],
        dialogs : [
            {id:1, name:'Igor'},
            {id:2, name:'Max'},
            {id:3, name:'Valera'},
            {id:4, name:'Kate'},
            {id:5, name:'Maxon'},
            {id:6, name:'Jane'},
            {id:7, name:'Kill'},
            {id:8, name:'San'},
            {id:9, name:'Vasia'},
            {id:10, name:'Gopnik'},
        ]
    },
    sidebar: {}
};

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.postData.push(newPost);
    rerendeerEntireTree(state);
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerendeerEntireTree(state);
};

export  default state;
