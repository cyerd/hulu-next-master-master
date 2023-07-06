
import Image from "next/image"
import HeaderItem from "./HeaderItem";

import { HomeIcon, BoltIcon, CheckBadgeIcon, CircleStackIcon, MagnifyingGlassIcon, UserCircleIcon} from "@heroicons/react/24/outline"


export default function Header() {
  return (
    <div>
      <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
        <div className="flex flex-grow justify-evenly max-w-2xl">
          <HeaderItem title="HOME" Icon={HomeIcon} />
          <HeaderItem title="HOME" Icon={BoltIcon} />
          <HeaderItem title="HOME" Icon={CheckBadgeIcon} />
          <HeaderItem title="HOME" Icon={CircleStackIcon} />
          <HeaderItem title="HOME" Icon={MagnifyingGlassIcon} />
          <HeaderItem title="HOME" Icon={UserCircleIcon} />
        </div>
        <Image
          className="object-contain"
          src="/hulu-white.png"
          width={200}
          height={100}
        />
      </header>         
    </div>
  );
}
