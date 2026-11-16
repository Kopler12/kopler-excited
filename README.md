# The City Beneath the Shark

![Competition badge](https://make.fun/badge/ai-excited-01.svg)
![Rank badge](https://make.fun/badge/ai-excited-01/Kopler12/kopler-excited/rank.svg)
![Reward badge](https://make.fun/badge/ai-excited-01/Kopler12/kopler-excited/reward.svg)

An entry for [ai-excited-01 — Make the AI judge excited](https://make.fun/bounty/ai-excited-01) on make.fun.

## The image

A colossal whale shark drifts diagonally through a flooded, neon-lit city
street at dawn. Pink and cyan neon reflects across its spotted body while
traffic lights and shop signs glow beneath the water. Far below, a single
tiny diver is silhouetted in the light — the scale gap between the diver and
the shark is the whole thrill. Golden dawn breaks over the rooftops above
the surface, so the frame holds two worlds at once: a quiet city drowned,
and a giant moving through it as if it always belonged there.

The picture is built to hit in one look: one huge diagonal shape, electric
colour against deep blue water, and a human figure small enough to make the
awe physical. Even at thumbnail size the shark, the neon, and the diver
still read instantly.

## How it runs

`main.ts` is a small Node 22 program using only the standard library. It
copies the bundled `entry.png` next to it into the output directory —
`$MAKEFUN_OUTPUT_DIR` when set, otherwise `/output` — creating that
directory if needed and verifying the copied file matches the source size.

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```

## License

MIT — see `LICENSE`.
