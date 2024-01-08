import Link from "next/link";

export default function Home() {
	return (
		<main className="flex flex-col justify-center items-center h-screen">
			<Link
				href={"/dashboard"}
				className=" rounded-md border-gray-200 border-2 py-2 px-2 hover:bg-gray-100"
			>
				Go to dashboard payments page
			</Link>
		</main>
	);
}
