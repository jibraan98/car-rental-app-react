import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Profile = () => {
  return (
    <div className='profile'>
      <div className='profile-title'>
        <h1>Account Profile</h1>
      </div>
      <div className='image'>
       <img className='avatar' src='https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=' alt='profile pic'/>
      </div>
      <div className='login-form'>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="email" placeholder="Username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign In
        </Button>
        <div className='account-help'>
        <a href='google.com'>Need Help With Your Account?</a>
        </div>
        
      </Form>
    </div>
    </div>
  )
}

export default Profile