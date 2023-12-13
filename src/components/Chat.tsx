/* eslint-disable @next/next/no-img-element */
"use client";

import { useChat } from "ai/react";
import { useEffect, useState } from "react";
import { text } from "stream/consumers";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import axios from "axios";
const verbatikKey = process.env.VERBATIK_API_KEY;

export default function Chat() {
	const { messages, input, handleInputChange, handleSubmit } = useChat({
		api: "api/chat",
	});
	const url = "https://tts.verbatik.com/api/v1/tts";
	const headers = {
		"Content-Type": "application/ssml+xml",
		Authorization: `Bearer ${verbatikKey}`,
	};
	const data = `
<speak version='1.0'>
    <voice name='en-US-ChristopherNeural'>Hello, world!</voice>
</speak>
`;
	useEffect(() => {
		axios({
			url: url,
			method: "POST",
			headers: headers,
			data: data,
			responseType: "arraybuffer",
		})
			.then((response) => {
				const audioBlob = new Blob([response.data], { type: "audio/mpeg" });
				const audioUrl = URL.createObjectURL(audioBlob);
				const audio = new Audio(audioUrl);
				audio.play();
			})
			.catch((err) => {
				console.error(err);
			});
	}, [messages]);

	return (
		<>
			<div className="  text-white bg-black flex-row  items-center  gap-2 h-screen  flex justify-center ">
				<div className="w-4/6   ">
					<img
						alt="avatar"
						className="rounded-full"
						src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fdownload%2Favatar_a21qamuUmZqaraWkpJRmbmdlrWZlbWU.jpg&f=1&nofb=1&ipt=94d6b9b3ac26cd6951c67a732b56e7b274b7118779a2ecbc73afb0df0633ad78&ipo=images"
						style={{
							objectFit: "fill",
						}}
					/>
				</div>

				<div className="w-3/6 h-full    relative flex   flex-col  px-3 justify-end pb-16 ">
					<div className="overflow-auto  flex flex-col gap-2">
						{messages.map((message) => (
							<div
								key={message.id}
								className="flex items-center px-2 odd:bg-slate-900/20 py-2 border border-slate-600/10  rounded-3xl pl-2 gap-2"
							>
								{message.role === "user" ? (
									<div className="flex items-center   ">
										<Avatar className="   my-1 border-2 border-purple-500">
											<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
											<AvatarFallback>CN</AvatarFallback>
										</Avatar>
										<div className="text-start ml-3 ">
											<p className="font-semibold">
												<span className="mr-1">User:</span>
												{message.content}
											</p>
										</div>
									</div>
								) : (
									<>
										<Avatar className="self-start  bg-black my-1 border-2 border-orange-300">
											<AvatarImage
												src="https://pngimg.com/uploads/cat/cat_PNG103.png"
												alt="@shadcn"
											/>
											<AvatarFallback>CN</AvatarFallback>
										</Avatar>
										<div className="text-start ml-3 ">
											<p className="font-semibold text-lime-300">
												<span className="mr-1">AI:</span>
												{message.content}
											</p>
										</div>
									</>
								)}
							</div>
						))}
					</div>
					<form
						onSubmit={handleSubmit}
						className="flex place-self-end    absolute bottom-0 mx-auto w-full px-5 mb-3  items-center"
					>
						<Input
							value={input}
							onChange={handleInputChange}
							className="flex-1 bg-[#2e2e2e] ring-0 text-white placeholder-gray-500"
							placeholder="Enter your message..."
						/>
						<Button className="ml-2 bg-[#bd1e59]">Send</Button>
					</form>
				</div>
			</div>
		</>
	);
}
