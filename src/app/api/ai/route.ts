import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const body= req.body()
    const message= body.messages??[]

    async function query(data) {
        const response = await fetch(
            "http://localhost:3000/api/v1/prediction/1b7c82df-240e-4f3f-961d-1a6f9bff7f7c",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        );
        const result = await response.json();
   console.log(result)
        return result;
    }

console.log(res)
}
