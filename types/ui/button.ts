type ButtonThemes = 'light' | 'dark';

export type ButtonProps = {
  title?: string;
  theme?: ButtonThemes;
  onlyIcon?: boolean;
  iconName?: string;
};
