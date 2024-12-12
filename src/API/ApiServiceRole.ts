const API_URL = "https://localhost:7020/api/Role";

export const getRoles = async () => {
  console.log("Fetching roles from:", API_URL);
  try {
    const response = await fetch(API_URL, {
      mode: "cors",
      credentials: "include",
    });
    console.log("Response status:", response.status);
    if (!response.ok) {
      const errorData = await response.json();
      console.error("API Error:", errorData);
      throw new Error(`API request failed with status ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched roles:", data);
    return data;
  } catch (error) {
    console.error("Error fetching roles:", error);
    throw error;
  }
};