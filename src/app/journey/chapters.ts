export interface ChapterInsight {
  date: string;
  title: string;
  sections: readonly { heading: string; text: string; references: readonly number[] }[];
  takeaway: string;
  sources: readonly { label: string; url: string }[];
}

export interface Chapter {
  year: string;
  label: string;
  eyebrow: string;
  lines: readonly string[];
  accent: string;
  description: string;
  tags: readonly string[];
  note: string;
  artifact: string;
  code: string;
  insight: ChapterInsight;
}

export const CHAPTERS: readonly Chapter[] = [
  {
    year: '2005',
    label: 'The spark',
    eyebrow: '01 / THE AGE OF EXPRESSION',
    lines: ['We made', 'the web'],
    accent: 'feel alive.',
    description:
      'Before everything became a feed, the internet was a place to play. My journey began with Flash and ActionScript 2. A blank stage. A blinking cursor. Unlimited possibility.',
    tags: ['ADOBE FLASH', 'ACTIONSCRIPT 2', 'CREATIVE FREEDOM'],
    note: 'It started with a keyframe. And a little curiosity.',
    artifact: 'FLASH PLAYER / .SWF',
    code: 'on (release) {\n  gotoAndPlay("possibility");\n}',
    insight: {
      date: '2005 / THE PERSONAL STARTING POINT',
      title: 'A timeline could become a world.',
      sections: [
        {
          heading: 'A different kind of canvas',
          text: 'Flash combined a visual stage, a timeline, vector artwork, sound, and scripting. A button could start an animation; an animation could become a game. ActionScript 2 let those authored scenes respond to the person on the other side of the screen.',
          references: [1],
        },
        {
          heading: 'The freedom had a dependency',
          text: 'The published SWF ran inside Flash Player rather than the browser’s native document. That gave creators a shared runtime for expressive work, but audiences needed the plug-in. The same layer that made the experience possible would later become a barrier on mobile.',
          references: [1],
        },
      ],
      takeaway:
        'Design and programming could happen on the same stage. For this journey, the attraction was immediate: code could create a feeling, not just display information.',
      sources: [
        {
          label: 'Adobe / Flash CS3 documentation archive',
          url: 'https://www.adobe.com/support/documentation/en/flash/index.html',
        },
      ],
    },
  },
  {
    year: '2006',
    label: 'A new dimension',
    eyebrow: '02 / IMPOSSIBLE BECAME INTERACTIVE',
    lines: ['A browser.', 'A whole'],
    accent: 'new world.',
    description:
      'ActionScript 3 raised the ceiling. GreenSock gave motion its rhythm. Papervision3D brought depth to a flat screen. Flex Builder—and later Flash Builder—made ambitious applications feel within reach.',
    tags: ['ACTIONSCRIPT 3', 'GREENSOCK', 'PAPERVISION3D'],
    note: 'We weren’t just building pages. We were building worlds.',
    artifact: 'PAPERVISION3D / XYZ',
    code: 'TweenLite.to(world, 1, {\n  rotationY: 360,\n  ease: Expo.easeOut\n});',
    insight: {
      date: '2006–2010 / THE TOOLKIT EXPANDS',
      title: 'More than a new version number.',
      sections: [
        {
          heading: 'A new engine, a new mental model',
          text: 'ActionScript 3 introduced a new virtual machine, AVM2, alongside the older runtime. Its more structured language and event model supported larger applications. Moving an AS2 project to AS3 meant reworking code, not simply changing a publishing setting.',
          references: [1],
        },
        {
          heading: 'Creative ambition met application tooling',
          text: 'GreenSock made scripted motion easier to choreograph; Papervision3D turned depth into a creative possibility inside Flash. Flex Builder served application developers, and Flash Builder 4 followed in 2010. Flash Professional and Flash Builder were distinct tools: a visual authoring environment and a development environment.',
          references: [2],
        },
      ],
      takeaway:
        'The work grew from timeline experiments into applications with architecture, data, and reusable motion. A more powerful toolkit also asked developers to learn a more demanding way of building.',
      sources: [
        {
          label: 'Adobe / Learning ActionScript 3.0',
          url: 'https://help.adobe.com/en_US/as3/learn/as3_learning.pdf',
        },
        {
          label: 'Adobe / Product release and support dates',
          url: 'https://helpx.adobe.com/support/programs/eol-matrix.html',
        },
      ],
    },
  },
  {
    year: '2005–08',
    label: 'Press play',
    eyebrow: '03 / THE INTERNET FOUND ITS VOICE',
    lines: ['Suddenly,', 'everyone'],
    accent: 'had a stage.',
    description:
      'Flash Player helped turn online video into an everyday experience. For a young YouTube, that shared playback layer mattered. The web became something we watched, shared, and made together.',
    tags: ['FLASH VIDEO', 'YOUTUBE', 'USER-GENERATED WEB'],
    note: 'One play button. Millions of new perspectives.',
    artifact: 'FLASH VIDEO / .FLV',
    code: 'var stream = new NetStream(connection);\nvideo.attachVideo(stream);\nstream.play("hello-world.flv");',
    insight: {
      date: '2005–2007 / VIDEO FINDS ITS AUDIENCE',
      title: 'The player was only the beginning.',
      sections: [
        {
          heading: 'A shared way to press play',
          text: 'Flash helped online video reach viewers through a common browser player. For services such as YouTube, the experience was bigger than playback: people could publish, share, and embed a video in the places they already visited. The player became part of the social fabric of the web.',
          references: [],
        },
        {
          heading: 'The first hint of a different future',
          text: 'On June 20, 2007, Apple announced a dedicated YouTube app for the upcoming iPhone. YouTube was re-encoding videos in H.264, with more than 10,000 planned for launch. Video could reach the new device without bringing Flash Player along.',
          references: [1],
        },
      ],
      takeaway:
        'The content and the runtime were separable. A video platform could survive a change in playback technology—even when an interactive Flash experience could not make that move so easily.',
      sources: [
        {
          label: 'Apple / YouTube comes to iPhone, June 2007',
          url: 'https://www.apple.com/newsroom/2007/06/20YouTube-Live-on-Apple-TV-Today-Coming-to-iPhone-on-June-29/',
        },
      ],
    },
  },
  {
    year: '2006–09',
    label: 'Behind the magic',
    eyebrow: '04 / FROM EXPERIENCES TO ECOSYSTEMS',
    lines: ['The stage', 'needed a'],
    accent: 'backstage.',
    description:
      'WAMP on the desk. LAMP on the server. PHP and MySQL powered the machinery, while AMF connected Flash to real data. WordPress and other CMS platforms put publishing into more hands. ColdFusion and SOAP were part of the toolkit, too.',
    tags: ['PHP / MYSQL', 'AMF', 'WORDPRESS'],
    note: 'The beautiful things were becoming useful things.',
    artifact: 'CLIENT ↔ SERVER / AMF',
    code: '$connection = new mysqli($host, $user, $pass);\n// Behind every experience, a connection.\nreturn $stories;',
    insight: {
      date: '2003–2009 / THE WEB GETS A BACKSTAGE',
      title: 'The interface learned to talk back.',
      sections: [
        {
          heading: 'From a local stack to a live service',
          text: 'WAMP and LAMP paired Windows or Linux with Apache, MySQL, and PHP. AMF remoting connected Flash interfaces to server-side methods and structured data. ColdFusion offered another path into rich applications; SOAP provided XML-based web-service contracts.',
          references: [1, 2],
        },
        {
          heading: 'Publishing became a product',
          text: 'WordPress first shipped on May 27, 2003, before this personal timeline begins. Its early release already emphasized typography, standards, and an administration interface. As CMS tools spread, updating a website increasingly became something an editor could do without rebuilding its pages.',
          references: [3],
        },
      ],
      takeaway:
        'The experience was no longer just the file you published. It depended on content, databases, services, and the people maintaining them. Frontend creativity had become connected software.',
      sources: [
        {
          label: 'AmfPHP / Flash remoting for PHP',
          url: 'https://amfphp.org/docs/installingamfphp.html',
        },
        {
          label: 'Adobe / ColdFusion and Flash Remoting',
          url: 'https://helpx.adobe.com/coldfusion/developing-applications/flex-and-air-integration-in-coldfusion/using-flash-remoting-update.html',
        },
        {
          label: 'WordPress / First release, May 27, 2003',
          url: 'https://wordpress.org/news/2003/05/wordpress-now-available/',
        },
      ],
    },
  },
  {
    year: '2006–10',
    label: 'The browser wakes',
    eyebrow: '05 / LESS RELOADING. MORE LIVING.',
    lines: ['The page', 'stopped'],
    accent: 'standing still.',
    description:
      'jQuery made the tangled browser landscape feel manageable. AJAX popularized fetching data without a full reload. JavaScript, CSS, and HTML were growing into a creative platform of their own. Web 2.0 was a change in participation as much as technology.',
    tags: ['JQUERY', 'AJAX', 'WEB 2.0'],
    note: 'The browser was learning the tricks we once needed a plug-in for.',
    artifact: 'XMLHTTPREQUEST / 200 OK',
    code: '$.get("/stories", function (data) {\n  $("#world").html(data).fadeIn();\n});',
    insight: {
      date: '2005–2006 / A NEW LANGUAGE FOR INTERACTION',
      title: 'The reload stopped being the rhythm.',
      sections: [
        {
          heading: 'AJAX named an approach',
          text: 'On February 18, 2005, Jesse James Garrett described AJAX: JavaScript, the DOM, CSS, and asynchronous requests working together. It was not a new feature added to JavaScript. Google Maps and Google Suggest illustrated what existing browser capabilities could do when the interface no longer waited for a whole new page.',
          references: [1],
        },
        {
          heading: 'jQuery made it approachable',
          text: 'John Resig introduced jQuery at BarCamp NYC on January 14, 2006. Its compact approach to finding elements and changing the page helped make browser scripting more approachable. Alongside asynchronous requests, it gave developers a practical route toward app-like experiences built from the document itself.',
          references: [2],
        },
      ],
      takeaway:
        'The browser became an interactive canvas in its own right. The challenge shifted from arranging page loads to managing changing state, feedback, and user expectations.',
      sources: [
        {
          label: 'Jesse James Garrett / AJAX essay, preserved copy',
          url: 'https://www.oceanpark.com/webmuseum/2005/garrett_on_ajax.html',
        },
        {
          label: 'jQuery / Ten years of jQuery and beyond',
          url: 'https://blog.jquery.com/2016/01/14/ten-years-of-jquery-and-beyond/',
        },
      ],
    },
  },
  {
    year: '2007–10',
    label: 'The turning point',
    eyebrow: '06 / A SMALL SCREEN. A SEISMIC SHIFT.',
    lines: ['The future', 'wouldn’t'],
    accent: 'need a plug-in.',
    description:
      'June 29, 2007. The iPhone arrived without Flash, leaving games and interactive sites behind. In his 2010 “Thoughts on Flash” letter, Steve Jobs defended Apple’s decision on security, performance, battery life, and touch. For developers, the future suddenly demanded a different canvas.',
    tags: ['IPHONE', 'HTML5', 'CSS3 / JAVASCRIPT'],
    note: 'An era was changing. The curiosity stayed.',
    artifact: 'THE OPEN WEB / WHAT COMES NEXT',
    code: '<video controls>\n  <source src="the-next-chapter.mp4">\n</video>',
    insight: {
      date: 'JUNE 29, 2007 → APRIL 29, 2010',
      title: 'A missing plug-in became a dividing line.',
      sections: [
        {
          heading: '2007 / The web, with a conspicuous gap',
          text: 'The original iPhone went on sale in the United States on June 29, 2007. Its browser did not run Flash, leaving Flash games and interactive sites out of reach. For developers who had built around the player, a celebrated new way to browse the web also exposed a painful compatibility gap.',
          references: [1, 2],
        },
        {
          heading: '2010 / “Thoughts on Flash”',
          text: 'On April 29, 2010, Steve Jobs publicly defended Apple’s decision. He cited reliability, security, performance, battery life, and the mismatch between mouse-driven interfaces and touch. He also argued for open web standards and against a third-party layer between Apple’s platform and developers. These were Apple’s stated arguments in a contested platform debate.',
          references: [2, 3],
        },
        {
          heading: 'A transition, not an overnight extinction',
          text: 'No Flash did not mean no YouTube: the first iPhone had a dedicated app using H.264 video. The harder question was what to do with games, navigation, and entire experiences tied to the player. HTML, CSS, and JavaScript offered a path forward, but the creative work still had to be rethought for touch.',
          references: [4],
        },
      ],
      takeaway:
        'The promise of one runtime everywhere was breaking. Developers had to separate what an experience meant from the technology that delivered it. AS3’s browser future narrowed; ColdFusion and SOAP were separate server-side choices, not casualties of an iPhone browser switch.',
      sources: [
        {
          label: 'Apple / US iPhone launch, June 29, 2007',
          url: 'https://www.apple.com/newsroom/2007/06/28iPhone-Premieres-This-Friday-Night-at-Apple-Retail-Stores/',
        },
        {
          label: 'Steve Jobs / Thoughts on Flash, preserved letter (PDF)',
          url: 'https://apostolos.kritikos.me/wp-content/uploads/2021/01/steve_jobs_thoughts_on_apple.pdf',
        },
        {
          label: 'Business Insider / Thoughts on Flash, April 29, 2010',
          url: 'https://www.businessinsider.com/steve-jobs-heres-why-we-dont-allow-flash-on-the-iphone-2010-4',
        },
        {
          label: 'Apple / YouTube on the first iPhone',
          url: 'https://www.apple.com/newsroom/2007/06/20YouTube-Live-on-Apple-TV-Today-Coming-to-iPhone-on-June-29/',
        },
      ],
    },
  },
];
