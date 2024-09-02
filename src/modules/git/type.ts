export interface CommitInfoType extends Omit<PromptOptions, 'title'> {
  emoji: string;
}

export interface PromptOptions {
  message: string;
  scope: string;
  title: string;
}