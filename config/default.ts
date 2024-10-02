import { resolve } from 'path';

const SOURCE_PATH = resolve(__dirname, '..', 'src');

export default {
  database: {
    url: 'postgres://postgres:postgres@localhost:5442/locations',
  },
  orm: {
    entities: [`${SOURCE_PATH}/**/*.entity{.ts,.js}`],
    synchronize: false,
  },
  public: {
    path: resolve(__dirname,'..', 'public'),
  },
  templates: {
    path: resolve(__dirname, '..', 'views'),
  },
}