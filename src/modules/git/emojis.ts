import type { CommitInfoType } from './type';

import emojiJSON from "./emoji.json";

import ora from 'ora';
import prompts from './prompt';
import inquirer from "inquirer";

export const getEmojisCommitInfo = async (): Promise<CommitInfoType> => {
  const emojis = await getEmojis();
  const questions = await prompts(emojis, { message: "" });
  const answers = await inquirer.prompt(questions);
  return answers;
}

export const getEmojis = async () => {
  const spinner = ora("正在获取 emojis").start();
  const emoji_json = await emojiJSON;
  spinner.succeed("Emojis 获取成功，已经是最新的");
  return emoji_json;
}
