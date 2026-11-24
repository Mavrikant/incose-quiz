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
