export const baseURL = mode === 'development' ? 'http://localhost:8000' : '';
export const URLS = {
  insertEveryDay: {
    url: '/insertEveryDay',
    method: 'post'
  },
  queryEveryDay: {
    url: '/queryEveryDay',
    method: 'get'
  },
  insertArticle: {
    url: '/insertArticle',
    method: 'post'
  },
  queryArticle: {
    url: '/queryArticle',
    method: 'get'
  },
  queryArticleByType: {
    url: '/queryArticleByType',
    method: 'get'
  },
  queryHotclick: {
    url: '/queryHotclick',
    method: 'get'
  },
  insertHotclick: {
    url: '/insertHotclick',
    method: 'post'
  },
  queryStudy: {
    url: '/queryStudy',
    method: 'get'
  },
  insertStudy: {
    url: '/insertStudy',
    method: 'post'
  },
  queryTimeline: {
    url: '/queryTimeline',
    method: 'get'
  },
  insertTimeline: {
    url: '/insertTimeline',
    method: 'post'
  }
};
