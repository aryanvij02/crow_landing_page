# Scout Feature Setup Instructions

## 1. Create Supabase Table

Go to your Supabase dashboard → SQL Editor and run:

```sql
CREATE TABLE scout_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  criteria TEXT NOT NULL,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

CREATE INDEX idx_scout_requests_email ON scout_requests(email);
CREATE INDEX idx_scout_requests_created_at ON scout_requests(created_at DESC);
```

## 2. Set Up Environment Variables

Create a `.env.local` file in the project root with these values:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

Get these values from:
- Supabase Dashboard → Project Settings → API

## 3. Test the Feature

1. Start the dev server: `npm run dev`
2. Navigate to `/deal-scout`
3. Fill out the form and submit
4. Check your Supabase table to see the submission

## 4. View Submissions

Go to Supabase Dashboard → Table Editor → `scout_requests` to see all submissions.

You can filter by:
- Status (pending, completed, etc.)
- Email
- Date created

## Done! 🎉

The Scout feature is now ready to collect deal criteria from users.

