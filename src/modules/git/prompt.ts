import type { PromptOptions } from './type';

import Fuse from 'fuse.js';
import inquirer from 'inquirer';
import inquirerAutocompletePrompt from "inquirer-autocomplete-prompt";

inquirer.registerPrompt("autocomplete", inquirerAutocompletePrompt);

const prompts = (emojis: any, options: Partial<PromptOptions>) => {
  const { message } = filterOptions(options);

  const res = [
    {
      name: 'emoji',
      message: '选择一个 emoji',
      type: 'autocomplete',
      source: (_: any, input: string) => {
        const emoji = searchEmoji(input, emojis).map(item => {
          return {
            name: `${item.emoji} - ${item.description}`,
            value: `${item["code"]} ${item["name"]}`,
          }
        });

        return Promise.resolve(emoji);
      }
    },
    {
      name: 'message',
      message: '输入提交信息',
      ...(message ? { default: message } : {}),
    },
    {
      name: 'scope',
      message: '输入 scope:',
      ...(message ? { default: message } : {}),
    }
  ]

  return res;
}

const filterOptions = (options: Partial<PromptOptions>): any => {

  return {
    message: options['message'] || null,
    scope: options['scope'] || null,
    title: options['title'] || null
  }
}

const searchEmoji = (input: string, emojis: any) => {
  const fuseOptions = {
    threshold: 0.5,
    keys: [
      {
        name: 'name',
        weight: 0.33
      },
      {
        name: 'description',
        weight: 0.67
      }
    ]
  }

  const fuse = new Fuse(emojis, fuseOptions)

  return input ? fuse.search(input).map((info) => info.item) : emojis
}

export default prompts;