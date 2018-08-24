let initialState = {
    username: "",
    profile_pic: "",

    userId: 0
};

// action types
const UPDATE_USERNAME = "UPDATE_USERNAME";
const UPDATE_PROFILE_PIC = "UPDATE_PROFILE_PIC";

const UPDATE_USER_ID = "UPDATE_USER_ID";

export default function reducer(state=initialState,   action) {
    switch (action.type) {
        case UPDATE_USERNAME:
            return Object.assign({}, state, { username: action.payload });
        case UPDATE_PROFILE_PIC:
            return Object.assign({}, state, { profile_pic: action.payload });

    default:
        return state;
    }
}

// actions
export function updateUsername(username) {
    return {
        type: UPDATE_USERNAME,
        payload: username
    };
}

export function updateProfilePic(profile_pic) {
    return {
        type: UPDATE_PROFILE_PIC,
        payload: profile_pic
    };
}

export function updateUserId(userId) {
    return {
    type: UPDATE_USER_ID,
        payload: userId
    };
}
