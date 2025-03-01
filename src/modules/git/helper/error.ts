import { execa } from "execa";


/**
 * 监听到 git push 的时候如果当前分支没有建立起远程分支的话推送失败
 */
export const firstPushOriginBranchError = (error: string) => {
  //@ts-ignore
  const isHit = error?.stderr.includes("has no upstream branch")

  if (!isHit) return;

  const regex = /origin\s+(.+)/;
  //@ts-ignore
  const match = error?.stderr?.match(regex);

  execa("git", ["push", "--set-upstream", "origin", match[1]])
}