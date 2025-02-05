"use server";
import { signIn } from "@/auth";

export async function loginAction(formData) {
  // Extract form data
  const mobile = formData.get("mobile");
  const password = formData.get("password");
  try {
    const apiResponse = await fetch(
      "http://162.240.24.203/~primestore/api/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mobile,
          password,
        }),
      }
    );
    const apiData = await apiResponse.json();
    if (apiResponse.ok && apiData.success) {
      const result = await signIn("credentials", {
        mobile,
        password,
        redirect: false,
      });
      if (result?.error) {
        return { error: "فشل تسجيل الدخول" };
      } else {
        return {
          success: true,
          data: {
            user: apiData.data.user,
            token: apiData.data.token,
          },
        };
      }
    } else {
      // Handle API errors
      return {
        error: apiData.message || "رقم الجوال أو كلمة المرور غير صحيحة",
      };
    }
  } catch (error) {
    console.error("Login error:", error);
    return { error: "حدث خطأ أثناء تسجيل الدخول" };
  }
}

export async function signupAction(formData) {
  // Extract form data
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const mobile = formData.get("mobile");
  const address = formData.get("address");

  try {
    const apiUrl = "http://162.240.24.203/~primestore/api/website/register";
    const apiResponse = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json", // Explicitly request JSON
      },
      credentials: "include", // Include cookies for CSRF token
      body: JSON.stringify({
        name,
        email,
        password,
        mobile,
        address,
      }),
    });

    // Check if the response URL is different (redirect)
    if (apiResponse.url !== apiUrl) {
      return { error: "حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى." };
    }

    // Check if response is JSON
    const contentType = apiResponse.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const textResponse = await apiResponse.text();
      console.error("Non-JSON response:", textResponse);
      return { error: "استجابة غير متوقعة من الخادم" };
    }

    const apiData = await apiResponse.json();

    if (apiResponse.ok && apiData.success) {
      return {
        success: true,
        data: {
          user: apiData.data.user,
          token: apiData.data.token,
        },
      };
    } else {
      // Handle API errors
      return {
        error: apiData.message || "فشل في التسجيل",
      };
    }
  } catch (error) {
    console.error("Signup error:", error);
    return { error: "حدث خطأ أثناء التسجيل" };
  }
}
export async function addToCart(productId, quantity) {
  // Here you can handle the logic to add the product to the cart
  // For example, you might send a request to your backend API

  // Simulate a successful addition to the cart
  return { success: true };
}
