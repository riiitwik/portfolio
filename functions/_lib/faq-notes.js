export const FAQ_NOTES = `
## What's your strongest project?
RBAC. It involved collaborating with the pipeline team, the quality rules team and the configuration team. The design work was easier once the domain was clear; the hard part was understanding the domain and the actions: why each exists and what happens when it is used. I went deep into the Data Integrity Suite first, then built a rough prototype where I could toggle access on and off so on calls I could show what a person with no access would see. Proof: seamless collaboration and a smooth move to production. Proudest of: how much domain knowledge I now have about the Data Integrity Suite.
Closer: ask if they want to hear how the prototype shaped the decisions.
If they say yes: The prototype had profiles to switch between: Quality Designer, Quality Operator, View Only and No Access. It turned permission talks from abstract into looking at a real screen, which is how we landed on hiding actions someone cannot use instead of showing them disabled, since a disabled button makes people wonder if something is broken. We also checked permissions control by control, not just page by page.

## What did you own end to end?
Conditional Split (the routing step in the pipeline). I did the research on my own. Interaction design started on paper and in Figma. When the team changed tools, I rebuilt early screens as prototypes there to get sign-off. Then I implemented the whole routing step in the repo myself, and as an Experience Engineer covered UX, UI and end-to-end testing. Result: it made building pipelines easier. Do NOT mention ship or release status. Do NOT give numbers for this project. If asked about later changes, say there is more work I have not written up yet.
Closer: ask if they want to hear how I tested it.
If they say yes: I tested end to end in the environment and checked it with the feature flag on and off, so nothing would surprise anyone either way.

## What problems do you work best on?
Honestly all kinds, because each teaches something different. To solve a problem well you first need to know where it comes from. Precisely was my first domain-heavy tool, and each feature brings a new puzzle: how data is stored, how analysts work, why an action exists. Each one makes me more confident we can do more. By quarter: a couple of features in the first, two delivered in the second, more than five in the third.
Closer: ask if they want to know what I find hardest.
If they say yes: Stubborn stakeholders. But it leads to healthy discussions, and I hope people stay open to opinions. With solid, concrete reasons behind a decision, you are usually good to go.

## What was your role on RBAC?
I wore two hats. On the UX side I did the research, the domain deep dive and the prototype. I also handled the permissions on the code side, for both quality rules and quality pipelines: View, Create, Update, Delete and Operate, so what a person sees matches what they are allowed to do. Do NOT explain Operate in detail and do NOT add a follow-up question.

## How do you measure design success?
Adoption first. The design system reached 97% adoption within six months, which also depends on product managers and rollout. The other half is how it feels: self-explanatory navigation, few follow-up questions, features easy to find with fewer bumps. A design is never finished; you revisit it and refine.
Closer: ask if they want to hear about a time the numbers showed something was not working.
If they say yes: Insights Copilot. The design was solid, but several developers built it at once with no design system yet, so the build had many inconsistencies. Once the design system was in place, the numbers took off. A design is only as good as how it survives being built. Do NOT name specific figures.

## How did you reach 97% adoption?
This is the Insights Copilot design system. I owned everything in the scope listed in that case study, together with other designers. We wrote proper documentation, ran many walkthrough calls, did designer reviews, and built components that saved people real time. Do NOT say how 97% was measured.
Closer: ask if they want to hear how it was built with no dedicated time.
If they say yes: We were not a design-first organization, it was mostly tech, and even the product managers did not see why a design system mattered then, so there was no set time. Each sprint, whichever designer had bandwidth picked up a section, and we kept syncing to stay aligned. It paid off with far fewer UI bugs.

## How do you handle disagreement?
The toughest ones were at my previous company, AB InBev, where the stakeholders were the company's CEO and CTO. They were stubborn about what they wanted, a lot was at stake and there was a lot of pressure. What helped: healthy discussion, as long as I came with good, concrete backing for my decisions. It came out pretty well. Never name the CEO or CTO. Do NOT invent what they insisted on.
Closer: ask if they want to hear what it was like being the only designer on it.
If they say yes: I was the only designer, so every conversation with leadership came back to me. I had a mentor who guided me every now and then, and a colleague (never name them) who took on a lot when I was away. Do NOT add a follow-up question.

## What's your design process?
I start by understanding the problem down to its core, then do a lot of research first, because what I am building may already exist. A proper competitor analysis shapes many decisions. While designing I am my own first critic: if someone who does not know the product can work out the feature and the navigation, I have probably done a good job. Then I get feedback from a fresh pair of eyes. Do NOT say who gave the feedback. Never call myself dumb.
Closer: ask if they want to hear about a time research saved effort.
If they say yes: I was assigned a feature and spent a week on intense research. By the end I realised we did not need a new feature at all. I put it in a documented research deck, which saved the team a lot of time. Sometimes the best design decision is not building the thing. Do NOT add a follow-up question.

## Are you open to new roles?
Yes, why not! I am always up for challenges and changes. Every project has taught me something new, so I like roles with room to learn and take on bigger problems. Invite them to reach out if they see a fit, using the contact details from the existing fallback line. Do NOT state location, remote preference, notice period, salary or timing; if asked, say I would be happy to talk about it directly and share the contact details.
Closer: ask if they want to know what kind of problems I enjoy most.
If they say yes: use the answer from "What problems do you work best on?".

## TA Hub (hiring platform)
Link: https://www.behance.net/gallery/234906315/TA-Hub-Dashboard
What it is: A centralized hiring platform I designed (UX and UI) that connects recruiters, hiring managers, PBPs and finance in one place, so every candidate's progress is clear from sourcing to joining.
Problem: Hiring was broken. Offer letters travelled through TA leads, tower leads, PBPs, finance and managers by email, and one missed detail could send an offer back to the start. Every team kept its own Excel sheet, so data was fragmented, records were duplicated, and nobody had real-time visibility. Notifications were manual.
What I tried first: A shared Google Form and sheet with a kanban view helped a little, but it still relied on manual updates and fell apart after about 50 candidates, with repeated entries and approvals still happening over calls and emails. That made it clear we needed a full product. The old tracker became unmanageable after 50 candidates, approvals from external stakeholders broke the hiring flow, and the manual process was error prone, at roughly 10 to 12 percent.
What I designed: A real-time dashboard with KPI cards, an application overview and a detailed table. Approvals auto-route to the right stakeholders with automated notifications. The whole approval flow lives inside the app instead of email chains. Compensation rules are validated while the offer is created (compensation ratio range and hike percentage), with role-based approvals and instant flags for exceptions. Candidate details and average band compensation sit together as a single source of truth.
Impact: Time to offer about 40 to 50 percent faster, candidate drop-off lowered by about 15 percent, error rate reduced by about 70 percent.
Closer: ask if they want to hear how it grew from spreadsheets into a full product.
If they say yes: It happened in stages. Excel sheets first, then the shared form with a kanban view, which broke at around 50 candidates, then the full product. Each stage showed what the next one had to fix. I started with the most obvious blockers: auto-routing approvals and automated notifications. After that I built validation into the flow so errors were caught early instead of coming back later. Do NOT add a follow-up question.

## PACT (Procurement Automation Control Tool)
Link: https://www.behance.net/gallery/234906633/PACT-Procurement-Automation-Control-Tool
What it is: A centralized procure-to-pay platform, global SaaS and automation, where I was the lead designer. It replaced email and spreadsheet workflows with one system for purchase requests (PR), purchase orders (PO) and goods receipts (GR).
Problem: Procurement was slow, fragmented and manual. PRs came by email and spreadsheets, POs sat in separate systems and GR confirmations were late, which meant errors, missing approvals and endless back and forth. Vendor payments were delayed and finance spent hours reconciling. One key raw material vendor faced repeated payment delays because of mismatched GR and PO entries.
My approach: I treated it as a systems problem, not a screens problem: data ownership, approvals and the handoffs between people and systems. I ran workshops with procurement, finance and operations, interviewed 24 users across roles (requestors, approvers and reconcilers) and mapped the top failure scenarios: partial deliveries, contract rate mismatches, manual overrides and missing evidence. We agreed success metrics together: procurement cycle time, error rate and monthly reconciliation hours. My design principles: design for trust and auditability, reduce touchpoints and copy paste, make exceptions easy to spot and act on, and reveal complexity progressively.
How it shipped: First a focused MVP for a pilot group with automated PR creation and automated PR to PO handoffs; upstream errors dropped and requestor satisfaction improved. Then real-time GR confirmation, evidence attachments such as delivery challans and photos, a reconciliation dashboard and automated pending GR alerts; reconciliation hours and open disputes dropped. Finally I consolidated everything into one module with role-based dashboards to cut multiple license costs, improve cross-team visibility and increase adoption.
What is in it: PR creation with attachments and in-app discussions, PO modification, GR confirmation for the invoicing team, a GR on behalf flow for exceptions with background PO validation, e-auction for vendor selection, and an approver screen.
Impact since launch: Approval delay cut from 10 days to 3 days (about 70 percent), about 100k dollars in annual cost savings, about 45 percent error reduction.
Closer: ask if they want to hear why we shipped a small MVP first.
If they say yes: The problem was big and the risk of getting it wrong was real, so we started with the highest impact pieces: automated PR creation and PR to PO handoffs, for a pilot group. Errors upstream dropped and requestors were happier, which earned trust for the next phase. After that we added GR confirmation, evidence uploads and the reconciliation dashboard. Only once those worked did I bring everything together into one module. Do NOT add a follow-up question.

## CPG Intel (marketing intelligence mobile app)
Link: https://www.behance.net/gallery/234908123/CPG-Intel-Mobile-App
What it is: A cross-platform app for competitive analysis and executive insights, for leaders, executives and business strategy teams, showing company and competitor performance, KPIs, share prices, news and reports in one place. Global. I worked on it with one colleague (never name them). My focus was data trust, inconsistent data, poor readability and low engagement.
Problems I found: Executives hesitated to trust the data because open source APIs had a 5 to 10 minute delay and they had to refresh by hand. The app was hard to read on mobile. It was overwhelming, with overflowing tables and no summarized view, so finance and business teams stuck to their old Excel sheets. In user interviews, 6 out of 10 people skipped the app and used Excel because of the overwhelming data.
Key decisions: I explored three home screen directions: the existing table heavy view, a customizable widget based home, and a clean summarized insights home. I chose the summarized insights home because leaders valued quick decisions over raw data depth, and the widget version ended up cluttered. I also designed a toolkit for quick analysis, a markets view with top movers and share prices, metric info cards, consensus report views with tabs, optimized tables and a bottom drawer for filters, and deep dive pages with press releases, analyst sentiment and analyst reports inside the app. I proposed a Summarize with AI feature using Insights Copilot, an internal AI data assistant.
Data freshness and trust: This was the hardest part. My first idea was a small freshness indicator, but interviews showed users could not tell what the colors meant and were not sure when the system updated. The final data refresh pill combines a timestamp, the data source and auto refresh, so people have clarity and confidence.
Impact: Adoption rose by roughly 30 to 45 percent depending on the group (leaders or managers). Decision making was about 40 percent faster and mobile usage grew about 25 percent in the first month. About 60 percent of data conflicts across teams were resolved. Task automation saved 50 plus hours of manual work, roughly the work of two people. Do NOT say which group got 30 and which got 45.
Closer: ask if they want to hear how I tackled data trust.
If they say yes: The data came from open sources with a delay, so leaders kept second guessing the numbers. I first tried a small indicator showing how fresh the data was, but in interviews people could not read the colors and did not know when it updated. So I moved to a pill with a clear timestamp, the source of the data and auto refresh. It made the app feel dependable, and it was the thing that moved adoption the most. Do NOT add a follow-up question.
`;
