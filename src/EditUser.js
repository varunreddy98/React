import React, { useState, useEffect,Fragment } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const EditUser = props => {
  const [ user, setUser ] = useState(props.currentUser)
  function edit(id,user1)
	{
			props.updateUser(id,user1);
			props.handleClose();

	}

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  const [newname,onNewName]=useState(user.name);
	const [newusername,onNewUserName]=useState(user.username);
  return (
   
    <Fragment>
		<TextField id="name" label="Name"  value={newname}  onChange={e=>onNewName(e.currentTarget.value)} variant="outlined" />
		<TextField id="username" label="Username"  value={newusername}  onChange={e=>onNewUserName(e.currentTarget.value)} variant="outlined" />
		<Button variant="contained" color="secondary" onClick={() =>edit(user.id,{name:newname,username:newusername})}>Submit</Button>
      </Fragment>
  )
}

export default EditUser

