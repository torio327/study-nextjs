'use server'


import {GoogleGenerativeAI} from "@google/generative-ai";
import OpenAI from "openai";
import * as fs from "node:fs";

export const getPosts = async () => {
    const response = await fetch(`https://hono-cloudflare.raikan327.workers.dev/post`)
    return response.json()
}

export const getRangePosts = async (pages: number, limit: number) => {
    const response = await fetch(`https://hono-cloudflare.raikan327.workers.dev/post/range/pages/${pages}/limit/${limit}`)
    return await response.json()
}

const openai = new OpenAI()
export const completion = async () => {
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {role: "system", content: "You are a mathmatics teacher"},
            {
                role: "user",
                content: "Solve math quize"
            }
        ]
    })
    return response.choices[0].message
}
const genAI = new GoogleGenerativeAI(process.env.API_KEY!)
const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"});
export const geminai = async (order: string) => {


    const result = await model.generateContent(order)
    return result.response.text();
}

function fileToGenerativePart(path: string, mimeType: string) {
    return {
        inlineData: {
            data: Buffer.from(fs.readFileSync(path)).toString("base64"),
            mimeType
        }
    }
}


export const getTextFromTextAndImage = async (path: string) => {
    const prompt = "Describe this image";
    const imagePart = fileToGenerativePart(path,"image/jpg")

    const result = await model.generateContent([prompt, imagePart]);
    return result.response.text()
}

