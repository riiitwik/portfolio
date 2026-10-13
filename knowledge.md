CONTACT: sritwik243@gmail.com, www.linkedin.com/in/ritwik-srivastava-0970781a7/, www.behance.net/ritwiksrivast

NAME: Ritwik Srivastava

# Resume
ritwik srivastava
UX Designer
sritwik243@gmail.com www.linkedin.com/in/ritwik-srivastava-0970781a7/ www.behance.net/ritwiksrivast
Experience Engineer with 3+ years of experience turning complex B2B systems into intuitive, production-ready experiences. Combines
product design, UX, and AI-assisted development to take features from problem discovery and interaction design through implementation
and shipping. Has designed AI-powered products, built scalable design systems, and delivered experiences across data quality, governance,
and enterprise workflows. Currently at Precisely, shaping and shipping data integrity experiences at scale. Previously at AB InBev, where
product design drove adoption across 40+ B2B initiatives and contributed to $800K+ in business impact.
Work Experience
Experience Engineer, Precisely June 2026- Present
Owned the UX and implementation of Data Quality & Governance scoring bands, enabling users to configure default scoring thresholds at
both system and individual-rule levels; implemented the experience in React using GitHub Copilot.
Implemented RBAC for Quality Pipelines and Quality Rules, translating defined permission models into production-ready frontend
experiences.
Implemented the enhanced Split Step in the data pipeline, bringing the redesigned interaction model into the production experience.
Defined the UX for handling sensitive data, establishing interaction patterns for safely communicating and managing sensitive
information across the product.
Owns features end-to-end from UX definition through implementation, testing, edge cases, and production readiness, using AI-assisted
development to accelerate delivery.
UX Designer, Precisely Nov 2025- May 2026
Defined UX for agentic AI experiences in data quality, including conversational flows for rule creation, natural-language-to-SQL
interactions, automated descriptions, and AI-driven recommendations.
Defined UX for RBAC (Role-Based Access Control ) across Quality Pipelines, Quality Rules, Observability, API Sources, and Profiling,
translating complex permissions into clear and scalable user flows.
Redesigned the pipeline canvas and Split Step interaction model, simplifying branching logic and making complex workflows more
intuitive for technical and non-technical users.
Conducted end-to-end UX discovery for transitive matching, translating complex deduplication concepts into clear workflows and design
decisions for high-stakes data environments.
U I/ UX Designer, AB InBe v GCC Ind i a Se p 2025- Nov 2025
L ed the end-to-end design of Insights Copilot, an AI-powered internal assistant, scaling its userbase from 100 to 5,000 employees in one
year and accelerating automation adoption in daily operations.
Contributed as a core member to AB InBev ’s design system, scaling component libraries and embedding accessibility standards,
achieving 97 % adoption within 6 months and reducing delivery inconsistencies across squads.
Applied the RICE prioriti zation framework with product and business stakeholders to align design strategy with KPIs and shape the
roadmap, directly improving adoption, efficiency and user satisfaction.
Established continuous discovery practices including structured feedback loops, heatmap analysis and A/B testing to guide product
decisions with data-driven insights.
Integrated Chromatic UI reviews into the workflow, enabling automated visual regression testing and reducing UI bugs by 30 % before
release.
Ju ni or U I/ UX Designer, AB InBe v GCC Ind i a Aug 2023- Aug 2025
L ed end-to-end design for 40+ B2B initiatives, delivering over $800K in business impact across internal tools and platforms.
Designed and launched a Generative AI chatbot powered by OpenAI LLM s to streamline operations and automate repetitive business
processes.
Built and governed a unified design system with 190+ reusable components, ensuring consistency across digital products and
accelerating design-to-development workflows.
Designed responsive and accessible web applications optimi zed for cross-device compatibility and improved user retention.
Delivered 10+ interactive dashboards in Power BI focused on actionable, user-friendly data visuali zation.
Conducted usability testing and introduced iterative improvements to drive adoption and improve UX metrics.
U I/ UX I ntern, AB InBe v GCC Ind i a June 2022- Jul 202 3
Created information architecture, high-fidelity wireframes, prototypes, and design systems for enterprise web applications and
dashboards.
Contributed to PowerApps UX/UI design, streamlining key workflows and enhancing internal tool adoption.
Designed interactive PowerBI dashboards with user-focused layouts to support data-driven decision-making.
Created UX decks and design proposals for multiple high-impact internal pro jects, supporting business development and stakeholder
alignment.
G r ap hic Design I ntern, C ODE Studi o Ju l 2021 - Se pt 2021
Designed and produced social media creatives aligned with brand guidelines for digital campaigns.
Created engaging motion graphics and GI Fs to enhance online brand presence.
Edited promotional videos for marketing and social media using Adobe Premiere Pro and After Effects.
Developed packaging design concepts with a focus on visual appeal and product positioning.
Performed advanced photo retouching and image optimi zation for web and print collateral.
G r ap hic Design I ntern, G oi n gZ ero Dec 2020- Fe b 2021
Designed comprehensive brand identity systems including logos, typography, and color palettes.
Created brand collateral such as letterheads, business cards, and stationery for print and digital platforms.
Developed platform-specific social media creatives, ensuring alignment with brand tone and engagement goals.
Produced motion graphics and GI Fs to support digital campaigns and improve visual storytelling.
Edited promotional and marketing videos using Adobe Premiere Pro and After Effects.
Executed photo retouching and visual enhancements for both web and print assets.
Edu cation
Ba c he lor of Design (Gr ap hic C ommunicat
i on Design )
Worl d U
n i versity of Design
Aug 20 19 - May 202 3
Skills
Core Skills
Product Designer, User-Centered Design, UI/UX Design, W ireframing & Prototyping, Responsive W eb Design, Interaction Design, Design
Systems, Visual Storytelling, Accessibility & Inclusive Design, User Flows & Journey M apping
UX Research & Strategy
User Journey M apping, Usability Testing, Competitive Benchmarking, Heuristic Evaluation, Persona Development, UX Documentation &
Stakeholder Presentations
Workflow & Collaboration
Design-to-code, Agile/Scrum Environments, Cross- Functional Collaboration, Developer Handoff, UX Documentation & Stakeholder
M anagement
Tools
VS Code, Github Copilot, Figma (Auto L ayout, Components, Prototyping ), Adobe Creative Suite (Photoshop, Illustrator, InDesign, After Effects,
Premiere Pro ), M iro, FigJam

# case-study-rbac.html
RBAC — Turning Permissions into Product Experiences
Home
Work
About
Contact
Resume
Portfolio Ask
← Back to work Case Study — Product / UX Design
RBAC: turning permission slugs into product experiences
Users don't experience backend permissions — they experience the interface those permissions create. This is how a permission model was translated into consistent, hide-not-disable UX across six product domains, then taken into production.
Role
UX Design
Domains covered
6 product areas
Deliverable
FigJam map → prototype → production
Hardest problem
Quality Pipeline
6 domains mapped · 4 capability types · 4 profiles in the prototype · 0 UX blockers raised during build
Contents Overview The Challenge Solution Design Process Results
Overview
Role-Based Access Control determines what users can access and what actions they can perform. In the Data Integrity Suite, permissions are defined at the backend through permission slugs — the frontend's job is to translate those into a clear, consistent user experience.
The work was to define how permissions should translate into UX across the product, build a working prototype to demonstrate the behaviour, and then carry the validated patterns into production.
The Challenge
RBAC sounds simple until the same permission model has to hold up across multiple, very different product experiences. A permission that maps neatly to one screen can have a completely different UX implication in another.
The question: when a user has a particular set of permissions, what should they actually see and be able to do?
Domains covered
Quality Pipeline , Quality Rules , Observer , Runtime Engine , Profile , API Source
Key challenges in Quality Pipeline specifically
Side panels, configuration, and settings that all carry their own permission logic
Multiple actions and operational controls at different access levels
An experience that still had to remain visible to View Only users
The goal was never to redesign the permission architecture — it was to build a consistent UX layer between backend-defined permissions and what the user actually experiences.
Solution
The approach was to treat this as a translation layer: backend permission → user capability → frontend behaviour → visible actions. Every permission mapped to one of four capability types — View, Create, Update, Delete — plus Operate for domains with runnable actions.
The core decision: hide, don't disable
The most important call in the project was what happens to an action a user isn't authorized for.
Rejected
Show it, disable it
Leaves users staring at controls they can't use — is it broken? Temporary? Restricted? Every disabled button is a small moment of doubt.
Chosen
Hide it entirely
The interface only shows what a user can meaningfully do — less clutter, no failed attempts, no ambiguity.
"If a user can't perform an action, they shouldn't need to think about it."
[Image: Toggling the Create permission off removes the Create Rule action and related controls from view]
Prototype
Static screens couldn't communicate the number of possible permission states, so a working prototype let different profiles — Quality Designer, Quality Operator, View Only, No Access — be explored live, with the UI updating in real time as permissions toggled.
[Image: Working RBAC prototype showing Quality Pipeline permission toggles and their live effect on the pipelines list]
Design Process
1
Document every scenario in FigJam
Mapped profiles, permissions, and expected behaviour per domain — the shared source of truth before anything got built.
2
Build the interactive prototype
Turned documentation into something engineers could click through and validate themselves, instead of interpreting static screens.
3
Ship View Only behind a feature flag
Owned the View Only implementation in Pipelines, built behind a flag so the existing production experience stayed protected until it was ready.
4
Validate at the level of individual controls
In Observer, one bell icon's permission mapping was initially unclear — a reminder that permission UX has to be checked control-by-control, not just page-by-page.
Results
For users
Reduced visual clutter and fewer irrelevant actions
No dead-end clicks on controls they were never authorized for
A clearer sense of what they can actually do
For engineering
A working reference for permission-driven UI, reused across all six domains
Zero UX blockers raised during implementation
A reusable pattern rather than a one-off solution
"The best permission experience is one the user doesn't have to think about."
Next Project
See what else has been built
Back to all work →
Ritwik Srivastava Built with intention

# case-study-split.html
Conditional Split: Making Routing Logic Native to the Pipeline
Home
Work
About
Contact
Resume
Portfolio Ask
← Back to work Case Study: Product / Interaction Design
Conditional Split: making routing logic native to the pipeline
The problem was never splitting data. It was expressing the decision. This is how a structural branching step became a conditional routing model, explored across three interaction directions, then designed, implemented, and shipped.
Role
Product Designer
Scope
UX, interaction design, implementation & validation
Timeline
3 weeks
Product
Precisely Data Integrity Suite
Contents Overview Exploration The Direction Default Path Implementation Results
Overview
The Data Integrity Suite already had a Split step. Users could create multiple branches, but a branch itself didn't define what belonged there. To actually route records, they had to keep building logic downstream of it.
The result was technically flexible but conceptually fragmented. Looking at a branch told you nothing about what it was for , why a record went there , or what happened to everything else . The opportunity was to move that decision to where it naturally belongs: the point where the pipeline branches.
Before
Input Split Branch 1 Filter Branch 2 Filter
Routing logic was inferred downstream, one filter step at a time, rather than defined on the branch itself.
Split asked
"Where can the pipeline go?"
A structural question: branches existed, but nothing tied a branch to a reason.
Conditional Split asks
"What determines where a record goes?"
A routing question: the branch itself now carries the logic.
For example
Country = UK → UK processing
Country = US → US processing
Default → Everything else
The capability wasn't fundamentally new. The relationship between the rule and the branch was.
Exploration
Rather than assume the answer was another configuration panel, three different mental models were tested before committing to an interaction direction.
01. Branch first
Each branch owned its condition directly, extending the existing Split model with minimal disruption. The open question: would the condition feel like part of the branch, or just another setting attached to it?
[Image: Sketch: Split node with Branch 1-4 outputs, each branch showing its own optional condition field (Country = UK)]
[Image: Sketch: Split node with Branch 1-4 outputs, each branch showing its own optional condition field (Country = UK)]
02. Rule first
An explicit IF → THEN → ELSE IF → ELSE routing model. The logic was clear, but the experience started behaving like a rules engine, introducing a second mental model into a product where users already think in nodes, connections, and branches.
[Image: Sketch: Routing Logic panel with a full IF, ELSE IF, ELSE conditional chain driving routing]
[Image: Sketch: Routing Logic panel with a full IF, ELSE IF, ELSE conditional chain driving routing]
03. Rules and outputs as separate concepts
Routing rules were separated entirely from output branches. Conceptually clean, but in practice it pushed the decision away from the canvas, the place users were already using to understand their pipeline.
[Image: Sketch: Output Branches list shown separately above a distinct Routing Rules section]
[Image: Sketch: Output Branches list shown separately above a distinct Routing Rules section]
[Image: Sketch: refined Routing Rules panel with Rule 1, IF Country = UK, THEN route to UK_records]
[Image: Sketch: refined Routing Rules panel with Rule 1, IF Country = UK, THEN route to UK_records]
The Direction
The familiar pipeline model stayed intact. The branch became responsible for its own routing logic.
Branch = destination. Condition = reason.
The canvas shows the paths. The drawer handles detailed configuration. The branch itself can surface a concise condition summary, keeping the new capability powerful without making the pipeline harder to read.
The pipeline should explain itself
A configuration drawer can tell you everything. It just can't tell you everything at a glance. So the condition surfaces on the branch itself. With the drawer closed, the pipeline still communicates the relationship that matters: records matching this condition go down this path. The canvas became part of the explanation, not just the place where nodes are arranged.
[Image: Split node on the canvas showing Branch_1 with its condition, IsAdmin is 'true', visible without opening the drawer]
The drawer itself stayed close to how users already build conditions elsewhere in the product, so the new capability didn't feel like a separate tool bolted on.
[Image: Branch_1 condition drawer with Match All (AND), a condition builder row, and Add Condition]
Default Path
A second product decision: what happens to records that match none of the rules? Always exposing an unmatched path would add a branch to every Conditional Split, even when the user didn't need one.
Scenario 1: an empty branch is the default
If every branch above it has a condition, a branch is doing real routing work. If a branch has no condition , it isn't filtering anything, so it naturally catches whatever didn't match elsewhere. No extra setup, no separate concept to learn: an empty branch simply behaves as the default.
[Image: Split panel showing Branch_1 with a condition set and Branch_2 with no conditions set, acting as the implicit default]
Scenario 2: an explicit default, added on purpose
Sometimes every branch genuinely needs a condition, with no branch left empty to absorb the rest. For that case, Use default path for unmatched records is available as a checkbox, and it only becomes enabled once every branch above it already has a condition of its own. Checking it adds a distinct Default branch to the canvas.
[Image: Split panel with Branch_1 and Branch_2 both carrying conditions, the default checkbox checked, and a Default branch node added to the canvas]
Functionally, both scenarios resolve to the exact same outcome: unmatched records always land somewhere predictable. The difference is only in how that destination came to exist. Default is either implicit (a branch left empty) or explicit (a branch added on purpose), never both, and never neither.
Implementation
This wasn't a greenfield feature. The canvas, node behaviour, configuration drawer, connectors, and design system already existed. The challenge was introducing a fundamentally different execution pattern without making the rest of the product feel different, changing existing patterns only where the new capability required it.
Reusing what already existed on the backend
The Default branch didn't need a new backend capability to exist. The pipeline engine already had a fallback mechanism, an ELSE branch, built for an earlier routing feature. Rather than asking the backend team to build something new for this UI, the Default path was implemented by repurposing that existing logic: whether a branch was left empty or added explicitly through the checkbox, both simply resolved to the same underlying ELSE behaviour under the hood. The interface changed; the backend contract didn't.
Taking the design into the codebase
After PM approval, the experience was implemented directly in the existing React/TypeScript codebase, using VS Code Copilot and Claude Code. This is where the design met reality. A seemingly isolated change could affect unrelated behaviour, requiring real precision about the scope of each change.
1
Design
Define the interaction and the condition-on-branch model.
2
Implement
Build it directly in the existing codebase, not a disconnected prototype.
3
Inspect
Check how the change actually behaves against real component and canvas state.
4
Refine
Adjust based on what the real product revealed. The product itself became part of the prototyping environment.
Results
Validation happened in the real, implemented UI rather than treating the approved mockup as the finish line. It meant checking whether the model held together in practice:
Can a user create the branches?
Can they define conditions without friction?
Is the routing logic still understandable once the drawer closes?
Does Default behave exactly as intended?
Does the new step still feel native to the pipeline?
The feature shipped.
What changed
Before: Split
Inferred routing
Create branches → add downstream filters → infer routing logic from what's connected where.
After: Conditional Split
Explicit routing
Define routing conditions → create clear paths → process each path independently.
The result is a pipeline that can represent not just what happens to data, but why data takes a particular path.
I didn't need to redesign the pipeline. I needed to make the pipeline's branching decision explicit.
Next Project
See what else has been built
Back to all work →
Ritwik Srivastava Built with intention

# case-study-copilot.html
Insights Copilot: Business AI Assistant
Home
Work
About
Contact
Resume
Portfolio Ask
← Back to work Case Study — Conversational AI Product
Insights Copilot: implementing AI to get some actual work done
Traditional BI dashboards were powerful but intimidating. This is how a conversational AI assistant replaced a 4-5 day reporting cycle, then how post-launch drop-off data reshaped both its onboarding and its core interaction model.
Role
Product Designer
Team
Ritwik Srivastava, Arjan Arya, Fill Braga
Key users
Leaders, executives, business strategy teams
Scope
Global
4-5 days old reporting cycle · 10→1 onboarding clicks · ~20% drop-off per step pre-fix · 5-15 min full Smart Flow report
[Image: Insights Copilot home screen on a tablet with the greeting, suggested Smart Flows and example questions.]
Insights Copilot home screen with suggested Smart Flows and example questions.
Contents Overview Why Conversational Post-Launch Findings Onboarding Redesign Smart Flows Results & Reflection
Overview
Insights Copilot is an AI-powered conversational assistant built to give non-technical users direct access to business insights, without needing a dashboard, a data analyst, or a multi-day wait.
The problem
How might we simplify access to business insights for non-technical users, while keeping data reliable, contextual, and actionable? Traditional BI dashboards were powerful but intimidating. Most users didn't want complex analytics, they wanted a quick, trustworthy answer.
What it replaced
Before Copilot, getting an answer meant a full manual cycle across three different roles, taking 4-5 days end to end.
1
Data extraction & analysis
Data analysts manually pulled and prepared the underlying numbers.
2
Create report
Business managers turned the raw analysis into a presentable report.
3
Meet & discuss
Senior leaders and other stakeholders finally reviewed it together.
[Image: Three-stage reporting workflow: data extraction and analysis (1-2 days), create report (2-3 days), meet and discuss (0.5-1 day), totalling 4-5 days.]
The previous reporting cycle across data analysis, report creation, and stakeholder discussion.
Why Conversational
Conversational interaction wasn't chosen for novelty. It solved three specific problems with how people already worked.
Low activation cost: users already ask questions over email and chat, so a conversational interface removes the friction of learning a new tool.
Progressive disclosure: data isn't dumped all at once, reducing the cognitive load a user has to carry to get an answer.
Natural context for all users: when data is presented in plain language with its own context attached, non-technical users onboard faster.
[Image: Three cards: low activation cost, progressive disclosure, natural context for all users.]
Three reasons for a conversational interface: low activation cost, progressive disclosure, and natural context.
Earning trust in an AI workflow
Users needed enough context and clarity around data sources and assumptions to actually rely on what Copilot told them, not just receive an answer and wonder if it was right.
[Image: Data source chip and an "Assumptions made" card with an Edit action.]
Data source context alongside an editable assumptions card.
What happens after the insight?
The goal wasn't an answer machine, it was a smart co-worker that helps users move forward with an actual decision. Every response could branch into a next question.
Explain more → Deeper context on the same answer
How did it impact revenue? → Connects the insight to a business outcome
How does this compare to top 2 brands? → Extends the analysis outward
[Image: An insight about Corona monthly sales with follow-up chips: Explain more, impact on revenue, compare to other top brands.]
A Corona sales insight with three suggested follow-up questions.
Post-Launch Findings
The MVP shipped, and usage data told a different story than expected: a massive number of drop-offs, with people not using the product the way it was designed to be used. That gap became the next design brief.
[Image: Four sticky notes: why are people dropping off, what to improve to help users interact more and retain, why response times are high, are people reading the insights.]
Questions raised after the MVP drop-offs about engagement, retention, response times, and insight reading.
Asking the right questions
Mixpanel was integrated to test hypotheses about user behaviour, structured around four questions:
Are users completing onboarding?
Are users getting questions right on the first try?
Do users find the answers, and the follow-ups, useful?
Why are response generation times high?
What the data actually showed
Tutorial engagement → ~15s spent vs. 60s intended
First-question accuracy → Only 5% got a fully correct response
Chart interaction → 8% engaged, vs. an expected 20%+
Drop-off per step → ~20% at every step after login
[Image: Sticky notes grouping Mixpanel observations and open questions about onboarding, response quality and chart usage.]
Mixpanel observations and open questions about onboarding, response quality, and chart usage.
Two high-impact problem areas came out of this: onboarding flow friction , and response generation & user retention — the two threads the rest of this case study follows.
[Image: Search-style card titled High-impact problems after MVP launch listing the two priorities.]
The two high-impact problems selected after the MVP launch.
Onboarding Redesign
Using data to redesign onboarding and tutorials. In the early version, onboarding looked simple but felt tedious. Users clicked through multiple screens, checkboxes, and confirmations just to reach the product. It wasn't the content that lost them, it was the sheer number of interactions before they could do anything meaningful.
[Image: Early onboarding screens with checkbox-heavy Do's and Don'ts and an example question.]
The early onboarding screens with checkbox-heavy guidance and an example question.
Hypothesis & insights
Users were skipping onboarding because they wanted faster access, not because the content was wrong. Each metric from the findings above became its own design trigger, pointing at interaction overload rather than confusing content.
Approach
Reduce the number of clicks and interactions, overall friction first
Short, relevant examples for context-setting instead of abstract instructions
Remove per-item checkboxes from the Do's and Don'ts, replace with one universal Agree button
Process
1
Kickoff
Aligned with PM and devs on scope.
2
Lo-fi
Explored directions before committing to detail.
3
UAT
Validated assumptions with a small sample via Maze.
4
Launch
Shipped the reduced-friction flow.
5
Iteration
Kept refining nudges and pacing after launch.
[Image: Feature breakdown table, initial user flow map and lo-fi wireframe explorations.]
Process artifacts from feature breakdown, user flows, and lo-fi explorations.
[Image: Redesigned onboarding screen with Do's and Don'ts without checkboxes and a single Acknowledge and Continue button, with annotations about removed interactions.]
The redesigned onboarding guidance with one acknowledgement action and annotations about removed interactions.
Minimising nudges
Nudges were originally bunched together instead of spread across the experience. They were reduced from 10 default nudges down to 2: one introducing Smart Flows, and one prompting a new question to get users to their first "aha" moment faster. A fallback nudge was added separately for domains where advanced features weren't set up yet, so users got an honest "this is still being configured" message instead of a dead end.
[Image: Three cards explaining nudges spread across the experience, reduced from 10 to 2, and logic by user type.]
Nudges distributed across the experience, reduced in number, and tailored by user type.
[Image: Welcome card with a banner saying the feature is still being set up.]
A welcome card with a notice that the feature is still being set up.
Impact
Before
10 clicks
To get through onboarding, before reaching anything useful.
After
1 click, ~30s
Average completion time dropped accordingly, and drop-off fell significantly at every step.
Why question quality matters
A large part of onboarding was teaching people to ask better questions, since the quality of a question directly determined the quality of the answer.
1
"What are the most talked about brands?"
No geography or time period. The response can't be interpreted clearly.
2
"...in the US in the last 1 month?"
Better, but still ambiguous on which brands actually qualify without a fuller filter.
3
"...owned by Heineken, in the US, last month?"
A precise, well-scoped question returns a precise, usable answer.
Outcomes
Onboarding became smoother and noticeably faster
The activation metric ("ask your first question") improved
Retention improved after onboarding completion
Smart Flows
Turning repetitive analysis into guided, reusable workflows. In the early version, users could explore data freely, but every new analysis meant starting from zero. Switching between brands, markets, or business questions meant rebuilding the entire flow each time.
Key problems
Analysis lacked continuity: each query existed in isolation
Constant repetition made exploration slow, fragmented, and effort-heavy
Research & inference
Through user sessions and interviews, a recurring pattern emerged: analysts weren't struggling to find data, they were struggling to repeat analysis efficiently. They saved screenshots, copied prompts, and built side documents just to replicate similar analyses for different scenarios. The real problem wasn't what they were asking. It was how often they had to rebuild the same structure to ask it.
If we guide users based on recurring patterns, they can spend less time setting up and more time gaining insights.
Solution: pre-built templates
Smart Flows combine relevant queries into a single, reusable path, letting teams run consistent analyses across brands and categories without rebuilding context each time. A repetitive task became a guided process that scales across use cases.
01 / Step 1
[Image: Smart Flow cards on the home screen.]
Smart Flow cards on the home screen.
02 / Step 2
[Image: Selecting a Smart Flow card fills the chat bar with a template.]
Selecting a Smart Flow card fills the chat bar with a template.
03 / Step 3
[Image: Choosing values from the template pills.]
Choosing values from the template pills.
04 / Step 4
[Image: Smart Flow running after the query is sent.]
Smart Flow running after the query is sent.
05 / Step 5
[Image: Final in-depth report, ready in about 5-15 minutes.]
The final in-depth report after the Smart Flow completes.
How it works
1
Pick a Smart Flow card
The chat bar auto-populates with a matching query template.
2
Fill in the pills
Users click each pill and choose from a dropdown to complete the template.
3
Send the query
Copilot recognises the key KPIs embedded in the template and starts the flow.
4
Get the full report
5-15 minutes later, depending on complexity, with an in-depth, fully drilled-down analysis of the subject.
Results & Reflection
Both threads traced back to the same root cause: friction, whether at the door (onboarding) or mid-task (repeated analysis), was the real drop-off driver, not the underlying AI capability itself.
Data is crucial to the design team to make a stand on a non-design-mature domain inside the company.
Trust and simplicity go hand in hand for users.
Next steps
A personalization logic is in progress, tailoring the experience for first-time, returning, and heavy users differently. It's currently being handed to the dev team to implement directly.
Close
Next Project
See what else has been built
Back to all work →
Ritwik Srivastava Built with intention

# case-study-design-system.html
Design System: A Scalable Foundation for Insights CoPilot Skip to content
Home
Work
About
Contact
Resume
Portfolio Ask
← Back to work
Case study · Design system
A scalable foundation for Insights CoPilot
From fragmented UI to a unified system, the design system defined structure, consistency, and trust, enabling scale across ABI's AI ecosystem.
Product
Insights CoPilot, ABI
Year
2025
Scope
Foundations, components, theming
Team
Ritwik, Arjan, Fill
[Image: Collage of Insights CoPilot brand tiles in black and yellow, including the CoPilot mark, a dot grid, and the headline numbers 100 percent and 12 ha/H.]
Contents
Overview
Why we built it
Approach
Design DNA
Smart components
Light and dark
Typography
Impact
What's next
Team
01
More than a component library
Insights CoPilot is an AI assistant for ABI. As it grew, its interface needed a shared backbone. The design system is that backbone: a foundation that unifies design and development while enabling growth at scale.
02
Why did we start building it?
As CoPilot grew in adoption, the product began to face the weight of scale. Small inconsistencies in design and interaction patterns started to multiply, creating friction for both users and teams.
UI
Inconsistent UI
Buttons, chatbars, and labels appeared differently across versions.
UX
Fragmented UX
Users struggled with trust due to mismatched visuals and flows.
Risk
Scalability risks
Every new feature risked adding more inconsistency without a shared system.
Delivery
Slowed delivery
Lack of standard components led to rework and longer handoffs.
03
Built on atomic design principles
The goal was not only to unify the look and feel but to create a system that designers and developers could both trust and scale with. By breaking the interface into clear building blocks, we established a foundation that was reusable, accessible, and consistent across every interaction in CoPilot.
[Image: Three cards. Atoms: colors, text, buttons, shown as two icon buttons. Molecules: input plus label and chatbar, shown as a select and a tag. Organisms: header or chat window, shown as the CoPilot sidebar.]
[Image: The CoPilot mark in yellow, black, and white app icon variants beside a construction grid of the mark.]
The CoPilot mark, constructed on a grid and applied across accent, dark, and light app icons.
04
The Design DNA
Smart foundations built to balance simplicity with depth. Effortless to use, robust enough to grow with the system. Colors, sizes, and fonts live in variables, so a single change flows through every component that uses it.
[Image: Variables panels listing component size properties for buttons, icon buttons and fields, beside a color table with dark and light mode values for the secondary yellow scale from 100 to 900.]
A core setup that stays intuitive for designers yet adaptable for complex scenarios.
120+ variables
30% faster iterations
[Image: Left: the lowercase letter a in Avantt, the system typeface, in weights Light, Regular, Semi-Bold and Bold. Right: a hand holding a phone showing the CoPilot mark on yellow.]
05
Smart components
All components were built with customizable properties, making them easy to adapt, manage, and scale without creating clutter. Simple to tweak, powerful to use, and consistent across every screen.
[Image: Three yellow buttons in Large, Medium and Small sizes beside a Size variables control set to Large.]
Size variables. Change the size of any component with one property.
[Image: A Search component's properties panel with Variant, State, leading icon and trailing icon toggles, next to the rounded search field in two states.]
State management. Intuitive setup, easy to switch, simple to manage.
06
One system, two themes, zero extra effort
We extended the system to support light mode by tying it directly to our variable setup. Colors, text, and surfaces switch seamlessly without rebuilding components. This not only made theme switching effortless but also improved accessibility by giving users more choice and comfort in different environments.
[Image: A Color variable mode picker set to Light Mode over a dark graphic, with the CoPilot sidebar shown in light mode, expanded and collapsed.]
07
Type scaled for clarity and consistency
We defined a type system that balances clarity with hierarchy. Scales, weights, and styles were set to make content easy to read, consistent across screens, and adaptable for both light and dark modes. This ensured communication in CoPilot feels professional, accessible, and effortless to follow.
[Image: Type scale in Avantt across four weights, Bold, Semi Bold, Regular and Light, from Display 40 down to Info 12.]
Display 40 2.45em Display 36 2.25em Display 32 2em Heading 28 1.75em Title 24 1.5em Sub 20 1.25em Paragraph 18 1.12em Paragraph 16 1em Info 14 0.875em Info 12 0.75em
08
Numbers that tell the story
The design system became more than a library of components. It served as the backbone for how CoPilot scaled.
70+ reusable components Shipped across chat, dashboards, and insights
>90% adoption rate Across pilot teams in the past 6 months
30% faster ideation cycles From concept to prototype
150+ screens standardized Using the design system library
09
What's next: CoPilot on mobile
With adoption strong on desktop, bringing CoPilot to mobile is the next step. The system is already equipped with responsive variables and scalable components, making the transition smoother. Mobile design is currently in progress, focused on adapting patterns for smaller screens while keeping the same consistency and clarity.
[Image: A phone resting on a concrete block showing the CoPilot mobile concept in yellow and black.]
10
Meet the team
Behind the visuals and brand assets of Insights CoPilot is a small but focused team that shaped the system from idea to impact.
Ritwik Arjan Fill
Next Project
See what else has been built
Back to all work →
Ritwik Srivastava Built with intention
