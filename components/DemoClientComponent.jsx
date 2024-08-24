'use client'

import { createClient } from "@/utils/supabase/client"
import { useEffect, useState } from "react"

export default function DemoClientComponent() {
    const [user, setUser] = useState(null)

    useEffect(() => {
        async function getUser() {
            const supabase = createClient()
            const { data, error } = await supabase.auth.getUser(); // Corrected line
            if (error || !data?.user) {
                console.log('no user')
            } else {
                setUser(data.user)
            }
        }
        getUser()
    }, [])

    return (
        <div>
            {user ? <p>Welcome, {user.email}</p> : <p>No user logged in</p>}
        </div>
    )
}
