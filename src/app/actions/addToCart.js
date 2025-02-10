"use server";

import { auth } from "@/auth"; // Import the auth function
import axios from "axios";
import { redirect } from "@/i18n/routing";

export async function addToCart(formData) {
  // Extract form data
  const productId = parseInt(formData.get("productId"));
  const quantity = parseInt(formData.get("quantity"));

  // Retrieve the session
  const session = await auth();

  // Check if the user is authenticated

  try {
    const url = `https://perfect-teamwork.com/primesbackend/api/website/add-to-cart`;

    // Make a POST request to the backend API
    const response = await axios.post(
      url,
      {
        product_id: productId,
        quantity: quantity,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json", // Explicitly request JSON
          lang: "en",
          Authorization: `Bearer ${session.user.token}`,
        },
      }
    );

    // Handle the response
    if (response.data.success) {
      return { success: true };
    } else {
      console.error("Failed to add product to cart:", response.data.message);
      return { success: false, message: response.data.message };
    }
  } catch (error) {
    console.error(
      "Error adding proddduct to cart:",
      error.response?.data || error.message
    );
    return {
      success: false,
      message: error.response?.data?.message || error.message,
    };
  }
}
