import { createConnections } from 'typeorm';

createConnections().catch(e => {
  console.error('Could not establish a database connection.', e);
});
