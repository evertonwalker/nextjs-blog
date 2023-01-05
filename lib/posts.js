export function getSortedPostsData() {

  const allPostsDataOne = [
    {
      id: 1,
      title: 'Two Forms of Pre-rendering',
      date: '2020-01-02',
    },
    {
      id: 2,
      title: 'When to Use Static Generation v.s. Server-side Rendering',
      date: '2020-01-02'
    }
  ];

  return allPostsDataOne.sort(({ date: a }, { date: b }) => {
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
  });
}