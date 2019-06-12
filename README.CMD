
npm install react-redux redux


1、react keys
    key是React中实用的一种特殊属性。当元素被创建的时候，React会讲元素的key值和对象的元素绑定存储起来，当组件重新渲染的时候保存已有的状态
    用于追踪列表中那些元素被修改、被添加、被移除的辅助标记

    开发过程中要跑正元素的key在同级元素中具有唯一性。在React diff算法中React会借助元素的key值来判断
    该元素是新创建的还是移动而来的元素，从而减少不必要的元素重渲染。此外，React 还需要借助 Key 值来判断元素与本地状态的关联关系


2、调用 setState 之后发生了什么？
    1、将参数与组件当前的状态合并
    2、触发调和过程。经过调和过程，React 会以相对高效的方式根据新的状态构建React元素，并重新渲染组件

3、React更新
    1）、React JSX创建React元素，插入到HTML中
    2）更新：React重新渲染生成虚拟的元素树，并自动计算新的树和就的元素树的节点差异，然后根据差异对界面进行最小化重渲染，
    在差异计算算法中，React能够相对精确的知道哪些位置发生了改变以及应该如何改变，从而保证了页面的按需更新

4、React生命周期
    1）初始化阶段：组件被插入DOM中
        constructor - 构造函数初始化
        componentWillMount - 将要挂载节点
        render - 组件生成虚拟的DOM节点
        componentDidMount - 组件在被挂载之后

     2）运行阶段：如果DOM应该被更新，组件重新渲染
        componentWillReceiveProps - 组件将要收到属性的调用
        shouldComponentUpdate - 组件接受新的属性、新的状态调用
        componentWillUpdate - 组件即将更新不能修改属性和状态
        render - 组件重新渲染

      3）销毁节点：组件从DOM中移除
        componentWillUnmount - 组件即将销毁

5、为什么虚拟 dom 会提高性能
    虚拟dom相当于是在js和真实dom之间配置缓存，利用dom diff算法避免了不必要的dom操作，从而提高性能。

    React 渲染过程：
        用jsx语法表示DOM树的结构，然后用这个树构建一个真正的DOM树，当状态发生改变时，重新创建一个虚拟DOM树，将新的树和旧的DOM树比较，记录差异并重新渲染差异节点


6、react diff 原理 ******************
    1）将树形结构按照层级分解，只比较同级元素；
    2）为列表结构的每个单元添加唯一key属性，用于


7、React 中 refs 的作用是什么
    Refs是React提供给我们的安全访问DOM元素或者某个组件实例的具柄。
    我们可以为元素添加ref属性然后在回调函数中结构该元素在DOM树中的句柄，并作为回调函数的第一个参数返回

     static propTypes = {
        username: PropTypes.string.isRequired,
      }

8、组件分类
    1）Container component - 容器组件

    2）Presentational component - 展示组件
        只负责展示数据


    3）Class component - 类组件
        可正常使用额外功能，如组件生命周期钩子、状态，也能使组件直接访问Store并维持状态信息

    4）Functional component - 函数式组件
        仅接受Props，并将组件自身渲染到页面时，无状态组件，

