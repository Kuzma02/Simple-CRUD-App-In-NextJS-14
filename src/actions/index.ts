"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";

export async function createUser(userInput: string){
    await db.user.create({
        data: {
            name: userInput
        }
    })
    redirect("/");
    
}

export async function editUser(id: number, userInput: string) {
    
    
    await db.user.update({
      where: { id },
      data: { name: userInput },
    });
  
    redirect(`/user/${id}`);
  }