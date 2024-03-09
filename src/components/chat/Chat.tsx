/* eslint-disable @next/next/no-img-element */
"use client";

import { useChat } from "ai/react";
import { useEffect, useState } from "react";

import axios from "axios";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
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
console.log(messages)


const a=[
	{
					"content": "asd:Arrr, me matey! Ye be speakin' in tongues! I be not understandin' yer gibberish. If ye have a question or a comment, ye best be speakin' clear and proper, like a true pirate. So, raise yer voice and let me know what ye be wantin' to say, else I'll be thasd",
					"role": "user",
					"createdAt": "2023-12-31T13:05:22.450Z",
					"id": "FiN3Vis"
	},
	{
					"id": "rDHn2JR",
					"createdAt": "2023-12-31T13:05:23.374Z",
					"content": "Arrr, me hearty! Ye be talkin' gibberish there! Speak up, what be yer question or comment, matey?",
					"role": "assistant"
	},
	{
					"id": "rDHn2JR",
					"createdAt": "2023-12-31T13:05:23.374Z",
					"content": "Arrr, me hearty! Ye be talkin' gibberish there! Speak up, what be yer question or comment, matey?",
					"role": "assistant"
	},
	{
					"id": "rDHn2JR",
					"createdAt": "2023-12-31T13:05:23.374Z",
					"content": "Arrr, me hearty! Ye be talkin' gibberish there! Speak up, what be yer question or comment, matey?",
					"role": "assistant"
	},
	{
					"id": "rDHn2JR",
					"createdAt": "2023-12-31T13:05:23.374Z",
					"content": "Arrr, me hearty! Ye be talkin' gibberish there! Speak up, what be yer question or comment, matey?",
					"role": "assistant"
	},
	{
					"id": "rDHn2JR",
					"createdAt": "2023-12-31T13:05:23.374Z",
					"content": "Arrr, me hearty! Ye be talkin' gibberish there! Speak up, what be yer question or comment, matey?",
					"role": "assistant"
	},
	{
					"id": "rDHn2JR",
					"createdAt": "2023-12-31T13:05:23.374Z",
					"content": "Arrr, me hearty! Ye be talkin' gibberish there! Speak up, what be yer question or comment, matey?",
					"role": "assistant"
	},
	{
					"id": "rDHn2JR",
					"createdAt": "2023-12-31T13:05:23.374Z",
					"content": "Arrr, me hearty! Ye be talkin' gibberish there! Speak up, what be yer question or comment, matey?",
					"role": "assistant"
	},
	{
					"id": "rDHn2JR",
					"createdAt": "2023-12-31T13:05:23.374Z",
					"content": "Arrr, me hearty! Ye be talkin' gibberish there! Speak up, what be yer question or comment, matey?",
					"role": "assistant"
	},
	{
					"id": "rDHn2JR",
					"createdAt": "2023-12-31T13:05:23.374Z",
					"content": "Arrr, me hearty! Ye be talkin' gibberish there! Speak up, what be yer question or comment, matey?",
					"role": "assistant"
	},
	{
					"content": "flgdsfh",
					"role": "user",
					"createdAt": "2023-12-31T13:05:42.727Z",
					"id": "xrJ2OdQ"
	},
	{
					"id": "vFiceh1",
					"createdAt": "2023-12-31T13:05:43.675Z",
					"content": "Arrr, me matey! Ye be speakin' in tongues! I be not understandin' yer gibberish. If ye have a question or a comment, ye best be speakin' clear and proper, like a true pirate. So, raise yer voice and let me know what ye be wantin' to say, else I'll be thinkin' ye be a scurvy dog tryin' to confuse me.",
					"role": "assistant"
	}
]
	return (
		<>
			<div className="flex flex-row items-center justify-center w-1/2 h-screen gap-2 text-white bg-black ">
				<div className="relative flex flex-col items-start justify-end w-full h-full gap-2 px-3 pb-16 ">
											{a.map((message) => (
							<div
								key={message.id}
								className="flex items-center w-full gap-2 px-2 py-2 pl-2 overflow-auto border shrink-0 odd:bg-slate-900/20 border-slate-600/10 rounded-3xl"
							>
								{message.role === "user" ? (
									<div className="flex items-center justify-start ">
										<Avatar className="flex flex-row my-1 border-2 border-purple-500 shrink-0 ">
											<AvatarImage  src="https://github.com/shadcn.png" className="w-20 h-20" alt="@shadcn" />
											<AvatarFallback>CN</AvatarFallback>
										</Avatar>
										div
										<div className="ml-3 text-start ">
											<p className="font-semibold">
												<span className="mr-1">User:</span>
												{message.content}
											</p>
										</div>
										
									</div>
								) : (
									<div className="flex items-center justify-start min-h-[20px] w-full shrink-0    ">
										<Avatar className="self-start my-1 bg-black border-2 border-orange-300 shrink-0">
											<AvatarImage
											className="h-20"
												src="https://pngimg.com/uploads/cat/cat_PNG103.png"
												alt="@shadcn"
											/>
											<AvatarFallback>CN</AvatarFallback>
										</Avatar>
										<div className="ml-3 text-start ">
											<p className="font-semibold text-lime-300">
												<span className="mr-1">AI:</span>
												{message.content}
											</p>
											div
										</div>
									</div>
								)}
							</div>
						))}

					<form
						onSubmit={handleSubmit}
						className="absolute bottom-0 flex items-center w-full px-5 mx-auto mb-3 place-self-end"
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
