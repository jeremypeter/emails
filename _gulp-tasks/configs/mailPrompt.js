module.exports = [
  {
    type: 'list',
    name: 'from',
    message: 'From: ',
    default: process.env.GMAIL_BECKY,
    choices: [
      "Becky Peter <beckypeterfitness@gmail.com>",
      "Jeremy Peter <jeremywpeter@gmail.com>",
      // process.env.JEREMYGMAIL,
      'Other'
    ] 
  },
  {
    type: 'input',
    name: 'from',
    message: 'Add Email(s)',
    when: function(answers) {
      return answers.from === 'Other';  
    },
    filter:function(value){ return 'TEST <' + value + '>'; }
  },
  {
    type: 'checkbox',
    name: 'to',
    message: 'To: ',  
    choices: [
      // process.env.BECKYGMAIL,
      // process.env.JEREMYGMAIL,
      "Becky Peter <beckypeterfitness@gmail.com>",
      'Jessica Chrisman <cheerchic182@hotmail.com>',
      'Gabrielle Montalvo <gabmontalvo87@gmail.com>',
      'Daniele Wells <dani.wells87@gmail.com>',
      'Other'
    ] 
  },
  {
    type: 'input',
    name: 'to',
    message: 'Add Email(s)',
    when: function(answers) {
      return answers.to[0] === 'Other';  
    },
    filter:function(value){console.log(value); return 'TEST <' + value + '>'}
  },
  {
    type: 'input',
    name: 'subject',
    message: 'Subject: ',
    default: process.env.USER + ': TEST FROM LOCAL'
  }

];