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
  },
  {
    year: '2007–10',
    label: 'The turning point',
    eyebrow: '06 / A SMALL SCREEN. A SEISMIC SHIFT.',
    lines: ['The future', 'wouldn’t'],
    accent: 'need a plug-in.',
    description:
      'The iPhone arrived without Flash in its browser. By 2010, the direction was unmistakable: touch, mobile, and an open web. The Flash-centered stack was losing its place at the front of the experience. The tools would change. The urge to create wouldn’t.',
    tags: ['IPHONE', 'HTML5', 'CSS3 / JAVASCRIPT'],
    note: 'An era was changing. The curiosity stayed.',
    artifact: 'THE OPEN WEB / WHAT COMES NEXT',
    code: '<video controls>\n  <source src="the-next-chapter.mp4">\n</video>',
  },
];
