export async function getMeals() {
  try {
    const response = await fetch(
      "https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals",
    );
    if (!response.ok) {
      throw new Error("Fetch meals failed.");
    }
    return response.json();
  } catch (error) {
    console.log("Fetch error", error);
    return [];
  }
}
