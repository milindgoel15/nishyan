"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const AsideSidebarButton = ({
	icon,
	path,
	title,
}: {
	path: string;
	title: string;
	icon: JSX.Element;
}) => {
	const pathname = usePathname();

	return (
		<>
			<Link
				href={path}
				className={`flex flex-row my-1 justify-start py-3 gap-2 px-3 rounded-md items-center ${
					pathname == path
						? "bg-[#343c53] cursor-not-allowed"
						: "text-gray-300 hover:bg-[#3a435d] transition-all"
				} `}
			>
				<span> {icon} </span>
				<span>{title}</span>
			</Link>
		</>
	);
};
