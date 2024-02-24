import React from "react";

function ToDoPlusCancel() {
    const [todos, setTodos] = useState([]);
	const [todoInput, setTodoInput] = useState("");

    const inputStyle = {
        border: 'none',  // Remove the border
        outline: 'none',  // Remove the default focus outline
        width: "100",
    };

    const handleInputChange = (e) => {
        setTodoInput(e.target.value);
    };

    

    };

export const ContactCard = () => {
	return (
		<li className="list-group-item">
			<div className="row w-100">
				<div className="col-12 col-sm-6 col-md-3 px-0">
					<img
						src="http://demos.themes.guide/bodeo/assets/images/users/m101.jpg"
						alt="Mike Anamendolla"
						className="rounded-circle mx-auto d-block img-fluid"
					/>
				</div>
				<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
					<div className=" float-right">
						<button
							className="btn"
						>
							<i className="fas fa-pencil-alt mr-3"></i>
						</button>
						<button
							className="btn"
                        >
							<i className="fas fa-trash-alt"></i>
						</button>
					</div>
					<label className="name lead">Mike Anamendolla</label>
					<br />
					<i className="fas fa-map-marker-alt text-muted mr-3"></i>
					<span className="text-muted">5842 Hillcrest Rd</span>
					<br />
					<span
						className="fa fa-phone fa-fw text-muted mr-3"
						data-toggle="tooltip"
						title=""
						data-original-title="(870) 288-4149"></span>
					<span className="text-muted small">(870) 288-4149</span>
					<br />
					<span
						className="fa fa-envelope fa-fw text-muted mr-3"
						data-toggle="tooltip"
						data-original-title=""
						title=""></span>
					<span className="text-muted small text-truncate">
						mike.ana@example.com
					</span>
				</div>
			</div>
		</li>
	);
};

////////////////////////////////////////////////////////////////////////////////////////////////

			<form 
                onSubmit={(ev) => {
                    ev.preventDefault();
                    if (todoInput.length > 0) {
                        setTodos([
                            {
                                label: todoInput,
                                is_done: false,
                            },
                            ...todos,
                        ]);
                        setTodoInput("");
                        addTaskToApi()
                    }
                }} 
                >
                    <label htmlFor="toDoInput"></label>
                    <input 
                        className='ms-5 p-1 '
                        id="toDoInput"
                        type="text" 
                        placeholder="What needs to be done? " 
                        required 
                        style={inputStyle}
                        value={todoInput}
                        onChange={handleInputChange}
                    >
                    </input>
                    {todos.map((item, idx) => (
                        <TodoItem 
                            key={idx}
                            id={item.id}
                            label={item.label}
                            is_done={item.is_done}
                            toggle_todo={() => 
                                setTodos(
                                    todos.toSpliced(idx, 1, {
                                        label: item.label,
                                        is_done: !item.is_done,
                                    })
                                )
                            }
                            delete_todo={() => deleteTaskFromApi(item.id)}
                            // delete_todo={() => 
                            //     setTodos(
                            //         todos.toSpliced(idx, 1
                            //         )
                            //     )
                            // }
                        />
                    ))}
				</form>