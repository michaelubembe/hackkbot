"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Bot, CirclePlus } from "lucide-react";
import Link from "next/link";

export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <div className="pt-4 text-2xl text-zinc-300 font-bold tracking-wide">
        <div className="flex">
          <Link href={"/"} className="flex gap-4">
            <Bot color="#ea5a0c" size={35} />
            <h1 className="pt-1">Hackk <span className="text-orange-600">Bot</span>_</h1>
          </Link>
          <Link
            className="ml-auto font-light text-sm text-slate-300 px-4 pt-1"
            href={"/register"}
          >
            Register
          </Link>
          <Link
            className="font-light text-sm text-orange-600 pt-1"
            href={"/create-new-post"}
          >
            <CirclePlus size={25} />
          </Link>
        </div>
        <p className="font-light text-sm pt-2 text-slate-500">
          Projects and simple hacks!
        </p>
      </div>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Best Free Python Courses",
    slug: 'best-free-python-courses',
    category: "Python",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Deploy a python docker project to digitalocean",
    slug: 'deploy-python-docker-project-digitalocean',
    category: "Docker",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries",
    link: "https://netflix.com",
  },
  {
    title: "What happens when you type google in a search bar",
    slug: 'What-happens-when-you-type-google-in-a-search-bar',
    category: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Setting up nginx on MacOs M-Chip",
    slug: 'setting-nginx-macos-m-chip',
    category: "Nginx",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world",
    link: "https://meta.com",
  },
  {
    title: "Automate your deployment with bash scripts",
    slug: 'automate-your-deployment-with-bash-scripts',
    category: "Bash",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Recursion in C",
    slug: 'recursion-in-c',
    category: "C",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software",
    link: "https://microsoft.com",
  },
  {
    title: "What happens when you type google in a search bar",
    slug: 'What-happens-when-you-type-google-in-a-search-bar',
    category: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Best Free Python Courses",
    slug: 'best-free-python-courses',
    category: "Python",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Deploy a python docker project to digitalocean",
    slug: 'deploy-python-docker-project-digitalocean',
    category: "Docker",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries",
    link: "https://netflix.com",
  },
];
