import axios from "axios";
import { RestUrl } from "./RestUrl";

export interface UserProfile {
  username: string;
}

const fetchProfile = async () => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await axios.get<UserProfile>(RestUrl.getProfile, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } else {
      console.log("Empty token");
      return null;
    }
  } catch (error) {
    console.error("Error fetching profile:", error);
    return null;
  }
};

export default fetchProfile;
