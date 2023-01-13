export const sleep = (delay: number): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, delay * 1000);
  });
};
