import { handleExeca } from "./execa";

export const runGitAdd = async () => {
  handleExeca('git', ['add', '.'], {
    buffer: false,
    stdio: 'inherit'
  });
}

export const runGitCommit = (message: string) => {
  handleExeca("git", ['commit', '-m', message])
}

export const runGitPush = () => {
  handleExeca("git", ['push']);
}
