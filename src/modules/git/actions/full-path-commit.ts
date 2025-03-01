import { runGitAdd, runGitPush } from '../helper/commit-cell';
import { stageCommit } from './stage-commit';

export const fullPathCommit = async () => {
  await runGitAdd();
  await stageCommit();
  await runGitPush();
}