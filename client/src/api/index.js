const API_BASE_URL = "http://localhost:3000";

export const checkNumber = async (number) => {
  try {
    const response = await fetch(`${API_BASE_URL}/checkNumber?number=${number}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error("Error checking number:", error);
    throw error;
  }
};
