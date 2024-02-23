<script lang="ts">
	import siteMetaData from '$lib/siteMetaData';
	const svgSize = { class: 'pr-2 w-8' };
</script>

<svelte:head>
	<title>About Me</title>
	<meta name="description" content="Matt Johnson" />
</svelte:head>

<div class="md:w-1/3 p-0 md:p-2 md:flex md:justify-center">
	<div class="md:fixed">
		<div class="md:block flex justify-center items-center">
			<img
				src={siteMetaData.author_image}
				loading="lazy"
				alt="me"
				class="shadow-xl md:h-60 md:w-60 h-40 w-40 rounded-full"
			/>
			<div class="mb-2 mx-7 mt-4 justify-center items-center">
				<h1 class="md:text-3xl text-2xl text-gray-800 font-bold dark:text-blue-100 text-left">
					{siteMetaData.author}
				</h1>
				<div class="md:text-lg text-gray-600 dark:text-blue-100">
					{siteMetaData.slogan}
				</div>
				<a
					href="mailto:{siteMetaData.email}"
					class="text-gray-600 md:hidden mt-1 dark:text-blue-100"
				>
					{siteMetaData.email}
				</a>
			</div>
		</div>

		<div class="mx-7 hidden md:block">
			<div class="my-2 text-gray-600 flex dark:text-blue-100">
				<img src="/icon/mail.svg" {...svgSize} alt="Email" />
				<a href="mailto:{siteMetaData.email}">{siteMetaData.email}</a>
			</div>
			<div class="my-2 text-gray-600 flex dark:text-blue-100">
				<img src="/icon/linkeding.svg" {...svgSize} alt="LinkedIn" />
				<a target="_blank" rel="noreferrer" href={siteMetaData.linkedin}>LinkedIn</a>
			</div>
			<div class="my-2 text-gray-600 flex dark:text-blue-100">
				<img src="/icon/github_new.svg" {...svgSize} alt="GitHub" />
				<a target="_blank" rel="noreferrer" href={siteMetaData.github}>@engineeringstuff</a>
			</div>
		</div>
	</div>
</div>
<div class="md:w-2/3 sm:px-8 px-2">
	<div class="blog">
		<h2>The short story</h2>
		<p>I began my professional career in 2001 and did lots of engineering and architecture things in the private sector</p>
		<p>
			In 2015, I embarked on a career journey by joining a research and development team. Our primary goal was to streamline operations and reduce costs by bringing the extensive expenditure on external consultants in-house, under the guidance of the Chief Technology Officer (CTO). The team achieved remarkable success within the UK Government, prompting us to expand our in-house team.
		</p>
		<p>
			Over time, my role evolved, and I had the privilege of leading a team of 815 engineers as the <a target="_blank" rel="noreferrer" href="https://dwpdigital.blog.gov.uk/author/matt-johnson/">Head of Software Engineering</a>. Our department fostered a unique culture that became an inspiration for other teams and roles across the organization. It was rewarding to witness others striving to replicate our success.
		</p>
		<p>
			Driven by my passion for efficiency and cost-saving measures, I joined the UK Government Cabinet Office. Here, my objective was twofold: to help other government departments save money and assist them in establishing their own in-house teams.
		</p>
		<p>
			Now I am working with a startup to build a new product...
		</p>
		<h2>The longer story</h2>
		<p>
			Back in the 1990s, I received a Commodore C64 for Christmas along with a limited selection of games. After delving into the extensive instruction manual, I started programming and creating my own applications using what I later discovered was 6502 Assembly language.
		</p>
		<p>
			As I ventured into other programming languages, it became apparent that most were relatively easy to learn, and I had unknowingly taken on a significant challenge from the beginning. With my parents running their own businesses, I eventually built their websites, crafted business plans, and managed marketing materials.
		</p>
		<p>
			A few years later, I pursued a Computer Science degree in college. It wasn't until I grew bored with the subject material that I realized my programming skills were more impressive than I had initially thought. I began submitting creative solutions to mundane tasks, astonishing my lecturers.
		</p>
		<p>
			In 2001, I secured my first job as a Junior Developer at a small UK company. The task assigned to me was prototyping a new web-based SaaS product. I took a meticulous approach, starting with data flow, creating a normalized database schema, and storyboarding interactions before writing a single line of code.
		</p>
		<p>
			My approach garnered attention throughout the organization, leading to opportunities to architect other projects and eventually earning a promotion to Senior Engineer.
		</p>
		<p>
			A couple of years later, I joined a startup as their inaugural engineer around 2003. Initially, my role involved developing a Project Management system, followed by creating a sales system, managing marketing efforts, implementing an ML-powered proofreading solution, building a gig-working platform, integrating real-time payment and sales systems with telephony and email, and establishing an office in Bulgaria, overseeing a team of approximately 30 individuals.
		</p>
		<p>
			The company eventually sold for £65 million a few years later. Inspired by the startup environment, I desired to build upon my knowledge and sought a role where I could wear multiple hats. Consequently, I established a streaming-media company that attracted a considerable audience and generated strong revenue within a SaaS model.
		</p>
		<p>
			This was during the time when Netflix was still sending DVDs by mail, and YouTube was in its infancy. We collaborated with set-top-box manufacturers to integrate H264 decoding into an open platform, and growth prospects appeared promising. However, despite our efforts, the business failed to secure funding, leading to its closure.
		</p>
		<p>
			Following that experience, I embarked on a more conventional software engineering career until 2015 when I joined the UK Government at the research and development team of the DWP. Engaged in diverse projects, I relished the variety of work. Despite my initial expectations, the team continued to expand as we took on more projects, necessitating the mentoring of new engineers.
		</p>
		<p>
			Eventually, some projects were handed over to other teams, and we focused on our core endeavors. Recognizing a leadership gap, we swiftly hired engineers while maintaining the established culture. I was promoted to Head of Software Engineering and tasked with the challenge of hiring 100 engineers within 100 days. Surpassing expectations, we hired around 200 individuals, marking the most successful recruitment drive in the history of DWP Digital.
		</p>
		<p>
			In the subsequent years, we ran hackathons and roadshow events nationwide to boost recruitment, enhance internal communication, and inspire other teams to replicate our achievements. My speaking engagements at conferences and events across the country led to mentoring opportunities within management structures of various teams.
		</p>
		<p>
			After a few years, I transitioned to the UK Government Cabinet Office to assist in cost-saving measures across the government and aid other departments in establishing their own in-house teams. In my first year, we achieved record-breaking results, evidencing savings of around £1 billion for the UK Government. However, I believe our impact extended beyond monetary value, mitigating any "lost opportunity" costs.
		</p>
		<p>
			While the experience was enjoyable, I wanted to return to the startup environment and focus on building. Currently, I am working with a startup on a new product...
		</p>
	</div>
</div>
