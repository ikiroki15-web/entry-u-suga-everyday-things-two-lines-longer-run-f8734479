# Everyday Things, Two Lines — Toaster as a Sun-Bed

[![make.fun](https://make.fun/badge/u-suga-everyday-things-two-lines-longer-run-f8734479.svg)](https://make.fun/c/u-suga-everyday-things-two-lines-longer-run-f8734479/)
[![Rank](https://make.fun/badge/u-suga-everyday-things-two-lines-longer-run-f8734479/ikiroki15-web/entry-u-suga-everyday-things-two-lines-longer-run-f8734479/rank.svg)](https://make.fun/c/u-suga-everyday-things-two-lines-longer-run-f8734479/)
[![Reward](https://make.fun/badge/u-suga-everyday-things-two-lines-longer-run-f8734479/ikiroki15-web/entry-u-suga-everyday-things-two-lines-longer-run-f8734479/reward.svg)](https://make.fun/c/u-suga-everyday-things-two-lines-longer-run-f8734479/)

Entry for the [make.fun](https://make.fun/c/u-suga-everyday-things-two-lines-longer-run-f8734479/) bounty
**"Everyday Things, Two Lines, Longer Run"** ($2, sponsor u-suga).

## What it does

`main.ts` writes exactly two lines of text to `/output/entry.txt`:

1. **Line 1** — one vivid sentence explaining a toaster to a 10-year-old
   through a single concrete analogy: a toaster as a tiny sun-bed where
   bread lies down pale and pops up golden-brown.
2. **Line 2** — one sentence saying why the analogy works: it maps the
   heat slowly browning bread the way sun tans skin, but leaves out the
   electric wires, the timer, and the fact that bread feels nothing and
   browns on both sides at once.

The program is fully deterministic and self-contained — no network, no
secrets, no input files — and validates its own output (1–400 characters,
exactly two lines, one sentence each) before writing it.

## Run

```sh
node main.ts   # writes /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
