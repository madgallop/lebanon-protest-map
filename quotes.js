// Words from the record, shown in the "On the record" ticker along the bottom of the map.
// Each quote is attached to a protest by its id (see protests.js) and appears while that
// protest's chapter is on screen. Headlines from protests.js are added to the ticker automatically.
//
// To add more:  { event: 'ID FROM protests.js', text: 'exact words', who: 'who said it (optional)' }
// The source and date are filled in from the protest itself.
var QUOTES = [
    { event: '19870830',  text: 'war of starvation',                        who: 'On Lebanon’s hungry' },
    { event: '20110125n', text: 'day of rage' },
    { event: '20121109n', text: 'all forms of legitimate escalation',       who: 'Union Coordination Committee' },
    { event: '20200421',  text: 'Thawra, thawra (Revolution, revolution)',  who: 'Protesters, Martyrs’ Square' },
    { event: '20200605',  text: 'Down with the corrupt system',             who: 'Marchers in Sidon' }
];
