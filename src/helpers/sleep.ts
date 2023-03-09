export const sleep = async (delay: number): Promise<boolean> => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, delay * 1000);
  });
};
