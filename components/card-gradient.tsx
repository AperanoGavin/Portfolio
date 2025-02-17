/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useId } from "react";

export function FeaturesSectionDemo() {
  return (
    <div >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-2 max-w-7xl mx-auto min-h-[700px]">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden"
          >
            <Grid size={20} />
            <p className="text-base font-bold text-neutral-800 dark:text-white relative z-20">
              {feature.title}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-20">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
    title: "Social NetWork",
    description: (
        <div className="flex flex-col gap-10">

          <div className="flex gap-4">
              <img 
                src="/azure_aks.jpg" 
                alt="Azure AKS"
                className="w-10 h-10 object-cover rounded-lg"
              />
              <img 
                src="/django-python-logo.png" 
                alt="Django"
                className="w-10 h-10 object-cover rounded-lg"
              />
              <img 
                src="/depl.png" 
                alt="continuous deployment"
                className="w-10 h-10 object-cover rounded-lg"
              />
              <img 
                src="/docker.jpg" 
                alt="docker"
                className="w-10 h-10 object-cover rounded-lg"
              />
               <img 
                src="/compose.png" 
                alt="docker-compose"
                className="w-10 h-10 object-cover rounded-lg"
              />
          </div>
          <p className="h-40">
            It&apos;s a social Network where you can share your Code and get feedback 
            from other developers, you can  follow other developers and see 
            their code. You can also Code in real time with other developers
          </p>
        </div>
      ),
  },
  {
    title: "Reinforcement Learning",
    description: (
        <div className="flex flex-col gap-10">

          <div className="flex gap-4">
              <img 
                src="/pytorch.png" 
                alt="pytorch"
                className="w-10 h-10 object-cover rounded-lg"
              />
              <img 
                src="/pyth.png" 
                alt="python"
                className="w-10 h-10 object-cover rounded-lg"
              />
              <img 
                src="/Checkerboard_pattern.svg.png" 
                alt="checkerboard"
                className="w-10 h-10 object-cover rounded-lg"
              />
          </div>
          <p>
            It&apos;s a checkers game where  i used Reinforcement Learning , the agent can play against itself and learn from it&apos;s mistakes
          </p>
        </div>
      ),
  },
  {
    title: "Flutter Application (multi-platform)",
    description: (
        <div className="flex flex-col gap-10">

          <div className="flex gap-4">
              <img 
                src="/flutter.png" 
                alt="flutter"
                className="w-10 h-10 object-cover rounded-lg"
              />
              <img 
                src="/dart.png" 
                alt="dart"
                className="w-10 h-10 object-cover rounded-lg"
              />
              <img 
                src="/bloc.png" 
                alt="Bloc"
                className="w-10 h-10 object-cover rounded-lg"
              />
          </div>
          <p>
            It&apos;s a Twitter Clone where you can post tweets, follow other users, like tweets, retweet tweets, comment on tweets, and see your followers and following using Bloc Pattern
          </p>
        </div>
      ),
  },
  {
    title: "Kotlin Application ",
    description: (
        <div className="flex flex-col gap-10">

          <div className="flex gap-4">
              <img 
                src="/mvvm.png" 
                alt="mvvm"
                className="w-10 h-10 object-cover rounded-lg"
              />
              <img 
                src="/kotlin.jpeg" 
                alt="kotlin"
                className="w-10 h-10 object-cover rounded-lg"
              />
              <img 
                src="/android.jpeg" 
                alt="android"
                className="w-10 h-10 object-cover rounded-lg"
              />
               <img 
                src="/firebase.png" 
                alt="firebase"
                className="w-10 h-10 object-cover rounded-lg"
              />
          </div>
          <p>
            It&apos;s a classic Social App  where the users can connect with each other, post photos, like photos, and see their followers and following using MVVM Pattern
          </p>
        </div>
      ),
  },
  {
    title: "Recreate a Framework using PHP (POO) ",
    description: (
        <div className="flex flex-col gap-10">

          <div className="flex gap-4">
              <img 
                src="/gandi.jpg" 
                alt="gandi"
                className="w-10 h-10 object-cover rounded-lg"
              />
              <img 
                src="/docker.jpg" 
                alt="docker"
                className="w-10 h-10 object-cover rounded-lg"
              />
               <img 
                src="/compose.png" 
                alt="docker-compose"
                className="w-10 h-10 object-cover rounded-lg"
              />
               <img 
                src="/php.png" 
                alt="docker"
                className="w-10 h-10 object-cover rounded-lg"
              />
               <img 
                src="/symfo.png" 
                alt="docker-compose"
                className="w-10 h-10 object-cover rounded-lg"
              />
          </div>
          <p>
            The Objective of this project is to create a framework using PHP (POO) that can be used to create a website, the framework is based on the MVC pattern and its like a Wordpress .
          </p>
        </div>
      ),
  },
  {
    title: "Leetcode Solutions ",
    description: (
        <div className="flex flex-col gap-10">

          <div className="flex gap-4">
              <img 
                src="/pyth.png" 
                alt="python"
                className="w-10 h-10 object-cover rounded-lg"
              />
                <img 
                src="/php.png" 
                alt="docker"
                className="w-10 h-10 object-cover rounded-lg"
              />
          </div>
          <p>
           As a software engineer, I&apos;m always looking to improve my problem-solving skills. I&apos;ve been solving problems on LeetCode for a while now, and I&apos;ve decided to share my solutions with you. I&apos;ll be posting my solutions to various problems on LeetCode, along with explanations of how I arrived at them. I hope you find them helpful!
          </p>
        </div>
      ),
  },
  {
    title: "Ship Factory  ",
    description: (
        <div className="flex flex-col gap-10">

          <div className="flex gap-4">
              <img 
                src="/csharp.png" 
                alt="C#"
                className="w-10 h-10 object-cover rounded-lg"
              />
          </div>
          <p>
            It&apos;s a factory where you can manage ships the objectif of this project is to use a lot of design patterns like Factory, Singleton, Observer, Strategy, Decorator, Command, and more
          </p>
        </div>
      ),
  },
  {
    title: "Vscode Extensions  ",
    description: (
        <div className="flex flex-col gap-10">

          <div className="flex gap-4">
              <img 
                src="/ts.webp" 
                alt="python"
                className="w-10 h-10 object-cover rounded-lg"
              />
          </div>
          <p>
            I&apos;ve created a few VS Code extensions( only 2) to help improve my workflow. 
          </p>
        </div>
      ),
  },
];

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
