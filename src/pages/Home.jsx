import React from 'react';
import './styles/Home.css';
import { Card, Icon } from 'semantic-ui-react';
import Users from '../data/Users.json';
import NavHeader from './components/NavHeader';
import Badge from './components/Badge';
import { format } from 'date-fns';

const Home = () => {
  return (
    <>
      <NavHeader />

      <div className='card-group'>
        {Users?.users.map((user) => (
          <div style={{ margin: '1em' }} key={user.id}>
            <Card key={user.id} className='card-item'>
              <Card.Content>
                <Card.Header>
                  {user.firstName} {user.lastName}{' '}
                  {JSON.parse(user.isAdmin) && <Badge>Admin</Badge>}
                </Card.Header>
                <Card.Meta>User ID: {user.id}</Card.Meta>
                <Card.Description>
                  <Icon name='clock outline' />
                  {format(new Date(user.createdTimestamp), 'yyyy-MM-dd hh:mm')}
                </Card.Description>
              </Card.Content>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
