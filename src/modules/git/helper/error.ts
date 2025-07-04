import { execa } from "execa";

/**
 * 监听到 git push 的时候如果当前分支没有建立起远程分支的话推送失败
 */
export const firstPushOriginBranchError = async (error: any) => {
  const isHit = error?.stderr?.includes("has no upstream branch");
  if (!isHit) return false;

  // 获取当前分支名
  let branch = '';
  try {
    const { stdout } = await execa("git", ["rev-parse", "--abbrev-ref", "HEAD"]);
    branch = stdout.trim();
  } catch (e) {
    throw new Error("无法获取当前分支名");
  }

  // 先设置 upstream
  await execa("git", ["push", "--set-upstream", "origin", branch], { stdio: 'inherit' });
  // 再正常 push
  await execa("git", ["push"], { stdio: 'inherit' });
  return true;
}