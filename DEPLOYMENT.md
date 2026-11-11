# Deploy SBC to sbc.ecell-iitkgp.co.in

This repository is a Next.js application with server API routes for founder and
mentor applications. Vercel is a straightforward hosting option; a static-only
GitHub Pages deployment would not run those API routes.

## Your part: deploy the application

1. Use an E-Cell-owned Vercel team/project where possible so the website can be
   handed over between student teams. Ask for project access if it already exists.
2. In Vercel, choose **Add New → Project** and import `suvam-dev/sbc2.0`.
   GitHub contributor/write access does not necessarily let you install or grant
   access to the Vercel GitHub App. If the repository is missing from the import
   picker, its owner/admin must grant the integration access or import it and
   invite you to the Vercel project.
3. Use framework **Next.js**, repository root as the root directory, install
   command `npm ci`, and build command `npm run build`. Keep Vercel's default
   Next.js output settings. Set the production branch to `main`.
4. Configure the existing form integrations under **Settings → Environment
   Variables** before launching. Obtain their values from the existing project
   administrator and enter them directly in Vercel:

   | Variable | Purpose |
   | --- | --- |
   | `NEXT_PUBLIC_SUPABASE_URL` | Existing Supabase project URL. |
   | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Existing public anon/publishable key used by this code. Never use a service-role/secret key here. |
   | `SHEETDB_API_URL` | Server-only SheetDB endpoint, if the existing Google Sheets integration is used. |

   Use the intended production Supabase project with its existing tables and RLS
   policies. Do not re-run schema SQL on an existing database just to deploy this
   UI change. Use separate test resources for preview deployments. These variables
   are not needed to render the timeline, but a successful page build alone does
   not prove that application data is being saved. The existing APIs can return a
   success message even if persistence is unavailable, so check the actual stored
   record during the launch smoke test.
5. Deploy and inspect the generated `*.vercel.app` URL. Check the timeline on a
   phone and a desktop, all four expanded states, navigation links, and the
   registration/mentor forms. Coordinate one clearly labelled test application
   and confirm its record in the intended database/sheet.
6. After the Git integration is connected, pushes to `main` normally trigger
   production builds automatically. Environment-variable changes require a new
   deployment; `NEXT_PUBLIC_` values are included at build time.

## Shared step: connect the subdomain

In the correct Vercel project, open **Settings → Domains** and add:

```text
sbc.ecell-iitkgp.co.in
```

Select the production environment. Vercel will display the DNS record required
for this project. Send the exact name, type and target it displays to the person
who manages DNS for `ecell-iitkgp.co.in`.

For a subdomain, this is normally a CNAME:

| Field | Value |
| --- | --- |
| Type | `CNAME` (use the type Vercel actually requests) |
| Name/Host | `sbc` — some DNS providers require the full subdomain instead |
| Target/Value | Copy the exact target from this project's Vercel Domains screen |
| TTL | Provider default/automatic |

Do not guess a universal CNAME target. If Vercel also requests an ownership TXT
record, send that exact record as well. With Cloudflare, use DNS-only mode while
Vercel verifies the record and provisions HTTPS.

## Your senior's part: the DNS change

Your senior (or anyone with delegated DNS-edit access) adds the requested record
at the domain's **authoritative DNS provider**. That may differ from the domain
registrar. Repository contributor access does not grant domain/DNS access.

They can either add the record themselves or grant you an appropriate DNS role.
There is no need to buy the subdomain or transfer the domain. Keep the existing
root-domain, `www`, email/MX and unrelated DNS records intact. Adding only `sbc`
does not require moving the parent website or changing nameservers.

Once DNS propagates, return to Vercel, verify the domain and wait for HTTPS to be
ready. Check `https://sbc.ecell-iitkgp.co.in`, the four timeline milestones, and
form persistence on the final domain. DNS propagation time depends on the
provider and existing TTLs; Vercel provisions the certificate automatically after
successful validation.

## Updating the Demo Day content

Edit `data/programme.ts` for the shared programme identity, venue, date window,
venture tracks, eligibility, selection criteria, founder readiness, event agenda
and support. `data/demo-day.ts` supplies the four interactive milestones and
showcase targets; `data/updates.ts` supplies the bulletin copy.

The 2027 concept note takes priority over the earlier poster: open call (Days
1–20), selection (Days 21–30), acceleration (Days 31–100, 10–12 weeks), and Demo
Day (Day 101, February–March 2027). Follow-through starts on Days 102–120 and
continues for 90 days. Calendar dates remain to be announced. Figures for
pitches, exhibits, applications and delegates are planning targets, not results.
The organiser has specified the public venue wording as **IIT Research Park**.
Pitch discipline is four minutes plus three minutes for Q&A. Past mentors are
historical; external partners and the 2027 mentor lineup require confirmation.

The component is `app/components/DemoDayTimeline.tsx`; all its styles are scoped
under `forge-` classes in `app/components/DemoDayTimeline.css`. It reuses the
existing fonts, palette and Framer Motion dependency. No new package or database
migration is required.

Official references: [Vercel GitHub integration](https://vercel.com/docs/git/vercel-for-github),
[custom domains](https://vercel.com/docs/domains/working-with-domains/add-a-domain),
[environment variables](https://vercel.com/docs/environment-variables).
