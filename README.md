
	* 简述vue的双向绑定原理

实现mvvm的双向绑定，是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。就必须要实现以下几点：1、实现一个数据监听器Observer，能够对数据对象的所有属性进行监听，如有变动可拿到最新值并通知订阅者2、实现一个指令解析器Compile，对每个元素节点的指令进行扫描和解析，根据指令模板替换数据，以及绑定相应的更新函数3、实现一个Watcher，作为连接Observer和Compile的桥梁，能够订阅并收到每个属性变动的通知，执行指令绑定的相应回调函数，从而更新视图4、mvvm入口函数，整合以上三者（官方：当你把一个普通的 JavaScript 对象传入 Vue 实例作为 data 选项，Vue 将遍历此对象所有的属性，并使用 Object.defineProperty 把这些属性全部转为 getter/setter。Object.defineProperty 是 ES5 中一个无法 shim 的特性，这也就是 Vue 不支持 IE8 以及更低版本浏览器的原因。这些 getter/setter 对用户来说是不可见的，但是在内部它们让 Vue 能够追踪依赖，在属性被访问和修改时通知变更）
	* vue与react的区别
react整体是函数式思想，把组件封装成成吨的组件，状态和逻辑通过参数传入，所以在react中，是单向数据流，推荐结合immutable来实现数据不可变，react在setStater之后会重新走渲染流程触发更新阶段如果shouldComponentUpdate返回的是true，就继续渲染，如果返回了false，就不会重新渲染，PureComponent就是重写了shouldComponentUpdate，然后在里面作了props和state的浅层对比而vue的思想是响应式的，也就是基于是数据可变的，通过对每一个属性建立Watcher来监听，当属性变化的时候，响应式的更新对应的虚拟dom。react的性能优化需要手动去做，而vue的性能优化是自动的，但是vue的响应式机制也有问题，就是当state特别多的时候，Watcher也会很多，会导致卡顿，所以大型应用（状态特别多的）一般用react，更加可控。应用场景：vue
	* 什么是mvvm框架

MVVM模式就是Model–View–ViewModel模式。它实现了View的变动，自动反映在 ViewModel，反之亦然。我对于双向绑定的理解，就是用户更新了View，Model的数据也自动被更新了，这种情况就是双向绑定。再说细点，就是在单向绑定的基础上给可输入元素（input、textare等）添加了change(input)事件,(change事件触发，View的状态就被更新了)来动态修改model。
	* router原理

1. hash 模式：这种 #。后面 hash 值的变化，并不会导致浏览器向服务器发出请求，浏览器不发出请求，也就不会刷新页面。另外每次 hash 值的变化，还会触发hashchange 这个事件，通过这个事件我们就可以知道 hash 值发生了哪些变化。然后我们便可以监听hashchange来实现更新页面部分内容的操作2.history 模式因为HTML5标准发布。多了两个 API，pushState 和 replaceState，通过这两个 API 可以改变 url 地址且不会发送请求。同时还有popstate 事件。通过这些就能用另一种方式来实现前端路由了，但原理都是跟 hash 实现相同的。用了 HTML5 的实现，单页路由的 url 就不会多出一个#，变得更加美观。但因为没有 # 号，所以当用户刷新页面之类的操作时，浏览器还是会给服务器发送请求。为了避免出现这种情况，所以这个实现需要服务器的支持，需要把所有路由都重定向到根页面。
	* 手动封装redux


	* 你对受控组件和非受控组件了解多少？

标签<input>、<textarea>、<select>的值的改变通常是根据用户输入进行更新。在React中，可变状态通常保存在组件的状态属性中，并且只能使用 setState() 更新，而呈现表单的React组件也控制着在后续用户输入时该表单中发生的情况，以这种由React控制的输入表单元素而改变其值的方式，称为：“受控组件”
	* React 中的箭头函数是什么？怎么用？

箭头函数（=>）是用于编写函数表达式的简短语法。这些函数允许正确绑定组件的上下文，因为在 ES6 中默认下不能使用自动绑定。使用高阶函数时，箭头函数非常有用。
	* 什么是 Props?

props是react属性简写，他们是只读组件，必须保持存，即不可变，他们总是在整个应用在整个应用中从父组件传递子组件，子组件永远不能将prop送回父组件，这将有助于维护单向数据流，通常用户呈现动态生成的数据
	* 什么是虚拟DOM，说一下它的工作原理

虚拟DOM是一个轻量级的js对象，它是属于真实DOM的副本，它是一个节点树，将元素，属性，内容作为对象的属性，react的渲染函数从react组件中创建一个节点树。然后它响应数据模型中的变化来更新该树，这个变化将是由用户或者系统引起。虚拟DOM的工作流程：1：每当底层数据发生改变时，整个UI都将在虚拟DOM描述中重新渲染；2：之前的DOM变与新表的差异3：完成计算后，将只用实际内容更最小化更新
	* react的子组件，父组件，非父组件传值

父传子：当子组件在父组件中当做标签使用的时候，通过自定义属性传递数据 属性值为需要传递的数据，在子组件中通过this.props进行接收，同时我们还可以通过defaultProps来定义默认的数据，子传父：当子组件在父组件中当做标签使用的时候，通过绑定自定义属性  值为一个函数。在父组件中通过这个函数来接收子组件的数据非父组件传值：            1、eventBuS            2、手动封装事件订阅            3、flux            4、redux            5、mobox                      6,context:应用场景爷孙组件传值
	* 你对redux的理解？

Redux是将整个应用状态存储到一个地方，称为store,里面保存一棵状态树state tree。组件可以派发(dispatch)行为(action)给store,而不是直接通知其它组件。组件内部通过订阅store中的状态(state)来刷新自己的视图。
	* 如何封装一个redux？ 


	* 对react-redux的理解？
	* react的性能优化有哪些

事件shuouldComponentUpdata在渲染之前比较新值和旧值一样的话，就没有必要去调用randerimmutablePuerComponent:纯组件可以帮你做一层浅比较，减少render函数渲染的次数，注意
	* vue中计算属性和watch的区别

computed计算属性是用来声明式的描述一个值依赖了其它的值。当你在模板里把数据绑定到一个计算属性上时，Vue 会在其依赖的任何值导致该计算属性改变时更新 DOM。这个功能非常强大，它可以让你的代码更加声明式、数据驱动并且易于维护。watch监听的是你定义的变量,当你定义的变量的值发生变化时，调用对应的方法。
	* vue和react的生命周期各阶段都做了什么？

vuebeforeCreate 实例创建前：这个阶段实例的data、methods是读不到的created 实例创建后：这个阶段已经完成了数据观测(data observer)，属性和方法的运算， watch/event 事件回调。mount挂载阶段还没开始，$el 属性目前不可见，数据并没有在DOM元素上进行渲染beforeMount：在挂载开始之前被调用：相关的 render 函数首次被调用。mounted：el选项的DOM节点 被新创建的 vm.$el 替换，并挂载到实例上去之后调用此生命周期函数。此时实例的数据在DOM节点上进行渲染beforeUpdate：数据更新时调用，但不进行DOM重新渲染，在数据更新时DOM没渲染前可以在这个生命函数里进行状态处理updated：这个状态下数据更新并且DOM重新渲染，当这个生命周期函数被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。当实例每次进行数据更新时updated都会执行beforeDestory：实例销毁之前调用。destroyed：Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。
reactconstructor：用来做组件的初始化工作，在使用constructor的时候必须调用super方法，否则this的指向就会发生错误 constructor中用this.state来定义当前组件所需要的一些状态当前生命周期函数是访问不到props的,如果需要访问props则需要在super以及constructor函数中传递props属性
componetWillmount：
1、当前生命周期可以用来做数据渲染前做数据最后的修改2、将外部数据转换为内部数据，当前是生命周期在17.0中被废除掉了render：  
1、render函数用来做数据的渲染(虚拟DOM的渲染),当this.setState/this.props发生改变的时候render函数就会执行      
2、当render函数第一次渲染的时候会将渲染的结果在内存中保留一份，第二次render函数执行渲染的时候，会将缓存中的虚拟DOM和现在的DOM进行对比，这个对比的过程叫做DIFF算法(新旧两个虚拟DOM之间的对比)。          
3、render函数是一个多次执行的生命周期函数
componentDidMount：（组将将安装）     
    1、当前生命周期是数据与模型相结合完毕，在这个生命周期中我们可以通过this.ref来获取到真实的DOM结构                  
    2、还可以在当前生命周期函数中进行前后端数据的交互(ajax使用) 
    3、一般用来做方法的实例化(swiper better-scroll echarts)
componentWillRecevieProps：this.props执行的时候当前生命周期函数就会执行，当前是生命周期函数中会有一次参数  这个参数就是新的props我们可以在当前生命周期中获取外部数据转换为内部数据/做外部数据的修改当前是生命周期在17.0中被废除掉了
shouldComponentUpdate（应更新组件）： 
   1、当this.setState/this.props执行的时候当前生命周期就会执行        
  2、当前生命周期函数必须返回一个布尔值，true则代表执行下面的生命周期  false则不执行下面的生命周期          
   3、当前生命周期决定的是render函数是否执行，而不是数据是否修改          
  4、当前生命周期函数中有2个参数  一个为新的props一个为新的state，因此我们可以通过比较新值和旧值(this.state)来决定render函数是否渲染。如果能减少render函数的渲染，那么性能也会提升
componentWillUpdate：（组件将更新）  1、当前生命周期函数中有2个参数一个为新的props一个为新的state            2、当前生命周期是更新的数据和模板还未进行结合，因此我们可以在当前生命周期中做数据最后的修改
componentDidUpdate： 1、当前生命周期是更新的数据和模板已经结合，我们可以在当前生命周期中获取到数据更新后的DOM结果            但是当前生命周期是多次珍惜的，因为逻辑需要进行判断在去执行componentWillUnmount：

	*  说下你对this.setState的理解，以及第二个参数的作用。以及this.setState为什么是一个异步的？
我们不能直接对this.state直接进行修改，因为它是一个对象，我们对一个对象修this.setState:用来修改state中的数据，当this.setState执行完毕以后render函数会重新渲染         1、   this.setState({                username:1910            })        2、 this.setState(()=>({                username:1910            }))        3、this.setState中            第一个参数是一个对象/是一个函数(必须要返回一个对象),              第二个参数是一个回调，这个回调是一个异步的回调。作用：1、验证数据是否修改成功  2、获取到数据更新后最新的DOM结构首先，我想我们都同意推迟并批量处理重渲染是有益而且对性能优化很重要的，
	
	* redux数据传递的流程，如果让你封装一个redux你如何封装

        1、当组件需要修改数据的时候，必须通过store.dispatch发送一个action给store.        2、store会将这个action传递都给reducer，reducer会根据action中type类型来做数据的修改        3、reducer这个纯函数中state是只允许读不允许做修改。当数据修改完毕后必须返回一个新的state        4、当数据修改完毕后store会通过store.subscribe来通知所有组件数据已更新。三大特性：   1、单一的数据源            2、state是只读的不允许修改            3、必须返回一个纯函数如果让你封装一个redux你如何封装：+
	* 异步action处理:

  以前都是同步的操作，当同步操作完毕后将action传递到reducer中那么问题来了？当异步请求数据的时候，我们如何保证数据请求完毕后将action提交给reducer解决异步actions的方案有很多redux-promise-middleware 中间件redux-thunk 中间件  要求你的action必须是一个函数redux-saga 中间件react中的key值得理解1：key值不是给开发人员使用的。而是在做虚拟DOM的时候做对比使用的2：一般情况下key值都是在遍历一个数据的时候会使用 key值；3：因为虚拟DOM会进行diff对比（新旧两个）2、Vue和React的组件传值有哪些？vuereact父传子都是同过自定义属性，然后props将数据传递给子组件都是同过自定义属性，然后props将数据传递给子组件子传父$emit向父组件抛发事件，父组件来接收这个响应事件通过父组件向子组件传递函数，然后在子组件中调用这个函数非父子之间传值vuexEventBusEventBus手动封装一个事件订阅fluxreduxmoboxcontext3、说下你对this.setState的理解，以及第二个参数的作用。以及this.setState为什么是一个异步的？在React中，一个组件中要读取当前状态需要访问this.state，但是更新状态却需要使用this.setState，不是直接在this.state上修改this.state说到底只是一个对象，单纯的去修改一个对象的值是毫无意义的，在React中只有去驱动UI的更新才会有意义，因此虽然我们可以尝试直接改变this.state，但并没有驱动UI的重新渲染，因此这种操作也就毫无意义。也正是由于这个原因，我们就需要使用this.setState来驱动组件的更新过程。  第一个参数是一个对象/是一个函数(必须要返回一个对象),              第二个参数是一个回调，这个回调是一个异步的回调。作用：1、验证数据是否修改成功  2、获取到数据更新后最新的DOM结构首先，我想我们都同意推迟并批量处理重渲染是有益而且对性能优化很重要的，4、说一下React的性能优化有哪些？render里面尽量减少新建变量和bind函数定制shouldComponentUpdate函数Immutable由于 immutable 内部使用了 Trie 数据结构来存储，只要两个对象的 hashCode 相等，值就是一样的。这样的算法避免了深度遍历比较，性能非常好多个react组件性能优化，key的优化* PuerComponent        纯组件        作用是可以帮你做一层浅比较,减少render函数渲染的次数，提升性能        注意：            在PureComponent中不要去调用shouldComponentUpdate，否则会报错5、说一下你对redux的理解。以及redux数据传递的流程，redux常用的方法有哪些？如果让你封装一个redux你如何封装    redux像是一个公共状态管理员，接收状态动作，发布当前状态 1、当组件需要修改数据的时候，必须通过store.dispatch发送一个action给store.        2、store会将这个action传递都给reducer，reducer会根据action中type类型来做数据的修改        3、reducer这个纯函数中state是只允许读不允许做修改。当数据修改完毕后必须返回一个新的state        4、当数据修改完毕后store会通过store.subscribe来通知所有组件数据已更新。三大特性：   1、单一的数据源            2、state是只读的不允许修改            3、必须返回一个纯函数如果让你封装一个redux你如何封装：6、说一下redux的问题，说一下你对react-redux的理解。    1、频繁的引入store和dispatcher    辅助redux1、Provider   减少store的引入  当父组件引入store后子组件就有会拥有store了  必须包裹根组件    Provider身上会有一个属性叫store，值为一个store    底层原理：context 跨组件传值2、connect    将组件于store进行相关联  以及将UI层和逻辑层进行拆分    底层原理应用的是高阶组件7、说下你对高阶组件的理解。以及作用。　高级组件是一个函数，传入组件，返回出一个更强大组件，属性代理，组件传进来以后，高阶组件会拦截组件的数据，我们可以利用功能过滤掉一些数据，或者做一些数据的分发渲染劫持：我们可以根据用户的一些状态来控制我们要渲染一些页面，或者使某个页面对特定的用户不可见，简单的理解是：一个包装了另一个基础组件的组件。（相对高阶组件来说，我习惯把被包装的组件称为基础组件，8、说一下context的作用。以及使用的方式什么时候需要用到context?当父组件需要给 爷孙组件/非父子组件进行传值的时候 我们就可以使用<GlobalContext.Provider></GlobalContext.Provider>包裹父元素子元素用<GlobalContext.Consumer></GlobalContext.Consumer>包裹9、说一下你对hooks的理解，以及如何使用        特点：            让函数组件拥有类组件的一些特性        useState:让函数组件也有自己的状态  可以理解成this.state        使用方式：            let [状态key值,修改状态的函数] = useState(状态)            let handleModify = ()=>修改状态的函数(....)        模拟生命周期                useEffect()                参数1:是一个函数  当组件的数据初次加载或者是数据更新的时候会执行第一个参数                参数2:依赖的数据  当依赖的数据不会改变的时候useEffect只会在初始化的时候执行一次，如果第二个参数没有编写的情况下                则数据更新的时候就会执行第一个参数                模拟组件卸载的时候 需要在第一个参数中返回一个函数  我们可以将这个返回的函数当做componentWillUnmount        可以模拟的生命周期：componentDidMount  componentDidUpdate componentWillUnmount10、说一下当this.setState执行完毕后会执行哪些生命周期函数shouldComponentUpdate（组件应更新） componentWillUpdate（组件更新） render（数据渲染）componentDidUpdate（组件更新后）11、说一下react中组件传值的方式有哪些？(至少7种)12、说一下单页面开发与多页面开发的优缺点单页面开发：　　单页面开发常用于webapp开发和后台管理系统等。　　优点：1用户体验好，流畅。　　　　　2因为单页面，所以对服务器的压力较小。　　　　　3可以在页面切换的时候加一些酷炫的动画效果。　　　　　4代码的复用度大。有利于后期的维护。　　缺点：1页面复杂度变大，开发难度较大。　　　　　2不利于SEO　　　　　3初次加载的时候用时较长。多页面开发：　　多页面开发常用于PC端的网站等。　　优点：1有利于SEO。　　　　　2开发成本较低。　　缺点：1网站的后期维护难度较大。　　　　　2页面之间的跳转用时较长，用户体验较差。　　　　　3代码重复度大。13、说一下你对路由的理解？以及路由的底层原理传统的路由指的是：当用户访问一个url时，对应的服务器会接收这个请求，然后解析url中的路径，从而执行对应的处理逻辑。这样就完成了一次路由分发。而前端路由是不涉及服务器的，是前端利用hash或者HTML5的history API来实现的，一般用于不同内容的展示和切换。14、说一下react中如何封装一个组件。以及封装组件需要用到的东西。及注意事项我们封装一个组件，尽量最大化组件的复用性，我们需要考虑我们封装受控组件还是非受控组件，我们就需要考虑到，外部传入的数据15、说一下路由常用的组件配置项*     Route:当用户请求的路径与Route中的ptah一致时渲染相对应的组件*         Route渲染的形式：*             component:*             render:*             children:*      Route身上的属性有*         path:请求的路径   *         component/render/children:渲染的形式*         exact:完全匹配*     Switch：被Switch包裹的路由在渲染的时候只会渲染一个*  1、Link:当不需要使用选中标识的时候用link  *         2、NavLink:绝大多数tabBar的时候用<Redirect from="/" exact to="/index"/>   //路由重定向<Route path="/index/:name" component={Index}/>16、说一下react中key值得理解1.key是用来帮助react识别哪些内容被更改、添加或者删除。key需要写在用数组渲染出来的元素内部，并且需要赋予其一个稳定的值。如果key值发生了变更，react则会触发UI的重渲染。2.在相邻的元素间，key值必须是唯一的，若出现了相同的key值，会抛出警告，告诉相邻组件间有重复的key值，且只会渲染第一个重复key值中的元素，因为react会认为后续拥有相同key值的都是同一个组件。3.虽然我们在组件上定义了key值，但是在其子组件中，我们并没有办法拿到key值，因为key值仅仅是给react内部使用的。如果我们需要使用到key值，可通过其他方式传入，比如将key值赋值给id等。17、说一个watch与computed的区别computed计算属性是用来声明式的描述一个值依赖了其它的值。当你在模板里把数据绑定到一个计算属性上时，Vue 会在其依赖的任何值导致该计算属性改变时更新 DOM。这个功能非常强大，它可以让你的代码更加声明式、数据驱动并且易于维护。watch监听的是你定义的变量,当你定义的变量的值发生变化时，调用对应的方法。18、说一下你对vuex的理解  以及vuex数据传递的流程简述vuex的数据传递流程当组件进行数据修改的时候我们需要调用dispatch来触发actions里面的方法。actions里面的每个方法中都会有一个commit方法，当方法执行的时候会通过commit来触发mutations里面的方法进行数据的修改。mutations里面的每个函数都会有一个state参数，这样就可以在mutations里面进行state的数据修改，当数据修改完毕后，会传导给页面。页面的数据也会发生改变19、说一下你对路由守卫的理解。以及路由钩子函数使用的场景1. 导航被触发。2. 在失活的组件里调用离开守卫。3. 调用全局的 beforeEach 守卫。4. 在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。5. 在路由配置里调用 beforeEnter。6. 解析异步路由组件。7. 在被激活的组件里调用 beforeRouteEnter。8. 调用全局的 beforeResolve 守卫 (2.5+)。9. 导航被确认。10. 调用全局的 afterEach 钩子。11. 触发 DOM 更新。12. 用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。token验证流程：客户端使用用户名密码登录。服务端收到请求，去验证用户名与密码。验证成功后，服务端会签发一个 Token，把这个 Token 发送给客户端。客户端将收到的Token存储起来。（cookie或者localStorage）客户端每次需要登录验证的请求都需要带着Token发送给服务器端。服务器端收到请求后先验证Token，如果成功，返回数据。浏览器解释HTML页面的流程.解析HTML结构。2.加载外部脚本和样式表文件3.解析并执行脚本代码。4.DOM树构建完成。//DOMContentLoaded5.加载图片等外部资源。6.页面加载完毕。//load服务端渲染和客户客户端渲染的区别服务器端渲染1.服务器端渲染简称SSR。选择服务器端渲染，主要出于以下两点考虑：能够为客户提供更理想的性能提供更为一致的SEO表现客户端渲染1.服务器端渲染简称CSR。vue全局api一、什么是全局API？全局API并不在构造器里，而是先声明全局变量或者直接在Vue上定义一些新功能，Vue内置了一些全局API，比如我们今天要学习的指令Vue.directive。说的简单些就是，在构造器外部用Vue提供给我们的API函数来定义新的功能。一.Vue.directive自定义指令2.自定义指令中传递的三个参数3.el: 指令所绑定的元素，可以用来直接操作DOM。      binding:  一个对象，包含指令的很多信息。      vnode: Vue编译生成的虚拟节点。4.自定义指令的生命周期1. bind:只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个绑定时执行一次的初始化动作。2. inserted:被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于document中）。3. update:被绑定于元素所在的模板更新时调用，而无论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新。4. componentUpdated:被绑定元素所在模板完成一次更新周期时调用。5. unbind:只调用一次，指令与元素解绑时调用二.Vue.extend构造器的延伸一、什么是Vue.extend？Vue.extend 返回的是一个“扩展实例构造器”,也就是预设了部分选项的Vue实例构造器。经常服务于Vue.component用来生成组件，可以简单理解为当在模板中遇到该组件名称作为标签的自定义元素时，会自动调用“扩展实例构造器”来生产组件实例，并挂载到自定义元素上。由于我们还没有学习Vue的自定义组件，所以我们先看跟组件无关的用途。二、自定义无参数标签我们想象一个需求，需求是这样的，要在博客页面多处显示作者的网名，并在网名上直接有链接地址。我们希望在html中只需要写<author></author> ，这和自定义组件很像，但是他没有传递任何参数，只是个静态标签。三.：Vue.set全局操作Vue.set 的作用就是在构造器外部操作构造器内部的数据、属性或者方法。比如在vue构造器内部定义了一个count为1的数据，我们在构造器外部定义了一个方法，要每次点击按钮给值加1.就需要用到Vue.set。一、引用构造器外部数据：什么是外部数据，就是不在Vue构造器里里的data处声明，而是在构造器外部声明，然后在data处引用就可以了。外部数据的加入让程序更加灵活，我们可以在外部获取任何想要的数据形式，然后让data引用。四.Vue的生命周期（钩子函数）第5节：Template 制作模版6节：Component 初识组件Component 组件props 属性设置props选项就是设置和获取标签上的属性值的，例如我们有一个自定义的组件<panda></panda>,这时我们想给他加个标签属性写成<panda here=’China’></panda> 意思就是熊猫来自中国，当然这里的China可以换成任何值。定义属性的选项是props。
