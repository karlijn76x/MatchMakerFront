const API_URL = "https://localhost:7020/api/User";
export const createUserAccount = async (userData: {
  email: string;
  passwordHash: string;
  username: string;
  region: string;
  rank: string;
  imageName: string;
  summonerName: string;
}) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    console.log("Response status:", response.status);

    if (!response.ok) {
      let errorMessage = "An unknown error occurred";
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorMessage;
      } catch {
        console.error("Failed to parse error response as JSON");
      }
      throw new Error(errorMessage);
    }

    return await response.json();
  } catch (error) {
    console.error("Error creating account:", error);
    throw error;
  }
};

export const CompleteUserAccount = async (userData: {
  id: string; 
  bio: string;
  summonerName: string;
  preferences: {
    roleId: number;
    laneId: number;
    championId: number;
  }[];
}) => {
  const API_URL = `https://localhost:7020/api/User`;
  try {
    const response = await fetch(API_URL, {
      method: "PUT",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    console.log("Response status:", response.status);

    if (!response.ok) {
      let errorMessage = "An unknown error occurred";
      try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
      } catch (parseError) {
          console.error("Failed to parse error response:", parseError);
      }
      console.error("Server responded with error:", errorMessage);
      throw new Error(errorMessage);
  }

  if (response.status === 204) {
    console.log("Account updated successfully with no additional content.");
    return; 
  }
  } catch (error) {
    console.error("Error creating account:", error);
    throw error;
  }
}
