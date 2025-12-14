# Setup Slack Integration untuk Form Contact

## Konfigurasi Slack Webhook

Untuk mengirim pesan contact form langsung ke Slack channel:

### 1. Buat Slack Incoming Webhook
- Buka https://api.slack.com/messaging/webhooks
- Klik "Create New App" atau gunakan existing app
- Pilih "Incoming Webhooks" di sidebar
- Klik "Add New Webhook to Workspace"
- Pilih channel tempat pesan akan dikirim (misal: #inquiries atau #contact-messages)
- Copy Webhook URL

### 2. Setup Environment Variable
Tambahkan ke `.env.local`:
```
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/WEBHOOK/URL
```

### 3. Features
- ✅ Form validation (nama, email, pesan required)
- ✅ Error handling dan retry logic
- ✅ Success/error feedback UI
- ✅ Formatted Slack message dengan:
  - Nama & Email pengirim
  - Subject pesan
  - Isi pesan lengkap
  - Timestamp pengiriman
  - Status tracking hints (react dengan 👀 untuk "diproses", ✅ untuk "selesai")

### 4. Form Fields
- Nama Lengkap (required)
- Email (required)
- Subjek (optional)
- Pesan (required)

### 5. Success Message
Setelah submit, user akan melihat notifikasi sukses yang auto-dismiss dalam 5 detik.
