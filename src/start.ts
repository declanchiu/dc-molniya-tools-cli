#!/usr/bin/env node
import { program } from 'commander';

import { stageCommit } from './modules/git/stage-commit';

function initCommand() {
  program
    .command('c')
    .description('提交当前暂存区的全部代码')
    .action(() => {
      stageCommit();
    })
}

initCommand();

program.parse(process.argv);
