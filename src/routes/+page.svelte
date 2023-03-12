<script lang="ts">
	import siteMetaData from '$lib/siteMetaData';
	import InlineSVG from 'svelte-inline-svg';
	const svgSize = { class: 'pr-2 w-8' };
</script>

<svelte:head>
	<title>Home</title>
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
				<InlineSVG src="/icon/mail.svg" {...svgSize} />
				<a href="mailto:{siteMetaData.email}">{siteMetaData.email}</a>
			</div>
			<div class="my-2 text-gray-600 flex dark:text-blue-100">
				<InlineSVG src="/icon/glob.svg" {...svgSize} />
				<p>{siteMetaData.location}</p>
			</div>
		</div>
	</div>
</div>
<div class="md:w-2/3 sm:px-8 px-2">
	<div class="author-intro">
		<h2>Hey there 👋</h2>
		<p>
			Hello, I'm Matt Johnson, a highly experienced technologist with a track record of success
			across a wide range of industries and technologies. With over two decades of engineering and
			technical leadership experience, I've tackled some of the most complex challenges in the
			field.
		</p>
		<p>My accomplishments include:</p>
		<ul>
			<li>R&D lead for UK Government - leading on many projects, including AI/ML</li>
			<li>Led and managed over 815 engineers for the UK Government, recruited over 400</li>
			<li>A large crypto-currency project for the UK government</li>
			<li>CTO at a successful recruitment startup</li>
			<li>Identity Subject Matter Expert for UK Government (GDS)</li>
			<li>Open Source Subject Matter Expert for UK Government (GDS)</li>
			<li>A large AI project for Job and Applicant classification and matching</li>
			<li>Webby Awards Honoree</li>
			<li>
				Technology advisor for over 24 government organizations, helping them save money and
				modernize their technology - with demonstrable positive outcomes, saving £65 Million for the
				UK Army alone
			</li>
			<li>First hire for a translation company that eventually sold for £60 Million</li>
			<li>
				Opened an overseas office and built a team of 30 over 12 months for a large UK consultancy
			</li>
			<li>And many other things!</li>
		</ul>
		<p>
			Throughout my career, I've been passionate about pushing the boundaries of what's possible in
			software engineering. Whether it's designing scalable systems, optimizing performance, or
			navigating complex regulatory environments, I thrive on tackling tough challenges and
			delivering innovative solutions.
		</p>
	</div>
	<div class="time-line">
		<ol>
			<li>
				<span><img src="/icon/key.svg" alt="The Key icon" /></span>
				<h3>
					Architect at San Francisco based Healthcare Startup
					<span>Current</span>
				</h3>
				<time>October 2021 - Now</time>
				<p>Mixture of hands-on and architecture in a startup environment</p>
			</li>
			<li>
				<span><img src="/icon/scot.svg" alt="Scottish icon" /></span>
				<h3>Lead Architect, Scottish Government</h3>
				<time>Feb 2019 - Oct 2021</time>
				<ul>
					<li>Innovation in Public Sector award</li>
					<li>Founded and hired engineering teams</li>
					<li>Cloud/AWS architecture design, strategy, architecture</li>
					<li>
						Transformation away from legacy suppliers, with an emphasis on Digital First and GDS
						Service Standard compliance. As well as overall reduction in operating costs across
						several systems
					</li>
				</ul>
			</li>
			<li>
				<span><img src="/icon/union.svg" alt="Union Jack icon" /></span>
				<h3>Deputy Director, Head of Software Engineering & DevOps, UK Government (DWP)</h3>
				<time>Aug 2017 - Feb 2019</time>
				<ul>
					<li>
						Led and managed over 819 in Engineering, in an organisation with approximately 90,000
						people overall
					</li>
					<li>
						Implementing the Spotify model of squads, tribes and guilds working with other heads of
						roles
					</li>
					<li>
						Complex and challenging working environment with multiple stakeholders across multiple
						lines of business
					</li>
					<li>Defining technical standards &amp; policies across DWP Digital</li>
					<li>
						Advising and shaping critical work on core programmes of work across the department
					</li>
					<li>
						Founded a purposeful culture of devolved responsibilities, flat management, community
						engagement and servant-leader management in Engineering
					</li>
					<li>
						Setting a vision for transformation away from Legacy systems with a practical strategy
						to reduce the dependency on COBOL working with local universities
					</li>
				</ul>
			</li>
			<li>
				<span><img src="/icon/union.svg" alt="Union Jack icon" /></span>
				<h3>Senior Architect, UK Government (GDS - Cabinet Office)</h3>
				<time>Jan 2017 - Aug 2017</time>
				<ul>
					<li>Advised HM Treasury and Cabinet Office Spend Controls</li>
					<li>
						Worked across DVLA, DVSA, MMO, DEFRA, MOD, CPS, GLD, Companies House, DFE, DWP, DBS and
						MCA to advise on Service Standard compliance
					</li>
					<li>
						Led internal Assessment of Gov.Verify, as a Subject Matter Expert on identity for the UK
						Government and produced a 14 page report
					</li>
					<li>
						Lead GDS representative on Identity, SSO, Authentication and Authorisation standards.
					</li>
					<li>
						Contributor to the Service Standard, Technology Code of Practice and Assessment design,
						structure and practice
					</li>
					<li>Lead Technical Assessor in dozens of Service Assessments</li>
					<li>Hands on across government</li>
				</ul>
			</li>
			<li>
				<span><img src="/icon/map-pin.svg" alt="Map Pin icon" /></span>
				<h3>CTO, Zoek</h3>
				<time>Nov 2016 - Jan 2017</time>
				<ul>
					<li>ML/AI learning job search based on the candidates needs with multiple channels</li>
					<li>
						Creating and implementing a vision to move the development of all products in-house.
					</li>
					<li>
						Strategising for increased conversion rates, optimisation of existing revenue streams
						and creation of new revenue streams wherever possible with technology
					</li>
					<li>Managing a strategy to recruit, train and mentor technology apprentices</li>
					<li>
						Negotiating commercial agreements where possible to reduce risk and deliver business
						value
					</li>
				</ul>
			</li>
			<li>
				<span><img src="/icon/union.svg" alt="Union Jack icon" /></span>
				<h3>Senior Architect (R&D), UK Government (DWP)</h3>
				<time>Apr 2015 - Nov 2016</time>
				<ul>
					<li>
						Cross-discipline polyglot architect in the R&D and innovation function of the DWP
						working in a very hands-on capacity on bleeding-edge technologies (blockchain, rpa, AI)
					</li>
					<li>
						Introducing open-standards, new technologies and new engineering practices into central
						government using a truly polyglot cross-discipline approach involving Rust, Python,
						Ruby, LUA, Java, C#, Typescript, JavaScript, CSS, HTML, OpenStack, MESOS, Kubernetes,
						Docker, AI, hadoop, cassandra and lots more
					</li>
					<li>Key Architect in PIP tooling to save tens of millions of £ in the PIP program</li>
					<li>
						Architected and implemented a federated AAA-oriented Service Mesh API strategy with
						JWT/JWE tokens with KONG/NGINX/LUA - a key initiative for identity across the
						organisation
					</li>
				</ul>
			</li>
			<li>
				<span><img src="/icon/academy.svg" alt="Workplace Icon" /></span>
				<h3>Lots of other stuff</h3>
				<time>Jan 1995 - Apr 2015</time>
				<p>
					I've done many more things over this period of my life, too much to list here. But if
					you're interested then you can browse <a
						target="_blank"
						rel="noreferrer"
						href={siteMetaData.linkedin}
					>
						my LinkedIn profile
					</a>
					.
					<br />
					I got my start in technology when I created websites, marketing material and business plans
					for my parents businesses back in 1995 when I was in my teenage years.
				</p>
			</li>
		</ol>
	</div>
</div>
