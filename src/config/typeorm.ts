import { createConnection } from 'typeorm';
import path from 'path';
export const connect = async () => {
  try {
    await createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'julio123',
      database: 'node_typeorm',
      entities: [path.join(__dirname, '../entity/**/*.js')],
      synchronize: true,
    });
    console.log('db is connected');
  } catch (error) {
    console.log(error);
  }
};
