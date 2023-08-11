import { AiFillCodeSandboxCircle, AiFillFileImage, AiFillMessage, AiFillVideoCamera } from "react-icons/ai";
import { BsFileMusicFill } from "react-icons/bs";



export const MAX_FREE_COUNTS = 5;

export const tools = [
  {
    label: 'Conversation',
    icon: AiFillMessage,
    href: '/conversation',
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: 'Music Generation',
    icon: BsFileMusicFill,
    href: '/music',
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: 'Image Generation',
    icon: AiFillFileImage,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: '/image',
  },
  {
    label: 'Video Generation',
    icon: AiFillVideoCamera,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: '/video',
  },
  {
    label: 'Code Generation',
    icon: AiFillCodeSandboxCircle,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: '/code',
  },
];
