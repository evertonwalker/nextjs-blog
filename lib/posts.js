// import * as fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';

// const postsDirectory = path.join(process.cwd(), 'posts');

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

  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date

}