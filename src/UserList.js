import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Popup from "reactjs-popup";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditUser from './EditUser';
const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  const UserList =(props) => {
    const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleClickOpen(row){
    setOpen(true);
    props.editRow(row);
  };

  const handleClose = () => {
    setOpen(false);
  };
    return(
      <Fragment>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Username</TableCell>
              <TableCell align="center">Edit</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.users.map(row => (
              <TableRow key={row.name}>
                <TableCell align="center" component="th" scope="row">{row.name}</TableCell>
                <TableCell align="center">{row.username}</TableCell>
                <TableCell align="center" component="th" scope="row"> <Button variant="contained" onClick={() =>handleClickOpen(row)} color="secondary">Edit</Button>      
                </TableCell>
                <TableCell align="center" component="th" scope="row"> <Button variant="contained" color="secondary" onClick={() => props.deleteUser(row.id)}>Delete</Button></TableCell>
              
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit User</DialogTitle>
        <DialogContent>
        <EditUser setEditing={props.setEditing}
								currentUser={props.currentUser}
								updateUser={props.updateUser}
                handleClose={handleClose}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      </Fragment>
      );
};

export default UserList;