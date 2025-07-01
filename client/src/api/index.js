const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

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
