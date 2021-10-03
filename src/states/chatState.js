import { entity } from "simpler-state";

export const usersState = entity([])
export const selectedUserState = entity({})
export const chatState = entity([])

export const me = entity({ id: 6, userName: "omer"})

export const getChat = () => {
    let user = selectedUserState.get()
    chatState.set([
        {id: 1, author: { id: 6, userName: "omer"}, message: `merhaba ${user.userName}`},
        {id: 2, author: user, message: "lorem ipsum doler sit"},
        {id: 3, author: user, message: "lorem ipsum asdasd sit"},
        {id: 4, author: { id: 6, userName: "omer"}, message: "lorem ipsum doler sit"},
        {id: 5, author: user, message: "lorem asdasd doler sit"}
    ])
}

export const getUsers = () => {
    usersState.set([
        {id:1 ,userName: "ahmet"},
        {id:2 ,userName: "mehmet"},
        {id:3 ,userName: "ali"},
        {id:4 ,userName: "veli"},
        {id:5 ,userName: "ahmet_22"}
])
}

export const selectUser = (user)=>{
    selectedUserState.set(user)
    console.log(user);
}

