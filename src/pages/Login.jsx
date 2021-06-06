import React, { useState } from 'react';
import './styles/Login.css';
import {
  Button,
  Form,
  Container,
  Grid,
  Segment,
  Header,
} from 'semantic-ui-react';
import history from '../utils/history';

const Login = () => {
  const [input, setInput] = useState({
    username: '',
    password: '',
  });
  const [emptyFieldsError, setEmptyFieldsError] = useState(false);

  const { username, password } = input;

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    const user = { username, password };

    // Login validation
    // Check if username/password inputs are empty
    if (input.username === '' || input.password === '') {
      setEmptyFieldsError(true);
    } else {
      localStorage.setItem('user', JSON.stringify(user));
      setEmptyFieldsError(false);
      history.push('/');
    }
  }

  // Error notification
  const errorMsg = (
    <div className='error-msg'>
      <p>Username or password field is empty!</p>
    </div>
  );

  return (
    <Container className='login-container'>
      <Grid
        textAlign='center'
        style={{ height: '100vh' }}
        verticalAlign='middle'
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Form onSubmit={handleSubmit} id='login-form' noValidate>
            <Segment stacked>
              <Header as='h2' color='orange' textAlign='left'>
                Log-in
              </Header>
              <Form.Field>
                <label>Username</label>
                <input
                  name='username'
                  placeholder='username'
                  onChange={(e) => onChange(e)}
                  value={username}
                />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input
                  name='password'
                  type='password'
                  placeholder='password'
                  onChange={(e) => onChange(e)}
                  value={password}
                />
              </Form.Field>
              {emptyFieldsError ? errorMsg : null}

              <Button type='submit' color='orange' fluid>
                Login
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default Login;
