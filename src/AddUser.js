import React, { useState,Fragment } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const AddUser=(props)=>{
	const [newname,onNewName]=useState('');
	const [newusername,onNewUserName]=useState('');
	function edit(user1)
	{
			props.addUser(user1);
			props.handleClose();

	}
	return (
		<Fragment>
		<TextField id="name" label="Name" value={newname}  onChange={e=>onNewName(e.currentTarget.value)} variant="outlined" />
		<TextField id="username" label="Username" value={newusername}  onChange={e=>onNewUserName(e.currentTarget.value)} variant="outlined" />
		<Button variant="contained" color="secondary" onClick={() =>edit({name:newname,username:newusername})}>Submit</Button>
	 </Fragment>
	)
}

export default AddUser
