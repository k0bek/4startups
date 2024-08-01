import { useEuropeanDate } from "@/lib/utils/date";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText, groq } from "next-sanity";
import Image from "next/image";
import React from "react";
import { RichTextComponents } from "../../components/blog/rich-text-components";
import { getTranslations } from "next-intl/server";
import MaxWidthWrapper from "@/components/shared/max-width-cointainer";

type BlogPageProps = {
  params: {
    postId: string;
  };
};

const BlogPage = async ({ params: { postId } }: BlogPageProps) => {
  const t = await getTranslations("LandingPage");
  const query = groq`
  *[_type == "post" && _id == $postId][0] {
    ...,
    author->,
    categories[]->,
  }
  `;

  const post = await client.fetch(query, { postId });

  return (
    <MaxWidthWrapper>
      <article className="w-full mt-10 flex flex-col gap-8 py-4 pb-12">
        <div className="lg:w-3/5 flex flex-col gap-6">
          <span className="font-medium text-secondary-foreground text-sm lg:text-base -mb-4">
            {t("Published")} {useEuropeanDate(post._updatedAt)}
          </span>
          <h2 className="text-3xl font-bold md:text-5xl">{post.title}</h2>
          <p className="md:text-lg">{post.excerpt}</p>
        </div>
        <Image
          src={urlFor(post.mainImage).url()}
          alt={post.title}
          width={1400}
          height={700}
          className="w-full bg-cover rounded-lg h-full max-h-96 object-cover bg-top"
        />
        <PortableText value={post.body} components={RichTextComponents} />
      </article>
    </MaxWidthWrapper>
  );
};

export default BlogPage;
