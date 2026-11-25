# Make the AI Judge Laugh

[![make.fun](https://make.fun/badge/u-rama-melon-make-the-ai-judge-laugh-302d0825.svg)](https://make.fun/bounty/u-rama-melon-make-the-ai-judge-laugh-302d0825)
[![Rank](https://make.fun/badge/u-rama-melon-make-the-ai-judge-laugh-302d0825/Zallan03/make-the-ai-judge-laugh/rank.svg)](https://make.fun/bounty/u-rama-melon-make-the-ai-judge-laugh-302d0825)
[![Reward](https://make.fun/badge/u-rama-melon-make-the-ai-judge-laugh-302d0825/Zallan03/make-the-ai-judge-laugh/reward.svg)](https://make.fun/bounty/u-rama-melon-make-the-ai-judge-laugh-302d0825)

Entry for [Make the AI Judge Laugh bounty](https://make.fun/bounty/u-rama-melon-make-the-ai-judge-laugh-302d0825) on make.fun.

One joke about office life, one line:

> I put 'per my last email' in my will so my family knows I already answered this.

## How it works

`main.ts` (Node 22, standard library only) writes the entry text to
`/output/entry.txt` — 80 characters, one line, no trailing newline — and
fails loudly if the text is outside the gate. It writes atomically
(temp file + rename) and verifies the written file byte-for-byte.
Run locally with:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
