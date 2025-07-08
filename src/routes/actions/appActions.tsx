import type { ActionFunctionArgs } from "@remix-run/node";
import type { Task } from "@/types";
import { databases } from "@/lib/appwrite";

const VITE_APPWRITE_DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;

const createtask = async (data: Task)=>{
    try{
        return await databases.createDocument()
    } catch(err){
        console.log(err);
    }
}

const appAction = async ({request}) => {
    const data = await request.json() as Task;
    console.log(data)
}

export default appAction;