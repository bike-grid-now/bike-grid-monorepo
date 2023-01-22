import React from 'react';
import Image, {ImageProps} from "next/image";
import clsx from 'clsx'

export interface BackgroundImageProps extends ImageProps {
	children?: React.ReactNode
	darken?: boolean
}

export default function BackgroundImage({children, darken, ...props}: BackgroundImageProps): JSX.Element {
	return (
		<div className="relative w-full block">
			<Image {...props} className={clsx(
				"absolute top-0 left-0 -z-10 w-full h-full object-cover object-center",
				props.className
			)}/>
			{darken && <div className="absolute top-0 left-0 -z-10 w-full h-full bg-black opacity-40"/>}
			{children}
		</div>
	);
}
