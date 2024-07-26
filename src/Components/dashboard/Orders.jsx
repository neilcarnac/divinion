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
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { UserContext } from '../../Context/UserContext'; // Import UserContext

const ADMIN_USER_ID = 'uFlY3e3ZKHX9Aa7tDOsTO5cYKrf2'; // Replace with your actual admin user ID

// Generate Order Data
function createData(id, date, name, companyName, phoneNumber, paymentMethod, amount) {
  return { id, date, name, companyName, phoneNumber, paymentMethod, amount };
}

const Orders = () => {
  const { currentUser } = useContext(UserContext); // Get current user from context
  const isAdmin = currentUser?.uid === ADMIN_USER_ID;

  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const [openCreateBusinessUser, setOpenCreateBusinessUser] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    companyName: '',
    creditCardNumber: '',
    email: '', // Reset email field if necessary
    password: ''
  });

  const [editData, setEditData] = useState({
    uid: '',
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



  useEffect(() => {
    if (currentUser) {
      if (isAdmin) {
        fetchAllCustomers(); // Fetch all customers if the user is an admin
        fetchBusinessUsers(); // Fetch business users if the user is an admin
      } else {
        fetchData(); // Fetch data for the current business user
      }
    }
  }, [currentUser, isAdmin]);

  const fetchAllCustomers = async () => {
    try {
      const businessUsersSnapshot = await getDocs(collection(db, 'Admin/Business-Users/BusinessUsers'));
      const allCustomers = [];

      for (const userDoc of businessUsersSnapshot.docs) {
        const userId = userDoc.id;
        const customersSnapshot = await getDocs(collection(db, `Admin/Business-Users/BusinessUsers/${userId}/Customers/${editData.uid}`));

        customersSnapshot.forEach((customerDoc) => {
          const data = customerDoc.data();
          allCustomers.push(createData(
            customerDoc.id,
            data.date,
            data.name,
            data.companyName,
            data.phoneNumber,
            `VISA ⠀•••• ${data.creditCardNumber.slice(-4)}`,
            Math.random() * 1000 // Placeholder for amount
          ));
        });
      }

      setRows(allCustomers);
    } catch (error) {
      console.error('Error fetching all customers: ', error);
    }
  };




  const handleEditSubmit = async (e) => {
    e.preventDefault();

    if (!currentUser) {
      console.error('No current user.');
      return;
    }

    if (!editData.id) {
      console.error('No customer ID to update.');
      return;
    }

    try {
      console.log('Updating customer ID:', editData.id); // Debugging log
      // Reference to the document that you want to update
      const customerDocRef = doc(db, `Admin/Business-Users/BusinessUsers/${currentUser.uid}/Customers/${editData.id}`);

      // Update the document
      await updateDoc(customerDocRef, {
        name: editData.name,
        phoneNumber: editData.phoneNumber,
        companyName: editData.companyName,
        creditCardNumber: editData.creditCardNumber,
        date: new Date().toLocaleDateString(),
        paymentMethod: `VISA ⠀•••• ${editData.creditCardNumber.slice(-4)}`,
        amount: Math.random() * 1000, // Replace with your logic for amount
      });

      console.log('Customer updated successfully');
      fetchData(); // Call your fetch function to refresh the data

    } catch (error) {
      console.error('Error updating document: ', error);
    }

    handleEditClose(); // Close your edit modal or reset the form
  };



  const handleEdit = (customer) => {
    console.log('Editing customer:', customer); // Debugging log
    setEditData({
      id: customer.id,
      name: customer.name,
      phoneNumber: customer.phoneNumber,
      companyName: customer.companyName,
      creditCardNumber: customer.paymentMethod
    });
    setOpenEdit(true);
  };



  const handleEditChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value
    });
  };

  const handleEditClose = () => {
    setOpenEdit(false);
    setEditData({
      id: '',
      name: '',
      phoneNumber: '',
      companyName: '',
      creditCardNumber: ''
    });
  };

  const handleDelete = async (orderId) => {
    try {
      await deleteDoc(doc(db, `Admin/Business-Users/BusinessUsers/${currentUser.uid}/Customers/${orderId}`));
      console.log('Order deleted successfully');
      fetchData();
    } catch (error) {
      console.error('Error deleting order: ', error);
    }
  };
  const handleDeleteBusinessUser = async (userId) => {
    try {
      await deleteDoc(doc(db, `Admin/Business-Users/BusinessUsers/${userId}`));
      console.log('Business user deleted successfully');
      fetchBusinessUsers();
    } catch (error) {
      console.error('Error deleting business user: ', error);
    }
  };


  const fetchData = async () => {
    // if (!currentUser) return;

    try {
      const querySnapshot = await getDocs(collection(db, `Admin/Business-Users/BusinessUsers/${currentUser.uid}/Customers/`));
      const customers = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        customers.push(createData(
          doc.id,
          data.date,
          data.name,
          data.companyName,
          data.phoneNumber,
          `VISA ⠀•••• ${data.creditCardNumber.slice(-4)}`));
      });
      setRows(customers);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

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
      // Create the user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password); // Make sure formData contains email and password fields
      const user = userCredential.user;

      // Add customer data to Firestore
      await addDoc(collection(db, `Admin/Business-Users/BusinessUsers/${currentUser.uid}/Customers`), {
        uid: user.uid,
        name: formData.name,
        phoneNumber: formData.phoneNumber,
        companyName: formData.companyName,
        creditCardNumber: formData.creditCardNumber,
        date: new Date().toLocaleDateString(),
        paymentMethod: `VISA ⠀•••• ${formData.creditCardNumber.slice(-4)}`,
        amount: Math.random() * 1000, // Replace with your logic for amount
      });

      // Clear the form data
      setFormData({
        name: '',
        phoneNumber: '',
        companyName: '',
        creditCardNumber: '',
        email: '', // Reset email field if necessary
        password: '' // Reset password field if necessary
      });

      // Re-fetch data to update the table
      fetchData();

    } catch (error) {
      console.error('Error adding document: ', error);
    }

    // Close the form dialog/modal
    handleClose();
  };

  const handleBusinessUserSubmit = async (e) => {
    e.preventDefault();

    if (businessUserForm.password !== businessUserForm.confirmPassword) {
      console.error('Passwords do not match.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, businessUserForm.email, businessUserForm.password);
      const user = userCredential.user;
      console.log('Business user created successfully');

      await addDoc(collection(db, 'Admin/Business-Users/BusinessUsers'), {
        uid: user.uid,
        email: businessUserForm.email,
        companyName: businessUserForm.companyName,
        createdAt: new Date().toLocaleDateString()
      });

      setBusinessUserForm({
        email: '',
        password: '',
        confirmPassword: '',
        companyName: '',
        showPassword: false,
        showConfirmPassword: false
      });

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
            {/* <TableCell align="right">Sale Amount</TableCell> */}
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
              {/* <TableCell align="right">{`$${row.amount.toFixed(2)}`}</TableCell> */}
              <TableCell>
                <Button sx={{ m: 2 }} variant="contained" onClick={() => handleEdit(row)}>
                  Edit
                </Button>
                <Button sx={{ m: 2 }} variant="contained" color="error" onClick={() => handleDelete(row.id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={handleClickOpen} sx={{ mt: 3, mb: 3 }}>
        Create a Customer
      </Link>

      <Dialog open={openEdit} onClose={handleEditClose}>
        <DialogTitle>Edit Customer</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            value={editData.name}
            onChange={handleEditChange}
          />
          <TextField
            margin="dense"
            name="phoneNumber"
            label="Phone Number"
            type="text"
            fullWidth
            variant="standard"
            value={editData.phoneNumber}
            onChange={handleEditChange}
          />
          <TextField
            margin="dense"
            name="companyName"
            label="Company Name"
            type="text"
            fullWidth
            variant="standard"
            value={editData.companyName}
            onChange={handleEditChange}
          />
          <TextField
            margin="dense"
            name="creditCardNumber"
            label="Credit Card Number"
            type="text"
            fullWidth
            variant="standard"
            value={editData.creditCardNumber}
            onChange={handleEditChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleEditSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>


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
            autoFocus
            margin="dense"
            name="email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            value={formData.password}
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
            onChange={handleBusinessUserChange}
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
      {isAdmin && (
        <div className="">

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
                  <TableCell>
                    <Button onClick={() => handleDeleteBusinessUser(user.id)}>Delete</Button>
                  </TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Link color="primary" href="#" onClick={handleBusinessUserOpen} sx={{ mt: 3 }}>
            Create a Business User
          </Link>
        </div>

      )}
    </>
  );
};

export default Orders;
