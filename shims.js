module.exports = {
  'jquery': {
    'exports': '$'
  },
  'rangy': {
    'exports': 'rangy'
  },
  'angular': {
    'exports': 'angular',
    'depends': {
      'jquery': '$'
    }
  },
  'text-angular-sanitize': {
    'depends': {
      'angular': 'angular'
    }
  },
  'text-angular-setup': {
    'depends': {
      'angular': 'angular',
      'rangy': 'rangy'
    }
  },
  'text-angular': {
    'depends': {
      'angular': 'angular',
      'rangy': 'rangy'
    }
  }
}