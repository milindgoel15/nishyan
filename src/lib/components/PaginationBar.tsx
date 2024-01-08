"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";

interface PaginationBarProps {
	hasNextPage: boolean;
	hasPrevPage: boolean;
	totalPages: number;
}

const PaginationBar = ({
	hasNextPage,
	hasPrevPage,
	totalPages,
}: PaginationBarProps) => {
	const searchParams = useSearchParams();

	const page: number = parseInt(searchParams.get("page") ?? "1") ?? 1;

	return (
		<span className="flex justify-center py-5 gap-5 items-center">
			<button
				className={` text-slate-500 border-2 border-gray-200 px-3 py-2 rounded-md flex items-center gap-2`}
				disabled={!hasPrevPage}
			>
				<ChevronLeftIcon /> Previous
			</button>

			<p className="text-lg">
				{page} / {Math.ceil(totalPages / 10)}
			</p>

			<button
				className={` text-slate-500 border-2 border-gray-200 px-3 py-2 rounded-md flex items-center gap-2`}
				disabled={!hasNextPage}
			>
				Next
				<ChevronRightIcon />
			</button>
		</span>
	);
};

export default PaginationBar;
