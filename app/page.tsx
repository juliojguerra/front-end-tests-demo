'use client';
import UserForm from './ui/user-form';
import { useState } from 'react';
import UserList from './ui/user-list';

export default function Page() {
  const [users, setUsers] = useState<any[]>([]); // Specify type as any[] or a more specific type if available

  const onUserAdd = (user: any) => {
    setUsers([...users, user]);
  };

  return (
    <main className="flex min-h-screen flex-col p-6">
      <div>
        <UserForm onUserAdd={onUserAdd} />
        <hr />
        <UserList users={users} />
      </div>
    </main>
  );
}
