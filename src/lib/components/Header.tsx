import SearchBar from "@/lib/components/SearchBar";
import {
	ChevronDown,
	HelpCircleIcon,
	MessageSquareDotIcon,
	SearchIcon,
} from "lucide-react";

const Header = () => {
	return (
		<>
			<header className="grid grid-cols-3 items-center py-4 px-8 bg-white border-b-2">
				<div className="flex flex-row gap-2">
					<h2 className="font-medium">Payments</h2>
					<span className="flex gap-1 items-center">
						<HelpCircleIcon className="h-5 w-5" />
						<p>How it works</p>
					</span>
				</div>
				<SearchBar
					leading={<SearchIcon className="text-gray-500 h-5 w-5" />}
					id="search"
					name="search"
					placeholder="Search features, tutorials, etc."
					className="w-full pl-10 pr-2 py-3 "
				/>

				<div className="flex gap-2 justify-end">
					<MessageSquareDotIcon className="bg-gray-600 text-white h-10 w-10 p-2 rounded-full" />
					<ChevronDown className="bg-gray-600 text-white h-10 w-10 p-1 rounded-full" />
				</div>
			</header>
		</>
	);
};

export default Header;
