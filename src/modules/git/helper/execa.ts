import execa from 'execa';
import { firstPushOriginBranchError } from "./error";

export const handleExeca = async (command: string, subcommand: string[], options?: any) => {
  try {
    await execa(command, subcommand, options);
  } catch(error) {
    const handled = await firstPushOriginBranchError(error);
    if (handled) return;
    throw error;
  }
}