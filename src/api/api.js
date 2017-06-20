export default {
  getSideBarItems () {
    let sideBarItems = [{
      title: 'JavaScript',
      subItems: ['拖曳元素', '排序算法', '正则表达式']
    },
    {
      title: 'CSS3',
      subItems: ['animation', 'transform']
    },
    {
      title: 'HTML5',
      subItems: ['canvas', 'drag&drop']
    }]
    return sideBarItems
  },
  getArticlesTitle () {
    return ['1']
  }
}
