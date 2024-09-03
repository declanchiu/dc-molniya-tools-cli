#!/usr/bin/env node
import pkg from 'package.json';
import { program } from 'commander';
import { stageCommit } from './modules/git/stage-commit';
import { fullPathCommit } from './modules/git/full-path-commit';

function initCommand() {
  program
    .command('c')
    .description('提交当前暂存区的全部代码')
    .action(() => {
      stageCommit();
    })

  program
    .command('a')
    .description('自动添加全部修改的代码到暂存区，并且自动推送')
    .action(() => {
      fullPathCommit();
    })
}

initCommand();

// 挂载基础
program
  .version(pkg.version, '-v, --version', '输出版本号')
  .parse(process.argv);
