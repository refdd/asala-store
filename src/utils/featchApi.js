export const baseUrl = "http://162.240.24.203/~primestore/api";

// Helper function to get language from localStorage safely
// function getLanguage() {
//   if (typeof window !== 'undefined') {
//     return localStorage.getItem('lang') || 'en'; // Default to 'en' if not found
//   }
//   return 'en'; // Fallback for server-side
// }

export async function getData(url, lang, token) {
  const res = await fetch(`${baseUrl}${url}`, {
    next: { revalidate: 10 },
    headers: {
      lang: lang || "ar",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getItem(url, lang, token) {
  const res = await fetch(`${baseUrl}${url}`, {
    cache: "no-store",
    headers: {
      lang: lang || "ar",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// Rest of your file remains the same...
