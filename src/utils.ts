import type { MarkdownInstance } from "astro";

export const formatPosts = (
  posts: MarkdownInstance<Record<string, any>>[],
  filterOutDrafts: boolean = true,
  sortByDate: boolean = true,
) => {
  const filteredPosts = posts.reduce((acc, post) => {
    if (filterOutDrafts && post.frontmatter.draft) {
      return acc;
    }

    return [...acc, post];
  }, []);

  if (sortByDate) {
    return filteredPosts.sort(
      (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date),
    );
  }
  return filteredPosts;
};

export const formatDate = (date: string) => {
  return new Intl.DateTimeFormat("en-us", {
    dateStyle: "long",
  }).format(new Date(date));
};
