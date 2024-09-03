import { runGitAdd, runGitPush } from './commit-cell';
import { stageCommit } from './stage-commit';

export const fullPathCommit = async () => {
  await runGitAdd();
  await stageCommit();
  await runGitPush();
}