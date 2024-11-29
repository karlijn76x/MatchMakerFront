const API_URL = "http://localhost:7002/api/Users";
export const createUserAccount = async (userData: {
  email: string;
  passwordHash: string;
  username: string;
  region: string;
  imageName: string;
  summonerName: string;
}) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
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
