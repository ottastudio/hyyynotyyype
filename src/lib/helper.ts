export const toCapitalize = (s: string) =>
  s.substr(0, 1).toUpperCase() + s.substr(1).toLocaleLowerCase();
