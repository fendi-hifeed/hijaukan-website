import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, company, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Nama, Email, dan Pesan wajib diisi' },
                { status: 400 }
            );
        }

        const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

        if (!SLACK_WEBHOOK_URL) {
            return NextResponse.json(
                { error: 'Konfigurasi Slack webhook belum diatur' },
                { status: 500 }
            );
        }

        const slackMessage = {
            text: "🤝 Partnership Inquiry dari Website KitaHijaukan",
            blocks: [
                {
                    type: "header",
                    text: {
                        type: "plain_text",
                        text: "🤝 Partnership Inquiry dari www.kitahijaukan.com",
                        emoji: true
                    }
                },
                {
                    type: "section",
                    fields: [
                        { type: "mrkdwn", text: `*Nama:*\n${name}` },
                        { type: "mrkdwn", text: `*Email:*\n${email}` }
                    ]
                },
                {
                    type: "section",
                    fields: [
                        ...(phone ? [{ type: "mrkdwn" as const, text: `*No. HP:*\n${phone}` }] : []),
                        ...(company ? [{ type: "mrkdwn" as const, text: `*Perusahaan:*\n${company}` }] : [])
                    ]
                },
                {
                    type: "section",
                    text: { type: "mrkdwn", text: `*Kebutuhan:*\n${message}` }
                },
                { type: "divider" },
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

        const slackResponse = await fetch(SLACK_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(slackMessage),
        });

        if (!slackResponse.ok) {
            console.error('Slack webhook error:', slackResponse.status);
            return NextResponse.json(
                { error: 'Gagal mengirim ke Slack' },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Partnership API error:', error);
        return NextResponse.json(
            { error: 'Terjadi kesalahan server' },
            { status: 500 }
        );
    }
}
