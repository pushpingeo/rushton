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

**On pace vs thoroughness**: this is deliberately the slow, careful way to do
this — zooming into individual ambiguous words, cross-checking letterforms
against `ports.csv`, chasing a misread digit until it's resolved rather than
shrugged off. It costs a lot of time and context per card. That's a known,
accepted tradeoff, not something to "fix" by skimming faster once a session
has been running a while or context is getting long — match the diligence of
the cards already done (see "Fully transcribed so far" below for the bar),
don't ease off it. If session length is a genuine constraint, the right lever
is stopping between cards (everything below makes that safe), not lowering
the standard within a card.

**Checkpointing**: commit locally after every completed card (the
transcription CSV, `ports.csv`, `cards.csv`, and this README together) so
work is never at risk if a session ends unexpectedly. Don't push to the
remote unless separately asked — check whether that's still wanted, since it
may depend on what else is happening with the live site at the time.

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

- **IMG_5635** — 75 rows, 12 Oct 1931 to 18 Aug 1932. **City of Norwich**,
  Card No 2, Second Side — directly continues IMG_5634 ("cont."). A third
  lap of the by-now-familiar circuit (Northern Europe, Mediterranean/Red Sea,
  Penang/Port Swettenham/Singapore, Hong Kong, Shanghai, Japan, Iloilo), then
  for the first time heads to **south India** — Alleppey, Cochin, Calicut,
  Mangalore (Kerala/Karnataka coast, all new ports) — before Suez, a US East
  Coast/English East Coast loop, and finally **Bombay and Okha** (Gujarat
  coast, also new). Card ends "Continued on card No 3" (not yet identified).
  A few things worth flagging:
  - The still-unresolved "Pwle"/"Iwle" term from IMG_5632 turns up again,
    in the same English-East-Coast context (between a transatlantic arrival
    and Hull/Shields) both times — strong evidence it's a real, consistent
    place rather than a misreading, just not yet identified.
  - Another bracketed trio (Singapore/Port Swettenham this time) with a
    duplicate-looking entry, same pattern as the NY/other-port trios on
    IMG_5632/5633.
  - An unusually styled entry for Mangalore — red and noticeably larger
    than everything around it, unlike a normal sailing.
  - A duplicate Port Said arrival/sailing logged on the same date.
  - New ports added to `ports.csv`: Alleppey, Calicut, Mangalore, Bombay,
    Okha; lon/lat filled in for Spurn Head, Cochin.

- **IMG_5636** — 73 rows, 18 Aug 1932 to 9 Jul 1933. **City of Norwich**,
  Card No 3, First Side — directly continues IMG_5635 ("Continued on card
  No 3"). Opens in Gujarat (a new port, Bedi Bunder) and Karachi, then Red
  Sea/Suez, Liverpool, the Manchester Ship Canal (Eastham/Manchester),
  Glasgow and the Firth of Clyde (two new coastal points - Gareloch and Tail
  of the Bank), Northern Europe, London, the now-familiar South Africa /
  Lourenco Marques / Rangoon circuit, Red Sea/Suez again, London/Hull, and
  back down to Table Bay / Algoa Bay / East London / Port Natal / Lourenco
  Marques - ends "P.T.O.". Captain changed mid-card (Cooper to A.S. Reay,
  21 Dec 1932). Two recurring-term data points worth knowing about:
  - The unresolved "bey" term appears for a 4th time, in exactly the same
    position in the route (between a Rangoon-area port and Perim) as every
    previous sighting - strong evidence it's real and consistent, just
    still unidentified.
  - The unresolved "Pwle" term reappears too, but this time right after the
    Isle of Wight on the south coast - geography that fits "Poole" far
    better than either of its two earlier Hull-area appearances. That
    mismatch raises a real possibility that "Pwle" isn't one single
    unresolved place but two (or more) different words read the same way.
  - New ports added to `ports.csv`: Bedi Bunder, Gareloch; lon/lat filled
    in for Tail of the Bank.

- **IMG_5637** — 71 rows, 9 Jul 1933 to 3 Mar 1934. **City of Norwich**,
  Card No 3, Second Side — directly continues IMG_5636. South/East Africa,
  Calcutta, Ceylon, Aden, Red Sea/Suez, Ceuta (new port) and Gibraltar, then
  a US East Coast run during which the ship suffered a genuine mechanical
  casualty: a blue paragraph note reads **"Lost prop. blade"** at Baltimore
  (10 Oct 1933), continued by a second note — **"New prop. blade lost, was
  docked at N.News"** — the first mechanical-incident note this detailed
  since the Casualties-box entries on IMG_5629/5630. From there: Panama, Los
  Angeles, San Francisco, a long Pacific crossing to Manila, Hong Kong,
  Shanghai, and for the first time **Dairen (Dalian) and Taku Bar** (new
  ports, Manchuria/north China), back through SE Asia and Ceylon, Suez, and
  finally Avonmouth/London/Rotterdam. Card ends "Continued on Card No 4"
  (not yet identified). Several flagged items: an unresolved "M.B." code
  near Gibraltar, an unresolved "Bvs", an unresolved "Chin[u]" between Taku
  Bar and Hong Kong, a small unexplained "try" annotation, a blue-coloured
  New York entry of uncertain status (same pattern as IMG_5633's "(Fran)"),
  a duplicate Aden arrival/sailing, and an out-of-sequence New York date.
  New ports added to `ports.csv`: Ceuta, Baltimore, Dairen, Taku Bar;
  lon/lat and/or codes filled in for Avonmouth.

- **IMG_5638** — 74 rows, 4 Mar 1934 to 1 Feb 1935. **City of Norwich**,
  Card No 4, First Side — directly continues IMG_5637. Hamburg/Liverpool, a
  new US port (Paulsboro, NJ), Norfolk/Hampton Roads/Newport News, Bristol,
  Panama, a full Australia loop, Dairen, Taku Bar, Woosung, a new river port
  (Hankow, on the Yangtze), Shanghai, Keelung, Hong Kong, SE Asia, Suez/
  Gibraltar, Northern Europe, Glasgow, **New Brunswick** - which cleanly
  resolves the code that IMG_5637 flagged as an unresolved "M.B." near
  Gibraltar; almost certainly the same "N.B." misread - then a US East
  Coast/Panama/West Coast run ending mid-arrival at Manila. Captain changed
  mid-card (Reay to H. Spencer, 7 May 1934). Mostly the familiar kinds of
  flags here: several duplicate-looking same-day entries and a couple of
  bracketed out-of-sequence dates. New ports added to `ports.csv`:
  Paulsboro, Hankow; lon/lat filled in for Woosung.

- **IMG_5639** — 73 rows, 4 Feb 1935 to 29 Aug 1935. **City of Norwich**,
  Card No 4, Second Side — directly continues IMG_5638 (Manila arrival).
  A run up the north China coast (Chefoo and Chinwangtao, both new ports -
  Chinwangtao resolves the "Chin[u]" code left unresolved on IMG_5637) to
  Taku Bar, back through Shanghai/Hong Kong/Singapore/Port Swettenham/Penang,
  the recurring unresolved "bey" code (5th occurrence), Red Sea/Suez,
  Avonmouth/London, Rotterdam/Nieuw Waterweg/Hamburg, a new port (Barry,
  South Wales, paired with a same-day Newport call the same way earlier
  cards paired NY/Hampton Roads/Newport News), Lowestoft, Liverpool, back
  east via Port Said/Perim to Bombay, the Gujarat/Kathiawar coast (an
  unresolved "B.Laun" code, Okha, a new tentatively-resolved port Navlakhi,
  Bedi Bunder), Karachi, Bombay again, Aden/Suez, Barcelona, Gibraltar,
  Ushant, ending "Continued on Card No. 5" (not yet identified). Several
  things worth flagging:
  - A genuine chronological anomaly: a "Dair[en] 24/2" entry sits at the end
    of a March row in card position, but is joined by a hand-drawn red
    bracket back to the Chefoo/Chinwangtao/Taku Bar cluster earlier on the
    card, where its February date actually belongs. Kept in its card
    position and flagged rather than reordered, per the precedent set on
    IMG_5632/5633's own bracketed corrections.
  - An unresolved incident entry (a different, cursive hand) reading
    approximately "In [uncertain] 27/4" near Dunkirk, annotated in blue with
    "See under North Sea" - a cross-reference to some other record not part
    of this card - and a blue "(W to N)" of uncertain meaning. Candidates
    considered for the main word ("quarantine", "collision") are not
    confirmed; genuinely unresolved.
  - The recurring unresolved "bey" code turns up a 5th time, same route
    position as every previous occurrence (between a South/SE Asian port and
    Perim).
  - A new unresolved code, "B.Laun", on the Gujarat coast between Bombay and
    Okha - doesn't match ports.csv.
  - Several duplicate-looking same-day/same-port entries, consistent with
    the pattern on every card so far (Port Said x2, London x2, Navlakhi x2,
    plus the Barry/Newport cross-port pair).
  - New ports added to `ports.csv`: Chefoo, Chinwangtao, Navlakhi (tentative),
    Barry; "Lws" added as an alias for Lowestoft.

- **IMG_5640** — 80 rows, 30 Aug 1935 to 27 Jul 1936. **City of Norwich**,
  Card No 5, First Side — directly continues IMG_5639 ("Continued on Card
  No. 5"). Antwerp, Liverpool, up around Scotland (Dunnet Head, Glasgow),
  the now-familiar South African circuit (Table Bay, Mossel Bay, Port
  Elizabeth, East London, Lourenco Marques), Mauritius, three new ports on
  the east coast of India (Vizagapatam, Coringa - tentative, Madras), Red
  Sea/Suez, Gibraltar, London, a Channel loop (Dunkirk/Isle of Wight/
  Lizard), Glasgow/Tail of the Bank again, Suez/Red Sea, Calcutta, Rangoon,
  a new Burma port (Bassein), Aden/Perim/Port Sudan, Suez/Port Said,
  Gibraltar, London, Hull, ending "P.T.O." (second side not yet
  transcribed). Captain changed mid-card (J.E. Roberts to F.T. Mills, 14 Apr
  1936). Several things worth flagging:
  - Two more clerk-bracketed chronological anomalies, same style as
    IMG_5639's seq 20: a red arrow links a "Bassein 7/6" entry (sitting much
    later in card position) back up to its correct spot right before a
    Rangoon arrival dated 8/6; a hand-drawn bracket links a "Dnk[irk] 4/2"
    sailing back to the column before the Isle of Wight entry it should
    precede. Both kept in card position and flagged rather than reordered.
  - The recurring unresolved "bey" code turns up twice on this one card
    (6th and 7th occurrences overall), same route position as always.
  - The recurring unresolved lowercase "bal" code (first seen on IMG_5632)
    reappears too.
  - Three new unresolved codes: "Merro" (Scottish coast, position unclear),
    an illegible/possibly-voided red scrawl chronologically out of place
    among the Scottish entries, and "Mee" (Mediterranean, between Port Said
    and Gibraltar - Malta was considered and doesn't fit well).
  - Two ambiguous official codes ("Dun" = Dunkirk or Dundee; "Snd" =
    Southend or Sunderland) resolved by card context (both read as the
    Channel/Thames-estuary option, matching the surrounding waypoints)
    rather than by text match, per the port-linking method.
  - Several duplicate-looking same-day/cross-port entries, consistent with
    every earlier card (Antwerp x2, Glasgow/Liverpool same-day, Mossel Bay
    x2, Aden x2, Mee x2, Port Said x2).
  - New ports added to `ports.csv`: Vizagapatam, Coringa (tentative),
    Madras, Bassein.

- **IMG_5641** — 71 rows, 24 Jul 1936 to 24 Apr 1937. **City of Norwich**,
  Card No 5, Second Side — directly continues IMG_5640. Antwerp/Liverpool,
  US East Coast (Philadelphia, Paulsboro, New York, Hampton Roads, Newport
  News), Panama, a full Australia loop (Brisbane, Sydney, Melbourne,
  Adelaide, Fremantle), a new tentative south-India port (Koilchottam),
  Calcutta, Ceylon, Red Sea/Suez, Gibraltar, a new port (Halifax, Nova
  Scotia) opening a US/Canada East Coast run (Boston, New York,
  Philadelphia, Baltimore, Norfolk, Hampton Roads, Philadelphia, New York,
  New Brunswick), Gibraltar again, Suez, Port Sudan, a new port (Djibouti),
  Aden, Karachi, Bombay, Madras, ending "Continued on Card No. 6" (not yet
  identified). Two things worth flagging:
  - A genuine mechanical casualty at Port Said: a blue note reads "Pump
    crankshaft broken" (25 Mar 1937), and the ship sat there for repairs
    until a second blue note, "sailed", five days later (29 Mar) - the same
    kind of blue incident note as IMG_5637's "Lost prop. blade" and
    IMG_5633's Los Angeles "mishap at dock".
  - The card's opening few entries (Antwerp / an illegible "Nov"-like code /
    Liverpool) don't resolve into a clean chronological sequence - several
    are dated before IMG_5640's own final entry despite following it - and
    are flagged as a block rather than forced into a false narrative. This
    is the most significant unresolved stretch on any card transcribed so
    far; would benefit from a fresh pair of eyes.
  - New ports added to `ports.csv`: Koilchottam (tentative), Halifax NS,
    Djibouti (Boston, Cristobal, Hampton Rds, Newport News, Norfolk and New
    Brunswick already existed from earlier cards).

- **IMG_5642** — 67 rows, 27 Apr 1937 to c. Apr 1938. **City of Norwich**,
  Card No 6, First Side — directly continues IMG_5641. Calcutta,
  Vizagapatam, the recurring unresolved "bey" code (8th occurrence),
  Aden/Suez/Gibraltar, London/Dover/Hull, Dunkirk, a new port
  (Middlesbrough) with an unexplained 6-week gap before its own sailing,
  Dunnet Head, Glasgow, Liverpool, a South Africa circuit that doesn't fully
  resolve chronologically (Table Bay/Port Elizabeth/East London entries out
  of order, plus a new unresolved code "N.f."), Mauritius, Lourenco Marques,
  Beira, Port Natal, Table Bay, a new port (Dakar), Liverpool, Manchester
  (Ship Canal), Glasgow, Liverpool, Gibraltar, Port Said/Suez, Calcutta
  again. Then the card's major event:
  - **A serious grounding casualty** - the ship went ashore off Perim. The
    clerk circled the entry (22 Feb 1938) and added blue paragraph notes:
    "ashore off Perim", "Position serious", "re cargo discharge +
    jettison" - cargo had to be discharged and jettisoned to refloat her.
    The blue notes carry their own small reference numbers rather than
    dates, so the day-by-day timeline isn't fully recoverable from this
    card alone.
  - This casualty coincides with an unusually dense run of captain changes
    in the card's footer - B.J. Walmsley, then T.P. Edge (8 Jan 1938), D.E.
    Barclay (14 Jan 1938) and D.O. Evans (15 Feb 1938, noted "at Calcutta")
    all within about five weeks - almost certainly related, though the card
    doesn't say so explicitly.
  - A further run of blue parenthetical entries referencing Aden and
    Liverpool into early April is most likely the casualty's aftermath
    (situation reports or communications with the owners) rather than real
    port calls - not confirmed.
  - Card ends "P.T.O." (second side not yet transcribed). New ports added
    to `ports.csv`: Middlesbrough, Dakar.

  **Date correction (made after transcribing IMG_5643):** the grounding
  entry originally read as "22/2" is actually "2/4" (2 April) - IMG_5643
  opens with an explicit, unambiguous cross-reference and a detailed dated
  salvage log that supersedes this card's own reading. The fix resolves
  what was flagged as this card's most significant chronological anomaly -
  Calcutta/Rangoon/Ceylon/Aden now fall cleanly before the grounding
  instead of after.

- **IMG_5643** — 54 rows, 2 Apr 1938 to Nov 1938. **City of Norwich**, Card
  No 6, Second Side — directly continues IMG_5642. Opens with a detailed,
  dated blue salvage log for the Perim grounding: a long run of Lloyd's
  Agent reports via London, marked "(Lo)" and dated almost daily through
  April, tracking the casualty from grounding through "Refloated" (9 Apr),
  "Damage serious" and "Bottom very badly damaged" (mid-late Apr), to "the
  repairs & jettison of cargo" (2 May) and finally "Left Perim 28/5" -
  nearly two months aground and under repair. This is the richest incident
  record in the collection so far, and is what allowed IMG_5642's grounding
  date to be corrected (see that entry). The voyage then resumes: Port
  Sudan, Suez, Port Said, two Mediterranean position reports (an explicit
  lat/long, "in abt 33N 25E" south of Crete, and "off Cani Rocks" near
  Bizerte), Gibraltar, London, Dover, Avonmouth/Barry, Liverpool, Shields
  (an unexplained ~2-month stay), London again, Gibraltar, Port Said/Suez,
  and then **the ship's first appearance in the Persian Gulf**: a new port
  (Jeddah), Aden, Bahrain, a new port (Bushire), a new port (Khor Musa Bar,
  the sandbar approach to Bandar Shahpur) - card ends mid-entry ("Bandar
  Sh...") with "Continued on Card No. 7" (not yet identified). Captain
  changed mid-card (D.O. Evans to G. Roberts, 3 Oct 1938). One unresolved
  code, "Bchy", between two London calls and Gibraltar. New ports added to
  `ports.csv`: Jeddah, Bushire, Khor Musa Bar.

- **IMG_5644** — 77 rows, 30 Nov 1938 to 21 Jan 1940. **City of Norwich**,
  Card No 7, First Side — directly continues IMG_5643, completing its final
  incomplete entry (Bandar Shahpur). Finishes the Persian Gulf run (Abadan —
  new port — and Bushire), then Calcutta, Lourenco Marques, Table Bay, and
  then **the ship's first appearance in South America**: Rio de Janeiro, a
  new port (Santos), Buenos Aires, a new port (Rosario, up the Parana
  River), Montevideo (with a clerk's own "Erroneous" correction, the same
  self-correction convention as IMG_5634), Cape Verdes, back to Liverpool.
  Then Barry/Newport, Lowestoft, Liverpool, Suez/Port Said, back to
  India/Persian Gulf waters (Bombay, Okha, Karachi, Bedi Bunder, Navlakhi —
  confirming IMG_5639's tentative "Naval" reading), Durban, Table Bay,
  Freetown, Liverpool, the Manchester Ship Canal (Eastham/Manchester and a
  new port, Partington), a new port (Great Yarmouth Roads), Rotterdam, the
  Thames Estuary waypoints (a new one, The Nore, plus Dover/Downs), and
  finally jumping straight to Table Bay/Mossel Bay in January 1940 with
  nothing logged in between. Several columns in the Nov–Dec 1939 UK stretch
  have a date but no legible port name — flagged rather than guessed. Card
  ends "P.T.O." (second side not yet transcribed). New ports added to
  `ports.csv`: Bandar Shahpur, Santos, Partington, Great Yarmouth Roads, The
  Nore; "Rosa" added as an alias for Rosario.

- **IMG_5645** — 84 rows, 22 Jan 1940 to c. 16/24 Apr 1941. **City of
  Norwich**, Card No 7, Second Side — directly continues IMG_5644. The
  familiar South Africa circuit (Port Elizabeth, East London, Durban,
  Lourenco Marques, Beira, Table Bay, Freetown), Liverpool and the
  Manchester Ship Canal (Eastham, Manchester, Ellesmere Port, Partington,
  Runcorn), then back out to Bombay, Okha, Karachi. One struck-through/
  voided entry ("Gib (p)", early May 1940). An unresolved Clyde-area code,
  "Geas"/"Yeas", logged alongside a Tail of the Bank call and not resolved
  against `ports.csv`. Then, for the first time in the collection, the
  ship's war service becomes visible: a boxed note reads "O.H.M.S." over
  "off 5.3.41" — the ship was on Admiralty requisition ("On His Majesty's
  Service") and released 5 Mar 1941. No "on" date is given, but the gap in
  ordinary citations either side of the note fits that reading cleanly.
  Entries resume into the Eastern Mediterranean — Aden, Suez, Port Said,
  Alexandria — and bring two new ports: **Haifa** (Palestine) and
  **Piraeus** (Greece, consistent with the spring 1941 Battle of Greece),
  with a clerk correction bracket reordering one Piraeus sailing/arrival
  pair (same convention as IMG_5632/5633/5639/5640) and a second
  struck-through/voided entry (5/4). The card ends with the ship's first
  war-damage incident: a blue paragraph note reading approximately "Damaged
  in air raid" (date uncertain, c. 24 Apr 1941) and a second, harder-to-place
  blue annotation ("16/4", with a small "(X0)" mark whose meaning isn't
  established) — both flagged as genuinely uncertain rather than forced into
  a clean reading, per the same standard as every other unresolved item in
  this collection. Card ends "Continued on card no. 8" (not yet identified).
  New port added to `ports.csv`: Haifa (Piraeus already existed, code "Pir").

- **IMG_5646** — 62 rows, 3 May 1941 to 7 Jun 1942. **City of Norwich**,
  Card No 8, First Side — directly continues IMG_5645. Opens with the ship
  again coming off Admiralty requisition ("O.H.M.S.", released 30 Apr 1941),
  then a long Eastern voyage — Port Said, Suez, Bombay, a new port
  (Mormugao, Goa), Mombasa, the South Africa circuit (Durban, Table Bay),
  then home to a run of UK/convoy waypoints (Halifax NS, Loch Ewe, Hull,
  Spurn Head, Methil Roads). The card's major event is a **second wartime
  damage incident**: a dense, hard-to-read run of blue paragraph notes
  describes the ship holed in a collision around 15 Oct 1941, heading to the
  Clyde/Glasgow for repairs, and a confusing few weeks of movements around
  the Clyde through November. This whole September-December 1941 stretch
  (IMG_5646.csv seq 23-44) mixes ordinary red/black citations with the blue
  narrative in unusually cramped handwriting and is the least certain
  stretch in the collection so far — flagged as a block, per the same
  "don't force a clean reading" standard used for IMG_5641's own most
  uncertain stretch, and noted as a good candidate for a fresh, dedicated
  re-read. The ship then reaches Sydney NSW (marked "(NS)") before an
  unresolved run of entries closes out 1941. 1942 resumes with the familiar
  Table Bay/Lourenco Marques/Bombay circuit and a new Indian stretch
  (Sandheads, a return to Cochin, Madras). Several unresolved codes
  ("Sc.L.", "Cy", "mble") left unmatched against `ports.csv` rather than
  guessed. Card ends "P.T.O." (second side not yet transcribed). New ports
  added to `ports.csv`: Mormugao; St Lawrence (tentative).

- **IMG_5647** — 54 rows, 11 Jun 1942 to 4 Jun 1943. **City of Norwich**,
  Card No 8, Second Side — directly continues IMG_5646. Card headed "Re leak
  & repairs" in blue — the whole card documents an ongoing wartime leak and
  its repairs, referenced in several blue notes rather than fully itemised
  as discrete events. Two O.H.M.S. (Admiralty requisition) boundary notes,
  one "on" (23.8.42) and one "off" (4.6.43) — the first time an "on" date
  has appeared alongside an "off" date in this collection. Two new ports:
  **Walvis Bay** (South West Africa) and **Bougie** (Algeria — timing fits
  Allied convoy support in the wake of Operation Torch, Nov 1942) — plus the
  familiar Table Bay/Freetown/Clyde/Algiers/Gibraltar/Liverpool rotation.
  One struck-through/voided entry (annotated "NOT", 20/5/43). A handful of
  blue citation-style annotations ("(Lo.)", "(L.O.)", "(Cape Town) 31/1")
  don't fit as ordinary port calls and are flagged as Lloyd's Agent report
  references rather than forced into the sequence. Card ends "Contd on card
  No. 9" (not yet identified). New ports added to `ports.csv`: Walvis Bay,
  Bougie.

- **IMG_5648** — 44 rows, 22 Jun 1943 to 26 Jun 1944. **City of Norwich**,
  Card No 9, First Side — directly continues IMG_5647. Card headed "Re
  repairs - 'war miss'" — a wartime near-miss just before the card opens.
  Milford Haven, Philadelphia/Hampton Roads, Suez, Aden, Bombay, Ceylon,
  then the card's major event: the ship put into **Madras on 18 Oct 1943
  with a fractured tunnel shaft**, and stayed there under repair for nearly
  four months — a long run of "in port"/ditto citations through to 3 Feb
  1944 — the longest layup logged anywhere in this collection. Resumes with
  Sandheads/Calcutta, Ceylon, Aden, Suez, Port Said, then home via Loch Ewe
  to Liverpool/Eastham/Manchester. A couple of out-of-place blue citation
  cross-references ("(Madras) 2/2") left flagged rather than forced into the
  sequence, the same pattern as IMG_5647's "(Cape Town) 31/1". No new ports
  — all previously seen. Card ends "P.T.O." (second side not yet
  transcribed).

- **IMG_5649** — 63 rows, 27 Jun 1944 to 12 Sep 1945. **City of Norwich**,
  Card No 9, Second Side — directly continues IMG_5648. Much cleaner than
  the last several cards: a normal black/red grid throughout, no dense
  damage narrative. Clyde/Glasgow, Suez, Aden, Ceylon, Sandheads/Calcutta,
  Freetown, then a long Australia/Indian Ocean run: Sydney NSW, a new port
  (**Port Kembla**), Fremantle (written as the short form "Fre", distinct
  from this same card's "Freet" for Freetown — a useful reminder that one
  card can use two different abbreviations for two different ports),
  Albany, Melbourne, Trincomalee, Vizagapatam. One sailing with no logged
  arrival (Adelaide, 22 May 1945) and one uncertain-colour call (Sandheads,
  8 Aug 1945) flagged rather than forced. Card ends "Contd on card No 10"
  (not yet identified). New port added to `ports.csv`: Port Kembla.

- **IMG_5650** — 64 rows, 21 Jul 1940 to 22 Jan 1942 (plus several undated
  blue citation cross-references). **NEW SHIP: City of Rangoon** (net
  tonnage 4272, distinct from City of Norwich's 4346), Card No 7, First
  Side — continues an unseen Card No 6, Second Side; Cards 1-6 not yet
  identified among the scanned images. Captain R.J. Jeffers throughout (from
  14 Oct 1940, re-confirmed twice). The familiar South/East Africa circuit
  (Lourenco Marques, Table Bay, Durban, Beira, Dar es Salaam, Mombasa),
  Freetown, Liverpool/Mersey, then further east to Bombay and Karachi.
  Heavily annotated in blue with a run of wartime/weather incidents that
  aren't fully itemised: tank repairs, a "returned, leaking" episode at
  Table Bay/Cape Town (Jan 1941), cargo damage at Freetown, dock-gate damage
  at the Mersey, and — the card's major event — cyclone/storm damage that
  required a month's repairs at Table Bay (Jan 1942). Several blue
  parenthetical citations ("(Beira) 6/12", "(L.M) 15/9", "(Freet) 27/12")
  don't fit chronologically where they sit and are flagged as Lloyd's Agent
  cross-references rather than forced into the sequence. Card ends "P.T.O."
  (second side not yet transcribed). No new ports — all previously seen.

- **IMG_5651** — 56 rows, 11 May 1942 to 27 Apr 1943 (plus several undated
  blue citation notes). **City of Rangoon**, Card No 7, Second Side —
  directly continues IMG_5650. Opens with the ship leaving Table Bay after
  the repair stop flagged at the end of IMG_5650, followed by a run of blue
  inspection/citation notes ("no damage to government cargo") before normal
  entries resume. The familiar South/East Africa circuit (Durban, Lourenco
  Marques, Beira, Port Elizabeth, Table Bay), Freetown, Liverpool/
  Manchester/Mersey, a new port (**Saldanha Bay**), then Durban/Lourenco
  Marques/Beira/Mombasa again, Zanzibar, Aden, Suez, Port Said, Haifa.
  Several blue citation-style parentheticals ("(St Thomas)", "(Cape Town)
  26/10, hawsepipes", "(Beira) 19/2") don't fit chronologically and are
  flagged as Lloyd's Agent cross-references rather than forced into the
  sequence. An "OHMS" marker (25.4.43) appears without the usual explicit
  on/off label. Card ends "Contd on card no 8" (not yet identified). New
  port added to `ports.csv`: Saldanha Bay.

- **IMG_5652** — 59 rows, 28 Apr 1943 to 25 Apr 1944. **City of Rangoon**,
  Card No 8, First Side — directly continues IMG_5651. Alexandria and a new
  port (**Tripoli**, Libya), Port Said/Suez/Aden, the familiar East/South
  Africa circuit (Beira, Durban, Table Bay), Freetown, Liverpool/Mersey,
  then a shift into the **Mediterranean theatre for the Italian campaign**:
  Alexandria, and two new ports (**Augusta**, Sicily, and **Castellammare**,
  near Naples), shuttling repeatedly between Naples/Augusta/Castellammare/
  Alexandria/Port Said through early 1944. Two separate wartime collision
  references in blue — one retrospective (dated 26 Mar 1942, over a year
  before the surrounding entries) and one current (Feb 1944, details
  unresolved) — plus damage/repair citations at Freetown and Liverpool. One
  struck-through/voided entry ("NOT", 19/4) and a couple of unbracketed
  chronological inversions kept in card position rather than reordered.
  Card ends "P.T.O." (second side not yet transcribed). New ports added to
  `ports.csv`: Tripoli, Augusta, Castellammare.

- **IMG_5653** — 57 rows, 27 Apr 1944 to 29 Apr 1945. **City of Rangoon**,
  Card No 8, Second Side — directly continues IMG_5652. Much cleaner than
  the previous few cards: a normal black/red grid throughout, with only a
  brief, hard-to-parse blue header note ("damage, striking... weather"). New
  captain F.W. Letton (no change date given, replacing R.J. Jeffers). Aden,
  the South/East Africa circuit (Durban, Lourenco Marques, Table Bay, Port
  Elizabeth), Ceylon, Vizagapatam, and a long Bengal run: Sandheads/Calcutta
  repeatedly, plus a new port (**Chittagong**). Several duplicate-looking
  same-port citations with no sailing logged between (Madras, Chittagong)
  and a couple of unbracketed chronological inversions kept in card
  position. One unresolved port code ("Ymic") left unmatched against
  `ports.csv`. Card ends "Contd on card No: 9" (not yet identified). New
  port added to `ports.csv`: Chittagong.

- **IMG_5654** — 19 rows, 4 May 1945 to 27 Feb 1947. **City of Rangoon**,
  Card No 9, First Side — directly continues IMG_5653. **This is the end of
  City of Rangoon's service.** Chittagong/Sandheads/Calcutta/Rangoon as
  normal through mid-1945, then on 12 Oct 1945 a blue note reads "Coal depot
  ship" — the vessel stops trading and becomes a stationary coal depot hulk
  at Singapore. From November 1945 through at least May 1946 the card logs
  nothing but repeated "Singapore, still here" ditto marks (consolidated
  into one summary row rather than transcribed one per month — see
  IMG_5654.csv seq 18). A 1947 year box appears with no further entries, and
  the card closes: "Deleted from L.S.9. 27.2.47." The ship's-name footer
  adds: sold 28 Aug 1946, to be renamed **"Oscar III"**. No second side to
  this card, and no further City of Rangoon cards are expected in this
  collection under this name. No new ports — all previously seen.

- **IMG_5655** — blank. **City of Rangoon**, Card No 9, Second Side — no
  entries of any kind (no dated citations, no captain info). Consistent with
  IMG_5654: the ship was deleted from the register 27.2.47 and sold/renamed
  "Oscar III" before this second side was ever needed. No IMG_5655.csv was
  created since there are zero rows to transcribe — this entry (and the
  matching row in `cards.csv`) is the complete record of this image.

- **IMG_5656** — 32 rows, 19 Sep 1945 to 2 Jul 1946. **NEW SHIP: City of
  Newcastle** (net tonnage 4462, distinct from both City of Norwich (4346)
  and City of Rangoon (4272)), Card No 12, First Side — continues an unseen
  Card No 11, Second Side; Cards 1-11 not yet identified among the scanned
  images. Captain (A?) Saunders, then A. Flynn (25.9.45), then M.B. Bevan
  (24.4.46). India/Ceylon circuit (Ceylon, Sandheads, Madras, Cochin), then
  a long haul to South America (Montevideo, Buenos Aires), Cape Verdes, and
  a genuine post-war leak incident at Las Palmas requiring repeated repair
  stops through April 1946 (consolidated into one note rather than itemised
  day by day), then home via the Downs to Liverpool/Manchester/Ellesmere
  Port. Several unresolved port codes ("P.mistra", "R.M.", "Lib") left
  unmatched against `ports.csv`. One struck-through entry annotated
  "erroneous". Card ends "P.T.O." (second side not yet transcribed). No new
  ports — all previously seen (from earlier City of Norwich cards' South
  America/Atlantic legs).

- **IMG_5657** — 72 rows, 9 Jul 1946 to 9 Dec 1947. **City of Newcastle**,
  Card No 12, Second Side — directly continues IMG_5656. Net tonnage
  corrected on this card (4468 struck through, replaced with 4446 — now
  used as the canonical value). Persian Gulf run with two new ports
  (**Kuwait**, **Basra**) alongside the familiar Bandar Shahpur/Abadan, then
  a grounding incident at Bandar (blue note, 11 Sept 1946), the Indian coast
  (Mormugao, Bombay, Navlakhi, Karachi), Aden/Suez/Gibraltar, and a
  weather-damage-plus-collision incident at Le Havre spanning Dec
  1946-Jan 1947. From here the card switches to clean typed/pasted strips
  (much higher confidence than the handwritten grid): Middlesbrough (5
  months docked, unexplained), a new port (**River Tyne**), Swansea,
  Liverpool, then a full Indian Ocean round trip via Port Said (engine
  trouble and damage, Aug 1947, flagged by both a typed dagger-mark and blue
  notes) to Bombay/Mormugao/Karachi/Bedi Bunder and back via Suez/Gibraltar/
  Hull to Antwerp. Card ends "Contd on Card No 13" (not yet identified). New
  ports added to `ports.csv`: Kuwait, Basra, River Tyne.

- **IMG_5658** — 91 rows, 2 Jun 1946 to c. Mar 1948. **NEW SHIP: City of
  Leicester** (net tonnage 1994 — much smaller than City of Norwich/Rangoon/
  Newcastle, a Mediterranean/Aegean coaster rather than an ocean-going
  tramp), Card No 13, First Side — continues an unseen Card No 12, Second
  Side; earlier cards not yet identified. A stokeroom fire incident (blue
  note, June 1946). The handwritten 1946 portion covers Gibraltar/Liverpool/
  Istanbul/Izmir with several unresolved codes ("Dss", "V.mtg"). From early
  1947 the card switches to clean typed/pasted strips covering an extensive
  Mediterranean/Aegean coasting trade: Patras, Kalamata, Piraeus, Volo,
  Izmir, Istanbul, Vostizza, Katakolo (all new ports except Piraeus/
  Istanbul/Izmir), Gibraltar, London/Cardiff/Liverpool, then Malta, Trieste,
  Venice, Split, Brindisi, Syracuse (all new), Tyne/Hull, and finally
  Bandirma and Kuluk (both new) in early 1948, card ending mid-strip. New
  ports added to `ports.csv`: Izmir, Patras, Kalamata, Volo, Vostizza,
  Katakolo, Venice, Split, Syracuse, Bandirma, Kuluk (tentative).

- **IMG_5659** — 103 rows, Mar 1948 to May 1950. **City of Leicester**, Card
  No 13, Second Side — directly continues IMG_5658. Ship info corrected on
  this card: net tonnage "1994" struck through to "1975"; Port of Registry
  "London" struck through to "Liverpool". Entirely typed/pasted strips plus
  a column of blue incident notes — no ordinary handwritten grid on this
  side. **Structural caveat**: the pasted strips' physical layout (year
  boxes for 1948/1949 at several points across the card's width) doesn't
  give an unambiguous reading order; the transcription instead orders them
  by port-to-port continuity (each strip's first port matches the previous
  strip's last port), which places the rightmost/top strip in 1950 rather
  than 1949 despite sitting beside a "1949" box — flagged clearly in the CSV
  rather than trusted to position on the card. Extensive further
  Mediterranean/Levant coasting: Crete (three new ports — Sitia, Heraklion,
  Suda Bay), the familiar Kalamata/Algiers/London/Piraeus/Istanbul/Izmir/
  Patras rotation, and new ports Beirut, Tripoli (Lebanon — explicitly
  distinguished on the card from Tripoli, Libya), Limassol, Famagusta, and
  Oran, plus Malta and Bremen. Two wartime-style incidents in blue: a
  collision at/near Piraeus (5 June, repairs through July) and an uncertain
  "seen aground" note near Hamburg/Bremen (April). New ports added to
  `ports.csv`: Sitia, Heraklion, Suda Bay, Beirut, Tripoli (Lebanon),
  Limassol, Famagusta, Oran.

- **IMG_5660** — 44 rows, 20 Sep 1945 to 30 May 1946. **City of Norwich**,
  Card No 10, First Side — directly continues IMG_5649. Back to City of
  Norwich after ten cards' worth of City of Rangoon/City of Newcastle/City
  of Leicester material. Completes the Australia circuit (Melbourne, a new
  port **Hobart**, Fremantle), Cochin, Calcutta — where a fire broke out in
  the No.1 'tween deck cargo (blue note, extinguished, damage not extensive,
  c. 2 Jan 1946) — Ceylon, Aden, Port Sudan, Suez, and at Port Said a second
  incident: the ship fouled a buoy and touched the harbour bank (16 Feb
  1946, damage noted). Then Gibraltar, a US East Coast run (New York,
  Newport News, Hampton Roads, Philadelphia), Curacao, Bristol, a Panama
  Canal transit (Balboa), Los Angeles, and a new port, **Pearl Harbor**. One
  uncertain final entry ("Hond...", tentatively Honolulu given the Pearl
  Harbor context, not confidently resolved). Card ends "P.T.O." (second
  side not yet transcribed). New ports added to `ports.csv`: Hobart, Pearl
  Harbor.

- **IMG_5661** — 79 rows, 30 May 1946 to 2 Jan 1948, plus a Feb/Mar 1949
  incident note. **City of Norwich**, Card No 10, Second Side — directly
  continues IMG_5660. Net tonnage corrected on this card: 4346 struck
  through, replaced with 4388. Pacific/Asia leg: Hong Kong, Shanghai, and
  three new Philippine ports (**Davao**, **Tacloban**, **Tabako**),
  Singapore, then the recurring unresolved "Bey" code reappears in exactly
  its historic route position (between SE Asia and the Red Sea) after a
  years-long absence, followed by Aden/Suez/Malta/Algiers/Gibraltar/London/
  Liverpool. Clean typed strips from Mar 1947 cover an extensive India/Red
  Sea circuit plus a notable transatlantic diversion to Montreal/Quebec,
  then back via Port Said/Sudan/Bombay/Colombo/Madras/Vizagapatam/Calcutta/
  Aden/Suez to London, Dundee, and a new port (**Boulogne**), ending Jan
  1948. A major incident follows (undocumented gap of over a year): the
  ship struck a submerged object at 16°20'N 54°31'E around 1 Feb (tentatively
  1949), damaging the rudder and propeller, and put into Karachi 2 March for
  repairs. Continued on Card No 11 (not yet identified). New ports added to
  `ports.csv`: Davao, Tacloban, Tabako, Boulogne.

- **IMG_5662** — 129 rows, Jan 1947 to Apr 1948. **City of Chester (Motor)**,
  Card No 3, First Side — **fills a gap flagged since IMG_5628**: that
  card's own notes said a first side and a Card No 3 should exist but
  weren't found among the scans; this is that Card No 3 (built 1944, 4954
  tons — matches). A different, later card template: no black/red
  handwritten grid at all, entirely typed/pasted strips plus a column of
  blue margin notes; the footer uses "Master" instead of "Captain" and adds
  a "Built" field. An extensive round-the-world circuit: South Africa
  (Table Bay/Port Elizabeth/East London/Durban/Lourenco Marques/Beira,
  repeated several times), Walvis Bay, Antwerp/Plymouth, a transatlantic
  Canada run (Quebec/Montreal), New York/Hampton Rds/Curacao, a Panama Canal
  transit, Los Angeles, the Philippines (Manila/Tabako/Cebu/Davao) and Far
  East (Hong Kong/Shanghai), Singapore/Malaya (Port Swettenham/Penang),
  Colombo, Aden/Suez, home to London/Liverpool/Glasgow, then a second South
  Africa lap into 1948, US East Coast again (a new port, **Trinidad** — New
  York/Baltimore/Philadelphia), and finally a third South Africa lap ending
  at a new port, **Mozambique** (the historic port city, distinct from the
  country name). Two incidents in blue: touching a mudbank off Tilbury
  (Sept 1947) and a collision near New York (24-25 May 1948, damage
  assessed, sailed again 28 May). New ports added to `ports.csv`: Trinidad,
  Mozambique.

- **IMG_5663** — 115 rows, 6 Apr 1948 to 31 May 1949. **City of Chester
  (Motor)**, Card No 3, Second Side — directly continues IMG_5662. Entirely
  typed/pasted strips plus blue margin notes — no master listed on this
  side. Continues the round-the-world pattern: East Africa (Dar-es-Salaam, a
  new port **Tanga**, Mombasa, Lourenco Marques, Durban — repeated laps),
  Table Bay/Cape Town, a US/Canada circuit (Trinidad, New York, Montreal,
  Philadelphia, Baltimore), then a second and third South Africa lap,
  Vizagapatam/Calcutta/Sandheads/Madras, Colombo, Aden/Suez/Gibraltar, a
  further US East Coast run (Boston, New York, Philadelphia, Baltimore, a
  new port **Charleston**), and a final South Africa/Australia leg reaching
  Port Pirie and Sydney as the card ends mid-line. Two wartime-style
  incidents in blue: a collision forcing the ship to "put back" into New
  York (25 May 1948, repairs referenced into July) and damage plus a formal
  enquiry connected to a Colombo call (Jan 1949). Card ends "Contd Card No
  4" (not yet identified). New ports added to `ports.csv`: Tanga,
  Charleston.

- **IMG_5664** — 61 rows, 10 Oct 1946 to 8 Mar 1948. **NEW SHIP: City of
  Florence** (net tonnage 4382, distinct from every other ship in the
  collection), Card No 11, First Side — continues an unseen Card No 10,
  Second Side; Cards 1-10 not yet identified among the scanned images.
  Handwritten grid for the 1946 portion (Gibraltar, Port Said, a Suez Canal
  transit, Aden, Karachi, Bombay, Madras), switching to typed/pasted strips
  from the Dec 1946 sailing onward. Two things worth flagging:
  - The recurring unresolved **"Bey"** code (first seen on City of Norwich's
    IMG_5632) turns up here for the first time on a City of Florence card, in
    a different route position (between Karachi/Bombay and Madras, not SE
    Asia/Red Sea) — this could mean it's a different place read the same way,
    or that "Bey" is a real, more general port that's never matched the
    Guildhall list. A second, previously-unseen unresolved code, **"Bal"**,
    appears right after Madras, tentatively somewhere near the sea approach
    to Calcutta (the very next entry is a Calcutta sailing with no arrival
    logged) but not confirmed.
  - Two wartime-style incidents, each cross-referenced between a blue
    handwritten note block and the typed strip's own dagger-mark citations,
    read as Lloyd's Agent report dates rather than forced into a strict
    timeline: a lost-anchor-and-buoy-strike incident at Hull (Feb 1947), and
    an engine-trouble-and-buoy-strike incident at Port Said (Jan 1948) that
    coincides with a same-day "put back" into Liverpool the following month
    (Feb 1948).
  - An unexplained ~6-month gap at Middlesbrough (Mar-Sept 1947), the same
    pattern already seen there on IMG_5642 and IMG_5657 — captain P.J. Byrne's
    listed start date (18 Sept 1947) falls right at the end of this gap,
    suggesting a change of command coincided with the ship resuming service.
  - Card ends "P.T.O." (second side not yet transcribed). No new ports added
    to `ports.csv` — a full-name "Navalakhi" spelling was added as an alias
    on the existing `navlakhi` row (confirming IMG_5644's tentative "Naval"
    reading).

- **IMG_5665** — 121 rows, 25 Mar 1948 to 12 Oct 1949. **City of Florence**,
  Card No 11, Second Side — directly continues IMG_5664. Entirely
  typed/pasted strips plus a dense blue narrative column - no master/captain
  listed on this side. A Persian-Gulf-heavy circuit repeated twice (Aden,
  Bahrein, Kuwait, Abadan, Khorram Shahr, Busreh/Basra - plus a new port,
  **Harta Point**, near Bandar Shahpur/Abadan on the second lap), alongside
  the familiar Calcutta/Vizagapatam/Colombo, Suez/Port Said, UK ports (Newport,
  Swansea, Liverpool, Naples, Avonmouth, Dundee, Middlesbrough, Rotterdam,
  Glasgow), and - for the first time on this ship - East Africa (Mombasa,
  Tanga, Mocambique). A few things worth flagging:
  - A chronological inversion: "Ar Port Okha Nov 23" is printed after "Sd
    Bombay Nov 27" but dated 4 days earlier - kept in card position rather
    than reordered, per the collection's established precedent for this kind
    of clerk-order anomaly.
  - The card uses two different spellings of Mombasa ("Mombassa" and
    "Mombasa") within the same short stretch - the same kind of inconsistency
    already seen with Fremantle/Freetown on IMG_5649.
  - Three wartime-style blue paragraph notes, each cross-referenced against
    the typed strip's own dagger-mark citations rather than forced into a
    single narrative: a propeller-blade-and-rudder casualty near Aden (Apr
    1948, repaired/recast at Busreh in late May-June), a lost-anchor-and-cable
    incident (Aug 1948), and a partly-illegible later citation ("(L.O.) 19/2 -
    in R.H. voy 4"), tentatively placed around Feb 1949 but not confidently
    resolved.
  - Card ends "Contd on card No 12" (not yet identified). New port added to
    `ports.csv`: Harta Point. Aliases added: Bahrein (bahrain), Busreh
    (basra), Bandar Shapur (bandar-shahpur), Mombassa (mombasa), Vizagapatnam
    (vizagapatam), Koilthottam (koilchottam).

- **IMG_5666** — 116 rows, 24 May 1949 to 8 June 1950. **NEW SHIP: City of
  Brooklyn** (net tonnage 4334 struck through and corrected to 4411, distinct
  from every other ship in the collection), Card No 1, First Side — the
  ship's maiden voyage, opening with sea trials on the Tyne right after
  launch ("Launched at Wallsend 8/12/48", built 1949). This card's template
  drops the Captain column entirely (BUILT / NET TONNAGE / PORT OF REGISTRY
  only, Port of Registry left blank), and the card itself is the cleanest in
  the collection so far — entirely typed/pasted strips, no handwritten grid
  and no blue notes at all. A steady India/Persian-Gulf-adjacent circuit
  repeated three times: Tyne, New York, Suez/Aden, Karachi, Bombay, Colombo,
  Madras, Calcutta/Sandheads/Cochin, back through Suez/Aden, a US/Canada East
  Coast loop (Halifax, Boston, New York, Philadelphia, Baltimore, Hampton
  Rds), and round again, ending at Liverpool. A blank "Casualties" box (with
  1949/1950 year markers but no entries) closes out the side; footer just
  reads "P.T.O." with no explicit next card number. New spelling variant
  added as an alias: Visakhapatnam (vizagapatam, alongside the existing
  Vizagapatam/Vizagapatnam).

- **IMG_5667** — 94 rows, 12 June 1950 to 17 Feb 1951 (card ends mid-line).
  **City of Brooklyn**, Card No 1, Second Side — directly continues IMG_5666.
  Entirely typed/pasted strips again. A UK/Northern Europe and South Africa
  circuit repeated twice (Liverpool, London, Middlesbrough, Antwerp,
  Rotterdam, Hamburg, Teneriffe, Cape Town, Port Elizabeth, East London,
  Durban, Beira, Lourenco Marques, Las Palmas, Hull, Mossel Bay, Walvis Bay,
  Immingham, Sunderland). This card has the ship's first real Casualties-box
  entries: touching bottom entering Beira (24 Aug 1950, reported 25 Aug) and
  a repairs/tank-soundings citation at Lourenco Marques (event 3 Jan,
  reported 9 Jan 1951) - both cross-referenced against dagger-mark citations
  in the main typed sequence rather than forced into it. Card ends "Contd on
  card No 2" (not yet identified). No new ports.

- **IMG_5668** — 121 rows plus 1 Casualties-box note, 2 Jan 1949 to 22 Aug
  1950. **NEW SHIP: City of Tokio** (built 1921, net tonnage 4426, distinct
  from every other ship in the collection and the oldest vessel seen so far),
  Card No 10, First Side — continues an unseen Card No 9, Second Side;
  earlier cards not yet identified. Entirely typed/pasted strips, no
  handwritten grid. South/East Africa (Port Elizabeth, East London, Durban,
  Lourenco Marques, Beira, Zanzibar, Mombasa, Mossel Bay, Cape Town),
  Suez/Aden, Bombay/Karachi, a UK/Northern Europe leg (Liverpool, Glasgow,
  Manchester, Belfast, Dublin, London, Hull, Dundee, Middlesbrough, Swansea),
  and a Persian Gulf circuit (Bahrein, Kuwait, Abadan, a new port **Harta
  Point**, Khorramshahr, Busreh, Bandar Shapur, and a new tentative port
  **Bandar Mashur** sandwiched between two Bandar Shapur calls with no dates
  given for either - possibly the same place under a different
  transliteration, possibly a distinct nearby berth). One chronological
  inversion (an Abadan arrival printed after, but dated before, the Kuwait
  sailing it follows), kept in card position. The Casualties box records a
  "Struck quay" incident at Antwerp (19 Nov 1950, reported 20 Nov) that
  doesn't correspond to any Antwerp call in this side's own typed sequence -
  likely part of a stretch of the voyage this side doesn't itemise. Card ends
  "P.T.O." (second side not yet transcribed). New port added to `ports.csv`:
  Bandar Mashur (tentative).

  **Resolved after transcribing IMG_5669:** the Antwerp incident belongs to
  this ship's *next* card side, not a gap in this one - IMG_5669 opens with
  its own "Ar Antwerp Nov 19" entry and a matching dagger citation.

- **IMG_5669** — 69 rows plus 2 Casualties-box notes, 10 Sept 1950 to 1 June
  1951 (card ends with no "P.T.O." or next-card reference at all). **City of
  Tokio**, Card No 10, Second Side — directly continues IMG_5668. Entirely
  typed/pasted strips. UK/Northern Europe (Colombo, Aden/Suez, London, Hull,
  Dundee, Boulogne, Middlesbrough, Antwerp, Liverpool, Glasgow, Newport),
  then a Persian Gulf circuit (Bahrein, Kuwait, a new port **Mena al Ahmadi**
  appearing in a duplicate-looking Kuwait/Mena al Ahmadi/Kuwait trio, Bandar
  Shapur, Abadan, Khorramshahr, Basrah), Vizagapatam/Calcutta/Sandheads/
  Colombo/Cochin, Suez, Avonmouth/London/Boulogne/Liverpool/Glasgow. The
  Casualties box records two jetty-strike incidents, each cross-referenced
  against a dagger citation in the main sequence: at Antwerp (~11 Nov 1950 -
  this resolves the incident IMG_5668's own Casualties box had left
  unmatched, since that card's Antwerp note had no corresponding Antwerp call
  on its own side) and at Liverpool (14 Dec 1950, damaged). New port added to
  `ports.csv`: Mena al Ahmadi. Alias added: Basrah (basra).

- **IMG_5670** — 109 rows plus 4 Casualties-box notes, 23 May 1949 to 13
  Sept 1950. **City of Leicester**, Card No 14, First Side. A numbering
  oddity worth flagging: the dates here overlap with/precede where IMG_5659
  (this ship's Card No 13, Second Side) left off in May 1950, so Cards 13 and
  14 don't run cleanly in sequence - not resolved, just noted. Entirely
  typed/pasted strips. The familiar Mediterranean/Aegean/Levant coasting
  trade: Port Said/Alexandria/Palermo, UK ports (London, Hull, Middlesbrough,
  Liverpool, Manchester, Glasgow), a Persian Gulf/India leg (Karachi, Bombay,
  Port Okha, Aden, Suez), then Alexandria, Beirut, Malta, Tripoli (Libya), a
  new port **Tobruk**, Tripoli (Lebanon), Famagusta, Limassol, a new port
  **Paphos**, Piraeus, Volo, a new port **Thessaloniki**, Izmir, Istanbul, a
  new port **Bourgas** (Bulgaria), Patras, a new port **Aegion**, Algiers,
  Bandirma. The Casualties box records two incident clusters, each
  cross-referenced against dagger citations in the main sequence: a collision
  near Beirut (~29-30 Nov 1949, following trouble first cited at Alexandria)
  and a tank pierced by a stern anchor slipping from a ship at Istanbul (22
  May 1950); a third citation ("Glasgow 25/4 or 25/7") isn't confidently
  matched to any specific call. New ports added to `ports.csv`: Tobruk,
  Paphos, Aegion, Thessaloniki, Bourgas.

- **IMG_5671** — 110 rows plus 2 Casualties-box notes, 13 Sept 1950 to 24 Nov
  1951. **City of Leicester**, Card No 14, Second Side — directly continues
  IMG_5670, opening with a handwritten "Manchester" note that matches that
  card's own final entry ("Ar Manchester Sept 13") rather than a new event.
  No captain/master column on this card template at all. One struck-through/
  voided entry right at the start ("Sd Liverpool Sept 24", port name crossed
  out - also chronologically out of place between the Antwerp arrival and
  sailing either side of it). The familiar Mediterranean/Aegean coasting
  trade continues: Antwerp/London/Algiers, Patras, Piraeus, Volo,
  Thessaloniki, Istanbul, Kulluk (double-l spelling, vs IMG_5658's "Kuluk" -
  added as an alias on the same tentative port), Izmir, a new port **Zante**
  (Zakynthos), Katakolo, Patras, Aegion, Malta, Gibraltar, Hamburg, Bremen,
  London, Antwerp, London, a new port **Hole Haven** (Thames Estuary/Canvey
  Island oil terminal), Alexandria, Beirut, and three new Levant ports:
  **Iskenderun**, **Lattakia**, **Larnaca**, then Limassol. A mechanical
  casualty follows: the ship put into Gibraltar (10 Mar 1951) with what a
  Casualties-box blue note tentatively reads as a broken crankshaft, sailing
  again two days later - cross-referenced by a dagger mark on the main strip
  to two Lloyd's Agent citations dated 12 and 13 March. Resumes London/Hull/
  Dunkirk/Middlesbrough/Hull, Port Said/Suez/Port Sudan, Karachi/Bombay/
  Cochin, Aden/Port Sudan/Suez/Port Said, Liverpool/London/Antwerp/Dunkirk
  (one sailing printed "Aug 4" that's almost certainly a typo for Sept 4 -
  it's chronologically impossible as printed, and Sept 4 fits cleanly the
  day before the next entry, Middlesbro Sept 5), Middlesbrough/Hull, Port
  Said/Suez, Karachi/Bombay/Aden/Port Sudan/Suez, ending with a "1952" year
  box with no entries under it. Card ends "Contd on card No. 15" (not yet
  identified). Several day-digits are left blank/dashed on the card itself
  (not transcription gaps - flagged individually rather than guessed), plus
  two digits obscured by ink smudges/blots. New ports added to `ports.csv`:
  Zante, Hole Haven, Iskenderun, Lattakia, Larnaca; "Kulluk" added as an
  alias on the existing `kuluk` row.


- **IMG_5672** — 109 rows plus 6 Casualties-box notes, 11 June 1949 to 12 Nov
  1950. **NEW SHIP: City of Lille** (Motor) (built 1928, net tonnage 4052),
  Card No 13, First Side — continues an unseen Card No 12, Second Side;
  earlier cards not yet identified. Entirely typed/pasted strips. Opens with
  a transatlantic Canada run (Montreal, a new port **Three Rivers**/
  Trois-Rivieres, Quebec), then the ship put back into Quebec - the
  Casualties box, headed "Re generator damage" (read tentatively), suggests
  generator trouble - sailing again nearly a month later. Resumes Port Said/
  Suez, where the ship also lost an anchor and chain per the Casualties box,
  Aden, Karachi, Bombay, Cochin, Colombo, Madras, Calcutta, Visakhapatnam,
  Colombo, Aden, Port Sudan, Suez/Port Said, London, Dundee, Boulogne,
  Dunkirk (a roadstead arrival followed 6 days later by a harbour arrival),
  Liverpool, Newport, Glasgow - a following Liverpool sailing is torn off
  the card, its date lost rather than just illegible - then into 1950: Port
  Said, Port Sudan, Aden, Mombasa, Tanga, Zanzibar, Dar-es-Salaam (repeated
  laps), a duplicate-looking "Ar Liverpool May 5" citation pasted in
  chronologically the wrong spot before its correctly-placed twin later on
  the card, Suez/Port Said, Liverpool, Glasgow, Newport, Liverpool,
  Teneriffe, then a full South/East Africa circuit (Durban, Lourenco
  Marques, Beira, Lourenco Marques, Durban, East London, Port Elizabeth,
  Cape Town), Las Palmas, Lisbon, London, Avonmouth, ending at Rotterdam
  with no "P.T.O." or "Contd" note spotted. A handwritten margin note beside
  the last entry reads approximately "Recovered Anchor & cable", probably
  closing out the lost-anchor incident from earlier on the card. The
  Casualties box is dense and only partially resolved - citation dates are
  matched to their main-sequence dagger marks where possible, but the
  overall narrative (beyond "generator damage" and "lost anchor & chain")
  isn't fully reconstructed; a citation reading approximately "[Cal]led to
  [attend?] sick man" near a "Lisbon 26/10" reference is flagged but not
  confidently dated. New port added to `ports.csv`: Three Rivers.


- **IMG_5673** — 103 rows plus 2 Casualties-box notes, 13 Nov 1950 to 12 Mar
  1952. **City of Lille**, Card No 13, Second Side — directly continues
  IMG_5672. Entirely typed/pasted strips. Hamburg/Hull/Middlesbrough/Antwerp/
  London/Teneriffe, then a full South/East Africa circuit (Cape Town, Port
  Elizabeth, East London, Durban, Lourenco Marques, Mombasa). A second
  mechanical casualty follows the pattern from IMG_5672: the ship put back
  into Port Said (10 Mar 1951) with engine trouble - this time the
  Casualties box is clearly legible ("Port Said 10/3 with engine trouble",
  "Sailed 16 - 15/3"), sailing again six days later. Resumes Liverpool/
  Manchester/Glasgow, a US East Coast run (Philadelphia, New York), Suez/
  Aden/Karachi/Bombay/Cochin/Colombo/Madras/Calcutta/Vizagapatam (repeated
  laps), Aden/Port Sudan/Suez, Avonmouth/London/Hull/Dundee/Glasgow,
  Liverpool, Suez/Port Sudan/Aden, a Mombasa roadstead arrival followed over
  a month later by the harbour arrival proper, Tanga/Zanzibar/Dar-es-Salaam,
  Mauritius, Port Swettenham, ending at Hongkong. Card ends "Contd Card No
  14" (not yet identified). No new ports.

- **IMG_5674** — 75 rows, 12 Sep 1950 to 13 Jul 1951. **City of Durban**,
  Card No 11, First Side. Typed/pasted strips: Calcutta/Visakhapatnam/
  Colombo/Aden/Suez, Northern Europe and UK, Karachi/Bombay and the south
  Indian coast (Koilthottam, Cochin, Kozhikode, Alleppey), then a Persian
  Gulf run through Dubai, Bahrain, Kuwait, Khorramshahr, Abadan and Basrah
  before Colombo/Visakhapatnam/Calcutta. A blue/black mark dated Feb 6 has
  no legible port or event text and is retained as a note row. The Karachi
  Jan 31 sailing is physically after that mark and remains in card position;
  the Dubai arrival has a blank day exactly as printed. Built 1921; net
  tonnage corrected from 7507 to 7522. Continues on IMG_5675.

- **IMG_5675** — 82 rows, 16 Dec 1951 to 11 Sep 1952. **City of Durban**,
  Card No 11, Second Side — directly continues IMG_5674. Typed/pasted strips
  through Suez/Port Said/Marseilles/Cardiff/Liverpool/Manchester/Glasgow/
  Greenock, Algiers/Port Sudan/Aden, the Bay of Bengal and south India,
  Northern Europe, Teneriffe and the South African coast ending at Beira.
  One pasted-strip inversion places Sd Liverpool July 5 and Ar Middlesbro
  July 8 after Ar Liverpool July 11; retained in card position and flagged.
  Beira Roads Sept 7 is followed by the harbour arrival Sept 11. The
  handwritten Casualties material is present but not confidently legible as
  a separate incident and is flagged at card level.

- **IMG_5676** — 37 rows, Jan 1943 to Jul 1944. **City of Chester (Motor)**,
  Card No. 2, First Side — best-effort handwritten-grid transcription, read
  left to right across each row and then downward. Clear black arrivals and
  red sailings are linked to the existing port lookup. Two port cells remain
  unresolved beneath blue overwriting, and one blue paragraph/citation is
  retained as a note row; uncertain cells are flagged in the CSV. Continues
  on IMG_5677.
