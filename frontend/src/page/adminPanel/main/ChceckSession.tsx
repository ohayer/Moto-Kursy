import { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthProvider";
import fetchProfile, { UserProfile } from "../../../api/FetchProfile";

// component to check if the user is still logged in and fetch the user profile every 60 seconds
const useCheckSession = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const { logout } = useAuth();

  useEffect(() => {
    const fetchAndSetProfile = async () => {
      try {
        const data = await fetchProfile();
        if (data) {
          setProfile(data);
        } else {
          logout();
        }
      } catch (error) {
        console.error("Failed to fetch profile:", error);
        logout();
      }
    };

    fetchAndSetProfile();
    const interval = setInterval(fetchAndSetProfile, 60000); // Check token validity every 60 seconds

    return () => clearInterval(interval);
  }, []);
  return { profile, logout };
};

export default useCheckSession;
