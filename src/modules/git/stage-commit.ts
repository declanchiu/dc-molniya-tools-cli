import { runGitCommit } from './commit-cell';
import { getEmojisCommitInfo } from './emojis';

export const stageCommit = async () => {
  const data = await getEmojisCommitInfo();

  const scope = data?.scope ? `(${data.scope})` : '';
  const message = `${data?.emoji}${scope}: ${data?.message}`;

  await runGitCommit(message);
}