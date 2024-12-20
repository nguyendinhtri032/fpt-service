<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class MailNotify extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public array $data;
    public function __construct(array $data)
    {
        $this->data = $data;
    }

    public function build()
    {
        return $this
            ->from(
                config('mail.from.address'),
                config('app.name'),
            )
            ->subject($this->data['subject'])
            ->view('emails.mail_notify')
            ->with([
                'data' => $this->data,
            ]);
    }

}
