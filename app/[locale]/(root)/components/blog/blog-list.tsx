import { client } from "@/sanity/client";
import { groq } from "next-sanity";
import BlogListItem from "./blog-list-item";
import { getLocale, getTranslations } from "next-intl/server";

const BlogList = async () => {
  const locale = await getLocale();
  const query = groq`
  *[_type == "post" && language == "${locale}"] {
      ...,
      author->,
      categories[]->
  } | order(_createdAt desc)
  `;
  const t = await getTranslations("LandingPage");
  const posts = await client.fetch(query);

  return (
    <section className="md:mt-16 mt-4">
      <h2 className="text-2xl lg:text-4xl font-semibold mb-5 md:mb-10">
        {t("Gain some useful knowledge")}
      </h2>
      <ul className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map((post: any) => (
          <BlogListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
};

export default BlogList;
