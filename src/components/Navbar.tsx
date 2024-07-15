import Link from "next/link";
import Image from "next/image";
import {
    ClerkLoaded,
    ClerkLoading,
    SignedIn,
    SignedOut,
    UserButton,
} from "@clerk/nextjs";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
    return (
        <div className="h-19 flex items-center justify-between">
            {/* LEFT */}
            <div className="md:hidden lg:block w-[15%]">
                <Link href="/">
                    <img src="/myngramLogo.png" alt="Logo" className="h-15 w-auto cursor-pointer" />
                </Link>
            </div>

            {/* CENTER */}
            <div className="hidden md:flex w-[50%] text-sm items-center justify-center space-x-6">
                {/* LINKS */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/home.png"
                        alt="Homepage"
                        width={16}
                        height={16}
                        className="w-4 h-4"
                    />
                    <span>Homepage</span>
                </Link>
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/friends.png"
                        alt="Friends"
                        width={16}
                        height={16}
                        className="w-4 h-4"
                    />
                    <span>Friends</span>
                </Link>
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/stories.png"
                        alt="Stories"
                        width={16}
                        height={16}
                        className="w-4 h-4"
                    />
                    <span>Stories</span>
                </Link>
                {/* SEARCH */}
                <div className='flex p-2 bg-slate-100 items-center rounded-xl'>
                    <input type="text" placeholder="Search..." className="bg-transparent outline-none" />
                    <Image src="/search.png" alt="Search" width={14} height={14} />
                </div>
            </div>

            {/* RIGHT */}
            <div className="w-[20%] flex items-center gap-4 xl:gap-6 justify-end">
                {/* Clerk Loading Indicator */}
                <ClerkLoading>
                    <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
                </ClerkLoading>

                {/* Clerk Loaded Content */}
                <ClerkLoaded>
                    {/* Signed In */}
                    <SignedIn>
                        <div className="cursor-pointer">
                            <Image src="/people.png" alt="Profile" width={24} height={24} />
                        </div>
                        <div className="cursor-pointer">
                            <Image src="/messages.png" alt="Messages" width={20} height={20} />
                        </div>
                        <div className="cursor-pointer">
                            <Image src="/notifications.png" alt="Notifications" width={20} height={20} />
                        </div>
                        <UserButton />
                    </SignedIn>

                    {/* Signed Out */}
                    <SignedOut>
                        <div className="flex items-center gap-2 text-sm">
                            <Image src="/login.png" alt="Login" width={20} height={20} />
                            <Link href="/sign-in">Login/Register</Link>
                        </div>
                    </SignedOut>
                </ClerkLoaded>

                {/* Mobile Menu */}
                <MobileMenu />
            </div>
        </div>
    );
};

export default Navbar;
