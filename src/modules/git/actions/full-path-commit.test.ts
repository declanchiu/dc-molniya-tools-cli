import { describe, it, expect, beforeAll, afterAll, vi } from 'vitest';
import { fullPathCommit } from './full-path-commit';
import * as stageCommitModule from './stage-commit';
import * as emojisModule from '../helper/emojis';
import { execa } from 'execa';
import fs from 'fs-extra';
import path from 'path';
import os from 'os';

// mock getEmojisCommitInfo，避免 inquirer 交互
vi.spyOn(emojisModule, 'getEmojisCommitInfo').mockResolvedValue({
  emoji: '✨',
  message: 'test',
  scope: ''
});
// mock stageCommit 只做 commit，不弹窗
vi.spyOn(stageCommitModule, 'stageCommit').mockImplementation(async () => {
  await execa('git', ['commit', '--allow-empty', '-m', 'test-commit'], { cwd: repoDir });
});

let repoDir: string;
let originDir: string;

describe('fullPathCommit', () => {
  beforeAll(async () => {
    repoDir = fs.mkdtempSync(path.join(os.tmpdir(), 'repo-'));
    originDir = fs.mkdtempSync(path.join(os.tmpdir(), 'origin-'));
    await execa('git', ['init', '--bare'], { cwd: originDir });
    await execa('git', ['init'], { cwd: repoDir });
    await execa('git', ['remote', 'add', 'origin', originDir], { cwd: repoDir });
    await execa('git', ['config', 'user.email', 'test@example.com'], { cwd: repoDir });
    await execa('git', ['config', 'user.name', 'Test User'], { cwd: repoDir });
    // 创建新分支但不 push
    await execa('git', ['checkout', '-b', 'feature/test'], { cwd: repoDir });
    fs.writeFileSync(path.join(repoDir, 'test.txt'), 'hello');
    await execa('git', ['add', '.'], { cwd: repoDir });
    await execa('git', ['commit', '-m', 'init'], { cwd: repoDir });
  });

  afterAll(() => {
    fs.removeSync(repoDir);
    fs.removeSync(originDir);
  });

  it('should auto push and set upstream if branch has no upstream', async () => {
    // 运行 fullPathCommit
    await expect(fullPathCommit()).resolves.not.toThrow();
    // 检查 origin 是否有 feature/test 分支
    const { stdout } = await execa('git', ['branch'], { cwd: originDir });
    expect(stdout).toContain('feature/test');
  });
}); 