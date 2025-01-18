import Link from "next/link";

export default function HomePage() {
  return (
    <div className="p-4 bg-black text-white h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Lister</h1>
        <p className="text-xl">A to-do list app built with Next.js, Torso,and Clerk.</p>
        <p >To get started, sign in with your email address.</p>
        <Link href="/sign-in">
          Sign in
        </Link>
    </div>
  );
}
