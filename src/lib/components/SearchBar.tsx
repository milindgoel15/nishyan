import React from "react";

type SearchInputProp = React.DetailedHTMLProps<
	React.InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
> & {
	leading?: React.ReactNode;
	trailing?: React.ReactNode;
	className?: string;
};

const SearchBar = ({
	className,
	leading,
	trailing,
	...props
}: SearchInputProp) => {
	return (
		<>
			<span className="relative flex items-center">
				{leading ? (
					<>
						<span className="absolute inset-y-0 left-0 flex items-center p-3">
							{leading}
						</span>
					</>
				) : (
					<></>
				)}
				<input
					className={`rounded-md bg-gray-200 text-black leading-tight focus:outline-none focus:shadow-outline ${className}`}
					{...props}
				/>
				{trailing ? (
					<>
						<span className="absolute inset-y-0 right-0 flex items-center p-3">
							{trailing}
						</span>
					</>
				) : (
					<></>
				)}
			</span>
		</>
	);
};

export default SearchBar;
