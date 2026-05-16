export const posts = [
  {
    slug: "what-should-a-small-business-owner-automate-first",
    title: "What should a small business owner automate first?",
    date: "2026-01-14",
    dateLabel: "January 14, 2026",
    summary:
      "Most owners automate the wrong thing. Here's how to find the one process worth fixing.",
    readTime: "5 min",
    body: [
      "Every small business owner I talk to has a list of things they want to automate. The list is almost always wrong.",
      "The instinct is to start with what feels annoying. Email triage. Social posting. Invoice reminders. These feel like wins because they're visible — you do them every day, so removing them feels like relief.",
      "But annoyance is not the same as cost. The processes that quietly eat your business are usually the ones you don't notice anymore, because you've built your week around them. The three hours every Sunday you spend reconciling spreadsheets. The mental tax of remembering who you promised to follow up with. The hour each Friday spent generating the same report you've generated for a year.",
      "The right first automation is the one that, if removed, would free a recurring block of time you could put toward selling or building. Not the most annoying. The most expensive.",
      "Sit down with your last two weeks of calendar and bank statements. Find the one task that shows up every week, takes more than thirty minutes, and produces no new revenue when you do it. That's the one. Start there.",
      "Everything else can wait.",
    ],
  },
  {
    slug: "how-i-built-a-client-dashboard-in-four-days",
    title: "How I built a client dashboard in four days",
    date: "2026-01-07",
    dateLabel: "January 7, 2026",
    summary:
      "A walkthrough of a real build — the problem, the decisions, and the finished tool.",
    readTime: "7 min",
    body: [
      "A solo real estate agent in Florida called me on a Monday. By Friday she had a working lead dashboard. Here's how that actually happened.",
      "The call lasted forty minutes. Most of it was her showing me her three spreadsheets — one for new leads, one for active deals, one she'd inherited from a former assistant and didn't fully understand. The problem wasn't software. The problem was that the information lived in three places and her brain had to be the fourth.",
      "Day one: I sketched the data model on paper before opening an editor. One table for leads. One table for interactions. A status field with five values. That's it. I resisted every urge to add 'nice to haves.'",
      "Day two: the bones. Auth, the leads table, a basic create and edit flow. Ugly but real. I sent her a Loom that night showing me adding a fake lead and moving it through stages. She replied with two corrections to terminology. That was the whole revision round.",
      "Day three: the dashboard view and the weekly summary email. This is the part most builders skip because it's not glamorous. It was also the part she cared about most.",
      "Day four: polish, a real domain, a walkthrough video, handoff. Done.",
      "The lesson isn't that I'm fast. The lesson is that the scope was small on purpose. One problem. One tool. Shipped.",
    ],
  },
  {
    slug: "why-i-stopped-quoting-projects-and-started-selling-packages",
    title: "Why I stopped quoting projects and started selling packages",
    date: "2025-12-29",
    dateLabel: "December 29, 2025",
    summary:
      "Custom quotes feel flexible. They're actually the thing killing your pipeline.",
    readTime: "4 min",
    body: [
      "For my first six months building tools for clients, I quoted every project custom. It felt professional. It felt fair. It was killing me.",
      "Every lead became a two-hour scoping exercise before I knew if they'd say yes. Half of them never replied to the quote. The other half negotiated. I was running a consulting firm where the consulting was free and the building was the upsell.",
      "Packages fixed it in a week.",
      "Three tiers. Fixed scope. Fixed price. Fixed timeline. The conversation on the discovery call stopped being 'how much will this cost' and started being 'which of these three fits.' That is a fundamentally easier sale.",
      "Clients are also happier. They know what they're getting. They know when they're getting it. There is no awkward moment in week three where the scope creeps and someone has to bring up money. The money was decided on day zero.",
      "If you sell services and you're still quoting custom, build the package version this week. You'll close more, faster, with less friction. The flexibility you think you're offering is actually decision fatigue you're handing your prospect.",
    ],
  },
];

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug);
}

export default posts;
