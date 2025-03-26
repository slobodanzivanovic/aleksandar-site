export const sendContactForm = async (formData) => {
  try {
    const response = await fetch("/api/sendMail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      return {
        success: true,
        message: data.message || "Vaša poruka je uspešno poslata!",
      };
    } else {
      throw new Error(data.message || "Došlo je do greške pri slanju poruke");
    }
  } catch (error) {
    console.error("Error sending form:", error);
    return {
      success: false,
      message:
        error.message || "Došlo je do greške. Molimo pokušajte ponovo kasnije.",
    };
  }
};
