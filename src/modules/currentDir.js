export const currentWorkingDir = () => {
  const curDir = process.cwd();
  console.log (`You are currently in ${curDir}`);
 return curDir
}