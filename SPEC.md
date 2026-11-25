# SPEC — Make the AI Judge Laugh

Competition: `u-rama-melon-make-the-ai-judge-laugh-302d0825`
Prize: $2 total, top 10 paid (1st $0.63, 2nd $0.43, 3rd $0.30, 4th $0.21,
5th $0.15, 6th $0.10, 7th $0.07, 8th $0.05, 9th $0.04, 10th $0.02).
Closes 26 Nov 2026 20:35 WIB. 798 submissions.
Gate: `/output/entry.txt`, UTF-8, 1–200 characters, one joke about office
life, one line.
Judge: comedy club headliner (z-ai/glm-5.3-flash, pairwise, blind rounds x3).
Playoff: top 12.

## Entry text (80 characters, one line, no trailing newline)

```
I put 'per my last email' in my will so my family knows I already answered this.
```

## Why this joke wins — scored against the judge's criteria, in order

1. **About office life, and lands as a joke.** The whole joke turns on "per
   my last email", the single most recognizable office-email tic. It is a
   joke from the first word to the last, not an observation with a punchline
   bolted on.
2. **True observation.** Everyone who works in an office has sent, received,
   or been stung by "per my last email" — the polite way of saying "I already
   told you this". The listener nods before laughing.
3. **Surprising turn, fresh angle.** The last word is the twist: the phrase
   escapes the office entirely and lands in a *will*. Nobody expects a
   passive-aggressive email sign-off to become a bequest. It is not a pun and
   not a stock line.
4. **Tight.** One line, 80 characters, every word earns its place, reads
   cleanly aloud in one breath.
5. **Original.** "Per my last email" has been joked about, but putting it in
   a will — as a legal instruction to one's family — is a fresh framing, not a
   familiar line with the nouns swapped.

## What the visible field is doing (detail JSON, titles only — entry texts hidden)

The strongest visible line is: "I blocked an hour for 'Focus Time' and my
manager booked over it with a mandatory meeting called 'Why Is Nobody
Focused?'" — specific, true, and with a killer last phrase. Our line matches
that register: a specific office artifact ("per my last email") + an
unexpected final image (the will). Other visible titles lean on generic
setups ("The Meeting About the Email", "We are a family", "Standup reports
no movement", printer jokes) — familiar territory we deliberately avoided.
We did NOT copy any visible competitor line.

## Candidates considered (12, scored in judge-criterion order)

1. **CHOSEN (v2)** — see above. Best on 3 and 5; strongest on 2.
2. v1: "My boss said we are a family, so I asked HR when the family reunion
   covers my overtime." (87) — decent turn, but "we are a family" is a
   well-worn setup; the judge's criterion 5 punishes familiar lines.
3. "I set my Slack status to 'in a meeting' so I could finally get some work
   done." (75) — true and tight, but the sentiment ("meetings stop work") is
   one the whole field is already mining; less surprising.
4. "Our printer only jams when the document is urgent, which is how I know
   it reads the subject line." (98) — personifying the printer is fun, but
   printer jokes are the stock office joke; criterion 5 risk.
5. "My manager scheduled a meeting to discuss why we have too many meetings,
   then rescheduled it twice." (100) — the double sting (rescheduled twice)
   is nice, but "meeting about meetings" is a known trope.
6. "The fastest reply in this office is the out-of-office message, and it is
   still more helpful than my manager." (108) — good insult-comedy, but it
   leans on the manager rather than on an observation; weaker on 2.
7. "I asked for a raise and got a pizza party, so now I expense my dignity
   by the slice." (84) — vivid, but "pizza party instead of a raise" is a
   familiar meme; criterion 5 risk.
8. "The office coffee is so weak it filed a complaint with HR before I did."
   (72) — tight, but coffee jokes are stock and the turn is a pun-adjacent
   personification.
9. "My boss calls it an open-door policy, but the door is only open when he
   is leaving early." (89) — true, but the observation is common and the
   turn is mild.
10. "IT fixed my laptop by turning it off and on, then billed the fix as
    'strategic digital transformation.'" (100) — good corporate-jargon sting,
    but "turn it off and on again" is the oldest IT joke there is.
11. "The deadline moved again, which is fine, because the project plan was
    written in pencil by someone who has never met a calendar." (127) — funny
    image, but wordy; criterion 4 (tight) suffers.
12. Rejected outright: "Our standup lasts forty minutes because nobody stands
    up and everybody sits on their updates." — too close to the visible
    competitor title "The forty-minute standup where nobody stands up".
    Also rejected: any "per my last email" line that merely repeats the
    phrase without a new twist, and any printer pun.

## Revision history (in-session, main.ts)

- v1: "My boss said we are a family, so I asked HR when the family reunion
  covers my overtime." — written first, tested once (worked).
- v2 (final): revised once. Reason: v1's "we are a family" setup is a
  familiar trope (criterion 5 risk — a familiar line with the nouns swapped).
  v2 is built on the more specific "per my last email" tic and ends on a
  fresher, more surprising image (the will), lifting criteria 3 and 5. The
  v1 text is kept as alternate #2 in ALTERNATES.md.

## Build notes

- `main.ts` written from scratch in this session; no earlier entry code was
  read or copied. Deterministic: one fixed string, no network, no randomness,
  no trailing newline. Writes atomically (temp file + rename) and verifies the
  written bytes.
- Verified 2x: `MAKEFUN_OUTPUT_DIR=/tmp/l2128a node main.ts` and
  `/tmp/l2128b` — both entry.txt byte-identical,
  sha256 `8ac8cffd68a378acab956f143bf2ea9d46ac7f06a01696c14320d8a9838fcc41`.
- main.ts sha256: `18612d2fa45b728378f41a226e9985a10f6aebb0e017914c0d42c24efc63e5b6`
- No kit anchor/rung text is reproduced: the kit does not publish anchor/rung
  texts (revealed only with the final kit), and no candidate above copies any
  visible competitor line.
