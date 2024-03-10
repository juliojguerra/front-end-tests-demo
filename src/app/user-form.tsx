import { useState } from "react";

function UserForm({ onUserAdd }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    onUserAdd({ name, email });
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
