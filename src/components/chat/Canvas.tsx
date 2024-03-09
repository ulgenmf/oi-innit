"use client";
import React, { useEffect, useRef } from "react";
function Canvas() {
	

	return (
		<div className="bg-black w-1/2 min-w-[20%]  items-center flex justify-center p-5  ">
			<img
						alt="avatar"
						className="rounded-full"
						src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fdownload%2Favatar_a21qamuUmZqaraWkpJRmbmdlrWZlbWU.jpg&f=1&nofb=1&ipt=94d6b9b3ac26cd6951c67a732b56e7b274b7118779a2ecbc73afb0df0633ad78&ipo=images"
						style={{
							objectFit: "fill",
						}}
					/>
		</div>
	);
}

export default Canvas;
