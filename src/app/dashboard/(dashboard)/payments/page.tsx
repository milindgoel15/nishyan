import PaginationBar from "@/lib/components/PaginationBar";
import SearchBar from "@/lib/components/SearchBar";
import { transactions } from "@/lib/utils/Transactions";
import { getIndianRupee } from "@/lib/utils/currency_helper";
import {
	ArrowDownUpIcon,
	ChevronDown,
	Download,
	InfoIcon,
	SearchIcon,
} from "lucide-react";
import Link from "next/link";

const Page = () => {
	return (
		<>
			<div className="flex justify-between items-center">
				<h3 className="font-medium text-xl">Overview</h3>
				<select
					name="month"
					id="month"
					className="px-2 py-2 rounded-md border-2 border-gray-200 "
				>
					<option value={"lastmonth"}>Last Month</option>
				</select>
			</div>
			<div className="flex gap-4 py-4">
				<div className="bg-white w-full rounded-md p-4 flex flex-col gap-5">
					<h4>Online Orders</h4>
					<p className="font-medium text-3xl">231</p>
				</div>
				<div className="bg-white w-full rounded-md p-4 flex flex-col gap-5">
					<h4>Amount received</h4>
					<p className="font-medium text-3xl">
						{getIndianRupee.format(2392312.19)}
					</p>
				</div>
			</div>
			<div className="flex justify-between py-4">
				<h3 className="font-medium text-xl">Transactions | This month</h3>
			</div>
			<div className="bg-white p-3 rounded-md h-full">
				<span className="flex justify-between items-center">
					<SearchBar
						leading={<SearchIcon className="text-gray-500 h-4 w-4" />}
						id="search"
						name="search"
						placeholder="Search by Order ID..."
						className="pl-10 pr-2 py-2 "
					/>
					<div className="flex flex-row items-center gap-2">
						<button className="flex items-center gap-2 rounded-md p-1 px-2 border-2 border-gray-200 hover:bg-gray-100">
							<p className="text-lg">Sort</p>
							<ArrowDownUpIcon className="w-5 h-5 text-gray-700" />
						</button>
						<button className=" rounded-md border-gray-200 border-2 hover:bg-gray-100">
							{" "}
							<Download className="text-gray-700 h-9 w-9 p-2" />{" "}
						</button>
					</div>
				</span>
				<table className="w-full my-2">
					<thead>
						<tr className="bg-gray-200">
							<th className="px-1 py-2 font-medium" align="left">
								Order ID
							</th>
							<th
								className="px-1 py-2 font-medium flex gap-1 justify-start items-center"
								align="left"
							>
								Order Date{" "}
								<ChevronDown className="text-gray-500 h-4 w-4" />
							</th>
							<th className="px-1 py-2 font-medium" align="right">
								Order Amount
							</th>
							<th
								className="px-1 py-2 font-medium flex gap-1 justify-end items-center"
								align="right"
							>
								Transaction fees{" "}
								<InfoIcon className="h-5 w-5 text-gray-500" />
							</th>
						</tr>
					</thead>
					<tbody>
						{transactions.map((transaction, id) => (
							<tr key={id} className="">
								<td className="px-1 py-4 border-b-2">
									<Link
										className="text-blue-600"
										href={`/`}
										// href={`/${transaction.orderId}`}
									>
										{transaction.orderId}
									</Link>
								</td>
								<td className="px-1 py-4 border-b-2">
									{transaction.orderDate.toLocaleDateString()}
								</td>
								<td className="px-1 py-4 border-b-2" align="right">
									{getIndianRupee.format(transaction.orderAmt)}
								</td>
								<td className="px-1 py-4 border-b-2" align="right">
									{getIndianRupee.format(transaction.fees)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<PaginationBar hasNextPage hasPrevPage totalPages={40} />
			</div>
		</>
	);
};

export default Page;
