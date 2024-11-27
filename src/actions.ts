"use server"

import { sessionOptions, SessionData, defaultSession } from "@/lib"
import { getIronSession } from "iron-session"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

let username = 'luis'
let isPro = true

export const getSession = async()=>{
    const cookieStore = await cookies();
    const session = await getIronSession<SessionData>(cookieStore, sessionOptions);
    if(!session.isLoggedIn){
        session.isLoggedIn = defaultSession.isLoggedIn;
    }
    return session;
}

export const login = async(prevState:{error: undefined | string}, formData: FormData)=>{
    const session = await getSession();
    
    const formUsername = formData.get('username') as string;
    const formPassword = formData.get('password') as string;

    //Check user in the DB
    // const user = await db.getUser({username, password})
    if(formUsername !== username){
        return {error: "Wrong credentials!"};
    }

    session.userId = "1";
    session.userName = formUsername;
    session.isPro = isPro;
    session.isLoggedIn = true;

    await session.save();
    redirect("/");
}

export const logout = async()=>{
    const session = await getSession();
    session.destroy();
    redirect("/");
}