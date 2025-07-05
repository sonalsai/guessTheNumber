const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const checkNumber = async (username, number) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/check`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, number }),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error("Error checking number:", error);
    throw error;
  }
};

export const fetchScores = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/scores`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching scores:", error);
    throw error;
  }
};
