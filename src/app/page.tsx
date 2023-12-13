import Chat from "@/components/Chat";
import Image from "next/image";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-between ">
			<Chat />
		</div>
	);
}
