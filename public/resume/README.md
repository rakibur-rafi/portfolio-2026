# Resume

Place your resume PDF here, e.g.

```
public/resume/Mohammad_Rakibur_Rahaman_Resume.pdf
```

Then point `profile.resume` in `src/data/profile.ts` at the path:
`resume: "/resume/Mohammad_Rakibur_Rahaman_Resume.pdf"`.

Until then, `profile.resume` stays `null` and the "Download Resume" button
intentionally routes to the contact section instead of linking to a
non-existent file.
