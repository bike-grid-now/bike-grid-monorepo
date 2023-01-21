import React from 'react';

export interface ContainerProps {
	children?: React.ReactNode
}

export default function Container(props: ContainerProps): JSX.Element {
	return (
		<div className="max-w-6xl mx-auto px-4">
			{props.children}
		</div>
	);
}
