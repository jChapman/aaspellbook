export interface Ability {
  name: string;
  id: string;
  categories: Array<string>;
  description: string;
  values: Array<string>;
  cooldowns: Array<number>;
  manaCost: Array<number>;
  superUpgrade: string;
  gabenUpgrade: string;
  isUlt: boolean;
  tags: Array<string>;
  icon: string;
}