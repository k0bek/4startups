import { useEuropeanDate } from "@/lib/utils/date";
import { urlFor } from "@/sanity/lib/image";
import { Post } from "@/types";
import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogListItem = async ({ post }: { post: Post }) => {
  const t = await getTranslations("LandingPage");

  return (
    <li className="mx-auto w-full">
      <Image
        src={urlFor(post.mainImage).width(550).height(300).url()}
        alt={post.title}
        width={700}
        height={500}
        className="object-contain w-full bg-cover rounded-lg"
      />
      <div className="flex flex-col gap-1 mt-2">
        <span className="font-medium text-secondary-foreground text-sm lg:text-base">
          {useEuropeanDate(post._updatedAt)}
        </span>
        <h3 className="font-semibold text-lg lg:text-xl">{post.title}</h3>
        <p className="text-secondary-foreground text-sm lg:text-base">
          {post.excerpt}
        </p>
        <Link
          className="font-bold mt-2 text-base flex items-center"
          href={`/blog/${post._id}`}
        >
          {t("Read article")}
          <ArrowUpRight className="scale-75 font-bold" />
        </Link>
      </div>
    </li>
  );
};

export default BlogListItem;
