'use client'
import Canvas from "@/components/chat/Canvas";
import Chat from "@/components/chat/Chat";
import Component from "@/components/component/component";
import Image from "next/image";

export default function Home() {
	return (
		<div className="flex flex-row justify-between max-w-[100%] h-screen bg-black ">
		<Component />

				{/* <Canvas />
			<div className="w-2 h-screen bg-lime-400"></div>
			<Chat /> */}
		</div>
	);
}
