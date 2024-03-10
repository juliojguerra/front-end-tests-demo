import React, { useState } from "react";

interface UserFormProps {
  onUserAdd?: (userData: { name: string; email: string }) => void;
}

function UserForm({ onUserAdd = () => {} }: UserFormProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Use optional chaining to call onUserAdd if it's provided
    onUserAdd?.({ name, email });
  };

  return (
    <form onSubmit={handleSubmit} className="text-black">
      <div>
        <label className="text-white"> Name </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="text-black"
        />
      </div>
      <div>
        <label className="text-white">Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-black"
        />
      </div>
      <button className="text-white">Add User</button>
    </form>
  );
}

export default UserForm;
