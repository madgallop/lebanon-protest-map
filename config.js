var config = {
    style: 'mapbox://styles/madgallop/clrmnixwt004j01nl2r52gj1g',
    accessToken: 'pk.eyJ1IjoibWFkZ2FsbG9wIiwiYSI6ImNtdnY5cjlidDA1MmkyeHBxY2JiZ2hmYzUifQ.O90_AOTJ6ofKXt4lix8JjA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Bread, Pounds and Protest',
    subtitle: 'Mapping economic protests in Lebanon since 1987',
    byline: 'Madeleine Gallop &middot; January 23, 2024',
    introduction: "While religious divisions and sectarian tensions have historically fueled conflict in Lebanon, economic challenges and the government's inability to address them have emerged as the predominant threats to the well-being of Lebanon’s people since the conclusion of the Lebanese Civil War (1975-1990).\n\nA devastating economic crash in 1987 profoundly impacted Lebanon’s population. This downturn, marked by bread riots triggered by the government's inability to subsidize rising wheat costs amid global price hikes, has led to persistent economic challenges. Lebanese people have experienced lasting hardship regardless of their religious affiliations, and have joined together through public demonstrations and strikes. But despite the populace's united calls for change, religious divisions continue to constrain the government. In 2019, when economic conditions in Lebanon once again deteriorated, a new wave of protests, hunger, and calls for change broke across the country. Lebanon's political class must redirect its focus towards addressing the economic well-being of its people.",
    githubUrl: 'https://github.com/madgallop/lebanon-protest-map', 
    chapters: [
        {
            id: 'emerging-from-civil-war',
            from: '1980-01-01', to: '1999-12-31', rings: true,
            alignment: 'left',
            hidden: false,
            title: 'Emerging from civil war',
            description: "<p>Near the end of the civil war, Lebanon entered its worst economic depression since its independence 44 years prior. Deep religious divisions paralyzed the government as costs spiraled and acute shortages strained Lebanese society. The real value of wages plummeted, dropping by over 98% between 1975 and 1987, and inflation surpassed 250%. Essential goods became nearly ten times more expensive. <mark class='hl' data-event='19870830'>Riots erupted over currency devaluation and inflation</mark>, and government subsidy cuts contributed to food insecurity. Prime Minister Karami resigned amid the economic protests. Political shifts and economic turmoil persisted until the turn of the century, leaving Lebanon in a fragile state.</p><p><em>Click a cedar on the map, or a pulsing dot at the edge of the screen for nationwide protests, to read the clipping.</em></p>",
            location: {
                center: [35.233333, 33.879786],
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'two-thousands-to-twenty-tens',
            from: '2000-01-01', to: '2019-09-30', rings: true,
            alignment: 'right',
            hidden: false,
            title: '2000s-2010s',
            description: "<p>After a partial economic recovery, events such as the unfulfilled promise of Syrian troop withdrawal after the civil war, protests after Rafik Hariri's assassination, and localized economic challenges defined this period. From economic concerns in 2008 to specialized industry organizing in the 2010s to the 2015 trash crisis, grievances extended to tax policies, rising public debt, and government inefficacy. Amid political struggles, economic issues worsened. Banks threatened to halt public debt financing, and diverse industrial and social sectors advocated for change.</p>",
            location: {
                center: [35.75, 33.95],
                zoom: 8.3,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'october-2019-revolution',
            from: '2019-10-01', to: '2020-03-31', rings: true,
            alignment: 'left',
            hidden: false,
            title: 'October 2019 Revolution',
            description: "<p>In late 2018, Lebanon faced renewed economic challenges, sparking unity in diverse political groups against the government's poor handling of economic woes. Protests broke out in response to a new tax and continued for over 100 days. These demonstrations, known collectively as the October Revolution, surpassed all previous movements in size and geographical diversity and reflected widespread discontent with Lebanon's sectarian political landscape. As the country's national debt exceeded $85 billion, unemployment reached 35%, and growth slowed, protests intensified. Economic strife, exacerbated by regional conflicts and a shortage of dollars, led to rising prices (which rose over 45% in 4 months), falling wages, devaluation of the Lebanese pound, and widespread food insecurity.</p>",
            location: {
                center: [35.85, 33.87],
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'covid-port-explosion-collapse',
            from: '2020-04-01', to: '2030-12-31', rings: true,
            alignment: 'right',
            hidden: false,
            title: 'COVID-19, Port Explosion, and Economic Collapse',
            description: "<p>In 2020, the October Revolution extended into the COVID-19 pandemic, exacerbating Lebanon's economic crisis. The port explosion in 2020 added to the challenges, rendering the economic crisis the most significant threat to stability since the 1975-90 civil war. The country witnessed a 50% depreciation of the Lebanese pound, an acute dollar shortage, and rampant inflation. The national debt reached 170% of GDP in 2019 and resulted in Lebanon's first sovereign default on its $1.2 billion Eurobond in March 2020. By 2022, 80% of the population faced poverty, and the Lebanese pound had depreciated over 98% against the US dollar since 2019. Food insecurity became a critical issue, with over 77% of Lebanese households unable to purchase sufficient food, highlighting the devastating impact of the economic crisis on the well-being of the people.</p><p>In Sidon, marchers kept to the demands of the October uprising, chanting <mark class='hl' data-event='20200605'>&ldquo;Down with the corrupt system.&rdquo;</mark> On the anniversary of the port explosion, <mark class='hl' data-event='20210806'>protesters demanded accountability</mark> from those in power.</p>",
            location: {
                center: [35.75, 33.9],
                zoom: 8.4,
                pitch: 25,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'conclusion',
            from: '1980-01-01', to: '2030-12-31', rings: false,
            alignment: 'center',
            hidden: false,
            description: "<p>Since the civil war, protests have erupted across various regions and sectarian lines, fueled by economic grievances, food insecurity, and a lack of effective governance. Despite the enduring influence of sectarianism in Lebanese society, the series of protest movements that have unfolded since 1987 underscores a growing unity among Lebanon's population. These demonstrations highlight a shared frustration that transcends religious and geographic divisions, posing a collective demand for change. Hopefully, Lebanon's political class can see past religious division and learn from its people to finally address the nation's challenges.</p>",
            location: {
                center: [35.85, 33.87],
                zoom: 7.8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
