import { describe, it, expect } from 'vitest';
import { fullPathCommit } from './full-path-commit';

describe('fullPathCommit', () => {
  it('should be defined and be a function', () => {
    // 验证 fullPathCommit 函数存在且可调用
    expect(fullPathCommit).toBeDefined();
    expect(typeof fullPathCommit).toBe('function');
  });
}); 