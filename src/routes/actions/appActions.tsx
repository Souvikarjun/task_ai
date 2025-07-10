
import type { Task } from "@/types";
import { databases } from "@/lib/appwrite";
import { generateId, getUserId } from "@/lib/utils";

const VITE_APPWRITE_DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;

const createtask = async (data: Task)=>{
    try{
        return await databases.createDocument(
            VITE_APPWRITE_DATABASE_ID,
            "task",
            generateId(),
            {... data, userId: getUserId()}
        )
    } catch(err){
        console.log(err);
    }
}

const appAction = async ({request}) => {
    const data = await request.json() as Task
    // console.log(data)
    if(request.method == 'POST'){
        console.log(data)
        return await createtask(data)
    }
}

export default appAction;