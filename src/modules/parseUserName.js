export const parseUserName = (arg) => {
  const index = arg[0].indexOf('=');
  const userN = arg[0].slice(index+1);
  return userN
}