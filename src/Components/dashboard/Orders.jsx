import React, { useState, useEffect, useContext } from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { db, auth } from '../Firebase/firebaseConfig'; // Import your Firebase setup
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { UserContext } from '../../Context/UserContext'; // Import UserContext

// Generate Order Data
function createData(id, date, name, companyName, phoneNumber, paymentMethod, amount) {
  return { id, date, name, companyName, phoneNumber, paymentMethod, amount };
}

const Orders = () => {
  const { currentUser } = useContext(UserContext); // Get current user from context
  // console.log(currentUser);
  const [open, setOpen] = useState(false);
  const [openCreateBusinessUser, setOpenCreateBusinessUser] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    companyName: '',
    creditCardNumber: ''
  });
  const [businessUserForm, setBusinessUserForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    showPassword: false,
    showConfirmPassword: false
  });
  const [rows, setRows] = useState([]);
  const [businessUsers, setBusinessUsers] = useState([]);
  const [selectedBusinessUser, setSelectedBusinessUser] = useState(null);

  useEffect(() => {
    if (currentUser) {
      fetchData();
      fetchBusinessUsers(); // Fetch business users on component mount
    }
  }, [currentUser]);

  // Function to handle delete operation
  const handleDelete = async (orderId) => {
    if (!selectedBusinessUser) {
      console.error('No business user selected.');
      return;
    }

    try {
      await deleteDoc(doc(db, `Admin/Business-Users/BusinessUsers/${selectedBusinessUser.uid}/Customers`, orderId)); // Adjust path as necessary
      console.log('Order deleted successfully');

      // Re-fetch data to update the table
      fetchData();
    } catch (error) {
      console.error('Error deleting order: ', error);
    }
  };

  // Fetch data from Firebase
  const fetchData = async () => {
    // if (!currentUser) return;

    try {
      const querySnapshot = await getDocs(collection(db, `Admin/Business-Users/BusinessUsers/${currentUser.uid}/Customers`));
      const customers = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        customers.push(createData(
          doc.id,
          data.date,
          data.name,
          data.companyName,
          data.phoneNumber,
          `VISA ⠀•••• ${data.creditCardNumber.slice(-4)}`,
          Math.random() * 1000 // Placeholder for amount
        ));
      });
      setRows(customers);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  // Fetch business users from Firestore
  const fetchBusinessUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'Admin/Business-Users/BusinessUsers'));
      const users = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        users.push({
          id: doc.id,
          companyName: data.companyName,
          createdAt: data.createdAt,
          email: data.email,
          uid: data.uid
        });
      });
      setBusinessUsers(users);
    } catch (error) {
      console.error('Error fetching business users: ', error);
    }
  };

  useEffect(() => {
    if (selectedBusinessUser) {
      fetchData();
    }
  }, [selectedBusinessUser]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleBusinessUserOpen = () => {
    setOpenCreateBusinessUser(true);
  };

  const handleBusinessUserClose = () => {
    setOpenCreateBusinessUser(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleBusinessUserChange = (e) => {
    setBusinessUserForm({
      ...businessUserForm,
      [e.target.name]: e.target.value
    });
  };

  const handleBusineseUserCompanyNameChange = (e) => {
    setBusinessUserForm({
      ...businessUserForm,
      companyName: e.target.value
    });
  };

  const handlePasswordToggle = (field) => {
    setBusinessUserForm({
      ...businessUserForm,
      [field]: !businessUserForm[field]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!currentUser) {
      console.error('No current user.');
      return;
    }

    try {
      await addDoc(collection(db, `Admin/Business-Users/BusinessUsers/${currentUser.uid}/Customers`), {
        name: formData.name,
        phoneNumber: formData.phoneNumber,
        companyName: formData.companyName,
        creditCardNumber: formData.creditCardNumber,
        date: new Date().toLocaleDateString(),
        paymentMethod: `VISA ⠀•••• ${formData.creditCardNumber.slice(-4)}`,
        amount: Math.random() * 1000, // Replace with your logic for amount
      });

      setFormData({
        name: '',
        phoneNumber: '',
        companyName: '',
        creditCardNumber: ''
      });

      // Re-fetch data to update the table
      fetchData();

    } catch (error) {
      console.error('Error adding document: ', error);
    }

    handleClose();
  };

  const handleBusinessUserSubmit = async (e) => {
    e.preventDefault();

    if (businessUserForm.password !== businessUserForm.confirmPassword) {
      console.error('Passwords do not match.');
      return;
    }

    try {
      // Create the user with email and password

      const userCredential = await createUserWithEmailAndPassword(auth, businessUserForm.email, businessUserForm.password);
      const user = userCredential.user;
      console.log('Business user created successfully');
      const { currentUser } = useContext(UserContext); // Get current user from context

      // Add user to Firestore under 'admin/businessUsers'
      await addDoc(collection(db, 'Admin/Business-Users/BusinessUsers'), {
        uid: user.uid,
        email: businessUserForm.email,
        companyName: businessUserForm.companyName,
        createdAt: new Date().toISOString(),
      });

      console.log('Business user data added to Firestore successfully');

      // Re-fetch business users to update the display
      fetchBusinessUsers();
    } catch (error) {
      console.error('Error creating business user: ', error);
    }

    handleBusinessUserClose();
  };

  return (
    <>
      <Title>Recent Customers</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Company Name</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
            <TableCell>Actions</TableCell> {/* Add actions column for delete button */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.companyName}</TableCell>
              <TableCell>{row.phoneNumber}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`$${row.amount.toFixed(2)}`}</TableCell>
              <TableCell>
                <Button variant="contained" color="error" onClick={() => handleDelete(row.id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={handleClickOpen} sx={{ mt: 3 }}>
        Create a Customer
      </Link>

      {/* Customer Creation Modal */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create Customer</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="phoneNumber"
            label="Phone Number"
            type="text"
            fullWidth
            variant="standard"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="companyName"
            label="Company Name"
            type="text"
            fullWidth
            variant="standard"
            value={formData.companyName}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="creditCardNumber"
            label="Credit Card Number"
            type="text"
            fullWidth
            variant="standard"
            value={formData.creditCardNumber}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      {/* Business User Creation Modal */}
      <Dialog open={openCreateBusinessUser} onClose={handleBusinessUserClose}>
        <DialogTitle>Create Business User</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={businessUserForm.email}
            onChange={handleBusinessUserChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="companyName"
            label="Company Name"
            type="text"
            fullWidth
            variant="standard"
            value={businessUserForm.companyName}
            onChange={handleBusineseUserCompanyNameChange}
          />
          <TextField
            margin="dense"
            name="password"
            label="Password"
            type={businessUserForm.showPassword ? 'text' : 'password'}
            fullWidth
            variant="standard"
            value={businessUserForm.password}
            onChange={handleBusinessUserChange}
            InputProps={{
              endAdornment: (
                <Button onClick={() => handlePasswordToggle('showPassword')}>
                  {businessUserForm.showPassword ? 'Hide' : 'Show'}
                </Button>
              )
            }}
          />
          <TextField
            margin="dense"
            name="confirmPassword"
            label="Confirm Password"
            type={businessUserForm.showConfirmPassword ? 'text' : 'password'}
            fullWidth
            variant="standard"
            value={businessUserForm.confirmPassword}
            onChange={handleBusinessUserChange}
            InputProps={{
              endAdornment: (
                <Button onClick={() => handlePasswordToggle('showConfirmPassword')}>
                  {businessUserForm.showConfirmPassword ? 'Hide' : 'Show'}
                </Button>
              )
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleBusinessUserClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleBusinessUserSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      {/* Business Users List */}
      <Title>Business Users</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Company Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Created At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {businessUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.companyName}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{new Date(user.createdAt).toLocaleDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={handleBusinessUserOpen} sx={{ mt: 3 }}>
        Create a Business User
      </Link>
    </>
  );
};

export default Orders;
