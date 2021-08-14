import { boostrap } from '@jimizai/core';
import { KoaFoxxDriver } from '@jimizai/driver-koa';
import * as path from 'path';

boostrap({
  middlewares: [],
  srcDirs: [path.resolve(__dirname, './app')],
  Driver: KoaFoxxDriver,
});
