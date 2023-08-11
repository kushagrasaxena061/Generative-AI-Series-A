"use client"

import React  from 'react'
import { AiFillDashboard, AiFillMessage, AiFillFileImage, AiFillVideoCamera, AiFillCodeSandboxCircle, AiFillSetting } from "react-icons/ai";
import { BsFileMusicFill } from "react-icons/bs";
import Image from 'next/image';
import { usePathname } from "next/navigation";
import { Montserrat } from 'next/font/google'
import { cn } from "@/lib/utils";
import Link from 'next/link';
import { FreeCounter } from './FreeCounter';




const poppins = Montserrat ({ weight: '600', subsets: ['latin'] });

const routes = [
    {
      label: 'Dashboard',
      icon: AiFillDashboard,
      href: '/dashboard',
      color: "text-sky-500"
    },
    {
      label: 'Conversation',
      icon: AiFillMessage,
      href: '/conversation',
      color: "text-violet-500",
    },
    {
      label: 'Image Generation',
      icon: AiFillFileImage,
      color: "text-pink-700",
      href: '/image',
    },
    {
      label: 'Video Generation',
      icon: AiFillVideoCamera,
      color: "text-orange-700",
      href: '/video',
    },
    {
      label: 'Music Generation',
      icon: BsFileMusicFill,
      color: "text-emerald-500",
      href: '/music',
    },
    {
      label: 'Code Generation',
      icon: AiFillCodeSandboxCircle,
      color: "text-green-700",
      href: '/code',
    },
    {
      label: 'Settings',
      icon: AiFillSetting,
      href: '/settings',
    },
  ];
  
  export const Sidebar = ({
    apiLimitCount = 0,
    isPro = false
  }: {
    apiLimitCount: number;
    isPro: boolean;
  }) => {
    const pathname = usePathname();
  return (
    <div>
      <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative h-8 w-8 mr-4">
            <Image fill alt="Logo" src="/logo.png" />
          </div>
          <h1 className={cn("text-2xl font-bold", poppins.className)}>
            Genius
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href} 
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href ? "text-white bg-white/10" : "text-zinc-400",
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FreeCounter 
        apiLimitCount={apiLimitCount} 
        isPro={isPro}
      />
    </div>
    </div>
  )
}

export default Sidebar
