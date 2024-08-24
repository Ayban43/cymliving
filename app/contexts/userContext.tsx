// // src/contexts/UserContext.tsx
// import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
// import { createClient } from '@/utils/supabase/server';

// interface User {
//     name: string;
//     email: string | null;
//     avatarUrl: string | null;
// }

// interface UserContextType {
//     user: User | null;
//     loading: boolean;
// }

// const UserContext = createContext<UserContextType | undefined>(undefined);

// export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//     const [user, setUser] = useState<User | null>(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchUser = async () => {
//             const supabase = createClient();
//             const { data, error } = await supabase.auth.getUser();

//             if (error || !data?.user) {
//                 console.error('Error fetching user:', error);
//             } else {
//                 setUser({
//                     email: data.user.email,
//                 });
//             }

//             setLoading(false);
//         };

//         fetchUser();
//     }, []);

//     return (
//         <UserContext.Provider value={{ user, loading }}>
//             {children}
//         </UserContext.Provider>
//     );
// };

// export const useUser = () => {
//     const context = useContext(UserContext);
//     if (context === undefined) {
//         throw new Error('useUser must be used within a UserProvider');
//     }
//     return context;
// };
