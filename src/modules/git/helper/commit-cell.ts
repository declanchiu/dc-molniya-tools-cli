import { handleExeca } from "./execa";

export const runGitAdd = async () => {
  await handleExeca('git', ['add', '.'], {
    buffer: false,
    stdio: 'inherit'
  });
}

export const runGitCommit = async (message: string) => {
  await handleExeca("git", ['commit', '-m', message]);
}

export const runGitPush = async () => {
  await handleExeca("git", ['push']);
}
