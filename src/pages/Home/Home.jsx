import { useEffect, useRef } from "react";
import { UserButton, useAuth, useUser } from "@clerk/clerk-react";

export default function HomePage() {
  const { getToken } = useAuth();
  const { isLoaded, user } = useUser();
  const didSync = useRef(false);

  useEffect(() => {
    const syncUser = async () => {
      if (!isLoaded || !user || didSync.current) return;

      didSync.current = true;

      const token = await getToken();
      console.log("TOKEN:", token);


      await fetch("http://localhost:5000/api/users/sync", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          email: user.primaryEmailAddress?.emailAddress,
        }),
      });
    };

    syncUser();
  }, [isLoaded, user, getToken]);

  if (!isLoaded) return <p>Loading...</p>;

  return (
    <div>
      <UserButton />
      <p>User ID: {user?.id}</p>
      <p>Email: {user?.primaryEmailAddress?.emailAddress}</p>
    </div>
  );
}
