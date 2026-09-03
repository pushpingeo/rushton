# Voyage card transcriptions

Source of truth for William's voyage data. One row per physical event written
on a Lloyd's Voyage Record Card — nothing here is inferred or built up into a
"voyage" yet. That happens later, by filtering and ordering these rows plus
running the result through `searoute`.

## Files

- `cards.csv` — one row per card **image**, the vessel-level facts that are
  the same for every entry on that card (ship name, tonnage, port of
  registry, captain(s)).
- `IMG_XXXX.csv` — one file per card image, one row per dated entry on that
  card. Joined back to `cards.csv` by `image_filename`.
- `../data/ports.csv` — the port lookup, one row per real-world port. Seeded
  from the Guildhall Library's official "Lloyd's Voyage Record Cards and Port
  Abbreviations" guide (444 codes, last updated by them March 2024), plus
  ports we've since encountered written out in full on typed cards. `lon`/
  `lat` are filled in only for ports we've actually used so far — the rest
  are blank until geocoded. This is also the file to open in QGIS later
  (delimited text layer, X=lon, Y=lat).

## Method — read this before transcribing a card

This is the standard the first three cards were held to. Anyone (or any
fresh context) picking this up should match it, not just fill columns in.

1. **Read the whole image first**, then identify which of two formats it is:
   - **Handwritten grid** (pre-1947-ish): ports abbreviated, ink colour
     carries meaning, reading order is **left to right across each ruled
     row, then down** — not column-by-column. Getting this backwards
     produces entries that look chronologically out of order when they
     aren't; that confusion was the single biggest early mistake here.
   - **Typed/pasted extracts** (later cards): full port names, explicit
     "Ar"/"Sd"/"Pd" labels, laid out as separate pasted strips — read **top
     to bottom within a strip, then strip to strip left to right**. Verify
     this by checking that the last entry of one strip connects sensibly
     (date and geography) to the first entry of the next.
   - Check both against date continuity — the ports and dates should tell a
     coherent shipping story. If they don't, the reading order or a
     specific digit is probably wrong, not the ship.
2. **Zoom in on anything ambiguous** rather than guess from the full image —
   crop and re-view at higher resolution. For genuinely hard handwriting,
   cross-check candidate readings against `../data/ports.csv`'s codes/names:
   a reading that isn't a real code and doesn't fit the geography is
   probably a misread of one that is (this is how "Lio" and "h.M" both
   turned out to be "L M" = Lourenco Marques on IMG_5628).
3. **Use chronological plausibility as a cross-check.** Entries should
   flow forward in time. One that doesn't is a signal to re-examine the
   reading (a misread digit, e.g. an "L M" arrival date first read as
   impossible relative to its own preceding departure) or to reclassify it
   (a red, port-less, out-of-sequence date is more likely a `speaking` — an
   at-sea sighting — than a `sailing`). Don't just note the anomaly and move
   on without trying to resolve it first.
4. **Resolve every port through `port_id`**, never by writing the name
   straight into an entry row. Add new rows or aliases to `ports.csv` as you
   go (see below) — don't leave a resolvable port unresolved.
5. **Flag what's genuinely uncertain, with your reasoning, rather than
   picking the most plausible guess and moving on.** State what you tried
   (e.g. "cross-checked against the official list, doesn't match") so the
   next person — human or not — knows it's been worked, not skipped.
6. **Capture the whole card, not just the port-call sequence**: card
   number, side, year markers (they show up differently on different cards —
   hand-drawn bars on some, a printed box on others), ship's name/tonnage/
   registry/captains, a "Contd on Card No N" note if present, and anything
   in a Casualties box or margin annotation, even if you can't fully parse
   it. All of that goes in `cards.csv`'s `notes` or as flagged rows in the
   entry CSV — don't drop it just because it's not a normal arrival/sailing.
7. **Update `cards.csv` and this file's "Fully transcribed so far" list**
   for every card, including what's flagged and why. That list is what
   makes it possible to resume cold without re-deriving any of this.

## Linking a transcription entry to a port

Handwritten cards abbreviate ("E Lo"), typed cards spell the name out in
full ("East London") — and even full names vary in spelling between cards
("Hongkong" vs "Hong Kong"). So a transcription entry never links to a port
by matching text; it links by **`port_id`**, a stable slug (e.g.
`east-london`, `hong-kong`) that's the same regardless of how any given card
happened to write it.

- `../data/ports.csv` columns: `port_id, code, name, lon, lat, aliases, notes`.
  `code` is the official abbreviation if this row came from the Guildhall
  guide (blank otherwise). `aliases` lists other exact strings seen on cards
  that mean this same port (e.g. Sydney NSW's aliases include plain
  "Sydney"). Two rows can legitimately share a `port_id` if the same port had
  more than one official code (e.g. "Rot" and "Rott" both resolve to
  `rotterdam`) — that's fine, no need to merge them.
- **Whenever a card uses a port not yet in `ports.csv`, add it** — a new row
  if it's a genuinely new port, or a new alias on the existing row if it's
  just a spelling variant of one already there.

## Per-entry columns (`IMG_XXXX.csv`)

| column | meaning |
|---|---|
| `seq` | reading order within this card — **left to right, then top to bottom** on a handwritten grid card; **top to bottom within each pasted column, then column by column left to right** on a typed card (they're physically different layouts - check which you're looking at) |
| `ship_name` | same value for every row in the file, copied from `cards.csv` — duplicated here (not just left as a join) so each entry row is self-contained once these files get combined into the master dataset |
| `date` | resolved ISO date, `YYYY-MM-DD` |
| `date_raw` | exactly as written on the card |
| `type` | `engaged` \| `arrival` \| `sailing` \| `speaking` \| `transit` \| `discharged` \| `note` \| `unknown` |
| `port_id` | the resolved link into `../data/ports.csv` — blank if `port_raw` is empty (a `note`/`unknown`/`speaking` row) or if it couldn't be confidently resolved (flagged in `notes` when that happens) |
| `port_raw` | exactly as written on the card — the abbreviation for a handwritten card, the full name for a typed one. Never edit this to "correct" it; if the reading was wrong, fix it here and re-resolve `port_id` |
| `port_inferred` | `TRUE` if the port wasn't written on this line and was carried forward from the entry above it (a bare departure date right after an arrival, same port) |
| `notes` | anything uncertain, ambiguous, or worth flagging for a second look |

`type` additions since the first card: `transit` is for passing through a
canal ("Pd" = Passed, e.g. the Panama or Suez Canal) — a real waypoint but
not an arrival or sailing.

**Colour key** (confirmed on the card itself and by you): black = arrival,
red = sailing (a real departure), blue = damage/notes.

**Each entry is two stacked numbers**: the top one (the "numerator") is a
reference into that year's *Lloyd's Register* volume, not part of the event
— we don't capture it. The bottom one (the "denominator") is the actual
date, `day/month`.

**`type` meanings**, from the card's own colour key:
- `arrival` = black ink
- `sailing` = red ink (a real departure)
- `speaking` = red ink, but the ship was only sighted/reported at sea, not
  actually in port — **not a real waypoint**, keep it out of route-building
- `note` = blue ink, free-text annotation
- `engaged` / `discharged` = the specific entry marking William joining or
  leaving this particular ship

## Cards have a first side and a second side

The first side is filled in before the second. `cards.csv`'s `card_side`
column records which. IMG_5628 is card No 2's *second* side — a first side
should exist somewhere among the 49 scanned images, not yet identified (none
are labelled by ship or card number, just camera filenames).

## The year, between two black bars

Where the year changes mid-card, it's written once, boxed between two thick
hand-drawn vertical bars (e.g. "1947" partway down IMG_5628), rather than
repeated on every entry. Entries before it belong to the previous year,
everything after to the new one.

## Bracketed annotations next to some entries — meaning unknown

A few arrivals/sailings on IMG_5628 have a short bracketed note next to
them — "(PREV)" on seq 12, "(C)" and "(c)" on seq 44 and 51. Not part of the
abbreviations guide. Flagged in the CSV; would be good to ask about if the
convention is known.

## Fully transcribed so far

- **IMG_5628** — all 51 entries, 8 Jun 1946 to 9 Jan 1947. 4 flagged as
  genuinely uncertain rather than guessed:
  - **seq 8, "June 20"** — black ink, spelled-out month + day instead of the
    DD/MM format every other entry uses, no port code. Unexplained.
  - **seq 9** — the red entry right after it is mostly illegible.
  - **seq 20/21, "hw"/"Lw"** — doesn't match the official abbreviation list
    or the letter shapes of the confirmed "L M" entries elsewhere on the
    card, so probably a genuinely different, unresolved place.
  - **seq 25** — date originally misread as 24/8, which is chronologically
    impossible (before the departure it follows); reworked to early
    September based on what the surrounding dates require, but the exact
    day is still a guess.

  One reclassification worth knowing about: **seq 32** was originally read
  as a `sailing` (red, bare date) but its date sits chronologically *before*
  the arrival right next to it — the same pattern as a couple of other
  entries that turned out to be genuine ordering quirks once the reading
  order was fixed. This one didn't resolve that way, so it's now typed as
  `speaking` instead (an at-sea sighting report, which the card's own header
  says is also logged in red) and left with no `port_id` — a speaking isn't
  a real port call and shouldn't become a waypoint.

- **IMG_5629** — all 119 entries, 29 Jun 1949 to 21 Jul 1950. Typed/pasted
  format, no ink-colour judgment calls, full port names — high confidence
  throughout. One open item: a handwritten note in the card's "Casualties"
  box (Antwerp, weather damage) that I could read the pieces of but not
  confidently reconstruct as a full sentence — flagged in the CSV rather
  than guessed. Same ship as IMG_5628 (City of Chester) — this is Card No 4,
  First Side, so Card No 3 exists somewhere among the unidentified images.

- **IMG_5630** — all 111 entries, 9 Aug 1950 to 14 Oct 1951. Card No 4,
  Second Side — directly continues IMG_5629. Same high confidence throughout
  the main sequence. Its Casualties box is denser and only partially
  parsed — a leak/rivets issue around Adelaide in May 1951 (also marked with
  an inline casualty cross-mark in the main sequence, both flagged and
  cross-referenced), plus some dates that don't match anything on this card
  and may refer back to the still-missing Card No 3. Continues onto Card
  No 5, also not yet identified.

- **IMG_5632** — 84 rows, 6 Oct 1927 to Nov 1928. **New ship: City of
  Norwich** (4346 tons, Liverpool), Card No 1, First Side — first appearance
  of this vessel in the collection. Handwritten grid format, but denser and
  harder than IMG_5628: a genuine round-the-world tramp voyage (US Pacific
  coast → Panama Canal → UK/Northern Europe → Red Sea → Rangoon → back
  through Panama → Australia → back toward the Red Sea). Significantly more
  flagged than earlier cards:
  - Five port abbreviations don't match the official Guildhall list at all
    and are left unresolved: **"Oss"**, **"bal"** (×2, written lowercase
    unlike every real port code on the card — possibly shipping shorthand
    for "in ballast" rather than a place), **"Nlm"/"Mlm"**, **"bey"**
    (lowercase again), **"Iwle"**.
  - Two spots where the card's own left-to-right order contradicts what the
    dates require (Hull/"Oss" in Dec 1927, Sydney/Brisbane in Sep–Oct 1928) —
    in both cases the card itself has a hand-drawn box-and-bracket annotation
    linking the two entries, which reads as the clerk's own correction.
    Flagged, not silently reordered.
  - Two duplicate-looking entries (Antwerp 15/5 and Sydney 16/10, each
    logged twice running with the same port and date) — most likely repeat
    Lloyd's List citations of one event rather than two real ones.
  - seq 8/9 (Panama sailing / "Brist" same-day) is almost certainly a
    "bound for Bristol" note attached to the Panama sailing rather than a
    real Bristol arrival — a same-day transatlantic arrival isn't physically
    possible, and the two entries are joined by a drawn connecting line.
  - One entry struck through and voided by the original clerk.
  - Card ends mid-entry ("Lag...") with an explicit "cont on other side"
    note; the second side is **IMG_5633** (confirmed by matching ship name/
    tonnage/registry) — not yet transcribed.
  - New ports added to `ports.csv`: Perim, Rangoon, Colon, Cairns,
    Rockhampton, Newport News; plus lon/lat and/or aliases filled in for
    Lizard, Bristol ("Brist"), Panama Canal ("Pan"), Port Pirie ("Pirie").

- **IMG_5633** — 78 rows, 29 Nov 1928 to 29 Oct 1929. **City of Norwich**,
  Card No 1, Second Side — directly continues IMG_5632 ("cont from other
  side"). Same round-the-world pattern: UK/Northern Europe, New York/Panama,
  New Zealand (Auckland, Wellington, Lyttelton, Dunedin), Australia (Portland
  Victoria, Geelong, Melbourne, Adelaide), Fremantle, Mauritius, the same
  South African circuit City of Chester used on IMG_5628 (Lourenco Marques →
  Port Natal → East London → Algoa Bay → Table Bay), US East coast, Panama
  again, Los Angeles, Japan (Yokohama, Osaka, Kobe), Shanghai, Moji, Keelung
  (Formosa), Cebu, Manila, Singapore. The captain changed mid-card — W.J.
  Haughton to R. Jones (cert. 032456) on 21 Dec 1928. A handful of flagged
  items, mostly the same kinds of anomaly as IMG_5632:
  - Two entries struck through and voided by the original clerk.
  - Another duplicate-looking bracketed trio (NY / Hampton Roads / NY),
    annotated by the card itself exactly like IMG_5632's NY/Newport News
    trio.
  - A Melbourne arrival dated "4/4" — impossible as written (same day as,
    in fact before, the Geelong departure it should follow) - adjusted to a
    placeholder date and flagged rather than trusted.
  - "Kul" (sailing, tentatively Keelung) and a Shanghai/Moji same-day pairing
    that doesn't sit right geographically — both flagged, not resolved.
  - A blue "paragraph" note ("re mishap at dock", no details given) attached
    to the Los Angeles call, plus a separate blue parenthetical "(Fran)"
    entry of uncertain status (San Francisco, written in blue rather than
    black/red like every real port call).
  - Card ends "cont. on card no 2" — a *different* Card No 2 to the City of
    Chester one referenced on IMG_5628/29/30 (different ship) — not yet
    identified among the scanned images.
  - New ports added to `ports.csv`: Portland Victoria (disambiguated from
    Portland Oregon/UK by the card's own "(Vict)" annotation), Algoa Bay,
    Osaka, Moji, Keelung, Cebu; "P.Louis" added as an alias for the existing
    Mauritius row; lon/lat filled in for Shanghai and Yokohama.

- **IMG_5634** — 74 rows, 30 Oct 1929 to 12 Oct 1931. **City of Norwich**,
  Card No 2, First Side — this is the card IMG_5633 said it continued onto.
  Repeats the same SE Asia / Red Sea / Mediterranean / US East coast /
  Northern Europe circuit a second time (Penang, Port Swettenham, Singapore,
  Manila, Shanghai, Hong Kong, Saigon, Cebu, Ceylon, Perim, a new stop at
  Port Sudan, Suez, Port Said, Gibraltar, Marseilles, Le Havre, London,
  Rotterdam, Hamburg, Hull, Shields, New York, Boston, Philadelphia, Newport
  News, Antwerp). A few things worth noting:
  - One entry the clerk struck through and explicitly labelled "Erroneous"
    in their own hand — the clearest confirmation yet of what the voided
    entries elsewhere have meant.
  - The unresolved lowercase "bey" term (first seen on IMG_5632) turns up
    twice more, in the same relative position in the route both times —
    between a South/SE Asian port and Perim. That recurrence argues it's a
    real, consistent piece of shorthand rather than a one-off misreading,
    even though it still doesn't match anything in `ports.csv`.
  - An apparent ~14-month gap in the card's own dates (Jul 1930 to Oct
    1931), with an explicit "1931" year-box and nothing logged in between.
    Most likely a genuine lay-up — 1930-31 was the depth of the shipping
    depression — but the card doesn't say so, flagged as a guess not a fact.
  - Card ends "P.T.O." — second side not yet transcribed.
  - New port added to `ports.csv`: Port Sudan. Lon/lat and/or codes filled
    in for Marseilles, Hong Kong, Saigon, Penang, Port Swettenham.
