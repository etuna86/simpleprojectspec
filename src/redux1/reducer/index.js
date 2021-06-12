



var initialState = {
    userName: '',
    accountAvatar:'',
};

export default function reducer1(state = initialState, action) {
    switch (action.type) {
        case 'UpdateUser':
            return Object.assign({}, state, { userName: action.payload.userName });
        case 'UpdateAvatar':
            return Object.assign({}, state, { accountAvatar: action.payload.accountAvatar });
        default:
            return state;
    }
}