import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [tarea, setTarea] = useState("")
	const [lista, setLista] = useState(["Make the bed", "Wash my hands", "Eat", "Walk the dog"])

	const handleInput = (e) => {
		let texto = e.target.value
		if (e.keyCode == 13) {
			setTarea(texto)
			//Una primera aproximación para agregar a la lista es usando una variable auxiliar
			//let tempArr = lista.slice() //copia de arreglo por valor
			//tempArr.push(texto)
			//setLista(tempArr)

			//Una segunda aproximación es usando el operador spread ...
			setLista([...lista, texto])
		}
	}

	const deleteTask = (index) => {
		let tempArr = lista.slice() //copiar el estado lista en una variable auxiliar
		tempArr = tempArr.filter((item, index2) => { return index2 != index })
		setLista(tempArr)
	}

	return (
		<>
			<div className="container">
				<p className="title-list d-flex justify-content-center text-danger text-opacity-25">Todos</p>
				<ul className="list-group">
					<li className="list-group-item">
						<input className="form-control border-0" placeholder="Whats needs to be done?"
							onKeyUp={
								(e) => { handleInput(e) }
							} />
					</li>
					{
						lista && lista.length > 0 ?
							<>{
								lista.map((item, index) => {
									return <li className="list-group-item" key={index}>
										{item}
										<button className=" button btn btn-outline-light border-0" type="button" onClick={e => { deleteTask(index) }}>
											❌
										</button>
									</li>
								})
							}</>
							: 
							<li className="list-group-item">The list is empty</li> 
					}
					<li className="list-group-item text-secondary">
						{lista && lista.length > 0 ? <p className="footer"> {lista.length} item left </p> : <p>You have no tasks to do</p>}
					</li>

				</ul>
			</div>
		</>
	);
};

export default Home;















