import type { MarkdownInstance } from "astro";

export const formatPosts = (
  posts: MarkdownInstance<Record<string, any>>[],
  filterOutDrafts: boolean = true,
  sortByDate: boolean = true,
) => {
  const filteredPosts = posts.reduce(
    (acc, post) => {
      if (filterOutDrafts && post.frontmatter.draft) {
        return acc;
      }

      return [...acc, post];
    },
    [] as MarkdownInstance<Record<string, any>>[],
  );

  if (sortByDate) {
    return filteredPosts.sort(
      (
        a: MarkdownInstance<Record<string, any>>,
        b: MarkdownInstance<Record<string, any>>,
      ) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime(),
    );
  }
  return filteredPosts;
};

export const formatDate = (date: string) => {
  return new Intl.DateTimeFormat("en-us", {
    dateStyle: "long",
  }).format(new Date(date));
};
