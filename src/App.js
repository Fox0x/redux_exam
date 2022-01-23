import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addUserAction, removeUserAction } from "./store/userReducer";
import { fetchUsers } from "./asyncActions/users";

function App() {
	const dispatch = useDispatch();
	const cash = useSelector((state) => state.cash.cash);
	const users = useSelector((state) => state.users.users);

	const addCash = (amount) => {
		dispatch({
			type: "ADD_CASH",
			payload: amount,
		});
	};

	const getCash = (amount) => {
		dispatch({
			type: "GET_CASH",
			payload: amount,
		});
	};

	
	// Лучше делать вот так
	const addUser = (name) => {
		dispatch(addUserAction(name))
	};

	const removeUser = (user) => {
		dispatch(removeUserAction(user));
	};

	return (
		<div className="App">
			<h1>Cash: {cash}</h1>
			<button onClick={() => addCash(Number(prompt()))}>
				Пополнить счёт
			</button>
			<button onClick={() => getCash(Number(prompt()))}>
				Снять со счёта
			</button>
			<hr />
			<hr />

			<button onClick={() => addUser(prompt())}>
				Добавить пользователя
			</button>
			<button onClick={() => dispatch(fetchUsers())}>
			Получить клиентов из БД
			</button>
			<h1>Users:</h1>
			{users.length > 0 ? (
				<div>
					{users.map((user) => (
						<div
							style={{
								border: "2px solid #971cb6",
								cursor: "pointer",
							}}
							onClick={() => removeUser(user)}>
							{user.name}
						</div>
					))}
				</div>
			) : (
				<h1>No users</h1>
			)}
		</div>
	);
}

export default App;
