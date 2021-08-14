import { boostrap } from '@jimizai/core';
import * as path from 'path';

boostrap({
  middlewares: [],
  srcDirs: [path.resolve(__dirname, './app')],
});
