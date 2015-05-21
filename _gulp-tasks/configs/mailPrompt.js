module.exports = [
  {
    type: 'list',
    name: 'from',
    message: 'From: ',
    default: process.env.JEREMYGMAIL,
    choices: [
      process.env.BECKYGMAIL,
      process.env.JEREMYGMAIL,
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
      process.env.BECKYGMAIL,
      process.env.JEREMYGMAIL,
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