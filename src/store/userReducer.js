const defaultState = {
	users: [],
};

const ADD_MANY_USERS = "ADD_MANY_USERS";
const ADD_USER = "ADD_USER";
const REMOVE_USER = "REMOVE_USER";

export const userReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_MANY_USERS:
			return {
				...state,
				users: [...state.users, ...action.payload],
			};
		case ADD_USER:
			return { ...state, users: [...state.users, action.payload] };

		case REMOVE_USER:
			return {
				...setTimeout,
				users: state.users.filter(
					(user) => user.id !== action.payload.id
				),
			};

		default:
			return state;
	}
};

export const addManyUsersAction = (payload) => {
	return {
		type: ADD_MANY_USERS,
		payload: payload,
	};
};
export const addUserAction = (name) => {
	return {
		type: ADD_USER,
		payload: {
			name: name,
			id: Date.now(),
		},
	};
};

export const removeUserAction = (user) => {
	return {
		type: REMOVE_USER,
		payload: user,
	};
};
