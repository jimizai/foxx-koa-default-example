import { createApp } from '@jimizai/core';
import * as path from 'path';

async function main() {
  const app = await createApp({
    middlewares: [],
    srcDirs: [path.resolve(__dirname, './app')],
  });

  app.bootstrap();
}

main();
