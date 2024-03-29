"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { ToggleMenuButton } from "./ToggleMenuButton";
import { ToggleAgentMenuButton } from "./ToggleAgentMenuButton";
import { ActiveLink } from "./ActiveLink";
import { Avatar } from "./Avatar";
import { links } from "@/app/constants";

export const Navbar = ({ isUser: isUserLoggin }: { isUser: boolean }) => {
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.scrollY;
			const isVisibleThreshold = 70;
			const scrollingUp = prevScrollPos > currentScrollPos;

			console.log(currentScrollPos);

			if (currentScrollPos > isVisibleThreshold) {
				setVisible(scrollingUp);
			} else {
				setVisible(true);
			}

			setPrevScrollPos(currentScrollPos);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [prevScrollPos]);
	return (
		<nav
			className={`${!visible && "hidden"} fixed left-0 right-0 top-0 z-40 mx-auto mt-4 w-[90%] rounded-full bg-white px-8 py-4 shadow-lg lg:px-20 `}
		>
			<div className="flex items-center justify-between">
				<Logo />
				<div className="flex items-center gap-2 lg:gap-4 ">
					<div className="hidden gap-4 lg:flex">
						{links.map((link) => (
							<ActiveLink key={link.label} href={link.href}>
								{link.label}
							</ActiveLink>
						))}
					</div>
					{isUserLoggin ? <Avatar className="" /> : <ToggleAgentMenuButton />}
					<Link
						className="inline-flex items-center justify-between gap-2 rounded-full bg-blue-600 px-2 py-2 text-white lg:px-4"
						href="/"
					>
						<p className="hidden lg:block">Znajdź</p> <Search size={20} strokeWidth={2.4} />
					</Link>
					<ToggleMenuButton />
				</div>
			</div>
		</nav>
	);
};
