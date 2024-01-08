import Header from "@/lib/components/Header";
import { AsideSidebarButton } from "@/lib/components/SidebarButton";
import { NavMenu } from "@/lib/utils/NavMenu";
import { ChevronDown, CreditCardIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<main>
				<section className="flex flex-row justify-between">
					<aside className="bg-surface text-white w-72 left-0 top-0 sticky h-screen overflow-x-hidden overflow-y-scroll px-4 py-4">
						<div className="flex justify-between items-center">
							<div className="flex items-center py-2 gap-3">
								<Image
									src={
										"https://avatars.githubusercontent.com/u/45682747?v=4"
									}
									alt="logo"
									height={48}
									width={48}
									className="rounded-md"
								/>
								<span>
									<h2>Nishyan</h2>
									<Link
										className="text-gray-300 underline underline-offset-3 text-sm"
										href={"/"}
									>
										Visit Store
									</Link>
								</span>
							</div>
							<ChevronDown />
						</div>

						{NavMenu.map((item, id) => (
							<AsideSidebarButton
								key={id}
								icon={item.icon}
								path={item.path}
								title={item.title}
							/>
						))}

						<div className="flex items-center bottom-0 gap-2 bg-[#353c53] px-3 py-2 rounded-md">
							<CreditCardIcon className="bg-[#494f64] p-1 h-8 w-8 rounded-md" />
							<div>
								<p className="text-sm text-gray-400">
									Available credits
								</p>
								<p>222.10</p>
							</div>
						</div>
					</aside>
					<section className="w-full bg-gray-100">
						<Header />
						<section className="p-8">{children}</section>
					</section>
				</section>
			</main>
		</>
	);
};

export default Layout;
