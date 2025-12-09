import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { ThemeToggle } from "./theme-toggle";

export default function Nevbar() {
  return (
    <nav className="flex justify-between items-center pt-3">
        <div>
            <h1>jakaria</h1>

        </div>
        <div className="flex gap-3">
            <Link className={buttonVariants({variant:'ghost'})} href={'/'}>Home</Link>
            <Link className={buttonVariants({variant:'ghost'})} href={'/block'}>block</Link>
            <Link className={buttonVariants({variant:'ghost'})} href={'/create'}>create</Link>

        </div>
        <div className="flex gap-3 ">
            <Link className={buttonVariants()} href={'/auth/sign-up'}>Sing up</Link>
            <Link className={buttonVariants({variant:"secondary"})} href={'/auth/login'}>Login</Link>
            <ThemeToggle/>

        </div>

    </nav>
  )
}
