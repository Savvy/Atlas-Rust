'use client'

import { signIn, signOut } from 'next-auth/react'
import { Button } from '../ui/button'
import Icon from '@mdi/react'
import { mdiAccountOutline } from '@mdi/js'

export function SignIn() {
    return <Button
        size={"default"}
        onClick={() => signIn("steam")}
    >
        <Icon path={mdiAccountOutline}
            size={0.8}
            color="white"
            className="mr-1 font-poppins"
        />
        Login
    </Button>
}

export function SignOut() {
    return <Button
    size={"default"}
    onClick={() => signOut()}
>
    <Icon path={mdiAccountOutline}
        size={0.8}
        color="white"
        className="mr-1 font-poppins"
    />
    Logout
</Button>
}