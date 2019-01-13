export default {
  columns: [
    {
      name: 'To Do',
      cards: [
        {
          title: 'App interaction with server',
          description: 'Use different api calls to move/create a card',
          priority: 7,
        },
        {
          title: 'Visualize static data',
          description: 'Vizualize this data in cols and cards',
          priority: 5,
        },
      ],
    },
    {
      name: 'In progress',
      cards: [
        {
          title: 'Ask Google about arrays',
          description: 'Learn about react array vizualization Array.map method etc.',
          priority: 4,
        },
      ],
    },
    {
      name: 'Done',
      cards: [
        {
          title: 'Create colunm component',
          description: 'Create a component to display a colunm on the Board',
          priority: 7,
        },
        {
          title: 'Create basic card component',
          description: 'Create a card component with text and two buttons',
          priority: 5,
        },
      ],
    },
  ],
};
