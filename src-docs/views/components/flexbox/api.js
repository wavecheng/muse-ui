export default {
  flexbox: {
    props: [{
      name: 'gutter',
      type: 'Number',
      default: '8',
      desc: '各 `flexboxItem` 间的间隔'
    }, {
      name: 'orient',
      type: 'String',
      default: 'horizontal',
      desc: '`flexboxItem`排列方向 \n * horizontal: 水平方向排列; \n * vertical: 垂直方向排列 '
    }, {
      name: 'justify',
      type: 'String',
      default: '',
      desc: '主轴的对齐方式 flex-start, flex-end, center, space-between, space-around'
    }, {
      name: 'align',
      type: 'String',
      default: '',
      desc: '交叉轴对齐方式 flex-start, flex-end, center, baseline, stretch'
    }, {
      name: 'wrap',
      type: 'String',
      default: '',
      desc: '是否可以换行， warp 允许换行， nowrap 不允许换行'
    }],
    slots: [{
      name: 'default',
      desc: '用于放置 `flexboxItem` 组件'
    }]
  },
  flexboxItem: {
    props: [{
      name: 'span',
      type: 'String',
      default: '',
      desc: '等于flexItem 的 `flex-basis` 属性'
    }, {
      name: 'order',
      type: 'String, Number',
      default: '',
      desc: '等于flexItem 的 `order` 属性，用于排序'
    }],
    slots: [{
      name: 'default',
      desc: '用于放置具体内容'
    }]
  }
}
