import React from 'react';
import Container from "@/components/Container";
import clsx from "clsx";

export interface HeroProps {
	children?: React.ReactNode
}

export default function Hero(props: HeroProps): JSX.Element {
	return (
		<div className="py-56">
			<Container>
				{props.children}
			</Container>
		</div>
	);
}

export interface HeroHeadingProps {
	children?: React.ReactNode
}

export function HeroHeading({ children }: HeroHeadingProps) {
	return <h1 className={clsx("text-6xl font-bold mb-6 text-center text-white")}>{children}</h1>
}

export interface HeroTaglineProps {
	children?: React.ReactNode
}

export function HeroTagline(props: HeroTaglineProps) {
	return <p className="text-lg font-semibold text-center text-white">{props.children}</p>
}
