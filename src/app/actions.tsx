"use server";

import { Conversation, PrismaClient } from "@prisma/client";
import Message from "../components/message";
import { use } from "react";
import { GetFirstWord } from "../utils/helping functions";
export const prisma = new PrismaClient();

export default async function messageAction(formData: FormData) {
	const question = formData.get("question") as string;
	const userID = process.env.FURKAN_ID as string;

	let user = await prisma.user.findFirst({
		where: {
			name: "Furkan",
		},
	});
	if (!user) {
		await prisma.user.create({
			data: {
				name: "Furkan",
				email: "<EMAIL>",
				password: "<PASSWORD>",
				role: "user",
			},
		});
		console.log(user);
	}

	let conversation: Conversation | null = await prisma.conversation.findFirst({
		where: {
			userId: user?.id,
		},
	});

	if (user && !conversation) {
		conversation = await prisma.conversation.create({
			data: {
				title: GetFirstWord(question),
				userId: user.id,
			},
		});
		if (conversation) {
			await prisma.message.create({
				data: {
					content: question,
					sender: "user",
					conversationId: conversation.id,
				},
			});
		} else {
			console.error("Failed to create conversation");
		}
	}



	// // Then, create the message
	// await prisma.message.create({
	// 	data: {
	// 		content: question,
	// 		sender: "user",
	// 		conversationId: conversation.id,
	// 	},
	// });
	async function query(data: any) {
		const response = await fetch(
			"http://localhost:3000/api/v1/prediction/1b7c82df-240e-4f3f-961d-1a6f9bff7f7c",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			}
		);
		const result = await response.json();

		return result;
	}
	query({ question: `${question}` }).then(async (response) => {
		try {
			if (conversation) {
				await prisma.message.create({
					data:{
							content: response.text,
							sender: "assitant",
							conversationId: conversation.id,
					}
				});
				console.log(response)
			} else {
				console.error("Failed to create conversation");
			}
			console.log(response)
		} catch (error) {
			console.log(error);

		}
	});
}
