# INCOSE ASEP/CSEP Practice Exam Simulator

Interactive practice exam simulator for the INCOSE Associate Systems Engineering Professional (ASEP) and Certified Systems Engineering Professional (CSEP) certification exams, based on the INCOSE Systems Engineering Handbook 5th Edition.

## Features

- **475 questions** from 5 practice knowledge exams
- Configurable question count (10–475) and time limit (10–300 minutes)
- Random or sequential question order
- Countdown timer with visual warnings
- Question flagging for review
- Navigation grid to jump between questions
- Instant scoring with pass/fail (70% threshold)
- Detailed answer review with explanations referencing the SE Handbook
- Topic filter based on SE Handbook sections
- Spaced repetition: questions you miss come back more often in random mode
- Statistics dashboard with score history and weak topics (stored locally in your browser)
- Browse and search all questions with answers and explanations
- Keyboard shortcuts (1–4 / A–D to answer, ← → or J/K to navigate, F to flag)
- Dark mode
- **Practice mode**: untimed, answers lock and show right/wrong with explanations immediately; tracked separately from exams in statistics
- **Only questions I got wrong**: drill the questions whose most recent answer was wrong (combines with the topic filter)
- **Resume unfinished sessions**: progress is saved as you go; exam time keeps running while the page is closed
- **Pace indicator** in exam mode shows whether you are ahead of or behind an even pace
- **By-topic breakdown** on the results screen, plus a review filter (All / Wrong / Skipped / Flagged)
- **Installable and works offline** (PWA with a service worker caching the app)

## Usage

Visit **[karaman.dev/incose-quiz](https://karaman.dev/incose-quiz)** or open `index.html` locally in any browser.

### Exam Settings

| Setting | Default | Range |
|---------|---------|-------|
| Questions | 100 | 10–475 |
| Time Limit | 100 min | 10–300 min |
| Order | Random | Random / Sequential |

## Tech

Single self-contained HTML file — no dependencies, no build step, no server required. All questions, styles, and logic are embedded inline.
