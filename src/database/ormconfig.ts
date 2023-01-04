import { DataSource, DataSourceOptions } from 'typeorm';

const connectDevConfig: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'yourcar',
  synchronize: true,
  entities: ['dist/**/entities/*{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
};

const connectProdConfig: DataSourceOptions = {
  type: 'mysql',
  host: 'mysqldb',
  port: 3306,
  username: 'root',
  password: 'pass123',
  database: 'yourcar',
  synchronize: true,
  entities: ['dist/**/entities/*{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
};

export const connectConfig: DataSourceOptions =
  process.env.NODE_ENV === 'production' ? connectProdConfig : connectDevConfig;

const connectionSource = new DataSource(connectConfig);

export default connectionSource;
