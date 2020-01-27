import React, { useState, Fragment,useEffect} from 'react'
import AddUser from './AddUser'
import EditUser from './EditUser'
import UserList from './UserList'
import ButtonAppBar from './app-bar'
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Footer from './Footer'
import Popup from "reactjs-popup"
const useStyles = makeStyles(theme => ({
	root: {
	  '& > *': {
		margin: theme.spacing(1),
		width: 200,
	  },
	},
  }));

const App = () => {

	const classes = useStyles();
	const usersData = [
		
	]

	const initialFormState = { id: null, name: '', username: '' }

	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)
	useEffect(()=>{
		setTimeout(()=>{
	  fetch('https://jsonplaceholder.typicode.com/users')
		 .then(Response=>Response.json())
		 .then(setUsers)
		},3000);
	  },[]);

	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}
	const setUser = user => {
		setUsers({ id: user.id,name:user.name, username:user.username})
	  }
	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, username: user.username })
	}
	const mystyle = {
		marginleft:'300px'
	  };
	return (
		<div className="App">
			<ButtonAppBar addUser={addUser}/>
			{
				  !!users.length?
			<Fragment>
			<Container maxWidth="sm">
			<UserList users={users} editRow={editRow} deleteUser={deleteUser} editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser} />
			</Container>
			<Footer/>
			</Fragment>:
			<p>Loading...</p>
	    }
		</div>
	)
}

export default App
