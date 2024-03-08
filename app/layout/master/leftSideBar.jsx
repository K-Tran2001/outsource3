import Image from "next/image";
import * as Hi2 from "react-icons/hi2";

export default function MasterLeftSideBar() {
  const menus = [
    {
      name: "home",
      icon: <Hi2.HiOutlineHome className="text-gray-400 w-6 h-6" />,
    },
    {
      name: "home",
      icon: <Hi2.HiOutlineBellAlert className="text-gray-400 w-6 h-6" />,
    },
    {
      name: "home",
      icon: <Hi2.HiOutlineFolderOpen className="text-gray-400 w-6 h-6" />,
    },
    {
      name: "home",
      icon: <Hi2.HiOutlineSparkles className="text-gray-400 w-6 h-6" />,
    },
  ];
  return (
    <div className="fixed inset-y-0 l-0 z-50 block w-20 overflow-y-auto bg-slate-950 pb-4">
      <div className="flex h-16 shrink-0 items-center justify-center">
        <Image
          className="h-8 w-auto"
          src="/mark.svg"
          alt="Your Company"
          width={32}
          height={32}
          priority
        />
      </div>
      <nav className="mt-8">
        <ul role="list" className="flex flex-col items-center">
          {menus.map((menu) => (
            <li className="mt-1" key={Math.random()}>
              <a
                href="#"
                className="flex gap-x-3 rounded-md p-3 text-sm leading-6 "
              >
                {menu.icon}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
