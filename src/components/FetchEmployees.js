import { useState, useEffect } from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';

function FetchEmployees() {
	const [employees, setEmployees] = useState([]);

	useEffect(() => {
		// fetch data from api
		axios
			.get('http://dummy.restapiexample.com/api/v1/employees')
			.then(function (response) {
				setEmployees(response.data.data);
			})
			.catch((error) => console.log(error));
	}, []);

	// return employee details
	const listItems = employees.map((item) => {
		return (
			
				<div className='employee' key={item.id}>
					<div className='caja_fototext'>
						<div className='picture'>
							
						</div>
						<h2 key={item.employee_name}> {item.employee_name}</h2>

					</div>
					<p key={item.employee_salary}>Salary : {item.employee_salary}</p>
					<p key={item.employee_age}>Age : {item.employee_age}</p>
				</div>
			
		);
	});

	return (
		<div className='main-container'>
			<h1>Employees</h1>
			<ul className='employees'>{listItems}</ul>
		</div>
	);
}

export default FetchEmployees;
