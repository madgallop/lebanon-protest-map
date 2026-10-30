// Words from the record, shown in the "On the record" ticker along the bottom of the map.
// Each quote is attached to a protest by its id (see protests.js) and appears while that
// protest's chapter is on screen. Headlines from protests.js are added to the ticker automatically.
//
// To add more:  { event: 'ID FROM protests.js', text: 'exact words', who: 'who said it (optional)' }
// The source and date are filled in from the protest itself. If a quote comes from a different
// article than the protest's own (e.g. a New York Times piece), add  source: '…', date: 'YYYY-MM-DD'.
var QUOTES = [
    // --- 1980s-1990s ---
    { event: '19870830',  text: 'We’re hungry! We want to eat!',                 who: 'Marchers in Sidon', source: 'New York Times', date: '1987-08-30' },
    { event: '19870830',  text: 'war of starvation' },
    // --- 2000s-2010s ---
    { event: '20050222',  text: '…you have Muslims, Christians and Druse asking for the same thing', who: 'Gibran Tuweini, opposition leader and publisher' },
    { event: '20080507',  text: 'This is the first day of the civil war',        who: 'Omar, a government supporter' },
    { event: '20110125n', text: 'day of rage' },
    { event: '20121109n', text: 'all forms of legitimate escalation',            who: 'Union Coordination Committee' },
    // --- October 2019 revolution ---
    { event: '20191017n', text: 'For 30 years, we’ve been living in this same corrupt system…', who: 'Semaan Khawami, artist' },
    { event: '20191024n', text: 'The politicians told us that we hate each other, but we don’t', who: 'Fatima Hammoud, 23', source: 'New York Times', date: '2019-10-23' },
    { event: '20191024n', text: '…citizens against the government, not citizens against each other', who: 'Jad Al Rayess, social media manager', source: 'New York Times', date: '2019-10-29' },
    { event: '20191113n', text: 'All of them means all of them',                 who: 'Protesters’ slogan' },
    { event: '20200113n', text: 'The revolution is coming back',                 who: 'Protesters’ slogan' },
    // --- COVID, port explosion, collapse ---
    { event: '20200421',  text: 'Thawra, thawra (Revolution, revolution)',       who: 'Protesters, Martyrs’ Square' },
    { event: '20200605',  text: 'Down with the corrupt system',                  who: 'Marchers in Sidon' }
];
