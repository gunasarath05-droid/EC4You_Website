import { FORM_CONFIG } from '../config/formConfig';

/**
 * Submits form data to Google Apps Script (which updates Google Sheets and emails info@ec4you.in)
 * @param {Object} formData - Form fields object
 * @returns {Promise<{success: boolean, message: string}>}
 */
export async function submitFormData(formData) {
  const scriptUrl = FORM_CONFIG.GOOGLE_SCRIPT_URL?.trim();

  // Add metadata
  const payload = {
    ...formData,
    submittedAt: new Date().toISOString(),
    recipientEmail: FORM_CONFIG.RECIPIENT_EMAIL,
    siteName: FORM_CONFIG.SITE_NAME,
  };

  // If no script URL is configured yet, simulate success for development & log payload
  if (!scriptUrl) {
    console.warn(
      '⚠️ [EC4YOU Form] Google Apps Script URL not configured in src/config/formConfig.js. Simulating submission:',
      payload
    );
    // Simulate short network delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    return {
      success: true,
      simulated: true,
      message: 'Form submitted successfully! (Setup your Google Script URL to enable live Sheets & Email sync)',
    };
  }

  try {
    // Submit to Google Apps Script Web App
    // Note: mode 'no-cors' allows submission without CORS blocking on client side
    await fetch(scriptUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    return {
      success: true,
      simulated: false,
      message: 'Thank you! Your details have been submitted and sent to our team.',
    };
  } catch (error) {
    console.error('Error submitting form to Google Apps Script:', error);
    return {
      success: false,
      message: 'Something went wrong while submitting. Please try again or reach out to info@ec4you.in directly.',
    };
  }
}
