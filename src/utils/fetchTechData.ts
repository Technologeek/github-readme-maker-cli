export async function fetchTechData() {
  try {
    const response = await fetch(
      'https://raw.githubusercontent.com/VishwaGauravIn/github-profile-readme-maker/refs/heads/main/data/tech.js',
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const text = await response.text();
    // Parse the response to extract the data object
    const match = text.match(/export const data = (.*);/);
    if (!match) throw new Error('Failed to extract data from response');
    return JSON.parse(match[1]);
  } catch (error) {
    console.error('Failed to fetch tech data:', error);
  }
}
