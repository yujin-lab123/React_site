const questions = [
    {
      id: 1,
      name: 'mood',
      category: 'MOOD',

      before: '지금 원하는 ',
      highlight: '향의 분위기',
      after: '는 무엇인가요?',

      options: ['Fresh', 'Clean', 'Cozy', 'Sweet', 'Calm']
    },
    {
      id: 2,
      name: 'use',
      category: 'SCENE',

      before: '02. ',
      highlight: '어디에서 ',
      after: '사용할 향을 찾고 있나요?',
      
      options: ['Daily', 'Office', 'Date', 'Special']
    },
    {
      id: 3,
      name: 'season',
      category: 'SEASON',

      before: '03. 어떤 ',
      highlight: '계절에 ',
      after: '사용할 예정인가요?',

      options: ['Spring', 'Summer', 'Autumn', 'Winter']
    }
  ];

  export default questions;