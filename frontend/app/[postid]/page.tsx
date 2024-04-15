"use client";

import React from "react";
import { projects } from "../page";
import { Bot } from "lucide-react";
import Link from "next/link";

export default function PostDetail({ params }: any) {
  function makeTitle(slug: any) {
    var words = slug.split("-");

    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
    return words.join(" ");
  }

  const current_project = projects.find(
    (project) => project.slug === params.postid
  );

  return (
    <div className="max-w-5xl mx-auto px-8 flex flex-col">
      <Link href={"/"} className="flex gap-2 text-white mt-8">
        <Bot color="#ea5a0c" size={35} />
        <h1 className="pt-2">
          Hackk <span className="text-orange-600">Bot</span>_
        </h1>
      </Link>
      <h2 className="text-zinc-200 font-bold tracking-wide mt-8 mb-4">
        {makeTitle(params.postid)}
      </h2>
      <h3 className="text-orange-600 mb-4 font-medium text-[15px]">
        {current_project?.category}
      </h3>
      <div className="flex gap-8 text-white mb-4 text-[12px]">
        <span className="text-zinc-100">Michael Lubembe</span>
        <span className="text-orange-300 cursor-pointer">Share Post</span>
        <span className="text-orange-100">Tuesday, 2nd April 2024</span>
      </div>
      <p className="text-sm text-gray-400 tracking-wide">
        {current_project?.description}
      </p>
    </div>
  );
}
