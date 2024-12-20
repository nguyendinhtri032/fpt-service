<?php

namespace App\Jobs;

use App\Mail\MailNotify;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class SendEmail implements ShouldQueue
{
    use Queueable;

    /**
     * The number of times the job may be attempted.
     *
     * @var int
     */
    public $tries = 3;

    /**
     * The number of seconds to wait before retrying the job.
     *
     * @var int
     */
    public $backoff = 60;

    protected array $data;

    /**
     * Create a new job instance.
     */
    public function __construct(array $data)
    {
        $this->data = $data;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        try {
            $result = Mail::to(config('app.mail_owner'))->send(new MailNotify($this->data));
            Log::info('Email sent successfully', [
                'to' => config('app.mail_owner'),
                'data' => $this->data
            ]);
        } catch (\Exception $e) {
            Log::error('Failed to send email', [
                'error' => $e->getMessage(),
                'data' => $this->data
            ]);
            
            throw $e;
        }
    }

    /**
     * Handle a job failure.
     */
    public function failed(\Throwable $exception): void
    {
        Log::error('Email job failed', [
            'error' => $exception->getMessage(),
            'data' => $this->data
        ]);
    }
}
