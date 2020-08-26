import React from 'react';

export const GithubIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="44"
			height="44"
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke="#2F2F2F"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" />
			<path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
		</svg>
	);
};

export const MailIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="44"
			height="44"
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke="#2F2F2F"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" />
			<rect x="3" y="5" width="18" height="14" rx="2" />
			<polyline points="3 7 12 13 21 7" />
		</svg>
	);
};

export const TwitterIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="44"
			height="44"
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke="#2F2F2F"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" />
			<path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" />
		</svg>
	);
};

export function LinkedInIcon(props) {
	return (
		<svg
			width={44}
			height={44}
			viewBox="0 0 24 24"
			fill="none"
			{...props}
		>
			<path
				d="M2.312 9.24h3.9v12.636h-3.9V9.24zM2 5.262c0-.624.217-1.153.65-1.586A2.2 2.2 0 014.262 3c.624 0 1.153.225 1.586.676.45.433.676.962.676 1.586a2.2 2.2 0 01-.676 1.612c-.433.433-.962.65-1.586.65a2.245 2.245 0 01-1.612-.65A2.245 2.245 0 012 5.262zM9.014 9.24h3.744v1.716h.052a3.16 3.16 0 01.52-.728c.225-.243.494-.46.806-.65.312-.19.667-.347 1.066-.468a4.447 4.447 0 011.3-.182c.988 0 1.785.156 2.392.468.607.295 1.075.71 1.404 1.248.347.537.58 1.17.702 1.898.121.728.182 1.517.182 2.366v6.968h-3.9v-6.188c0-.364-.017-.737-.052-1.118a3.143 3.143 0 00-.234-1.092 1.736 1.736 0 00-.598-.806c-.26-.208-.641-.312-1.144-.312-.503 0-.91.095-1.222.286a1.838 1.838 0 00-.728.728c-.156.295-.26.633-.312 1.014a8.85 8.85 0 00-.078 1.196v6.292h-3.9V9.24z"
				fill="#535353"
			/>
		</svg>
	);
}

export const MessageIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="44"
			height="44"
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke="#2F2F2F"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" />
			<path d="M12 20l-3 -3h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-2l-3 3" />
			<line x1="8" y1="9" x2="16" y2="9" />
			<line x1="8" y1="13" x2="14" y2="13" />
		</svg>
	);
};

export const SendIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="44"
			height="44"
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke="#2F2F2F"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" />
			<line x1="10" y1="14" x2="21" y2="3" />
			<path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" />
		</svg>
	);
};
