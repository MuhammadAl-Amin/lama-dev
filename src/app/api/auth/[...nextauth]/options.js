import {NextAuthOptions} from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import bcryptjs from 'bcryptjs';
import dbConnect from '@/lib/dbConnect';
import UserModel from '@/model/User';




export const authOptions: NextAuthOptions = {
    providers[
        CredentialsProvider({
            id: "Credentials",
            name: "Credentials",
            credentials: {
                username: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
              },
        })
    ]
}