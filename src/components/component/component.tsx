import messageAction from "@/app/actions";
import { Button } from "@/components/ui/button";
import { useChat } from "ai/react";
import { useState } from "react";

export default  function Deneme() {
	const[messages,setMessages]=useState<string[]>([]);

	awat prisma.

	return (
		<main className="flex flex-col items-center justify-center w-screen h-screen min-h-screen p-4 overflow-auto text-center bg-black">
			<div className="flex flex-col w-1/3 max-w-md py-24 mx-auto overflow-y-auto text-white border-gray-200 border-1 p-2h-2/3 shrink-0 stretch">
				{/* {messages.map((m) => (
					<div className="flex gap-2 group-underline text-start odd:text-blue-500 group-[bg-]:" key={m.id}>
						{m.role === "user" ? "User: " : "AI: "}
						{m.content}
					</div>
				))} */}

				<div className="flex items-center h-20 justfy-center">
					<form
						action={messageAction}
					>
						<label>
							Say something...
							<input
								className="fixed bottom-0 w-full max-w-md p-2 mb-8 text-black bg-red-600 border border-gray-300 rounded shadow-xl"
								name="question"
							/>
							{messages}
						</label>
						<button type="submit">Send</button>
					</form>
				</div>
			</div>
		</main>
	);
}
