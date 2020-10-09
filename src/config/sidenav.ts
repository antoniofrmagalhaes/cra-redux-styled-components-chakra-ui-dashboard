export default [
  {
    key: 14,
    label: 'New Incident',
    to: '/settings'
  },
  {
    key: 66,
    label: 'New Request',
    to: '/login'
  },
  {
    key: 12,
    label: 'New Infotmative',
    to: '/'
  },
  {
    key: 145,
    label: 'New Test',
    to: '/'
  },
  {
    key: 2,
    label: 'SLAs',
    to: '',
    subpaths: [
      {
        id: 1,
        to: '/',
        label: 'My Work'
      },
      {
        id: 2,
        to: '/',
        label: "My Group's Work"
      }
    ]
  },
  {
    key: 3,
    label: 'Requests',
    to: '',
    subpaths: [
      {
        id: 1,
        to: '/',
        label: 'Open Requests'
      },
      {
        id: 2,
        to: '/',
        label: 'All'
      }
    ]
  },
  {
    key: 4,
    label: 'Incidents',
    to: '',
    subpaths: [
      {
        id: 1,
        to: '/',
        label: 'Open Incidents'
      },
      {
        id: 2,
        to: '/',
        label: 'All'
      }
    ]
  },
  {
    key: 10,
    label: 'Reports',
    to: '/'
  },
  {
    key: 1,
    label: '@AMERICAS L1 IT RISK TEAM',
    to: '/queue',
    subpaths: [
      {
        id: 1,
        to: '/',
        label: 'Assigned to me'
      },
      {
        id: 2,
        to: '/',
        label: 'Open'
      },
      {
        id: 3,
        to: '/',
        label: 'Open - unassigned'
      },
      {
        id: 4,
        to: '/',
        label: 'Resolved'
      },
      {
        id: 5,
        to: '/',
        label: 'All'
      }
    ]
  },
  {
    key: 5,
    label: '@AMERICAS L2 IT RISK TEAM',
    to: '',
    subpaths: [
      {
        id: 1,
        to: '/',
        label: 'Assigned to me'
      },
      {
        id: 2,
        to: '/',
        label: 'Open'
      },
      {
        id: 3,
        to: '/',
        label: 'Open - unassigned'
      },
      {
        id: 4,
        to: '/',
        label: 'Resolved'
      },
      {
        id: 5,
        to: '/',
        label: 'All'
      }
    ]
  }
]
