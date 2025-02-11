/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{
  //   type: 'autogenerated', dirName: '.',
  // }],

  // But you can create a sidebar manually

  tutorialSidebar: [
    'introduction',
    'roadmap',
    {
      type: 'category',
      label: 'Installation and Deployment',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'instruction',
        },
      ],
    },
    {
      type: 'category',
      label: 'Design Document',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Event Handling and Integration',
          collapsible: true,
          collapsed: false,
          items: [
            {
              type: 'autogenerated',
              dirName: 'design-document/01-event-handling-and-integration',
            },
          ],
        },
        {
          type: 'category',
          label: 'Observability',
          collapsible: true,
          collapsed: false,
          items: [
            {
              type: 'autogenerated',
              dirName: 'design-document/02-observability',
            },
          ],
        },
        {
          type: 'category',
          label: 'Connect',
          collapsible: true,
          collapsed: false,
          items: [
            {
              type: 'autogenerated',
              dirName: 'design-document/03-connect',
            },
          ],
        },
        'design-document/schema-registry',
        'design-document/spi',
        'design-document/stream',
      ],
    },
    {
      type: 'category',
      label: 'EventMesh SDK for Java',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'sdk-java',
        },
      ],
    },
    {
      type: 'category',
      label: 'Upgrade Guide',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'upgrade-guide',
        },
      ],
    },
    {
      type: 'category',
      label: 'Application Scenario',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'application-scenario',
        },
      ],
    },
  ],
};
