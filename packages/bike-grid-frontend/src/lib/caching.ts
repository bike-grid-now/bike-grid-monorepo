const stayCachedFor = 10;
const refreshAfter = stayCachedFor + 5;

export const headers = {
  "cache-control": `s-maxage=${stayCachedFor * 60}, stale-while-revalidate=${
    refreshAfter * 60
  }`,
};
