import { SignUp } from "@clerk/nextjs";
export default function Page() {
    return (
        <div className="h-[calc(100vh-96px)] flex items-center justify-center top-2">
            <video className="absolute top-0 left-0 w-full h-full object-cover z-0" autoPlay loop muted>
                <source src="/loginVideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="relative z-10 bg-white bg-opacity-80 p-8 rounded-md shadow-md">
                <SignUp />
            </div>
        </div>
    );
}