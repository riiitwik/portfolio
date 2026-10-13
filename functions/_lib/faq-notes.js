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
`;
