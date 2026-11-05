# Designing BuildRelay: Requirements, Review and Human Judgment in an Agent Workflow

**Author:** Ehsan Negahdar  
**System & Workflow Design:** Ehsan Negahdar  
**Implementation:** Primarily AI coding agents, under my direction and review  
**Status:** Experimental, MIT-licensed portfolio project  
**Category:** Design Notes // Experimental Project  
**Date:** November 2026  
**Read Time:** ~7 min  
**Project Repository:** [github.com/Dutch-panda/BuildRelay](https://github.com/Dutch-panda/BuildRelay)  
**Documentation:** [dutch-panda.github.io/BuildRelay](https://dutch-panda.github.io/BuildRelay/)  

---

> **The design question:** Getting agents to produce code and getting the application I intended were different problems. BuildRelay is my experiment in making requirements, responsibilities and review points explicit in a multiagent software-development workflow.

---

## 1. Start with the work, not just the model

While developing BuildRelay, I noticed that leaving overall quality expectations implicit could take the result away from the system I wanted. Asking for a working app was not enough to resolve what it should do, how a user would interact with it, or which assumptions needed checking.

I approached this through business analysis and system design: clarify the intended result, identify important unknowns, and decide what should happen before work moves to the next stage. Choosing a capable model matters, but it does not make those decisions for the designer.

BuildRelay is a local Python CLI for planning, implementing and checking bounded software tasks. It remains an experimental portfolio project, not evidence of production reliability or organization-wide productivity gains.

---

## 2. A process-design lens

Mitchell Troyanovsky's [talk on process supervision](https://www.youtube.com/watch?v=JGtkTjn4120) offers a useful way to examine this problem. He distinguishes a competency gap—the complexity users take on when managing an agent's skills, memory and context—from a process gap: individually customized working methods do not automatically meet shared organizational expectations.[^1]

He also discusses behavior specifications: stating important expectations about how an agent should work, then examining whether those behaviors occur during a run. That adds a different signal from checking only the final answer; it does not make outcome evaluation unnecessary.[^1]

For me, the connection is a design question: which expectations belong in the workflow, rather than being left for the user to restate? BuildRelay explores that question through clarification, explicit instructions and review. I am not claiming it implements Basis's behavior-specification approach or provides the same evaluation infrastructure.

There is also a limit to the organizational analogy. A consistent process can still be wrong. Rules need to be tested against results and revised when they add friction or fail to address the actual need.

---

## 3. Make expectations explicit and unknowns discussable

I made two changes to address the gap between an initial request and a useful deliverable.

First, I defined shared expectations for the leads: focus on an implemented, working prototype that meets the user's needs, and clarify important unknowns instead of silently filling them in. This is an instruction to guide behavior, not a guarantee that an agent will never make an assumption.

Second, I used structured clarification interviews. The leads propose development and implementation options based on the problem, so the user can make choices without writing a complete technical specification upfront.

Consider a hypothetical request for a form-to-PDF utility. Should responses be retained after export? Must the app run without an internet connection? Who will use it, and how will they start it? These questions change the design. They are an illustrative example here, not a transcript of a recorded BuildRelay interview.

Offering options can make a decision easier, but the options can also frame the problem too narrowly. The user still needs room to reject them, explain a constraint, or change direction. More questions are not automatically better; clarification should resolve consequential uncertainty rather than become an obstacle to implementation.

---

## 4. Separate responsibilities without hiding the handoffs

The documented workflow has four development roles, with optional supervision from Dana. They are responsibilities within a routed workflow, not five mandatory assembly-line stages.[^2]

* **Natasha, coordinator:** clarifies intent, prepares a task brief and selects an entry route.
* **Odin, researcher:** gathers available vault context, web-search snippets and package metadata when research is part of the route.
* **Taghi, architect:** develops technical and UI specifications with implementation phases and proposed checks.
* **Meti, implementer:** coordinates code implementation through Docker commands and records phase-check results.
* **Dana, optional quality supervisor:** critiques supplied deliverables at stage boundaries, with advisory or autonomous-steering modes.

```text
Natasha selects the route
  Research-led build: Odin → Taghi → Meti
  Design-led build:   Taghi → Meti
  Direct implementation:     Meti
  Research-only request: Odin, then stop

Dana: optional supervision at stage boundaries
Human review: decisions and delivery in interactive use
```

This is a simplified map of documented responsibilities, not a trace of a particular run. An anti-simulation rule asks the implementation to provide functional behavior rather than fake flows; it is not a separate agent. Meti is the implementer, not the human reviewer.[^2]

Separating roles makes responsibilities easier to inspect, but also creates handoffs where context can be lost. Typed outputs and saved artifacts help structure those exchanges. They constrain the representation of work; they do not make the reasoning deterministic or the content correct.

---

## 5. Treat review as several kinds of evidence

I added Dana because expectations written in prompts were not the only review mechanism I wanted. An automated reviewer can offer another perspective on intermediate work. It can also miss a problem or repeat the same mistaken assumption, so its judgment needs to stay distinguishable from executed checks.

| Signal | What it provides | What it does not establish |
| :--- | :--- | :--- |
| **Phase-check results** | Recorded commands, exit statuses and available output. | That the chosen tests cover the user's needs or every failure case. |
| **Optional Dana critique** | Model-based feedback on supplied stage deliverables and context. | An independent security audit, complete code inspection or proof that every finding was fixed. |
| **Static evaluation harness** | Checks for selected file and text patterns. | Measured test coverage, verified usability or correctness. |
| **Human review** | A person's assessment of scope, trade-offs, artifacts and acceptance. | Freedom from error, or a reason to skip implementation review. |

Dana and the static evaluation harness are separate mechanisms. Supervision is optional and off by default. Interactive use includes review and approval opportunities; headless execution can accept defaults automatically. It would be misleading to describe every run as requiring human sign-off.[^2][^3]

The developer still has to decide how much scrutiny a change requires. Reviewing the architecture does not remove the need to inspect code, test behavior or understand the consequences of running it.

---

## 6. One bounded test, not a general performance claim

In one initial test, I gave the workflow a short natural-language request for an offline Python Flask app. The resulting app collected responses through an HTML form and produced a PDF containing the questions and answers.

That was a useful output to inspect, but it was one task. It did not establish that the workflow would handle more complex applications reliably, or that it improved an organization's performance. The app's offline operation also says nothing by itself about whether the workflow that generated it used remote model services.

This example is my account of an initial test, not a reproducible benchmark presented here. I am not attributing a particular defect discovery or repair to Dana without the supporting run record. A fuller case study needs the original request, artifacts, executed checks and any failures or revisions.

---

## 7. What I would carry into the next design

My contribution to BuildRelay has been designing its structure, specifying expected behavior and refining the workflow as issues emerged. AI coding agents wrote most of the implementation under my direction and review.

The project also makes the limits of the approach important. More stages can increase handoff overhead. Clarification and model review take time and can incur costs. Saved checkpoints support continuation, but do not guarantee an interrupted command ran exactly once. Docker execution and generated host-side verification have different boundaries; neither should be treated as a blanket assurance of safety.[^4]

For a small, well-understood edit, a simpler coding session may be more appropriate. The point of this experiment is to explore which structure helps with a particular task, not to assume more agents mean a better solution.

For anyone designing a similar workflow, I suggest starting with four questions:
1. What working result would meet the user's need?
2. Which unknowns could materially change the design?
3. Who can decide, approve, stop or revise the work?
4. What evidence will be inspected before accepting the result?

These are the questions I want my solution-design work to make visible. BuildRelay is one practical experiment in answering them, and I would welcome feedback on its clarification steps, handoffs and review boundaries.

---

## Sources and project references

The talk provides an external perspective; the project documentation describes intended and implemented mechanisms, not independent evidence of their effectiveness. The prototype example and design decisions above are my reported experience.

[^1]: Mitchell Troyanovsky, [AI Engineer talk on process supervision](https://www.youtube.com/watch?v=JGtkTjn4120). See the [organizer's transcript](https://ai.engineer/reading/nyc-2026/transcripts/oct14-mitchell-troyanovsky-process.md). Its timestamps refer to the full conference recording, not the standalone video.
[^2]: BuildRelay, [Workflow and alignment](https://github.com/Dutch-panda/BuildRelay/blob/main/docs/content/workflow.md).
[^3]: BuildRelay, [Supervision and evaluation](https://github.com/Dutch-panda/BuildRelay/blob/main/docs/content/quality.md).
[^4]: BuildRelay, [README and execution boundaries](https://github.com/Dutch-panda/BuildRelay/blob/main/README.md).
