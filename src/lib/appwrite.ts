import {Client , Databases, ID, Query} from 'appwrite';

const VITE_APPWRITE_ENDPOINT = import.meta.env.VITE_APPWRITE_ENDPOINT;
const VITE_APPWRITE_PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;

const client = new Client().setEndpoint(VITE_APPWRITE_ENDPOINT).setProject(VITE_APPWRITE_PROJECT_ID);

const databases = new Databases(client);

export { databases, ID, Query };