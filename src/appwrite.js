import { Client, Databases, Storage, Account } from "appwrite";

// Add this to your appwrite.js exports:

const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1") // Your Appwrite endpoint
    .setProject('67e17677001f0c141998'); // Your project ID

export const databases = new Databases(client);
export const storage = new Storage(client);
export const account = new Account(client);
