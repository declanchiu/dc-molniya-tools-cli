import execa from "execa";

/**
 * 处理 git push 时分支没有建立远程分支的错误
 * 支持不同 Git 版本的错误信息格式
 */
export const firstPushOriginBranchError = async (error: any) => {
  // 兼容不同 Git 版本的错误信息
  const errorMessage = error?.stderr || error?.message || '';
  const isNoUpstream = errorMessage.includes("has no upstream branch") || 
                       errorMessage.includes("no upstream branch") ||
                       errorMessage.includes("--set-upstream");
  
  if (!isNoUpstream) return false;

  // 获取当前分支名
  let branch = '';
  try {
    const { stdout } = await execa("git", ["rev-parse", "--abbrev-ref", "HEAD"]);
    branch = stdout.trim();
  } catch (e) {
    throw new Error("无法获取当前分支名");
  }

  // 检查是否有远程仓库
  try {
    await execa("git", ["remote", "get-url", "origin"]);
  } catch (e) {
    throw new Error("未配置远程仓库 origin，请先添加远程仓库");
  }

  // 设置 upstream 并推送（--set-upstream 会自动推送，无需再次 push）
  await execa("git", ["push", "--set-upstream", "origin", branch], { stdio: 'inherit' });
  return true;
}