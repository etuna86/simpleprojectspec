import { store } from '../../index.js';

export function UpdateUser(newUserName) {
    store.dispatch({
        type: 'UpdateUser',
        payload: {
            userName: newUserName
        }
    });
}


export function UpdateAvatar(newUsername) {
    store.dispatch({
        type: 'UpdateAvatar',
        payload: {
            accountAvatar: newUsername
        }
    });
}