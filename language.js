// language.js

function changeLanguage(language) {
    // You can implement language-specific logic here
    // For demonstration purposes, let's assume we have language-specific text stored in an object

    // Example language-specific texts
    const languageTexts = {
        english: {
            aboutUs: "Popular Subjects on LearnEd",
            contactUs: "Contact Us"
            // Add more language-specific texts as needed
        },
        spanish: {
            aboutUs: "Sobre Nosotros",
            contactUs: "Contáctenos"
            // Add more language-specific texts as needed
        }
        // Add more languages as needed
    };

    // Update text content based on selected language
    if (language === "english") {
        // Update text content for English
        document.getElementById("welcome-message").innerText = languageTexts.english.welcomeMessage;
        document.getElementById("about-us").innerText = languageTexts.english.aboutUs;
        document.getElementById("contact-us").innerText = languageTexts.english.contactUs;
    } else if (language === "spanish") {
        // Update text content for Spanish
        document.getElementById("welcome-message").innerText = languageTexts.spanish.welcomeMessage;
        document.getElementById("about-us").innerText = languageTexts.spanish.aboutUs;
        document.getElementById("contact-us").innerText = languageTexts.spanish.contactUs;
    }
    // Add more conditions for other languages

    // You can add more logic here based on your specific requirements
    // For example, you can load language-specific content from external files or APIs
}
