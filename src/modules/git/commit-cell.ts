import { execa } from 'execa';

export const runGitAdd = async (): Promise<void> => {
  await execa('git', ['add', '.'], {
    buffer: false,
    stdio: 'inherit'
  });
}

export const runGitCommit = async (message: string): Promise<void> => {
  await execa("git", ['commit', '-m', message])
}

export const runGitPush = async (): Promise<void> => {
  await execa("git", ['push']);
}
