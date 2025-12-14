import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, subject, message } = body;

        // Validasi input
        if (!name || !email || !message) {
            return NextResponse.json( 
                { error: 'Nama, Email, dan Pesan wajib diisi' },
                { status: 400 }
            );
        }

        // URL Webhook Slack
        const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;
        
        if (!SLACK_WEBHOOK_URL) {
            return NextResponse.json(
                { error: 'Konfigurasi Slack webhook belum diatur' },
                { status: 500 }
            );
        }

        // Format pesan untuk Slack
        const slackMessage = {
            text: "📩 Pesan Baru dari Website KitaHIJAUkan",
            blocks: [
                {
                    type: "header",
                    text: {
                        type: "plain_text",
                        text: "📩 Pesan Baru dari Website www.kitahijaukan.com",
                        emoji: true
                    }
                },
                {
                    type: "section",
                    fields: [
                        {
                            type: "mrkdwn",
                            text: `*Nama:*\n${name}`
                        },
                        {
                            type: "mrkdwn",
                            text: `*Email:*\n${email}`
                        }
                    ]
                },
                {
                    type: "section",
                    fields: [
                        {
                            type: "mrkdwn",
                            text: `*Subjek:*\n${subject || "-"}`
                        }
                    ]
                },
                {
                    type: "section",
                    text: {
                        type: "mrkdwn",
                        text: `*Pesan:*\n${message}`
                    }
                },
                {
                    type: "divider"
                },
                {
                    type: "context",
                    elements: [
                        {
                            type: "mrkdwn",
                            text: `*Status:* 🔴 Baru  |  *Tips:* React dengan 👀 jika sedang diproses, dan ✅ jika selesai.`
                        }
                    ]
                },
                {
                    type: "context",
                    elements: [
                        {
                            type: "mrkdwn",
                            text: `Dikirim pada: ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}`
                        }
                    ]
                }
            ]
        };

        // Kirim ke Slack
        const slackResponse = await fetch(SLACK_WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(slackMessage),
        });

        if (!slackResponse.ok) {
            throw new Error('Gagal mengirim ke Slack');
        }

        return NextResponse.json({ success: true, message: 'Pesan berhasil dikirim!' });

    } catch (error) {
        console.error('Error sending message:', error);
        return NextResponse.json(
            { error: 'Terjadi kesalahan saat mengirim pesan.' },
            { status: 500 }
        );
    }
}
