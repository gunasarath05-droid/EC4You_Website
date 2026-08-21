/**
 * =========================================================================
 * EC4YOU DIGITAL MARKETING - GOOGLE APPS SCRIPT FOR FORM SUBMISSIONS
 * =========================================================================
 * Features:
 * 1. Appends all website form submissions into Google Sheet.
 * 2. Uploads Resumes directly to Google Drive folder "EC4YOU Resumes".
 * 3. Saves clickable Google Drive link in Google Sheet.
 * 4. Sends formatted HTML email notification to info@ec4you.in with Resume link.
 *
 * HOW TO GRANT FULL DRIVE PERMISSION & DEPLOY:
 * 1. Open your Google Sheet ("EC4YOU Website Leads").
 * 2. Click "Extensions" -> "Apps Script".
 * 3. Replace all existing code with this updated code.
 * 4. In the top toolbar dropdown (next to "Debug"), select "authorizeDrive".
 * 5. Click "Run" (▶️ button).
 * 6. Click "Review Permissions" -> Choose Account -> "Advanced" -> "Go to project (unsafe)" -> "Allow" (Google will now ask for Full Drive Write Access).
 * 7. After it logs "Drive full write permissions authorized successfully", click "Deploy" -> "Manage deployments".
 * 8. Click Edit (pencil icon) on the active deployment, set Version: "New version", and click "Deploy".
 * =========================================================================
 */

const NOTIFICATION_EMAIL = "info@ec4you.in";

/**
 * Run this function once in Apps Script editor to grant Full Google Drive (Read + Write) permissions!
 */
function authorizeDrive() {
  const folderName = "EC4YOU Resumes";
  const folders = DriveApp.getFoldersByName(folderName);
  const folder = folders.hasNext() ? folders.next() : DriveApp.createFolder(folderName);
  
  // Test create temporary file to trigger full write authorization
  const testFile = folder.createFile("permissions_test.txt", "EC4YOU Drive Write Permission OK");
  testFile.setTrashed(true);
  
  Logger.log("✅ Drive full write permissions authorized successfully! Folder ready: " + folder.getName());
}

function doPost(e) {
  try {
    let data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getActiveSheet();

    const headers = [
      "Timestamp",
      "Form Type",
      "Name",
      "Email",
      "Phone",
      "Country / Location",
      "Job Type / Service",
      "Requirement / Tech Stack / Budget",
      "Resume Link (Google Drive)",
      "Message / Details"
    ];

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(headers);
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground("#509995");
      headerRange.setFontColor("#FFFFFF");
      headerRange.setFontWeight("bold");
      sheet.setFrozenRows(1);
    }

    const timestamp = Utilities.formatDate(
      new Date(),
      "Asia/Kolkata",
      "dd/MM/yyyy HH:mm:ss"
    );

    const formType = data.formType || "Website Contact Form";
    const name = data.name || data.fullName || "-";
    const email = data.email || data.workEmail || "-";
    const phone = data.phone || data.phoneNumber || data.numbers || "-";
    const country = data.country || data.city || "-";
    const serviceOrJob = data.jobType || data.service || data.lookingFor || data.projectRequirement || "-";
    const requirements = data.preferredBudget || data.techStack || data.jobIntern || data.requirement || "-";
    const message = data.message || data.subject || data.projectDetails || data.details || "-";

    // Handle Resume Upload to Google Drive
    let resumeUrl = "-";
    if (data.fileData && data.fileName) {
      try {
        const folderName = "EC4YOU Resumes";
        const folders = DriveApp.getFoldersByName(folderName);
        const folder = folders.hasNext() ? folders.next() : DriveApp.createFolder(folderName);

        let base64String = data.fileData;
        if (base64String.indexOf("base64,") !== -1) {
          base64String = base64String.split("base64,")[1];
        }

        const decoded = Utilities.base64Decode(base64String);
        const safeCandidateName = name !== '-' ? name.replace(/[^\w\s-]/gi, '').replace(/\s+/g, '_') : 'Candidate';
        const blob = Utilities.newBlob(decoded, data.mimeType || "application/pdf", `${safeCandidateName}_${data.fileName}`);
        const file = folder.createFile(blob);
        file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
        resumeUrl = file.getUrl();
      } catch (fileErr) {
        resumeUrl = `Upload Error: ${fileErr.toString()}`;
      }
    }

    // Append row to sheet
    sheet.appendRow([
      timestamp,
      formType,
      name,
      email,
      phone,
      country,
      serviceOrJob,
      requirements,
      resumeUrl,
      message
    ]);

    // Send formatted HTML email notification to info@ec4you.in
    sendNotificationEmail({
      timestamp: timestamp,
      formType: formType,
      name: name,
      email: email,
      phone: phone,
      country: country,
      serviceOrJob: serviceOrJob,
      requirements: requirements,
      resumeUrl: resumeUrl,
      message: message
    });

    return ContentService.createTextOutput(
      JSON.stringify({
        status: "success",
        message: "Form submission recorded and email sent successfully."
      })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({
        status: "error",
        message: error.toString()
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({
      status: "active",
      message: "EC4YOU Form Webhook API is running."
    })
  ).setMimeType(ContentService.MimeType.JSON);
}

function sendNotificationEmail(details) {
  const emailSubject = `🚀 [New Lead - ${details.formType}] from ${details.name !== '-' ? details.name : details.email}`;

  const htmlBody = `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
      <div style="background: linear-gradient(135deg, #509995 0%, #3d7976 100%); padding: 24px 30px; text-align: center; color: #ffffff;">
        <h1 style="margin: 0; font-size: 22px; font-weight: 700; letter-spacing: 0.5px;">EC4YOU Digital Marketing</h1>
        <p style="margin: 6px 0 0 0; font-size: 14px; opacity: 0.9;">New Website Form Submission</p>
      </div>

      <div style="padding: 30px; background-color: #ffffff;">
        <p style="font-size: 15px; color: #334155; margin-top: 0; line-height: 1.5;">
          You have received a new inquiry from the <strong>${details.formType}</strong> on your website. Here are the submission details:
        </p>

        <table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 14px;">
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 12px; font-weight: 600; color: #64748b; width: 35%;">Submission Time:</td>
            <td style="padding: 10px 12px; color: #1e293b; font-weight: 500;">${details.timestamp} (IST)</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9; background-color: #f8fafc;">
            <td style="padding: 10px 12px; font-weight: 600; color: #64748b;">Form Source:</td>
            <td style="padding: 10px 12px; color: #509995; font-weight: 700;">${details.formType}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 12px; font-weight: 600; color: #64748b;">Name:</td>
            <td style="padding: 10px 12px; color: #1e293b; font-weight: 600;">${details.name}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9; background-color: #f8fafc;">
            <td style="padding: 10px 12px; font-weight: 600; color: #64748b;">Email Address:</td>
            <td style="padding: 10px 12px; color: #1e293b;">
              <a href="mailto:${details.email}" style="color: #509995; text-decoration: none; font-weight: 600;">${details.email}</a>
            </td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 12px; font-weight: 600; color: #64748b;">Phone Number:</td>
            <td style="padding: 10px 12px; color: #1e293b;">
              ${details.phone !== '-' ? `<a href="tel:${details.phone}" style="color: #1e293b; text-decoration: none;">${details.phone}</a>` : '-'}
            </td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9; background-color: #f8fafc;">
            <td style="padding: 10px 12px; font-weight: 600; color: #64748b;">Location / Country:</td>
            <td style="padding: 10px 12px; color: #1e293b;">${details.country}</td>
          </tr>
          ${details.serviceOrJob !== '-' ? `
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 12px; font-weight: 600; color: #64748b;">Job / Service:</td>
            <td style="padding: 10px 12px; color: #1e293b; font-weight: 500;">${details.serviceOrJob}</td>
          </tr>` : ''}
          ${details.requirements !== '-' ? `
          <tr style="border-bottom: 1px solid #f1f5f9; background-color: #f8fafc;">
            <td style="padding: 10px 12px; font-weight: 600; color: #64748b;">Details / Budget:</td>
            <td style="padding: 10px 12px; color: #1e293b;">${details.requirements}</td>
          </tr>` : ''}
          ${details.resumeUrl !== '-' && !details.resumeUrl.startsWith('Upload Error') ? `
          <tr style="border-bottom: 1px solid #f1f5f9; background-color: #ecfdf5;">
            <td style="padding: 10px 12px; font-weight: 600; color: #065f46;">📄 Resume Link:</td>
            <td style="padding: 10px 12px; color: #047857;">
              <a href="${details.resumeUrl}" target="_blank" style="display: inline-block; background-color: #509995; color: #ffffff; padding: 6px 14px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 13px;">
                📥 View / Download Resume in Google Drive
              </a>
            </td>
          </tr>` : ''}
          <tr>
            <td style="padding: 12px 12px; font-weight: 600; color: #64748b; vertical-align: top;">Subject / Message:</td>
            <td style="padding: 12px 12px; color: #1e293b; white-space: pre-wrap; line-height: 1.5; background-color: #f1f5f9; border-radius: 6px;">${details.message}</td>
          </tr>
        </table>

        <div style="margin-top: 25px; padding: 15px; background-color: #f0fdfa; border-left: 4px solid #509995; border-radius: 4px;">
          <p style="margin: 0; font-size: 13px; color: #134e4a;">
            💡 <strong>Quick Action:</strong> Click the email above to reply directly to the candidate. All details and resumes are stored securely in your Google Drive & Sheet.
          </p>
        </div>
      </div>

      <div style="padding: 16px 30px; background-color: #f8fafc; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0;">
        &copy; ${new Date().getFullYear()} EC4YOU Digital Marketing • Automated Form Notification
      </div>
    </div>
  `;

  MailApp.sendEmail({
    to: NOTIFICATION_EMAIL,
    subject: emailSubject,
    htmlBody: htmlBody
  });
}
