const defaultState = {
    isLoggedIn: false,
    username: undefined,
    displayName: undefined,
    image: undefined,
    password: undefined
}

// state boş olursa defaultState gönder.
const authReducer = (state = { ...defaultState }, action) => {
    if (action.type === 'logout-success') {
        return defaultState;
    }
    return state;
};

export default authReducer;