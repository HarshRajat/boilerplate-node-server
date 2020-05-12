import mysql from 'mysql';
import config from '../config';

export default async (): Promise<Db> => {
  const connection = mysql.createConnection({
    host     : config.dbhost,
    user     : config.dbuser,
    password : config.dbpass,
    database : config.dbname,
  });

  return connection;
};
